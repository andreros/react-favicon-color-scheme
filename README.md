# React Favicon

React project implementing a favicon that changes with the operating system mode (light or dark).

## Application Tech Stack

-   `React` framework (with Typescript) for the overall application development;
-   `Typescript` coding language;

## Application Support and Tools

-   `pnPm` as package manager;
-   `Rsbuild` to bundle the application and serve it in development mode;

## Application Code Quality

-   `BiomeJS` for code formatting and linting;

## Application scripts

From the project root folder, please execute any of the following commands in a terminal window:

### Installation and application bootstrap

```bash
# install the application dependencies
pnpm i

# start the application in development mode
pnpm run dev

# build a version of the application for distribution
pnpm run build

# run the built version from the `dist` folder
pnpm run preview

# reset and reinstall the application
pnpm run nuke
```

### Code Quality

```bash
# run BiomeJS
pnpm run lint

# run BiomeJS and fix all automatically fixable problems
pnpm run lint:fix
```
