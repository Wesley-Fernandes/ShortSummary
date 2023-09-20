import Title from '@/components/Title'
import Response from '@/components/Response'
import Main from '@/components/Main'
import Form from '@/components/Form'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
export default function Home() {
  return (
    <Main>
      <div style={{height: '50vh'}} className="flex flex-col justify-end items-center flex-1">
        <Title />
        <Form />
        <small className="text-white/30 font-light mt-1">
          Tamanho maximo do video: 60 segundos.
        </small>
        <Response />
      </div>
      <Footer />
    </Main>
  )
}
