import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-switch',
  templateUrl: './ui-switch.component.html',
})
export class UiSwitchComponent implements OnInit {
  state: boolean = true;
  @Input() disabled: boolean = false;

  toggleState() {
    if (!this.disabled) {
      this.state = !this.state;
    }
  }

  ngOnInit() {
    this.state = false;
  }
}
