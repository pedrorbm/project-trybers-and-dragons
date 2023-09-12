import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  static instance = 0;
  typeEnergy: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.instance += 1;
    this.typeEnergy = 'mana';
  }

  get energyType(): EnergyType { return this.typeEnergy; }

  static createdArchetypeInstances(): number { return this.instance; }
}

export default Mage;
