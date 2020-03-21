import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

//Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github"></input>
          </div>
          
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs"></input>
          </div>
          
          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude"></input>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude"></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/60294789?s=60&u=fb22715f0f506c0072eb3eef819d26f94a00408c&v=4" alt="João Pedro"/>
              <div className="user-info">
                <strong>João Pedro</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>  
  );
}

export default App;