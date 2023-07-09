import { Component, ChangeDetectorRef } from '@angular/core';
import { DEFAULT_COLORS, Drawing, Tool } from './drawing';

@Component({
  selector: 'create-drawing',
  templateUrl: './create-drawing.component.html',
})
export class CreateDrawingComponent {
  readonly COLORS = DEFAULT_COLORS;

  drawing: Drawing = {
    frames: [
      Array(32)
        .fill(0)
        .map(() => Array(32).fill(-1)),
    ],
  };
  currentFrame: number = 0;
  currentTool: Tool = Tool.Pen;
  currentColor: number = 0;

  // Colors
  changeColor(color: number) {
    this.currentColor = color;
  }

  // Tools
  changeTool(tool: number) {
    this.currentTool = tool;
  }

  // Frames
  selectFrame(index: number) {
    this.currentFrame = index;
  }

  addFrame() {
    this.drawing.frames.push(
      Array(32)
        .fill(0)
        .map(() => Array(32).fill(-1))
    );
    this.currentFrame = this.drawing.frames.length - 1;
  }

  duplicateFrame(index: number) {
    this.drawing.frames.splice(
      index + 1,
      0,
      JSON.parse(JSON.stringify(this.drawing.frames[index]))
    );
    this.currentFrame = index + 1;
  }

  deleteFrame(index: number) {
    this.drawing.frames.splice(index, 1);
    if (index === 0 && this.currentFrame === 0) this.currentFrame = 0;
    else if (index <= this.currentFrame) this.currentFrame--;
  }

  updateFrame(frame: number[][]) {
    this.drawing.frames[this.currentFrame] = [...frame];
  }
}
