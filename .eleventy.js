import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginRss from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

import smartypants from "smartypants";
import uslug from "uslug";
import markdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import slugify from "slugify";

import date from "./lib/filters/dates.js";
import isoDate from "./lib/filters/isoDate.js";

export default async function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  // Date filter
  eleventyConfig.addFilter("date", date);
  eleventyConfig.addFilter("isoDate", isoDate);

  // Generate assets
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/txt": "txt" });
  eleventyConfig.addPassthroughCopy({ "src/pdf": "pdf" });

  // Smart quotes filter
  eleventyConfig.addFilter("smart", (str) => smartypants(str, "qDe"));

  // Markdown Plugins
  var uslugify = (s) => uslug(s);
  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      typographer: true,
    }).use(anchor, { slugify: uslugify, tabIndex: false })
  );
  var mdIntro = markdownIt({
    html: true,
    typographer: true,
  });
  eleventyConfig.addFilter("markdown", (markdown) => mdIntro.render(markdown));

  eleventyConfig.addFilter("slugify", (str) => {
    return slugify(str, {
      customReplacements: [
        ["+", " plus "],
        ["@", " at "],
      ],
      remove: /[*~.,–—()'"‘’“”!?:;]/g,
      lower: true,
    });
  });

  // Image optimization
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html", // transform only <img> in html files
    formats: ["avif", "webp", "auto"], // include avif version and original file type
    outputDir: "./dist/assets/images/processed/", // where to write the image files
    urlPath: "/assets/images/processed/", // path prefix for the img src attribute
    widths: ["auto"], // which rendition sizes to generate, auto = original dimensions
    defaultAttributes: {
      // default attributes on the final img element
      loading: "lazy",
      decoding: "async",
    },
  });

  // Code syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["njk", "md"],
  });

  // RSS
  eleventyConfig.addPlugin(pluginRss);

  // List all topics for a type of content
  eleventyConfig.addFilter("getTopics", (arr) => {
    const notRendered = ["all", "post", "research", "software", "other"];
    const topics = arr
      .map((post) => post.data.tags)
      .flat()
      .filter((d) => !notRendered.includes(d))
      .sort();
    const uniqueTopics = [...new Set(topics)];
    return uniqueTopics;
  });

  // List all tags
  eleventyConfig.addFilter("tags", (collection) => {
    const notRendered = ["all", "post", "research", "software", "other"];
    return Object.keys(collection)
      .filter((d) => !notRendered.includes(d))
      .sort();
  });

  // List tags belonging to a page
  eleventyConfig.addFilter("tagsOnPage", (tags) => {
    const notRendered = ["all", "post", "research", "software", "other"];
    return tags.filter((d) => !notRendered.includes(d)).sort();
  });

  // List tags belonging to a page (not sorted)
  eleventyConfig.addFilter("tagsOnPageNoSort", (tags) => {
    const notRendered = ["all", "post", "research", "software", "other"];
    return tags.filter((d) => !notRendered.includes(d));
  });

  // Sort by order in front matter
  eleventyConfig.addFilter("ordered", (collection) => {
    return collection.sort((a, b) => a.data.order - b.data.order);
  });

  // Add limit for output
  eleventyConfig.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });

  // Remove current post from output
  eleventyConfig.addFilter("removeCurrent", (arr, title) => {
    return arr.filter((item) => {
      return item.url && item.data.title !== title;
    });
  });

  // Get all the years that blog posts were posted
  eleventyConfig.addFilter("getYears", (arr) => {
    const dates = arr.map((post) => post.date.getFullYear());
    const uniqueYears = [...new Set(dates)];
    return uniqueYears;
  });

  // Filter items by year
  eleventyConfig.addFilter("filterByYear", (arr, year) => {
    return arr.filter((item) => {
      return item.date.getFullYear() == year;
    });
  });

  // Select type filter
  eleventyConfig.addFilter("filterByTag", function (arr, value) {
    return arr.filter((item) => item.data.tags.includes(value));
  });

  // Get current year for footer
  eleventyConfig.addFilter("getCurrentYear", () => new Date().getFullYear());

  // Get current date
  eleventyConfig.addFilter("getCurrentDate", () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "/" + mm + "/" + dd;
  });

  // Select type filter
  eleventyConfig.addFilter("selectattr", function (arr, attr, value) {
    return arr.filter((item) => item.data[attr] === value);
  });

  // Reject type filter
  eleventyConfig.addFilter("rejectattr", function (arr, attr, value) {
    return arr.filter((item) => item.data[attr] !== value);
  });

  // Localhost server config
  eleventyConfig.setServerOptions({
    port: 3000,
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
    },
    templateFormats: ["njk", "html", "md", "txt", "webmanifest", "ico"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
