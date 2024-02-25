import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TileComponent } from './components/tile/tile.component';
import { InsightsComponent } from './components/insights/insights.component';

import { tilesData } from './data';


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
    // Toggle the selected state of the clicked tile
    this.selectedTile = this.selectedTile === tileNumber ? null : tileNumber;
  }

  tilesData = tilesData;
}
