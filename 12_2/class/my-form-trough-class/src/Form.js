import React, { Component } from 'react';

class Form extends Component {
constructor() {
  super();

  this.state = {
    estadoFavorito: '',
    nome: '',
    email: '',
    idade: 0,
    vaiComparecer: false,
    palavraChaveFavorita: ''
  }
}

  handleTextAreaChange(event){
    console.log(event.target);
  }

  render() {
    return(
      <div>
        <h1>Estados e React: ferramenta incrível ou reagindo a regionalismos</h1>
        <form className="form">
          <label htmlFor="">
            Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea name="estadoFavorito" onChange={this.handleTextAreaChange} />
          </label>

          <label >
            Email
            <input type="email" name="email" />
          </label>

          <label>
            Nome
            <input type="text" name="nome" />
          </label>

          <label>
            Idade
            <input type="number" name="idade" />
          </label>

          <label>
            Vai comparecer à conferência?
            <input type="checkbox" name="vaiComparecer" />
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita">
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>
        </form>
      </div>
    );
  };
}

export default Form;