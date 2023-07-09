import { NgModule } from '@angular/core';
import { MostRecentComponent } from './most-recent.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: MostRecentComponent }];
@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [MostRecentComponent],
})
export class MainModule {}
