#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NO_OPTIONS_SPECIFIED = process.argv.length <= 2;

_commander.default.version('0.0.1').description('A CLI for generating URLs of YouTube thumbails from the Cloudinary database') // .option('-i, --interactive', 'Start the CLI in interactive mode')
  // .option('-f, --full-string <video title>', 'Full YouTube video title to parse info from (must follow convention format)')
  .option('-b, --background <bg>', 'Background image to use from the backgrounds folder', 'code').option('-t, --title <title>', 'Title text to insert').option('-g, --group <group name>', 'Name of usergroup').option('-l, --logo <group logo>', 'Group logo to use from the logos folder').option('-s, --speaker <speaker>', 'Speaker name');

_commander.default.on('--help', function() {
  console.log('');
  console.log('Examples:');
  console.log('  $ thumbnail-gen --help');
  console.log('  $ thumbnail-gen -b code -t "A Great Talk" -g "OKC JS" -l "okc-js" -s "Person Name"');
});

_commander.default.parse(process.argv); // Show help output if no options present


if (NO_OPTIONS_SPECIFIED) {
  _commander.default.help();
} // Display options above for help menu, actual required logic is reapplied here
// Maybe there's a better way to do conditional required options?


_commander.default.requiredOption('-b, --background <bg>').requiredOption('-t, --title <title>').requiredOption('-g, --group <group name>').requiredOption('-l, --logo <group logo>').requiredOption('-s, --speaker <speaker>');

_commander.default.parse(process.argv);

var background = _commander.default.background,
  title = _commander.default.title,
  group = _commander.default.group,
  logo = _commander.default.logo,
  speaker = _commander.default.speaker; // Double escape comma for Cloudinary API to recognize comma in string

var encodedTitle = encodeURI(title).replace(',', '%252C');
var encodedSpeaker = encodeURI(speaker);
var encodedGroup = encodeURI(group);
var result = "https://res.cloudinary.com/dt4dhjcyy/image/upload" + "/e_blur:300,fl_relative,g_north,h_0.7,l_techlahoma:backgrounds:".concat(background, ",w_1.0,c_fill") + "/fl_relative,g_north,h_0.7,l_techlahoma:backgrounds:background_black,w_1.0,c_fill,o_45" + "/c_scale,e_trim,g_south_east,l_techlahoma_horizontaltext_qgbkly,w_640,x_40,y_20" + "/c_scale,g_south,h_160,l_techlahoma:logos:".concat(logo, ",x_-100,y_20") + "/c_fit,co_white,g_xy_center,l_text:Lato_108_bold_center:".concat(encodedTitle, ",w_1100,x_640,y_252") + "/c_fit,g_south_west,l_text:Lato_50_bold_left:".concat(encodedSpeaker, ",w_400,x_40,y_120") + "/c_fit,g_south_west,l_text:Lato_40_left:".concat(encodedGroup, ",w_400,x_40,y_50/background_nixfbg");

console.log('Generated thumbnail URL: ', result);
