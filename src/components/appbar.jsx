import React from 'react';
import Link from 'next/link'
import { Card, Box, TextField, Button } from '@mui/material';

import Image from 'next/image'

import logo from '../public/images/logo.png'
import carrinhoIcon from '../public/images/carrinho-carrinho.png'
import usuarioIcon from '../public/images/perfil-de-usuario.png'
import lupaIcon from '../public/images/lupa.png'

export default function Footer(props) {

  return (
    <Card variant='outlined' sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      Width: '100%',
      height: '20vh',
      backgroundColor: '#FFFFFF',
    }}>
      <Link href="/">
        <Box sx={{
        }}
        >
          <Image
            src={logo}
            alt='Logotipo da Empresa'
            width={100}
            height={100}
          />
        </Box>
      </Link>
      <div>
        <TextField label="Buscar Produtos" backgroundColor='white'
          // O código abaixo é para modificar as propriedades da borda do Textfield
          sx={{
            width: '40vw',
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderTop: "1px solid #000000",
                borderRight: 'none',
                borderBottom: '1px solid #000000',
                borderLeft: "1px solid #000000",
                borderRadius: '50px 0px 0px 50px ',
              }
            },
          }}

        >
        </TextField>
        <Button
          sx={{
            margim: '0px',
            border: '1.5px solid #000000',
            borderLeft: 'none',
            borderRadius: '0px 50px 50px 0px ',
            backgroundColor: '#FFB600',

            '&:hover': {
              backgroundColor: 'rgba(255, 182, 0, 0.5)',
              boxShadow: 'none',
            }
          }}>
          <Image
            src={lupaIcon}
            alt='Logotipo da Empresa'
            width="41vh"
            height="41vh"
          />
        </Button>
      </div>
      <div>
        <Button sx={{
          marginLeft: "25vh",
          marginRight: "1vh"
        }}>
          <Image
            src={usuarioIcon}
            alt='Logotipo da Empresa'
            width="40vh"
            height="40vh" />
        </Button>

        <Button>
          <Image
            src={carrinhoIcon}
            alt='Logotipo da Empresa'
            width="40vh"
            height="40vh" />
        </Button>
      </div>
    </Card>
  )
}