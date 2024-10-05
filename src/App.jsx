import './App.css'
import './components/paragrafo/paragrafo'
import Paragrafo from './components/paragrafo/paragrafo'
import Botao from './components/button/button'

function App() {

  return (
    <>
      <Paragrafo style={{ color: 'blue', textTransform: 'uppercase' }}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit expedita culpa voluptatem, provident sapiente explicabo! Accusantium quidem modi doloribus minima, tempore voluptatibus quas sunt dolor iusto, eos asperiores quis!</p>
      </Paragrafo>
      <Botao label='Baixar CV' />
    </>
  )
}

export default App
