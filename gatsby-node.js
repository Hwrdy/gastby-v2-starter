/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.onCreateBabelConfig = ({ actions }) => {
//   actions.setBabelPlugin({
//     name: 'babel-plugin-foo',
//   });
// };

// exports.onCreateWebpackConfig = ({ stage, actions }) => {
//   // const timestamp = Date.now();

//   switch (stage) {
//     case 'build-html':
//       actions.setWebpackConfig({
//         module: {
//           rules: [
//             {
//               test: /(lozad|intersection|typeform)/,
//               use: 'null-loader',
//             },
//           ],
//         },
//       });

//       break;

//     // case 'build-javascript':
//     //   config.merge({
//     //     output: {
//     //       filename: `[name]-${timestamp}-[chunkhash].js`,
//     //       chunkFilename: `[name]-${timestamp}-[chunkhash].js`,
//     //     },
//     //   });

//     //   break;

//     default:
//       break;
//   }
// };

exports.onCreateWebpackConfig = ({
  // stage,
  // rules,
  // loaders,
  // plugins,
  actions,
  // getConfig,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
        {
          test: /(intersection|typeform)/,
          include: /node_modules/,
          use: 'null-loader',
        },
      ],
    },
  });
};
