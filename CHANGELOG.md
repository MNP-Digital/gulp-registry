# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.7.2] - 2019-05-10
### Changed
- Fix another edge case in `collectImports` in Windows environments
- README updates

## [0.7.1] - 2019-01-29
### Changed
- Fix `path` methods in `collectImports` utility function to work reliably in Windows environments - this time handling an unexpected edge case
- Documentation on the `collectImports` utility function to include the optional `filterFn` option, various wording changes

## [0.7.0] - 2019-01-29
### Changed
- Fix implementation of merged streams in `deploy` task to prevent task from sometimes exiting too early and not moving all files

## [0.6.1] - 2019-01-17
### Changed
- Fix `stylelint` rules configuration not being accessible when stylelint options aren't passed

## [0.6.0] - 2019-01-17
### Added
- Ability to override defaults of individual PostCSS processors
- Extra documentation on PostCSS configuration

### Changed
- Variable name of the `postcss-reporter` processor

## [0.5.1] - 2018-12-12
### Changed
- Fix `path` methods in `collectImports` utility function to work reliably in Windows environments

## [0.5.0] - 2018-11-26
### Removed
- Certain rules from `stylelint-config-recommended` which were not useful when analyzing a bundle including vendor styles

### Changed
- Order of PostCSS plugins
- Incorrect heading level for an item in CHANGELOG

## [0.4.0] - 2018-11-21
### Added
- `stylelint` PostCSS plugin using `stylelint-config-recommended` configuration
- `postcss-reporter` PostCSS plugin for better error output from other plugins
- Note in README about PostCSS config file exporting a function instead of plain object

### Removed
- Redundant header text in CHANGELOG

## [0.3.0] - 2018-11-02
### Added
- `collectImports` utility function
- `gulp-plumber` configurations for Pug and Sass files
- `postcss` configuration and dependencies

### Changed
- Bumped package versions

## [0.2.1] - 2018-11-01
### Added
- Information on `deploy` task

### Changed
- README example code updates
- Moved tasks into separate files
- Various optimizations / cosmetic code changes
- package.json property sorting (thanks to [sort-package-json](https://www.npmjs.com/package/sort-package-json))
- Update link to `registry()` docs found in the official Gulp repository

## [0.1.3] - 2018-02-21
### Fixed
- "clean" task

## [0.1.2] - 2018-02-21
### Added
- Markdown extension to Changelog

### Changed
- Added links in Changelog

## [0.1.1] - 2018-02-13
### Added
- Code of Conduct

## [0.1.0] - 2018-02-01
### Added
- Changelog
- License
- npm configuration (don't generate a package-lock.json file)
- Git attributes file
- EditorConfig file

### Changed
- Name of npm organization (now [@t4gltd](https://www.npmjs.com/org/t4gltd))
- README updates

## [0.0.1] - 2018-01-09
### Added
- Initial README
- "clean" task
- "serve" task
