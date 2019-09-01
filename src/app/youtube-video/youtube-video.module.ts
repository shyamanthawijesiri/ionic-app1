import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { YoutubeVideoPage } from './youtube-video.page';

const routes: Routes = [
  {
    path: '',
    component: YoutubeVideoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YoutubeVideoPage]
})
export class YoutubeVideoPageModule {}
