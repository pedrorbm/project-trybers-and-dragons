import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  static instance = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 60,
  ) {
    super(name, dexterity);
    this.maxLifePoints = maxLifePoints;
    Halfling.instance += 1;
  }

  static createdRacesInstances(): number { return this.instance; }
}

export default Halfling;
