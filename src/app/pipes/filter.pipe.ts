import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterPrice:number,propName:string): any {
    const resultArr = [];
    for(const item of value){
      if( item[propName] >= filterPrice){
        resultArr.push(item);
      }
    }
    return resultArr;
  }

}
