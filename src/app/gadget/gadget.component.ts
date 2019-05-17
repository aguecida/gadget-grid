import { Component, OnInit, Input } from '@angular/core';
import { Gadget } from './gadget';

@Component({
  selector: 'app-gadget',
  templateUrl: './gadget.component.html',
  styleUrls: ['./gadget.component.scss']
})
export class GadgetComponent implements OnInit {

  @Input() gadget: Gadget;

  constructor() { }

  ngOnInit() {
  }

}
