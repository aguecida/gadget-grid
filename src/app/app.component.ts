import { Component } from '@angular/core';
import { faBell, faTasks, faUserEdit, faHistory, faEnvelope, faComment, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import { Gadget } from './gadget/gadget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  gadgets: Gadget[] = [
    new Gadget('Marquee', faBell),
    new Gadget('Taskbar', faTasks),
    new Gadget('Interaction Capture', faUserEdit),
    new Gadget('Interaction Activity', faHistory),
    new Gadget('Email', faEnvelope),
    new Gadget('Chat', faComment),
    new Gadget('Directory', faAddressBook)
  ];

}
