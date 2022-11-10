import * as React from 'react';
import "./App.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import Mapping from './components/Map.js'
import { geojson, layerStyle } from './components/map-source';
import { Source, Layer } from 'react-map-gl';

export default function App() {
  return (
    <div>
      <Mapping />
    </div>
  );
}

