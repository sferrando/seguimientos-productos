import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout/Layout';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Layout>
      <section class="max-w-2xl mx-auto">
        <App />
      </section>
    </Layout>
    </BrowserRouter>
  </React.StrictMode>
)
