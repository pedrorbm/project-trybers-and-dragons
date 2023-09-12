import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;
  static instance = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 80,
  ) {
    super(name, dexterity);
    this.maxLifePoints = maxLifePoints;
    Dwarf.instance += 1;
  }

  static createdRacesInstances(): number { return this.instance; }
}

export default Dwarf;
