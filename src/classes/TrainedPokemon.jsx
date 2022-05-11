import React, { Component } from 'react';

class TrainedPokemon extends Component {
  constructor() {
    super();

    this.state = {
      xp: 0,
    };
    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    const { xp } = this.state;
    this.setState({
      xp: xp + 10,
    });
  }

  render() {
    const { name, src, free, trainedId } = this.props;
    const { xp } = this.state;

    function displayName() {
      console.log('Je suis', name);
    }

    return (
      <li
        className="TrainedPokemon"
        onClick={free}
        onMouseMove={this.gainExp}
      >
        <div className="name">{name}</div>
        <div className="exp">{xp}</div>
        <div className="trainedId">{trainedId}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;