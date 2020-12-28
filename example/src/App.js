import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import DrawRectangle, {
	DrawStyles,
} from "mapbox-gl-draw-rectangle-restrict-area";
import DrawControl from '../../lib';

const Map = ReactMapboxGl({
	accessToken:
		'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
});

export function App() {
	const onDrawCreate = ({ features }) => {
		console.log('onDrawCreate', features);
	};

	const onDrawUpdate = ({ features }) => {
		console.log('onDrawUpdate', features);
	};

	return (
		<div>
			<h2>Welcome to react-mapbox-draw-rectangle</h2>
			<Map
				style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
				containerStyle={{
					height: '600px',
					width: '100vw'
				}}
			>
				<DrawControl
					userProperties={true}
					position={'top-right'}
					//controls={{ polygon: true, trash: true }}
					displayControlsDefault={false}
					modes={{
						draw_rectangle: DrawRectangle,
					}}
					modesConfig={{
						draw_rectangle: {
							areaLimit: 50 * 1_000_000, // 50+ km2, optional
							escapeKeyStopsDrawing: true, // default true
							allowCreateExceeded: false, // default false
							exceedCallsOnEachMove: false, // default false - calls exceedCallback on each mouse move
							//exceedCallback: (area) => console.log(`area exceeded! ${area.toFixed(2)}`), // optional
							//areaChangedCallback: onAreaChanged,
							title: "Rectangle tool (p)"
						}
					}}
					styles={DrawStyles}
					onDrawCreate={onDrawCreate}
				></DrawControl>
			</Map>
		</div>
	);
}
