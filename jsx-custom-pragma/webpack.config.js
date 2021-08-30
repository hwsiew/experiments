const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
		clean: true
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'static/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							["@babel/plugin-transform-react-jsx", {
								"pragma": "myCreateElement",
								"pragmaFrag": "myCreateFragment"
							}],
							// auto import myCreateElement to all jsx file
							["babel-plugin-jsx-pragmatic", {
								module: "./utils/myCreateElement.js", // relative path to src/
								import: "myCreateElement"
							}],
					]
					}
				}
			}
		]
	},
	devServer: {
    static: {
      directory: path.join(__dirname, 'static'),
    },
    compress: true,
    port: 9000,
		hot: true,
		open: true
  },
}