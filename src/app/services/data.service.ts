import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  imageSrc: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  fetchData(): Observable<Profile[]> {
    return of([
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        imageSrc: 'https://picsum.photos/200/300',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 35,
        imageSrc: 'https://picsum.photos/200/300',
      },
      {
        firstName: 'Albert',
        lastName: 'Einstein',
        age: 70,
        imageSrc: 'https://picsum.photos/200/300',
      },
    ]).pipe(delay(1000));
  }
}
