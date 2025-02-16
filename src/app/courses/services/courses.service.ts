import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';
  constructor(private httpCLient: HttpClient) { }

  list() {
    return this.httpCLient.get<Course[]>(this.API)
    .pipe(
      first(),
   //   delay(1000),
      tap(courses => console.log(courses))
    );
  }
}
