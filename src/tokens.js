const SCREEN_SIZES = [['mobile', 400], ['tabletLandscape', 960]]

export default {
  colors: {
    red: 'red',
  },

  fonts: {
    mark: {
      name: 'MarkWebPro',
      family: '"MarkWebPro", serif',
      weight: {
        bold: 700,
      },
    },
  },

  mq: SCREEN_SIZES.reduce((acc, screen) => {
    acc[screen[0]] = `screen and (min-width: ${screen[1]}px)`
    return acc
  }, {}),
}