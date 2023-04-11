import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Laia</title>
        <meta name="description" content="Laboratorio abierto de inteligencia artificial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        

      </Head>
      <main className={styles.main}>

        <header>
          <Typography variant="h1" color="theme.palette.text.secondary">LAIA</Typography>
          <Typography variant="h3" color="theme.palette.text.secondary">laboratorio abierto de inteligencia artificial</Typography>
        </header>
        <link rel="discord" href="https://discord.gg/SscaaUgb" />
        <a href="https://discord.gg/ZbvzBd9X5A">

        <Button  variant="outlined" >Sumate a nuestro discord</Button>
        </a>
      </main>
    </>
  )
}
