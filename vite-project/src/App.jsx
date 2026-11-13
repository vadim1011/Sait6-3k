import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Page1 from '../src/Pages/PaGe1/Page1'
import Footer from './Footer/Footer'
import Page2 from '../src/Pages/PaGe2/Page2'
import Page3 from '../src/Pages/PaGe3/Page3'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Page1/>}/>
          <Route path='/Page1' element ={<Page1/>}/>
          <Route path='/Page2' element ={<Page2/>}/>
          <Route path='/Page3' element ={<Page3/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
