import { ThemeProvider } from 'styled-components'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from './components/styled/Container.styled'
import GlobalStyle from './components/styled/Global'
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: ' 768px',
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        {content.map((item, index) => {
          return (
            <Card key={index} item={item}>
              {item.title}
            </Card>
          )
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
