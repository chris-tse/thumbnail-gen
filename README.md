# Techlahoma Thumbnail Generator

Techlahoma Thumbnail Generator is a CLI tool for generating YouTube video thumbnails from the Cloudinary account.

## Installation

Install this package globally from NPM:

```
$ npm i -g @chris-tse/thumbnail-gen
```

## Basic Usage

To see all available options, run the command with the help flag:
```
$ thumbnail-gen --help
```

Specify all required options to generate a thumbnail with the desired info:

```
$ thumbnail-gen -t "A Great Talk" -s "Person Name" -g "OKC JS" -l okc-js -b code
```

You can now access the `thumbnail-gen` command via your terminal.

## Development

To get a development environment working for this project:

1. Clone this project

    ```
    $ git clone https://github.com/chris-tse/thumbnail-gen
    ```

2. Install dependencies

    ```
    $ npm i
    ```

3. Watch for changes then in a new terminal instance install the project globally

    ```
    $ npm run watch
    $ npm i -g
    ```

Whenever a change is made, the project will be built to the `lib` directory and installing globally with allow the use of the `thumbnail-gen` command on your system for testing.

## Usage

Use the help flag to display the options that are required:

```
$ thumbnail-gen --help
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
