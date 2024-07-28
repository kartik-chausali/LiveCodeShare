import { Toaster } from 'react-hot-toast'
import './App.css'

import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Editor from './pages/Editor'
function App() {


  return (
    <>
    <div>
      <Toaster
      position='top-center'
      toastOptions={{
        success:{
          iconTheme:{
            primary:"#747bff"
          }
        }
      }}></Toaster>
    </div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/editor/:roomId' element={<Editor/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
