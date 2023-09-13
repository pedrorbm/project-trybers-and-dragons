import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  player: Fighter;
  monster: SimpleFighter[] | Fighter[] | Monster[];

  constructor(
    player: Fighter,
    monster: SimpleFighter[] | Fighter[] | Monster[],
  ) {
    super(player);
    this.player = player;
    this.monster = monster;
  }

  fight(): number {
    if (this.player.lifePoints <= 0) return -1;
    if (this.monster.every((enemy) => enemy.lifePoints <= 0)) return 1;

    this.monster.map((enemy) => {
      this.player.attack(enemy);
      return enemy.attack(this.player);
    });

    return this.fight();
  }
}

export default PVE;
