import * as React from 'react';
import Map from 'react-map-gl';
import '../App.css';
import "mapbox-gl/dist/mapbox-gl.css"

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamFsbW9yYWRpZSIsImEiOiJjbDgxNzNyeDcwZDF6M3dxamkweGFyejNnIn0.WonZcXj3f0et1YSdGhrRGA';

export default function Mapping() {
    // set initial state
    const [viewState, setViewState] = React.useState({
      longitude: -119.08780,
      latitude: 37.02098,
      zoom: 5.9,
      pitch: 60,
      bearing: 0
    });
  
    //resize Map when window resizes 
    // eslint-disable-next-line no-unused-vars
    const [windowSize, setWindowSize] = React.useState(getWindowSize());
  
    React.useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
  
    return <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{position: 'absolute', 
                width: '100%', 
                height: '100%',
                margin: 0,
                padding: 0}}
        cursor={'crosshair'}
        attributionControl={true}
    />;
  }