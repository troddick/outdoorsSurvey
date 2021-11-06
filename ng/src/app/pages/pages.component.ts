import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-container-layout>
      <router-outlet></router-outlet>
    </app-container-layout>
  `,
})
export class PagesComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
