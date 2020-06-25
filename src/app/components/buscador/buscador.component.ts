import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activateRoute: ActivatedRoute, 
              private heroesService: HeroesService) { 
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }


}
