const mix = require("laravel-mix");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

mix.setPublicPath("public");

// SCSS + Tailwind
mix.sass("src/scss/main.scss", "public/css").options({
  processCssUrls: false
});

// JS
mix.js("src/js/app.js", "public/js");

// Webpack config
mix.webpackConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.twig$/,
        use: [{ loader: "twig-loader" }]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets/images", to: "images" },
        { from: "src/assets/fonts", to: "fonts" }
      ]
    }),
  ],
  watchOptions: {
    ignored: /public/
  },
});

// Not required, but helps stability
mix.options({
  hmrOptions: {
    host: "localhost",
    port: 8080
  }
});

// IMPORTANT: Do NOT call mix.version() at all
mix.disableNotifications();
