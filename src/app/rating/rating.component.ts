import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

  public items = [
    { active: false },
    { active: false },
    { active: false },
    { active: false },
    { active: false }
  ];

  getActive(i: number) {
    return this.items[i].active;
  }

  setActive(i: number) {
    let count = 0;
    for (const value of this.items) {
      if (i >= count) {
        value.active = true;
      } else {
        value.active = false;
      }
      count++;
    }
  }
}
