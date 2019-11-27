#!/usr/bin/env node

// import chalk from 'chalk';
import figlet from 'figlet';
import program from 'commander';

console.log(figlet.textSync('techlahoma-thumbnail'));

program
	.version('0.0.1')
	.description('A CLI for generating URLs of YouTube thumbails from the Cloudinary database')
	.option('-i, --interactive', 'Start the CLI in interactive mode')
	.requiredOption('-b, --background <bg>', 'Background image to use from the backgrounds folder', 'code')
	.requiredOption('-t, --title <title>', 'Title text to insert')
	.requiredOption('-g, --group <group>', 'Name of usergroup')
	.requiredOption('-s, --speaker <speaker>', 'Speaker name');

program.parse(process.argv);

if (program.interactive) {
	console.log("Oops, interactive mode hasn't been implemented yet.");
	return process.exit(0);
}
