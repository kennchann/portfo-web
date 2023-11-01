import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Nav from './components/nav.tsx'
import Footer from './components/footer.tsx'
import "./_assets/css/main.scss";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
)