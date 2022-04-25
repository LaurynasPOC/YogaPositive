import type { GatsbyConfig } from "gatsby";
const path = require("path");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Positive Yoga TS`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,

      options: {
        fonts: [`sans-serif`, `source sans pro\:300,400,400i,700`],
        display: "swap",
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,                                           <--- Wrong path... Why is it so?
    //     path: `${__dirname}/src/assets/images`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-resolve-src",
    //   options: {
    //     srcPath: path.resolve(__dirname, "src"),                   <--- path not found
    //   },
    // },
  ],
};

export default config;
