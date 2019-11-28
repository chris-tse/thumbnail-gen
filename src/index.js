#!/usr/bin/env node

import program from 'commander';

const NO_OPTIONS_SPECIFIED = process.argv.length <= 2;

program
	.version('0.0.1')
	.description('A CLI for generating URLs of YouTube thumbails from the Cloudinary database')
	// .option('-i, --interactive', 'Start the CLI in interactive mode')
	// .option('-f, --full-string <video title>', 'Full YouTube video title to parse info from (must follow convention format)')
	.option('-b, --background <bg>', 'Background image to use from the backgrounds folder', 'code')
	.option('-t, --title <title>', 'Title text to insert')
	.option('-g, --group <group name>', 'Name of usergroup')
	.option('-l, --logo <group logo>', 'Group logo to use from the logos folder')
	.option('-s, --speaker <speaker>', 'Speaker name');

program.on('--help', () => {
	console.log('');
	console.log('Examples:');
	console.log('  $ thumbnail-gen --help');
	console.log('  $ thumbnail-gen -b code -t "A Great Talk" -g "OKC JS" -l "okc-js" -s "Person Name"');
});

program.parse(process.argv);

// Show help output if no options present
if (NO_OPTIONS_SPECIFIED) {
	program.help();
}

// Display options above for help menu, actual required logic is reapplied here
// Maybe there's a better way to do conditional required options?
program
	.requiredOption('-b, --background <bg>')
	.requiredOption('-t, --title <title>')
	.requiredOption('-g, --group <group name>')
	.requiredOption('-l, --logo <group logo>')
	.requiredOption('-s, --speaker <speaker>');

program.parse(process.argv);

const { background, title, group, logo, speaker } = program;

// Double escape comma for Cloudinary API to recognize comma in string
const encodedTitle = encodeURI(title).replace(',', '%252C');
const encodedSpeaker = encodeURI(speaker);
const encodedGroup = encodeURI(group);

let result = `https://res.cloudinary.com/dt4dhjcyy/image/upload` +
	`/e_blur:300,fl_relative,g_north,h_0.7,l_techlahoma:backgrounds:${background},w_1.0,c_fill` +
	`/fl_relative,g_north,h_0.7,l_techlahoma:backgrounds:background_black,w_1.0,c_fill,o_45` +
	`/c_scale,e_trim,g_south_east,l_techlahoma_horizontaltext_qgbkly,w_640,x_40,y_20` +
	`/c_scale,g_south,h_160,l_techlahoma:logos:${logo},x_-100,y_20` +
	`/c_fit,co_white,g_xy_center,l_text:Lato_108_bold_center:${encodedTitle},w_1100,x_640,y_252` +
	`/c_fit,g_south_west,l_text:Lato_50_bold_left:${encodedSpeaker},w_400,x_40,y_120` +
	`/c_fit,g_south_west,l_text:Lato_40_left:${encodedGroup},w_400,x_40,y_50/background_nixfbg`;


console.log('Generated thumbnail URL: ', result);
