import Cabecalho from './containers/Cabecalho'
import Hero from './containers/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
