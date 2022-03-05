import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-component-identifier',
  templateUrl: './component-identifier.component.html',
  styleUrls: ['./component-identifier.component.scss']
})
export class ComponentIdentifierComponent implements OnInit {
@Input() name = '';
@Input() urlPath = '';
@Input() moduleName = '';
@Input() projectName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
