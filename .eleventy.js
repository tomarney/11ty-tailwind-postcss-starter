const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/img")
  eleventyConfig.addPassthroughCopy("src/favicon.ico")
  eleventyConfig.addPassthroughCopy("src/site.webmanifest")

  eleventyConfig.addWatchTarget("src/styles")

  eleventyConfig.on('beforeBuild', () => {
    const postcss      = require('postcss')
    const atImport     = require('postcss-import')
    const nesting      = require('tailwindcss/nesting')
    const tailwindcss  = require('tailwindcss')
    const autoprefixer = require('autoprefixer')
    const fs           = require('fs')

    fs.mkdirSync('_site/styles/', { recursive: true })
    fs.readFile('src/styles/main.css', (err, css) => {
      postcss([atImport,nesting,tailwindcss,autoprefixer])
        .process(css, { from: 'src/styles/main.css', to: '_site/styles/main.min.css' })
        .then(result => {
          fs.writeFile('_site/styles/main.min.css', result.css, (err) => {
            if (err) throw err;
          });
        })
    })
  })

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (process.env.NODE_ENV === "production" &&
      outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified
    }
    return content
  })

  eleventyConfig.addShortcode('uid', () => Date.now().toString(36))
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)

  return {
    dir: {
      input: 'src',
      output: '_site',
      data: '_data',
      includes: '_includes',
    },
    templateFormats: [
      'md',
      'njk',
    ],
    htmlTemplateEngine: 'njk'
  }
}
