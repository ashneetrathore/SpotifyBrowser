import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ResourceData } from '../../data/resource-data';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [SpotifyService],
    standalone: false
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string = 'artist';
  currentSearchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    // Calls search function in spotifyService and parses response
    this.spotifyService.searchFor(this.searchCategory, this.searchString).then((resources: ResourceData[]) => {
      // Adds currentSearchCategory for the case where you change the category type, but don't hit search yet
      // This makes it so the result isn't changed until search is clicked
      this.currentSearchCategory = this.searchCategory;
      this.resources = resources;
    });
    
  }

}
