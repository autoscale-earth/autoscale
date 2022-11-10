import * as React from 'react';
import { useEffect } from 'react';
import { applyReactStyle } from '../utils/applyReactStyle';
import { useControl } from 'react-map-gl';

import { ControlPosition, MapboxAttributionControl } from '../types';

export type AttributionControlProps = {
    compact: true,
    position: ControlPosition;
};

function AttributionControl(props: AttributionControlProps): null {
    const ctrl = useControl<MapboxAttributionControl>(
        ({mapLib}) => new mapLib.AttributionControl(props),
        {
            position: props.position
        }
    );

    useEffect(() => {
        applyReactStyle(ctrl._container, props.style);
    }, [props.style]);

    return null;
}

export default React.memo(AttributionControl);