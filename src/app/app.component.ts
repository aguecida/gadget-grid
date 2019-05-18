import { Component } from '@angular/core';
import { faHome, faBell, faTasks, faUserEdit, faHistory, faEnvelope, faComment, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Gadget } from './gadget/gadget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  home: Gadget = new Gadget('Home', faHome);

  gadgets: Gadget[] = [
    new Gadget('Marquee', faBell),
    new Gadget('Taskbar', faTasks),
    new Gadget('Interaction Capture', faUserEdit),
    new Gadget('Interaction Activity', faHistory),
    new Gadget('Email', faEnvelope),
    new Gadget('Chat', faComment),
    new Gadget('Directory', faAddressBook)
  ];

  tabs: Gadget[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
