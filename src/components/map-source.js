import * as React from 'react';
import Map, {Source, Layer} from 'react-map-gl';

export const geojson = {
    type: 'FeatureCollection',
    features: [
        {type: 'Feature', geometry: {type: 'Point', coordinates: [-119.08, 37.02]}}
    ]
};

export const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
        'circle-radius': 10,
        'circle-color': '#007cbf'
    }
};