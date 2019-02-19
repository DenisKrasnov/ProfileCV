/*eslint-disable no-console*/
const path = require("path");
const express = require("express");

const app = express();

const DEFAULT_PORT = 3001;
const PORT = process.env.PORT || DEFAULT_PORT;

app.set("port", PORT);

if (PORT === DEFAULT_PORT) {
  const chalk = require("chalk");

  console.log(`
 ${chalk.bgHex("#224dff").white("--- ReactJS ---")}
 Starting server on port 3001
 You are connected to ${chalk.hex("#f7c132")("http://localhost:3001/")}
`);
}

const isDevelopment = process.env.NODE_ENV !== "production";

if (isDevelopment) {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const config = require("./webpack.config.dev");

  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        builtAt: false,
        children: false,
        colors: true,
        modules: false,
      },
    })
  );

  app.use(webpackHotMiddleware(compiler));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
  });
}

app.listen(app.get("port"));
