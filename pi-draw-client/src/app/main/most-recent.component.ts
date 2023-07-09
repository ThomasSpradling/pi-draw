import { Component } from '@angular/core';

@Component({
  selector: 'most-recent',
  templateUrl: './most-recent.component.html',
})
export class MostRecentComponent {
  items: number[] = Array(10).fill(0);
  connected: boolean = true;
}
