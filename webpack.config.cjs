const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production", // Chế độ production để tối ưu cho việc deploy
  entry: "./src/js/main.js", // Entry point chính của bạn (nếu có)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      // Xử lý hình ảnh (SVG, PNG, JPG, GIF)
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]", // Đổi tên tệp với hash để tránh cache
              outputPath: "images/", // Lưu các tệp hình ảnh vào thư mục dist/images
            },
          },
        ],
      },
      // Xử lý JS bằng Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // Xử lý CSS bằng PostCSS và Tailwind
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Tách CSS ra file riêng
          "css-loader", // Dùng css-loader để xử lý CSS
          "postcss-loader", // Dùng postcss-loader để xử lý với PostCSS (tailwind, autoprefixer, v.v.)
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Sử dụng file HTML gốc
      filename: "index.html",
      inject: "body", // Đảm bảo các tệp JS được thêm vào cuối thẻ <body>
      minify: {
        collapseWhitespace: true, // Tối ưu hóa HTML
        removeComments: true, // Loại bỏ comment
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
    // Sao chép các tệp partials vào thư mục dist
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/partials", to: "partials" },
        { from: "src/images", to: "images" },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    open: true, // Tự động mở trình duyệt
    hot: true, // Enable hot module replacement
  },
};
