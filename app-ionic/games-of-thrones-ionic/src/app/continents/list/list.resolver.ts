import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Continents } from '../continents';
import { ListContService } from './list-cont.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<Continents[]> {

  constructor(private service: ListContService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Continents[] | Observable<Continents[]> | Promise<Continents[]> {
    return this.service.list();
  }

  }