import { Component, Input, OnInit } from '@angular/core';
export interface Imenu {
  path: string;
  name: string;
}

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menu: Imenu[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
