import './globals.css'
import 'animate.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Short Summary',
  description: `Bem-vindo ao Shorts Summary, a sua fonte definitiva para resumos de vídeos curtos do YouTube! Somos uma plataforma inovadora que utiliza a mais recente inteligência artificial para transcrever e condensar o conteúdo de vídeos curtos em resumos concisos e informativos. Se você está procurando economizar tempo e obter o melhor conteúdo em segundos, você veio ao lugar certo.

  Nossa equipe de IA avançada analisa cuidadosamente os vídeos mais populares do YouTube, desde tutoriais rápidos a entretenimento cativante, e extrai os pontos-chave, oferecendo resumos precisos e detalhados. Agora você pode acessar informações valiosas sem precisar assistir a vídeos longos!
  
  No Shorts Summary, você encontrará resumos de vídeos de todas as categorias imagináveis: notícias, beleza, tecnologia, comédia, música e muito mais. Navegue facilmente pelo nosso site e descubra uma vasta biblioteca de resumos prontos para você explorar.
  
  Economize tempo, fique por dentro do que há de mais recente na plataforma e desfrute de uma experiência de visualização mais eficiente com o Shorts Summary. Não perca mais tempo assistindo vídeos completos quando tudo o que você precisa está a apenas um clique de distância.
  
  Junte-se a nós hoje e transforme sua experiência no YouTube com o Shorts Summary. Descubra a era dos resumos inteligentes e aproveite ao máximo o seu tempo online. Experimente agora mesmo!`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head>
        <meta
          name="keywords"
          content="resumos de vídeos, YouTube, inteligência artificial, transcrição de vídeo, vídeos curtos"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content="Shorts Summary - Resumos de Vídeos do YouTube com IA"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:description"
          content="Obtenha resumos precisos de vídeos curtos do YouTube usando inteligência artificial no Shorts Summary. Economize tempo e descubra conteúdo valioso em segundos."
        />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="canonical" href="https://shorts-summary.netlify.app/" />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
