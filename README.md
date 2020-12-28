
# react-mapbox-draw-rectangle

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

```sh
yarn add react-mapbox-draw-rectangle
```

## Demo
- https://codesandbox.io/s/vigorous-robinson-3y74c


## Usage
```
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
```

## References
- https://github.com/mapbox/mapbox-gl-draw/blob/main/docs/MODES.md#available-custom-modes
- https://github.com/mapbox/mapbox-gl-draw
- https://github.com/dev-expert/react-mapbox-draw-rectangle

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
