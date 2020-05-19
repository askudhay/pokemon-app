import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadStrategy implements PreloadingStrategy{

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any>{
    return route.data && route.data['preload'] ? load() : EMPTY;
  }

}
