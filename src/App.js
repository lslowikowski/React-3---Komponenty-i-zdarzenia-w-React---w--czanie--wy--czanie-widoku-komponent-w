import React, {Component} from 'react';
import './App.css';
import Artykul from './Artykul/Artykul';
import Czat from './Czat/Czat';

class App extends Component {
  state = {
    artykuly:[
     {tytul:"Tytuł 1", tresc:"To jest tresc artykułu 1" }, 
     {tytul:"Tytuł 2", tresc:"To jest tresc artykułu 2" }, 
     {tytul:"Tytuł 3", tresc:"To jest tresc artykułu 3" },
     {tytul:"Tytuł 4", tresc:"To jest tresc artykułu 4" }  
    ],
    artykulyWidoczne: false,
    pokoje:[
     {nazwa:"Pokój programistów", opis:"Czat, w którym programiści dyskutują nad kodowaniem" }, 
     {nazwa:"Pokój testerów", opis:"Czat, w którym testerzy wymieniają się informacjami jak wyłapywać błędy" },
     {nazwa:"Pokój wdrożeniowców", opis:"Czat, w którym wdrożeniowcy omawiają socjotechniki wypróbowane na klientach" },
     {nazwa:"Pokój kierowników", opis:"Czat, w którym kierownicy knują w jaki sposób efetywniej wykorzystać pracę podwładnych" }
    ],
    pokojeWidoczne: false
  }

  przelaczArtykuly = () =>{    
    const czyPokazywacArytkuly = this.state.artykulyWidoczne;
    this.setState({artykulyWidoczne: !czyPokazywacArytkuly});    
  }

  przelaczPokoje = () =>{
    const czyPokazywacPokoje = this.state.pokojeWidoczne;
    this.setState({pokojeWidoczne: !czyPokazywacPokoje});
  }

  render(){
    let artykuly = null;
    if(this.state.artykulyWidoczne){
      artykuly = this.state.artykuly.map(artykul =>{
        return(<Artykul tytul={artykul.tytul} tresc={artykul.tresc} /> )
      });
      /*
      artykuly = <div>
            <Artykul tytul={this.state.artykuly[0].tytul} tresc={this.state.artykuly[0].tresc} />
            <Artykul tytul={this.state.artykuly[1].tytul} tresc={this.state.artykuly[1].tresc} />
            <Artykul tytul={this.state.artykuly[2].tytul} tresc={this.state.artykuly[2].tresc} />
          </div>
      */
    }

    let pokoje = null;
    if(this.state.pokojeWidoczne){
      pokoje = this.state.pokoje.map(pokoj =>{
        return(<Czat nazwa={pokoj.nazwa} opis={pokoj.opis} />); 
      })
      /*
      pokoje =<div>
        <Czat nazwa={this.state.pokoje[0].nazwa} opis={this.state.pokoje[0].opis} />
        <Czat nazwa={this.state.pokoje[1].nazwa} opis={this.state.pokoje[1].opis} />
        <Czat nazwa={this.state.pokoje[2].nazwa} opis={this.state.pokoje[2].opis} />
      </div>
      */
    }

    return(
      <div className='App'>
        <h1>Witaj w React!</h1>
        <button onClick={this.przelaczArtykuly}>Artykuły</button>
        <button onClick={this.przelaczPokoje}>Pokoje</button>
        {artykuly}
        {pokoje}
      </div>

    );
  }
}

export default App;
