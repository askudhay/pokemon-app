import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { EMPTY, TimeoutError } from 'rxjs';

export declare var navigator;

@Injectable({
  providedIn: 'root'
})
export class NetworkPreloadStrategy implements PreloadingStrategy{

  constructor() { }
  preload(route: import("@angular/router").Route, load: () => import("rxjs").Observable<any>): import("rxjs").Observable<any> {
    return this.hasGoodNetworkConn() ? load() : EMPTY;
  }

  hasGoodNetworkConn() {
    const conn = navigator.connection;
    if(conn){
      const connectionsToAvoid = ['2g', '3g'];
      const connectionType = conn.effectiveType || '';
      console.log(connectionType);
      if(connectionsToAvoid.includes(connectionType)){
          return false;
      }
    }   
    return true;
  }
}
