import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BaseDrawingCanvas } from '../base-drawing-canvas';
import { Drawing } from './drawing';

@Component({
  selector: 'drawing-canvas',
  templateUrl: './drawing-canvas.component.html',
})
export class DrawingCanvas extends BaseDrawingCanvas implements OnChanges {
  @Output() updateFrameEvent = new EventEmitter<Drawing['frames'][0]>();

  @Input() currentColor = 0;
  @Input() currentTool = 1;
  isDrawing = false;
  isErasing = false;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.canvas.nativeElement.addEventListener('mousedown', () => {
      if (this.currentTool === 1) {
        this.isDrawing = true;
      } else {
        this.isErasing = true;
      }
    });

    this.canvas.nativeElement.addEventListener('mouseup', () => {
      if (this.currentTool === 1) {
        this.isDrawing = false;
      } else {
        this.isErasing = false;
      }
    });

    this.canvas.nativeElement.addEventListener('mouseleave', () => {
      if (this.currentTool === 1) {
        this.isDrawing = false;
      } else {
        this.isErasing = false;
      }
    });

    this.canvas.nativeElement.addEventListener(
      'mousemove',
      (event: MouseEvent) => {
        if (this.currentTool === 1 && this.isDrawing) {
          this.draw(event, this.currentColor);
        } else if (this.currentTool === 2 && this.isErasing) {
          this.draw(event, -1);
        }
      }
    );

    this.canvas.nativeElement.addEventListener('click', (event: MouseEvent) => {
      console.log(this.currentTool);
      if (this.currentTool === 1) {
        this.draw(event, this.currentColor);
      } else {
        this.draw(event, -1);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.renderFrame();
  }

  draw(event: MouseEvent, color: number) {
    const rect = this.canvas.nativeElement.getBoundingClientRect();

    const clientWidth = this.canvas.nativeElement.clientWidth;
    const clientHeight = this.canvas.nativeElement.clientHeight;

    const pixelX = Math.floor(
      ((event.clientX - rect.left) / clientWidth) * this.PIXEL_SIZE
    );
    const pixelY = Math.floor(
      ((event.clientY - rect.top) / clientHeight) * this.PIXEL_SIZE
    );

    if (
      pixelX >= 0 &&
      pixelX < this.width &&
      pixelY >= 0 &&
      pixelY < this.height
    ) {
      this.frame[pixelY][pixelX] = color;

      this.updateFrameEvent.emit(this.frame);

      this.renderFrame();
    }
  }
}
