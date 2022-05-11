import React, { Component } from 'react';
import Pokemon from './Pokemon';
import App from '../classes/App';


class PokemonList extends Component {
    render() {
      
        const {pokemons, action} = this.props;

        const instances = pokemons.map(item =>  {
            return  <Pokemon 
            key={item.id} 
            name={item.name} 
            weight={item.weight} 
            src={item.sprites.back_default} 
            action={() => action(item)} />;
        });

        return <ul className="PokemonList list">{instances}</ul>;
    }

     
  }
  
  export default PokemonList;