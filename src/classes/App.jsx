import React, {Component} from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';
import Pokemon from "./Pokemon";
import TrainedPokemon from "./TrainedPokemon";

class App extends Component {
    constructor() {
        super();

        this.state = {
            selected: null,
            bag: [],
        };
        this.selectType = this.selectType.bind(this);
        this.putPokemonInBag = this.putPokemonInBag.bind(this);
        this.putPokemonOutBag = this.putPokemonOutBag.bind(this);
    }

    selectType(t) {
        const {selected} = this.state;

        this.setState({
            selected: selected === t ? null : t,
        });
    }

    putPokemonInBag(pokemon) {

        pokemon.trainedId = Date.now();

        this.setState({
            bag: [...this.state.bag, pokemon]
        });
        
    }

    putPokemonOutBag(pokemon) {
        console.log(pokemon);
        console.log(this.state.bag);
        
      this.setState({
        bag: this.state.bag.filter(item => item.trainedId !== pokemon.trainedId)
    });
    }

    render() {
        const {data} = this.props;
        const {selected} = this.state;

        const bag = this.state.bag;

        const deepTypes = data.map(p => p.types.map(t => t.type.name));
        const flatTypes = deepTypes.flat();
        const uniqueTypes = [...new Set(flatTypes)];

        const pokemonsToDisplay = selected
            ? data.filter(pokemon =>
                pokemon.types.find(t => t.type.name === selected),
            )
            : data;

        return (
            <div className="App">
                <Trainer name="Romain" address="1 rue des pokemons" bag={bag} free={this.putPokemonOutBag}/>
                <Filters
                    types={uniqueTypes}
                    active={selected}
                    filter={this.selectType}
                />
                <PokemonList pokemons={pokemonsToDisplay} action={this.putPokemonInBag}/>
            </div>
        );
    }

}

export default App;