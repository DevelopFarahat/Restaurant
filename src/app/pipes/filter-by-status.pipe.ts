import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {

  transform(value: any[], filterStatus: boolean|number, propName: string): any {
    const resultArr = [];

    if (value.length == 0 || filterStatus == undefined || propName == '') {
      return value;
    }
    if(typeof filterStatus == 'boolean'){
      for (const item of value) {
        if (item[propName] == filterStatus) {
          resultArr.push(item);
        }
      }
    }else{
      for (const item of value) {
        if (item[propName] > filterStatus) {
          resultArr.push(item);
        }
      }
    }
   
    return resultArr;
  }

}
