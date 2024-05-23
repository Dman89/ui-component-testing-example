const config = {
	preset: "ts-jest",
	moduleDirectories: ["node_modules", "src"],
	testPathIgnorePatterns: ["/node_modules/"],
	moduleFileExtensions: ["js", "json"],
	transform: {
		"^.+\\.(js|jsx)$": ["babel-jest", { extends: "./babel.config.cjs" }],
	},
	testEnvironment: "jsdom",
};

export default config;
