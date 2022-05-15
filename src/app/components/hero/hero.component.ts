import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/shared/hero';
import { HeroService } from 'src/app/shared/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() hero!: Hero;

  constructor(private heroService: HeroService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.hero = heroService.getHero(params['id']);
    });
  }

  ngOnInit(): void {
  }
}
