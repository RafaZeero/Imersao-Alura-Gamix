import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import appConfig from '../config.json'
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
//   justify-content: center;
// `

function Titulo(props) {
  const Tag = props.tag || 'h1'
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.primary['300']};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

// export default function Home() {
//   return (
//     <>
//       <GlobalStyle />
//       <Titulo>RPG de Mesa</Titulo>
//       <h2>Discord para RPG's de mesa</h2>
//     </>
//   )
// }

export default function PaginaInicial() {
  // const username = 'rafazeero'
  const [username, setUsername] = useState('rafazeero')
  const [bgChange, setBgChange] = useState(false)
  const router = useRouter()

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[50],
          backgroundImage: bgChange
            ? 'url(./img/main-bg.jpg)'
            : 'url(./img/main-bg-2.jpg)',
          // backgroundImage:
          //   'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          transition: 'backgroundImage ease .4s'
        }}
      >
        <Button
          styleSheet={{
            position: 'absolute',
            left: '0',
            top: '0'
            // width: '52px',
            // height: '52px'
          }}
          onClick={() => setBgChange(prevState => !prevState)}
          label="Mude a imagem de fundo"
        />
        <Box
          styleSheet={{
            display: 'flex',
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
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={e => {
              e.preventDefault()
              router.push('/chat')
            }}
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              textAlign: 'center',
              marginBottom: '32px'
            }}
          >
            <Titulo tag="h2">Boas vindas ao Gamix!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: appConfig.theme.colors.neutrals[200]
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              value={username}
              onChange={e => {
                setUsername(e.target.value)
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.primary[400],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800]
                }
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600]
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '3px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px'
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px'
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  )
}
