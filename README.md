
React native non-expo project (TypeScript) created using `npx @react-native-community/cli@latest init AwesomeProject`
with following modifications

* Moved source files to ***./src*** folder
* Updated jest config for testing react native (and navigation)
* Added [react-navigation](https://reactnavigation.org/) - Configured a simple StackNavigator using two screens
* Type configuration for both navigator and screens
* Sample test case for testing navigation
* `@typescript-eslint/no-unused-vars: "warn"` - personal preference

If you are using vscode, open editor settings and set **typescript.preferences.importModuleSpecifier** to **relative** for forcing relative paths when auto importing modules.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


### For running tests

```bash
# using npm
npm test
