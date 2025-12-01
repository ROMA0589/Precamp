import React from 'react';
import Layout from '../components/Layout';
import { aulas } from '../data/aulas';

export default function Cronogramas() {
  // Crear un array con todas las aulas del 1 al 68
  const todasLasAulas = Array.from({ length: 68 }, (_, index) => {
    const numero = index + 1;
    const aulaEncontrada = aulas.find(a => a.numero === numero);
    
    // Si no se encuentra el aula, crear una por defecto
    if (!aulaEncontrada) {
      return {
        numero,
        titulo: `Aula ${numero}`,
        topicos: ['Contenido pendiente']
      };
    }
    
    return aulaEncontrada;
  });

  return (
    <Layout title="Cronogramas">
      <div className="cronogramas-container">
        <h1>PROGRAMA DE PRÉ-MOCIDADE</h1>
        <div className="aulas-grid">
          {todasLasAulas.map((aula) => (
            <div key={aula.numero} className="aula-card">
              <h3>
                <span className="aula-numero" style={{ color: 'red' }}>{aula.numero}</span>
                <span style={{ marginLeft: '10px', color: 'red' }}>{aula.titulo}</span>
              </h3>
              <ul>
                {aula.topicos.map((topico, index) => (
                  <li key={index} style={{ color: 'red' }}>{topico}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
