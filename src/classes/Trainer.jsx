import React, { Component } from 'react';
import TrainedPokemon from './TrainedPokemon';

class Trainer extends Component {
  render() {
    const { name, address, bag, free } = this.props;

    const instances = bag.map(item => {
      return (
        <TrainedPokemon
          key={item.id}
          name={item.name}
          weight={item.weight}
          trainedId={item.trainerId}
          src={item.sprites.back_default}
          free={() => free(item)}
        />
      );
    });

    return (
      <div className="Trainer">
        <div className="name">{name}</div>
        <div className="address">{address}</div>
        <ul className="bag">{instances}</ul>
      </div>
    );
  }
}

export default Trainer;