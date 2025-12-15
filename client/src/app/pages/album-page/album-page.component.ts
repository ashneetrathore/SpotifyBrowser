import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';

@Component({
    selector: 'app-album-page',
    templateUrl: './album-page.component.html',
    styleUrls: ['./album-page.component.css'],
    standalone: false
})
export class AlbumPageComponent implements OnInit {
	albumId:string;
	album:AlbumData;
	tracks:TrackData[];


  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.albumId = this.route.snapshot.paramMap.get('id');
    // Injects spotifyService and uses it to get the album data and the tracks for the album
    this.spotifyService.getAlbum(this.albumId).then((album : AlbumData) => {
      this.album = album;
    });
    this.spotifyService.getTracksForAlbum(this.albumId).then((tracks : TrackData[]) => {
      this.tracks = tracks;
    });

  }

}
