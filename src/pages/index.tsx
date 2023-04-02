import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>`Laia`</title>
        <meta name="description" content="Laboratorio abierto de inteligencia artificial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        

      </Head>
      <main className={styles.main}>

        <header>
          <h1>LAIA</h1>
          <h2>Laboratorio abierto de inteligencia artificial</h2>
        </header>
        <link rel="discord" href="https://discord.gg/SscaaUgb" />
        <a href="https://discord.gg/SscaaUgb">

        <Button  variant="outlined" >Sumate a nuestro discord</Button>
        </a>
      </main>
    </>
  )
}
