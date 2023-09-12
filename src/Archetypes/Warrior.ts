import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  static instance = 0;
  typeEnergy: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior.instance += 1;
    this.typeEnergy = 'stamina';
  }

  get energyType(): EnergyType { return this.typeEnergy; }

  static createdArchetypeInstances(): number { return this.instance; }
}

export default Warrior;
