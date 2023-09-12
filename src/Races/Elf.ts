import Race from './Race';

class Elf extends Race {
  maxLifePoints: number;
  static instance = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 99,
  ) {
    super(name, dexterity);
    this.maxLifePoints = maxLifePoints;
    Elf.instance += 1;
  }

  static createdRacesInstances(): number { return this.instance; }
}

export default Elf;
