require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
	siteMetadata: {
		// You can overwrite values here that are used for the SEO component
		// You can also add new values here to query them like usual
		// See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js

		siteTitle: "Huy Bui's blog",
		siteTitleAlt: `Huy Bui's blog`,
		siteHeadline: `Huy Bui's blog`,
		siteUrl: `https://huybt-blog.vercel.app`,
		siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
		siteLanguage: `en`,
		author: '@huyjs9',
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.1,
			},
		},
		{
			resolve: `gatsby-plugin-scroll-indicator`,
			options: {
				color: 'var(--theme-ui-colors-primary);',
				paths: ['/*-*'],
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							isIconAfterHeader: true,
							icon: `<svg aria-hidden="true" focusable="false" height="16" viewBox="0 0 16 16" width="16"><path fill="currentcolor" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
							elements: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
							offsetY: `60`,
						},
					},
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank',
							rel: 'noreferrer noopener',
						},
					},
				],
			},
		},
    // ! Comment here for gatsby debugging
    // https://github.com/gatsbyjs/gatsby/discussions/34421
		// {
		// 	resolve: `gatsby-plugin-mdx`,
		// 	options: {
		// 		extensions: [`.mdx`, `.md`],
		// 		gatsbyRemarkPlugins: [
		// 			{
		// 				resolve: `gatsby-remark-autolink-headers`,
		// 				options: {
		// 					isIconAfterHeader: true,
		// 					icon: `<svg aria-hidden="true" focusable="false" height="16" viewBox="0 0 16 16" width="16"><path fill="currentcolor" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
		// 					elements: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
		// 					offsetY: `60`,
		// 				},
		// 			},
		// 			{
		// 				resolve: 'gatsby-remark-external-links',
		// 				options: {
		// 					target: '_blank',
		// 					rel: 'noreferrer noopener',
		// 				},
		// 			},
		// 			{
		// 				resolve: `gatsby-remark-images`,
		// 				options: {
		// 					maxWidth: 960,
		// 					quality: 90,
		// 					backgroundColor: 'transparent',
		// 					linkImagesToOriginal: false,
		// 				},
		// 			},
		// 		],
		// 	},
		// },
		{
			resolve: `@lekoarts/gatsby-theme-minimal-blog`,
			// See the theme's README for all available options
      // ! mdx: false,
			options: {
				navigation: [
					{
						title: `Blog`,
						slug: `/blog`,
					},
					{ title: `Tags`, slug: `/tags` },
					{
						title: `Reading List`,
						slug: `/reading-list`,
					},
					{
						title: `About`,
						slug: `/about`,
					},
				],
				externalLinks: [
					{
						name: `Github`,
						url: `https://github.com/huyjs9`,
					},
				],
			},
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [`https://fonts.gstatic.com`],
				// If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
				// See: https://github.com/LekoArts/gatsby-themes/tree/main/examples/minimal-blog#changing-your-fonts
				web: [
					{
						name: `IBM Plex Sans`,
						file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
				short_name: `minimal-blog`,
				description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
				start_url: `/`,
				background_color: `#fff`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#6B46C1`,
				display: `standalone`,
				icons: [
					{
						src: `/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allPost } }) =>
							allPost.nodes.map((post) => {
								const url = site.siteMetadata.siteUrl + post.slug;
								const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`;

								return {
									title: post.title,
									date: post.date,
									excerpt: post.excerpt,
									url,
									guid: url,
									custom_elements: [{ 'content:encoded': content }],
								};
							}),
						query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
						output: `rss.xml`,
						title: `Huy Bui's Blog`,
					},
				],
			},
		},
		`gatsby-plugin-gatsby-cloud`,
		shouldAnalyseBundle && {
			resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
			options: {
				analyzerMode: `static`,
				reportFilename: `_bundle.html`,
				openAnalyzer: false,
			},
		},
	].filter(Boolean),
};
