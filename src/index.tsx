import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { Buffer } from 'buffer';
//import * as crypto from 'crypto-browserify';

global.Buffer = Buffer;
//global.crypto = require.resolve("crypto-browserify"); //require('crypto');
// Object.assign(fallback, {
//   crypto: require.resolve("crypto-browserify"),
//   stream: require.resolve("stream-browserify"),
//   assert: require.resolve("assert"),
//   http: require.resolve("stream-http"),
//   https: require.resolve("https-browserify"),
//   os: require.resolve("os-browserify"),
//   url: require.resolve("url"),
// });

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

