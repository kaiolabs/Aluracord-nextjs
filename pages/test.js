import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
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
            }
            `}</style>
    </>
  );
}

export default function PaginaInicial() {
  // const username = 'kaiolabs';
  const [user, setUser] = React.useState('');
  const [dados, setDados] = React.useState(null);
  const roteamento = useRouter();

  React.useEffect(() => {
    async function initFetch(){
      try{
        const response = await fetch(`https://api.github.com/users/${user}`);
        const userJson = await response.json();
        setDados(userJson); 
      }
      catch(e){
        console.log(Error(e))
      }
    }
    initFetch();
  }, [user]);

  function handleChange({target}){
    setUser(target.value);
  }

  function handleSubimitChat(event){
    event.preventDefault();
    window.localStorage.setItem('user', user);
    roteamento.push('/chat');
  }

  return (
    <>

      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          // backgroundColor: appConfig.theme.colors.primary[500],
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


          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              roteamento.push('/chat');
              // window.location.href = '/chat';
            }}
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
              placeholder='Nome de usuário do Github'
              value={user}
              onChange={function (event) {
                // Onde ta o valor?
                const valor = event.target.value;
                // Trocar o valor da variavel
                (valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />


            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
              styleSheet={{
                margin: '10px',
                borderRadius: '0.5em'
              }}
            />

          </Box>
        </Box>
      </Box>
    </>
  );
}
