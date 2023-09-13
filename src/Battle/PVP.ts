import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  playerOne: Fighter;
  playerTwo: Fighter;

  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }

  fight(): number {
    if (this.playerOne.lifePoints <= 0) return -1;
    if (this.playerTwo.lifePoints <= 0) return 1;

    if (this.playerOne.lifePoints > -1 && this.playerTwo.lifePoints > -1) {
      this.playerOne.attack(this.playerTwo);
      this.playerTwo.attack(this.playerOne);
    }
    
    return this.fight();
  }
}

export default PVP;
