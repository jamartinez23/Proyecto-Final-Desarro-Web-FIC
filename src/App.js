import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import SeccionCocinas from './components/seccion1 cocinas';
import SeccionSalas from './components/seccion2 muebles salas';
import SeccionDormitorios from './components/seccion3 muebles dormitorios';
import Footer from './components/Footer';
import ImageSection from './components/ImageSection';
import Form from './components/Formulario';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <main>
        <div id="inicio">
          <h2>Muebles de Madera de Todo Tipo</h2>
          <p>Descubre la mejor calidad en muebles de madera para tu hogar.</p>
          <ImageSection src="https://www.pisos-de-madera.mx/blog/wp-content/uploads/2024/08/53eae026-9f78-4268-8278-c95a15c93e95.webp" alt="Inicio" />
          <Form /> { }
        </div>
        <SeccionCocinas/>
        <ImageSection src="https://madesa.mx/cdn/shop/products/01-GRGL2400085Z-ambientado-armario-cozinha-completa-240cm-rustic-glamy-madesa-08.jpg?v=1706714520&width=1214" alt="Cocinas Integrales" />
        <SeccionSalas/>
        <ImageSection src="https://muebleslufe.com/blog/wp-content/uploads/2019/03/muebles-de-madera-para-salones-1024x683.jpg" alt="Muebles para Salas" />
        <SeccionDormitorios/>
        <ImageSection src="https://i.pinimg.com/originals/06/a7/e7/06a7e7a81b6e31d9cf0b33c566f5d33e.jpg" alt="Muebles para Dormitorios" />
      </main>
      <Footer/>
    </Router>
  );
};

export default App;
