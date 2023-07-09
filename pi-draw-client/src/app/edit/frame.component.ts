import { Component } from '@angular/core';
import { BaseDrawingCanvas } from '../base-drawing-canvas';

@Component({
  selector: 'ui-frame',
  templateUrl: './frame.component.html',
})
export class Frame extends BaseDrawingCanvas {
  override PIXEL_SIZE: number = 3.375;
}
