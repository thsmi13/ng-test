import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  moveToTop(v: string) {

    let list;
    let listItems;

    list = document.getElementById('list');

    listItems = list.getElementsByTagName('LI');

    for (let i = 0; i < listItems.length; i++) {
      if (listItems[i].innerHTML === v
        && list.firstChild.innerHTML !== v) {
        listItems[i].parentNode.insertBefore(listItems[i], listItems[0]);
      }
    }
  }

}
