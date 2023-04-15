import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Continents } from '../continents';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  continents: Array<Continents> = [];
  

  ngOnInit() {
    this.list();
  }

  list(): any {
    return this.activatedRoute.data.subscribe(({ data })=>{
      this.continents = data;
      console.log(data);
    });
}

}
