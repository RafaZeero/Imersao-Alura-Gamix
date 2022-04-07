import { Box, Text } from '@skynexui/components'
import appConfig from '../config.json'

export default function Error404() {
  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[50],
        backgroundImage: 'url(./img/erro-404.jpg)',
        // backgroundImage:
        //   'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply'
      }}
    >
      <Box
        styleSheet={{
          // display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          width: '100%',
          maxWidth: '700px',
          borderRadius: '5px',
          padding: '32px',
          margin: '16px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          border: '3px solid'
        }}
      >
        <Text
          variant="body3"
          styleSheet={{
            marginBottom: '32px',
            color: appConfig.theme.colors.neutrals[200],
            lineHeight: '2rem'
          }}
        >
          <h2>
            Você está em terreno desconhecido, seu level ainda é muito baixo,
            recomendamos que volte quando estiver mais forte
          </h2>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <h2>
            Pensando bem, achamos melhor não voltar nem quando estiver mais
            forte, esse lugar é estranho...
          </h2>
        </Text>
      </Box>
    </Box>
  )
}
