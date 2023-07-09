import { NgModule } from '@angular/core';
import { DrawingPreviewComponent } from './preview.component';
import { UiSwitchComponent } from './ui-switch.component';
import { CarouselComponent } from './carousel.component';
import { UiButtonComponent } from './ui-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DrawingPreviewComponent,
    UiSwitchComponent,
    CarouselComponent,
    UiButtonComponent,
  ],
  exports: [
    DrawingPreviewComponent,
    UiSwitchComponent,
    CarouselComponent,
    UiButtonComponent,
  ],
})
export class SharedModule {}
