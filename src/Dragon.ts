import Monster from './Monster';

class Dragon extends Monster {
  constructor(lifePoints = 999) {
    super();
    super._lifePoints = lifePoints;
  }
}

export default Dragon;
