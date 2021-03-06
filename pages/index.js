import { Box, Button, Text, TextField, Image, Icon } from '@skynexui/components';
import { useRouter } from 'next/router';
import React from 'react';
import appConfig from '../config.json';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
                text-align: center;
            }
            `}</style>
    </>
  );
}

export default function PaginaInicial() {
  const [user, setUser] = React.useState('');
  const [dados, setDados] = React.useState(null);
  const roteamento = useRouter();

  React.useEffect(() => {
    async function initFetch() {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const userJson = await response.json();
        setDados(userJson);
      }
      catch (e) {
        console.log(Error(e))
      }
    }
    initFetch();
  }, [user]);

  function handleChange({ target }) {
    setUser(target.value);
  }

  function handleSubimitChat(event) {
    event.preventDefault();
    window.localStorage.setItem('user', user);
    roteamento.push('/chat');
  }

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundImage: 'url(https://wallpaperaccess.com/full/6272395.gif)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '800px',
            borderRadius: '0.7em', padding: '50px', margin: '16px',
            boxShadow: '20px 20px 50px #00000280',

            background: 'rgba(255, 255, 255, 0.308)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.05)',

            borderTop: '1px solid #ffffff80',
            borderLeft: '1px solid #ffffff80',

          }}
        >

          {/*Avatar*/}
          <Box
            styleSheet={{
              margin: '32px 0 16px 0',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '50%',
            }}

          >
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center-between',
              flexDirection: {
                xs: 'column',
                sm: 'row'
              },
              gap: '8px'
            }}
          >


          </Box>
          <Box
            as="form"
            onSubmit={handleSubimitChat}
            styleSheet={{ width: '100%' }}

            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center',
            }}
          >

            <Titulo tag="h2">Boas vindas de volta!</Titulo>

            <Text variant="body3" styleSheet={{ padding: '12px', marginBottom: '15px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              placeholder='Nome de usu??rio do Github'
              fullWidth
              value={user}
              onChange={handleChange}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: '#101418',
                  mainColorHighlight: '#7289D9',
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              styleSheet={{
                margin: '24px 0 0 0'
              }}
            />

            <Button
              type='submit'
              label='Entrar'
              fullWidth
              styleSheet={{ marginTop: '5px' }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: '#7289D9',
                mainColorLight: '#4E6AD0',
                mainColorStrong: '#4E6AD0',
              }}
            />

          </Box>
          {/*Formul??rio*/}

          <Box
          styleSheet={{
            paddingLeft: '100px',
          }}
          >

            <Image
              styleSheet={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
              }}
              src={
                `${user.length > 2
                  ? `https://github.com/${user}.png`
                  : 'https://raw.githubusercontent.com/GabrielLaminas/aluracord-space/19aa1a8c044da3ae427db7a5510fac85c9773f2c/public/undraw_male_avatar.svg'}`}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
