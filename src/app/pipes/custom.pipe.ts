import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {
  //Pipe'ın kullanıldığı değeri manipüle/transform etmek için kullanılır.
  //value parametresi üzerinde çalışacak değeri temsil eder.
  transform(value: string,first?:number,IsCount?:number): string {
    return value.slice(first,IsCount);
  }
}
