import { Component, Input } from '@angular/core';

@Component({
  selector: 'drawing-preview',
  templateUrl: './preview.component.html',
})
export class DrawingPreviewComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
