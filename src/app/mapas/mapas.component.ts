import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css'],
})
export class MapasComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapboxkey;
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.05573, 4.661585],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true,
    });
  }
}
