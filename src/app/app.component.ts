import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TileComponent } from './components/tile/tile.component';
import { InsightsComponent } from './components/insights/insights.component';

import { tilesData, insightsData } from './data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, ProfileComponent, TileComponent, InsightsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tile_insigths';

  selectedTile: number | null = null;

  toggleTile(tileNumber: number): void {
    // If the clicked tile is already selected, deselect it
    if (this.selectedTile === tileNumber) {
      this.selectedTile = null;
    } else {
      // Else, select the clicked tile
      this.selectedTile = tileNumber;
    }
  }

  tilesData = tilesData;
  
  insightsData = insightsData;

  
}
