import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/shared/hero';
import { HeroService } from 'src/app/shared/hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: string = '';
  index: number = 0;
  timeout: number = 5;
  timer: any;

  myHero: Hero = {
    name: '',
    biography: '',
    img: '',
    release: '',
    home: ''
  };

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.name = params['name'];
      this.index = this.heroService.searchHero(this.name);

      if (this.index != -1) this.myHero = heroService.getHero(this.index);
      else this.redirect();
    });
  }

  ngOnInit(): void {
    this.heroes = this.shuffle(this.heroService.getHeroes());
  }

  shuffle(array: Hero[]): Hero[] {
    var m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array.slice(0, 3);
  }

  redirect(): void {
    this.timer = setInterval(() => {
      if (this.timeout-- == 0) {
        clearInterval(this.timer);
        this.router.navigateByUrl('/heroes');
      }
    }, 1000);
  }

  goToHero(i: number): void {
    clearInterval(this.timer);
    this.router.navigate(['/hero', i]);
  }
}
