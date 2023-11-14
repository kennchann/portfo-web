import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/nav.tsx'
import App from './App.tsx'
import Footer from './components/footer.tsx'
import "./assets/css/main.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
)