// export default function PaginaDoChat() {
//   return (
//     <div>
//       <h2>Página do chat</h2>
//       <p>Bem vindo ao chat do Gamix!</p>
//       <span>Jogue seus jogos de tabuleiro, com seus amigos, à distância</span>
//     </div>
//   )
// }

import { Box, Text, TextField, Image, Button, Icon } from '@skynexui/components'
import { useState } from 'react'
import appConfig from '../config.json'
// JavaScript

export default function ChatPage() {
  // Sua lógica vai aqui

  const [mensagem, setMensagem] = useState('')
  const [listaDeMensagens, setListaDeMensagens] = useState([])

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagens.length + 1,
      de: 'vanessametonini',
      texto: novaMensagem
    }

    setListaDeMensagens([mensagem, ...listaDeMensagens])
    setMensagem('')
  }

  function handleRemove(id) {
    const novaLista = listaDeMensagens.filter(item => item.id !== id)
    setListaDeMensagens(novaLista)
  }

  // ./Sua lógica vai aqui
  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        // backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundImage: `url(https://i0.wp.com/nerdarchy.com/wp-content/uploads/2018/03/RPG-group-2.jpg?fit=1200%2C720&ssl=1)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000']
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '80%',
          maxHeight: '80vh',
          padding: '32px',
          opacity: '0.9'
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px'
          }}
        >
          <MessageList
            mensagens={listaDeMensagens}
            deletaMensagem={handleRemove}
          />
          {/* {listaDeMensagens.map((mensagemAtual) => {
                    return (
                        <li key={mensagemAtual.id}>
                            {mensagemAtual.de}: {mensagemAtual.texto}
                        </li>
                    )
                })} */}
          <Box
            as="form"
            onSubmit={e => {
              e.preventDefault()
              handleNovaMensagem(mensagem)
            }}
            styleSheet={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <TextField
              value={mensagem}
              onChange={event => {
                const valor = event.target.value
                setMensagem(valor)
              }}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  handleNovaMensagem(mensagem)
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200]
              }}
            />
            <Button
              type="submit"
              label="Enviar"
              fullwidth="true"
              styleSheet={{
                height: '85%',
                // width: '15%',
                borderRadius: '15% 10%',
                border: 0,
                padding: '6px 8px',
                marginBottom: '9px',
                fontSize: '18px'
              }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['100'],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600]
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  )
}

function MessageList(props) {
  console.log(props)
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px'
      }}
    >
      {props.mensagens.map(mensagem => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700]
              }
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px'
              }}
            >
              <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px'
                }}
                src={`https://github.com/vanessametonini.png`}
              />
              <Icon
                label="Icon Component"
                name="FaTrash"
                onClick={() => props.deletaMensagem(mensagem.id)}
              />
              <Text tag="strong">{mensagem.de}</Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300]
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        )
      })}
    </Box>
  )
}
