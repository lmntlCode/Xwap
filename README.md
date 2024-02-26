# Xwap: Decentralized Cryptocurrency Exchange React App

## 🌐 Seamlessly Swap ERC20 Tokens with Metamask Integration 🚀

Built with ReactJS, useDapp, and Tailwind CSS, this project offers a powerful platform for decentralized finance on the Ethereum blockchain. Leverage Cranq for smart contract creation, enabling seamless ERC20 token generation and live data fetching. Empower users to easily connect with Metamask, swap tokens, and navigate the dynamic landscape of decentralized finance. 🚀

## Key Features:

- 🌈 Metamask Integration
- 🔄 Token Swapping Functionality
- 💼 ERC20 Token Creation
- 📊 Live Smart Contract Data Fetching
- 🛠️ Built with ReactJS, useDapp, and Tailwind CSS

## Project Structure

The project is organized as a monorepo utilizing [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), allowing for a streamlined setup of multiple packages. With Yarn Workspaces, all dependencies are installed in one go and hoisted to the root, simplifying project management.

```
XWAP-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
└── packages
    ├── contracts
    │   ├── README.json
    │   ├── package.json
    │   └── src
    │       ├── abis
    │       │   ├── erc20.json
    │       │   └── ownable.json
    │       ├── addresses.js
    │       └── index.js
    ├── react-app
    │   ├── README.md
    │   ├── node_modules
    │   ├── package.json
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── logo192.png
    │   │   ├── logo512.png
    │   │   ├── manifest.json
    │   │   └── robots.txt
    │   └── src
    │       ├── App.css
    │       ├── App.js
    │       ├── App.test.js
    │       ├── ethereumLogo.svg
    │       ├── index.css
    │       ├── index.js
    │       ├── serviceWorker.js
    │       └── setupTests.js
    └── subgraph
        ├── README.md
        ├── abis
        │   └── erc20.json
        ├── package.json
        ├── schema.graphql
        ├── src
        │   └── mappings
        │       ├── tokens.ts
        │       └── transfers.ts
        └── subgraph.yaml
```

Note: Due to its reliance on Yarn Workspaces, this project cannot be used with npm.

## Available Scripts

Within the project directory, the following scripts can be executed:

### React App

#### `yarn react-app:start`

Launches the React app in development mode. Visit [http://localhost:3000](http://localhost:3000) to view it in your browser. The app will reload if you make edits, and build errors or lint warnings will be displayed in the console.

#### `yarn react-app:test`

Initiates the React test watcher in an interactive mode, running tests related to files changed since the last commit. For more information on testing React, visit [React testing documentation](https://facebook.github.io/create-react-app/docs/running-tests).

#### `yarn react-app:build`

Compiles the React app for production into the `build` folder, optimizing the build for the best performance. The build is minified, and filenames include hashes. Your app is then ready for deployment. For deployment details, see the [React deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

#### `yarn react-app:eject`

This irreversible operation ejects the build tool and configuration choices from your package, granting you complete control over the configuration files and dependencies. This feature is optional and mainly for those who require customization beyond the provided setup.
