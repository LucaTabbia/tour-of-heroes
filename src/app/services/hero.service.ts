import { Injectable } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HEROES } from 'src/app/data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHeroById(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    const hero: Hero= HEROES.find(h=>h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
