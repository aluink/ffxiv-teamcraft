# ffxiv-teamcraft

Collaborative crafting tool for Final Fantasy XIV

https://ffxivteamcraft.com

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) (>= 8.2) and NPM (>=5.3)
* Install local dev dependencies: `npm install` while current directory is this repo

### Live Development Server

Simply run `npm start` to start a live server with file watcher.

## Contributing

### Commit Messages
 The commit messages are checked by a pre-commit git hook, meaning that if they don't meet the requirements, 
 your commit will not be created.
 
 A commit message should follow this structure:
 ```
    <type>: <subject>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>
 ```
 
 Only the first line is mandatory, the rest is optional.
 
 Types are the ones used by [standard-version](https://github.com/conventional-changelog/standard-version):
 
 - **feat** - New feature
 - **fix** - Bug fix
 - **docs** - Documentation-related
 - **style** - Style-related
 - **refactor** - Refactoring of a code piece/feature
 - **perf** - Performance optimization
 - **test** - Tests-related
 - **build** - Build-related
 - **ci** - Continuous Integration-related
 - **chore** - Changes that are not needed to be displayed in the changelog
 - **revert** - Commit reverts
 
 Examples:
 
 `chore: list menu not shown properly (#15)`
 
 ```
 fix: need latest rxjs
 
 For our http calls, rxjs can make us save a lot of time, it had to be updated.
 ```

## License

MIT
