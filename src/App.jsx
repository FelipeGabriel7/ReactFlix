

// Routes
import { BrowserRouter as Container , Routes , Route} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Search } from './pages/Search/Search'
import { Navbar } from './components/Navbar'
import { InfoMovie } from './pages/InfoMovie/InfoMovie'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
      <Container>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:id" element={<InfoMovie /> } />
          <Route path="/search" element={<Search/>}/>
        </Routes>
        <Footer/>
      </Container>
    </>
  )
}

export default App
