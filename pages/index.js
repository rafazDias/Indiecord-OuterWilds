import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json'





function Titulo(props) {
  console.log(props);
  const Tag = props.tag;
    return(
      <>
      <Tag>{props.children}</Tag> 
      <style jsx>{`
      ${Tag} {
        color: ${appConfig.theme.colors.primary[400]};
        font-size: 24px;
        font-weight: 600;
      }
    `}</style>
    </>
    );
}

//function HomePage() {
//  return (
//<div>
//<GlobalStyle />
//<Titulo tag="h2">Boas vindas de volta!</Titulo>
//<h2>Discord - Alura Matrix</h2>
//</div>  
//)
//}
  
//export default HomePage
export default function PaginaInicial() {
  //const username = 'rafazDias';
  const [username, setUsername] = React.useState('');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundImage: 'url(https://media.discordapp.net/attachments/827006015269503016/894799718809481266/SPOILER_unknown.png?width=872&height=472)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 90%)',
            backgroundColor: appConfig.theme.colors.neutrals[500],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
              onSubmit={function (infosDoEvento){
                infosDoEvento.preventDefault();
                console.log('algm submeteu o form');
                roteamento.push('/chat')
                //window.location.href = '/chat ';
              }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            {/* <input 
            type="text" 
            value={username}
            onChange={function handler(event){
                console.log('usuario digitou', event.target.value);
                //onde ta o valor?
                const valor = event.target.value;
                //trocar o valor
                //através do React e avise quem precisa
                setUsername(valor);
                }}
            /> */}
            <TextField
            value={username}
            onChange={function handler(event){
              console.log('usuario digitou', event.target.value);
              //onde ta o valor?
              const valor = event.target.value;
              //trocar o valor
              //através do React e avise quem precisa
              setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[600],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              disabled={username.length < 3}
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[300],
                mainColorLight: appConfig.theme.colors.primary[500],
                mainColorStrong: appConfig.theme.colors.primary[600],
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
              backgroundColor: appConfig.theme.colors.neutrals[600],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
              boxShadow: '0 20px 20px 0 rgb(0 0 0 / 100%)'
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={
                username.length > 2
                ?`https://github.com/${username}.png`
                :`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3648106f-36c8-4a88-8139-40330bb03b0f/de9hoaj-d521097d-29e0-4bd7-8c37-b67e4445d684.png/v1/fill/w_512,h_512,strp/outer_wilds___dock_icon_by_courage_and_feith_de9hoaj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvMzY0ODEwNmYtMzZjOC00YTg4LTgxMzktNDAzMzBiYjAzYjBmXC9kZTlob2FqLWQ1MjEwOTdkLTI5ZTAtNGJkNy04YzM3LWI2N2U0NDQ1ZDY4NC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6a7k5cqWBRotbTdayuf9mxYlrVAwkRO0UtZySK00NYI`

              }

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
  );
}
