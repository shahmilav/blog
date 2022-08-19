const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const {DateTime} = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addPassthroughCopy("./src/favicons/");
	eleventyConfig.addPassthroughCopy("./src/images/");
	eleventyConfig.addPassthroughCopy("./src/js/");

	eleventyConfig.addCollection("posts", function(collection) {
		const coll = collection.getFilteredByTag("posts");

		for(let i = 0; i < coll.length ; i++) {
			const prevPost = coll[i-1];
			const nextPost = coll[i + 1];

			coll[i].data["prevPost"] = prevPost;
			coll[i].data["nextPost"] = nextPost;
		}

		return coll;
	});

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
