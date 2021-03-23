import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input  } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    let id = +(this.route.snapshot.paramMap.get('id')+ '');
    id= isNaN(id) ? 0: id;
    this.heroService.getHeroById(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}
