import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../character';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  characteres: Array<Character> = [];
  

  ngOnInit() {
    this.list();
  }

  list(): any {
    return this.activatedRoute.data.subscribe(({ data })=>{
      this.characteres = data;
      console.log(data);
    });
}

}
