// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as os from 'os';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mplus" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const helloWorldCommand = vscode.commands.registerCommand('mplus.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from MPlus Extension!');
	});

	// Register the run mplus command
	const runMplusCommand = vscode.commands.registerCommand('mplus.run', () => {
		// Get the active text editor
		const activeEditor = vscode.window.activeTextEditor;
		
		if (!activeEditor) {
			vscode.window.showErrorMessage('No active editor found');
			return;
		}

		// Get the file path
		const filePath = activeEditor.document.uri.fsPath;
		
		// Check if the file is an .inp file
		if (!filePath.endsWith('.inp')) {
			vscode.window.showErrorMessage('Please run this command on a .inp file');
			return;
		}

		// Get the directory of the file
		const fileDir = path.dirname(filePath);
		const fileName = path.basename(filePath);

		// Get the platform to determine the correct shell command
		const platform = os.platform();
		let command: string;

		if (platform === 'win32') {
			// Windows: use PowerShell-compatible command
			// PowerShell uses Set-Location or cd, and doesn't need /d
			command = `Set-Location "${fileDir}"; mplus "${fileName}"`;
		} else {
			// Unix-like systems (Linux, macOS)
			command = `cd "${fileDir}" && mplus "${fileName}"`;
		}

		// Create a new terminal
		const terminal = vscode.window.createTerminal('Mplus');
		
		// Send the command to the terminal
		terminal.sendText(command);
		
		// Show the terminal
		terminal.show();
	});

	context.subscriptions.push(helloWorldCommand);
	context.subscriptions.push(runMplusCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
