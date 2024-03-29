import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this.name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf('Elf', this._dexterity);
    this._archetype = new Mage('Mage');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    const attack = attackPoints - this._defense;
    const attackSuccessful = this._lifePoints - attack;
    const attackLost = this._lifePoints - 1;

    if (attack > 0) { this._lifePoints = attackSuccessful; }

    if (attack <= 0) { this._lifePoints = attackLost; }

    if (this._lifePoints <= 0) { this._lifePoints = -1; }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void { enemy.receiveDamage(this._strength); }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._lifePoints > this._race.maxLifePoints) {
      this._lifePoints = this._race.maxLifePoints;
    }
  }
}

export default Character;
