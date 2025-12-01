import React from 'react';
import Layout from '../components/Layout';

export default function Ensinamentos() {
  return (
    <Layout title="Ensinamentos">
      <div className="ensinamentos-container">
        <h1>Ensinamentos de Jesus para os Jovens</h1>
        <p className="intro-text">
          Os ensinamentos de Jesus têm um significado profundo e relevante para os jovens de todas as gerações. 
          Aqui estão alguns dos principais ensinamentos de Jesus e seu significado para os jovens:
        </p>

        <section className="teaching-section">
          <h2>Amor e Compaixão</h2>
          <ul>
            <li>
              <strong>Amar ao próximo como a si mesmo (Mateus 22:37-40):</strong> 
              Jesus ensina que o amor é a base de todas as relações humanas. 
              Os jovens devem aprender a amar e respeitar os outros, independentemente de suas diferenças.
            </li>
            <li>
              <strong>Perdoar e ter misericórdia (Mateus 6:14-15):</strong> 
              Jesus ensina que o perdão e a misericórdia são essenciais para a vida cristã. 
              Os jovens devem aprender a perdoar e ter misericórdia uns com os outros.
            </li>
          </ul>
        </section>

        <section className="teaching-section">
          <h2>Humildade e Serviço</h2>
          <ul>
            <li>
              <strong>Servir aos outros (Mateus 20:26-28):</strong> 
              Jesus ensina que a verdadeira grandeza vem de servir aos outros. 
              Os jovens devem aprender a servir e ajudar os outros, especialmente aqueles que estão em necessidade.
            </li>
            <li>
              <strong>Humildade e simplicidade (Mateus 18:1-5):</strong> 
              Jesus ensina que a humildade e a simplicidade são essenciais para a vida cristã. 
              Os jovens devem aprender a ser humildes e simples, evitando a arrogância e o orgulho.
            </li>
          </ul>
        </section>

        <section className="teaching-section">
          <h2>Autocontrole e Disciplina</h2>
          <ul>
            <li>
              <strong>Controlar os próprios pensamentos e ações (Mateus 5:21-22):</strong> 
              Jesus ensina que o autocontrole é essencial para a vida cristã. 
              Os jovens devem aprender a controlar seus próprios pensamentos e ações, evitando o pecado e a maldade.
            </li>
            <li>
              <strong>Praticar a disciplina e a perseverança (Mateus 25:1-13):</strong> 
              Jesus ensina que a disciplina e a perseverança são essenciais para a vida cristã. 
              Os jovens devem aprender a praticar a disciplina e a perseverança, especialmente em momentos de dificuldade e desafio.
            </li>
          </ul>
        </section>

        <section className="teaching-section">
          <h2>Em resumo</h2>
          <p>
            Os ensinamentos de Jesus para os jovens são sobre amor, humildade, fé, obediência, autocontrole e disciplina. 
            Esses ensinamentos são essenciais para a formação de jovens cristãos que sejam capazes de viver de acordo 
            com a palavra de Deus e fazer a diferença no mundo.
          </p>
        </section>
      </div>
    </Layout>
  );
}
