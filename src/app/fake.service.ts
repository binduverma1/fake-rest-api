import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

const BOOKS_API: string = "/books";

@Injectable()
export class FakeService {

  constructor(private http: Http) { }

  getBooks(): Observable<any[]>{
    return this.http
      .get(BOOKS_API)
      .map(resp => resp.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}
