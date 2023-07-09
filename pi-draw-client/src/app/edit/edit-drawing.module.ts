import { NgModule } from '@angular/core';
import { CreateDrawingComponent } from './create-drawing.component';
import { EditorComponent } from './editor.component';
import { FrameListComponent } from './frame-list.component';
import { UpdateDrawingComponent } from './update-drawing.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DrawingCanvas } from './drawing-canvas.component';
import { Frame } from './frame.component';

const routes: Routes = [
  { path: 'create', component: CreateDrawingComponent },
  { path: 'update/:id', component: UpdateDrawingComponent },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    CreateDrawingComponent,
    EditorComponent,
    FrameListComponent,
    UpdateDrawingComponent,
    DrawingCanvas,
    Frame,
  ],
  exports: [RouterModule],
})
export class EditModule {}
