import Race from './Race';

class Orc extends Race {
  maxLifePoints: number;
  static instance = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 74,
  ) {
    super(name, dexterity);
    this.maxLifePoints = maxLifePoints;
    Orc.instance += 1;
  }

  static createdRacesInstances(): number { return this.instance; }
}

export default Orc;
