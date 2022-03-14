var path = require("path");
var webpack = require("webpack");

module.exports = function(env) {

	var pack = require("./package.json");
	var MiniCssExtractPlugin = require("mini-css-extract-plugin");

	var production = !!(env && env.production);
	var asmodule = !!(env && env.module);
	var standalone = !!(env && env.standalone);

	var babelSettings = {
		extends: path.join(__dirname, '/.babelrc')
	};

	var config = {
		mode: production ? "production" : "development",
		entry: {
			myapp: "./sources/myapp.js"
		},
		output: {
			path: path.join(__dirname, "codebase"),
			publicPath:"/codebase/",
			filename: "[name].js",
			chunkFilename: "[name].bundle.js"
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: "babel-loader?" + JSON.stringify(babelSettings)
				},
				{
					test: /\.(svg|png|jpg|gif)$/,
					use: "url-loader?limit=25000"
				},
				{
					test: /\.(less|css)$/,
					use: [ MiniCssExtractPlugin.loader, "css-loader", "less-loader" ]
				}
			]
		},
		stats:"minimal",
		resolve: {
			extensions: [".js"],
			modules: ["./sources", "node_modules"],
			alias:{
				"jet-views":path.resolve(__dirname, "sources/views"),
				"jet-locales":path.resolve(__dirname, "sources/locales")
			}
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename:"[name].css"
			}),
			new webpack.DefinePlugin({
				VERSION: `"${pack.version}"`,
				APPNAME: `"${pack.name}"`,
				PRODUCTION : production,
				BUILD_AS_MODULE : (asmodule || standalone)
			})
		],
		devServer:{
			client: {
				logging: "error",
			},
			static: __dirname,
			historyApiFallback: true,
		}
	};

	if (!production){
		config.devtool = "inline-source-map";
	}

	if (asmodule){
		if (!standalone){
			config.externals = config.externals || {};
			config.externals = [ "webix-jet" ];
		}

		const out = config.output;
		const sub = standalone ? "full" : "module";

		out.library = pack.name.replace(/[^a-z0-9]/gi, "");
		out.libraryTarget= "umd";
		out.path = path.join(__dirname, "dist", sub);
		out.publicPath = "/dist/"+sub+"/";
	}

	return config;
};