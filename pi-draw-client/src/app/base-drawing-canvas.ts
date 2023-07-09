import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DEFAULT_COLORS, Drawing } from './edit/drawing';

@Directive()
export class BaseDrawingCanvas implements AfterViewInit {
  PIXEL_SIZE: number = 32;
  readonly COLORS = DEFAULT_COLORS;

  @Input() frame: Drawing['frames'][0] = [[]];
  @Input() width: number = 32;
  @Input() height: number = 32;

  @ViewChild('drawing', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;

  constructor() {
    this.frame = Array(this.height)
      .fill(0)
      .map(() => Array(this.width).fill(-1));
  }

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext(
      '2d'
    ) as CanvasRenderingContext2D;

    this.canvas.nativeElement.width = this.width * this.PIXEL_SIZE;
    this.canvas.nativeElement.height = this.height * this.PIXEL_SIZE;

    this.renderFrame();
  }

  renderFrame() {
    this.context?.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );

    const pixelSize = [this.PIXEL_SIZE, this.PIXEL_SIZE];

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        const value = this.frame[i][j];
        if (value !== -1) {
          this.context.fillStyle = this.COLORS[value].hexValue;
          this.context.fillRect(
            j * pixelSize[0],
            i * pixelSize[1],
            pixelSize[0],
            pixelSize[1]
          );
        }
      }
    }
  }
}
