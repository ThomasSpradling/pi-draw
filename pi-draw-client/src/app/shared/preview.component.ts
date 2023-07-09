import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { BaseDrawingCanvas } from '../base-drawing-canvas';
import { Drawing } from '../edit/drawing';

@Component({
  selector: 'drawing-preview',
  templateUrl: './preview.component.html',
})
// implements OnDestroy
export class DrawingPreviewComponent
  extends BaseDrawingCanvas
  implements OnChanges, OnDestroy
{
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  override PIXEL_SIZE: number = 8;

  @Input() drawing!: Drawing;

  private frameIndex = 0;
  private animationInterval: any = null;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.animateFrames();
  }

  animateFrames() {
    const fpsInterval = this.drawing.fps ? 1000 / this.drawing.fps : 1000 / 12;

    this.animationInterval = setInterval(() => {
      requestAnimationFrame(() => {
        if (this.frameIndex in this.drawing.frames) {
          this.frame = JSON.parse(
            JSON.stringify(this.drawing.frames[this.frameIndex])
          );
          this.renderFrame();

          this.frameIndex = (this.frameIndex + 1) % this.drawing.frames.length;
        } else {
          this.frameIndex = 0;
        }
      });
    }, fpsInterval);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.renderFrame();
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }
}
