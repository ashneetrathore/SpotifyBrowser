import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';

@Component({
    selector: 'app-artist-page',
    templateUrl: './artist-page.component.html',
    styleUrls: ['./artist-page.component.css'],
    standalone: false
})
export class ArtistPageComponent implements OnInit {
	artistId:string;
	artist:ArtistData;
	topTracks:TrackData[];
	albums:AlbumData[];

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.artistId = this.route.snapshot.paramMap.get('id');
    // Injects the spotifyService and uses it to get the artist data, top tracks for the artist, and the artist's albums
    this.spotifyService.getArtist(this.artistId).then((artist: ArtistData) => {
          this.artist = artist;
    });
    this.spotifyService.getTopTracksForArtist(this.artistId).then((tracks: TrackData[]) => {
      this.topTracks = tracks;
    });
    this.spotifyService.getAlbumsForArtist(this.artistId).then((albums : AlbumData[]) => {
      this.albums = albums;
    });
  }

}