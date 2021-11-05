import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-layout',
  styleUrls: ['./container-layout.component.scss'],
  templateUrl: './container-layout.component.html'
})
export class ContainerLayoutComponent implements OnInit, OnDestroy {

  layout: any = {};
  sidebar: any = {};
  theme: any;
  private alive = true;
  memberId: number = 0;
  userId: number = 0;
  currentTheme: string;
  tablet: boolean = window.innerWidth < 992;

  constructor() { }

  @HostListener('window:resize', [])
  onResize() {
    this.tablet = window.innerWidth < 992;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
