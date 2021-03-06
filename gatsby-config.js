module.exports = {
  siteMetadata: {
    title: `HyeonJun Hwang's Portfolio`,
    siteUrl: `https://profile.perpling.com`,
    description: `안녕하세요. %TOPICS% 입니다.`,
    topics: [
      `서비스 기획자`,
      `황현준`,
      `기획 포트폴리오`,
      `HyeonJun Hwang`,
      `포트폴리오`
    ],
    menu: [
      {
        name: 'Portfolio',
        path: '/'
      },
      {
        name: 'About Me',
        path: '/about'
      },
    ],
    footerMenu: [
      {
        name: '',
        path: '/RSS.xml'
      },
      {
        name: '',
        path: '/sitemap.xml'
      }
    ],
    search: true,
    author: {
      name: `황현준`,
      description: `안녕하세요 IT 서비스 기획자 <strong>황현준</strong>입니다. 다양한 프로젝트를 통한 문제 해결 과정을 포트폴리오에 담았습니다.`
      ,
      social: {
        facebook: `https://www.facebook.com/hyeonjun.hwang.3`,
        twitter: ``,
        linkedin: `https://www.linkedin.com/in/hyeonjun-hwang-620151193`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/hyeonjun-hwang`,
        twitch: ``
      }
    }
  },
  plugins: [

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-579M2GV",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: "OcjoLKVKHEao1nLTocXYBg",
        gtmPreview: "env-3",
        dataLayerName: "dataLayer",
      }
    },

    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112409357-2",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `themeAssets`,
        path: `${__dirname}/content/assets/images`
      }
    },
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        contentPath: `content`,
        manifest: {
          name: `profile.perpling`,
          short_name: `profile`,
          start_url: `/`,
          background_color: `#3a7bd5`,
          theme_color: `#3a7bd5`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/idea.png`
        },
        loadDefaultPages: true,
        postsPerPage: 20
      }
    }
  ]
};
