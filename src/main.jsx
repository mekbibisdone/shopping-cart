import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </React.StrictMode>,
)
