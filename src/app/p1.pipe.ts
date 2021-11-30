import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p1'
})
export class P1Pipe implements PipeTransform {


  transform(value:any, searchTerm:string) {
    return value.filter(function(search){
     return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1
    })
   }

}
