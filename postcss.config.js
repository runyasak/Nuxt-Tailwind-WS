const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './pages/detail/_name.vue',
    './pages/pagination/_id.vue',
    './pages/search/_name.vue',
    './pages/index.vue',
    './components/HomeButton.vue',
    './components/Logo.vue',
    './components/Pagination.vue',
    './components/PokeList.vue',
    './components/Searchbar.vue',
    './layouts/default.vue'
    // etc.
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    const extraMatches = content.match(/data-color/g) || []

    return broadMatches.concat(innerMatches).concat(extraMatches)
  }
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}