import baseTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui'

const theme = {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: 'Inter, -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
  text: {
    ...baseTheme.text,
    default: {
      color: 'text',
      fontSize: [1, 1, 2],
    },
  },
  badges: {
    ...baseTheme.badges,
    outline: {
      color: 'primary',
      bg: 'transparent',
      borderRadius: '8px',
      paddingY: 2,
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  space: [
    baseTheme.space[0],
    baseTheme.space[1],
    baseTheme.space[2],
    baseTheme.space[3],
    baseTheme.space[4],
    baseTheme.space[5],
    baseTheme.space[6],
    baseTheme.space[6],
    baseTheme.space[6],
  ],
  useColorSchemeMediaQuery: true,
  alerts: {
    ...baseTheme.alerts,
    highlight: {
      color: 'background',
      bg: 'primary',
    },
  },
  colors: {
    ...baseTheme.colors,
    primary: '#a10f15',
    modes: {
      ...baseTheme.colors.modes,
      light: {
        ...baseTheme.colors.modes.light,
        background: '#F5F5F5',
      },
      dark: {
        ...baseTheme.colors.modes.dark,
        primary: '#f0666b',
      },
    },
  },
  styles: {
    ...baseTheme.styles,
    h1: {
      ...baseTheme.styles.h1,
      overflowWrap: 'break-word',
    },
    h2: {
      ...baseTheme.styles.h2,
      overflowWrap: 'break-word',
    },
    h3: {
      ...baseTheme.styles.h3,
      overflowWrap: 'break-word',
    },
    h4: {
      ...baseTheme.styles.h4,
      overflowWrap: 'break-word',
    },
    h5: {
      ...baseTheme.styles.h5,
      overflowWrap: 'break-word',
    },
    h6: {
      ...baseTheme.styles.h6,
      overflowWrap: 'break-word',
    },
  },
}

export default theme
