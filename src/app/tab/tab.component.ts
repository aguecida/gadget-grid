import { Component, OnInit, Input } from '@angular/core';
import { Gadget } from '../gadget/gadget';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() gadget: Gadget;

  constructor() { }

  ngOnInit() {
  }

}
