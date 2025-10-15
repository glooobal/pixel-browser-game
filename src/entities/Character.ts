import { Player } from './Player';

export abstract class Character {
  name: string;
  baseHp: number;
  baseSpeed: number;
  baseDamage: number;
  color: string;

  constructor(name: string, baseHp: number, baseSpeed: number, baseDamage: number, color: string) {
    this.name = name;
    this.baseHp = baseHp;
    this.baseSpeed = baseSpeed;
    this.baseDamage = baseDamage;
    this.color = color;
  }

  // TO DO
  abstract weaponAttack(player: Player): void;
  abstract applyPassive(player: Player): void;
}
