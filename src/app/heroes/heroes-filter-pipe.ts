import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from '../heroes/heroe';
@Pipe({
  name: 'heroesFilter',
  standalone: false,
})
export class HeroesFilterPipe implements PipeTransform {
  transform(value: IHeroe[], args:string): IHeroe [] {
    let filter: string = args ? args.toLocaleLowerCase() : '';
    return value.filter((hero: IHeroe) =>
      hero.nombre.toLocaleLowerCase().indexOf(filter) !== -1
    );
  }
}
