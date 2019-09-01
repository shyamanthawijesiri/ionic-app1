import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.page.html',
  styleUrls: ['./youtube-video.page.scss'],
})
export class YoutubeVideoPage implements OnInit {
  video_id: any;
  constructor(public sanitizer: DomSanitizer,
    private youtube: YoutubeVideoPlayer
    ) {
      this.video_id;
     }

  ngOnInit() {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoSinglePage');
}
updateVideoUrl(id: string) {
  // Appending an ID to a YouTube URL is safe.
  // Always make sure to construct SafeValue objects as
  // close as possible to the input data, so
  // that it's easier to check if the value is safe.
  let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id + '?enablejsapi=1';
  return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
}

watch_on_youtube( video_id ) {

  //this.youtube.openVideo( video_id);
  this.video_id=video_id;
  
}



}
