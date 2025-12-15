import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	expressBaseUrl:string = 'http://127.0.0.1:8888';

  constructor(private http:HttpClient) { }

  private sendRequestToExpress(endpoint:string):Promise<any> {
    // Uses the injected HTTP Service to make a GET request to the Express endpoint and return the response.
    // Specifically, updates the URI according to the base URL for express and the endpoint.
    var uri:string = this.expressBaseUrl + endpoint;

    // firstValueFrom generates a Promise for whatever is returned first from the GET request.
    return firstValueFrom(this.http.get(uri)).then((response) => {
      return response;
    }, (err) => {
      return err;
    });
  }

  aboutMe():Promise<ProfileData> {
    // Sends a request to express, which returns a promise with some data. Then, parses the data 
    return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category:string, resource:string):Promise<ResourceData[]> {
    // Identifes the search endpoint in the express webserver (routes/index.js) and send the request to express.
    // Depending on the category (artist, track, album), returns an array of that type of data.
    var encodedResource:string = encodeURIComponent(resource);
    var endpoint:string = "/search/" + category + "/" + encodedResource;

    return this.sendRequestToExpress(endpoint).then((data) => {
      if (category === "artist") {
        return data.artists.items.map(item => new ArtistData(item));
      }
      else if (category === "track") {
        return data.tracks.items.map(item => new TrackData(item));
      }
      else if (category === "album") {
        return data.albums.items.map(item => new AlbumData(item));
      }
    });

  }

  getArtist(artistId:string):Promise<ArtistData> {
    // Uses the artist endpoint to make a request to express.
    var encodedId:string = encodeURIComponent(artistId);
    var endpoint:string = "/artist/" + encodedId;

    return this.sendRequestToExpress(endpoint).then((data) => {
      return new ArtistData(data);
    });
  }

  getTopTracksForArtist(artistId:string):Promise<TrackData[]> {
    // Uses the top tracks endpoint to make a request to express.
    var encodedId:string = encodeURIComponent(artistId);
    var endpoint:string = "/artist-top-tracks/" + encodedId;

    return this.sendRequestToExpress(endpoint).then((data) => {
      return data.tracks.map(item => new TrackData(item));
    });
  }

  getAlbumsForArtist(artistId:string):Promise<AlbumData[]> {
    // Uses the albums for an artist endpoint to make a request to express.
    var encodedId:string = encodeURIComponent(artistId);
    var endpoint:string = "/artist-albums/" + encodedId;

    return this.sendRequestToExpress(endpoint).then((data) => {
      return data.items.map(item => new AlbumData(item));
    });
  }

  getAlbum(albumId:string):Promise<AlbumData> {
    // Uses the album endpoint to make a request to express.
    var encodedId:string = encodeURIComponent(albumId);
    var endpoint:string = "/album/" + encodedId;

    return this.sendRequestToExpress(endpoint).then((data) => {
      return new AlbumData(data);
    });
  }

  getTracksForAlbum(albumId:string):Promise<TrackData[]> {
    // Uses the tracks for album endpoint to make a request to express.
    var encodedId:string = encodeURIComponent(albumId);
    var endpoint:string = "/album-tracks/" + encodedId;

    return this.sendRequestToExpress(endpoint).then((data) => {
      return data.items.map(item => new TrackData(item));
    });
  }

  getTrack(trackId:string):Promise<TrackData> {
    // Uses the track endpoint to make a request to express.
    var encodedId:string = encodeURIComponent(trackId);
    var endpoint:string = "/track/" + encodedId;

    return this.sendRequestToExpress(endpoint).then((data) => {
      return new TrackData(data);
    });
  }
}