import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes : Hero[] = HEROES;

  constructor() { }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHero(position: number): Hero {
    return this.heroes[position];
  }

  searchHero(name: string): number {
    let index = this.heroes.findIndex(i => i.name.toLowerCase().includes(name.toLowerCase()));
    return index;
  }
}
