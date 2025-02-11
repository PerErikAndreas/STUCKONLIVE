module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ["@babel/plugin-transform-runtime"],
    ["babel-plugin-transform-vue-jsx"],
    ["babel-plugin-transform-define", {
      "__VUE_PROD_HYDRATION_MISMATCH_DETAILS__": false
    }]
  ]
};
