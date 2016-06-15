jQuery Ripples Plugin
=====================

By the powers of WebGL, add a layer of water to your HTML elements which will ripple by cursor interaction! Maybe also by touch, though I haven't tested that.

Important: requires the WebGL extension `OES_texture_float` (and `OES_texture_float_linear` for a better effect). Works only with same-origin images (unless the image has the Access-Control-Allow-Origin header set appropiately).

Click [here](http://sirxemic.github.io/jquery.ripples/) for a demo and to see how to use it.

Options
-------
| Name | Type | Default | Description |
|------|------|---------|-------------|
| dropRadius | float | 20 | The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas. |
| perturbance | float | 0.03 | Basically the amount of refraction caused by a ripple. 0 means there is no refraction. |
| resolution | integer | 256 | The width and height of the WebGL texture to render to. The larger this value, the smoother the rendering and the slower the ripples will propagate. |
| interactive | bool | true | Whether mouse clicks and mouse movement triggers the effect. |
| crossOrigin | string | "" | The crossOrigin attribute to use for the affected image. For more information see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes).

Methods
-------
### drop
Call `.ripples('drop', x, y, radius, strength)` to manually add a drop at the element's relative coordinates (x, y). `radius` controls the drop's size and `strength` the amplitude of the resulting ripple.

### destroy
Call `.ripples('destroy')` to remove the effect from the element.

### hide / show
Call `.ripples('hide')` and `.ripples('show')` to toggle the effect's visibility. Hiding it will also effectively pause the simulation.

### pause / play
Call `.ripples('pause')` and `.ripples('play')` to toggle the simulation's state.

### set
Call `.ripples('set', name, value)` to update properties of the effect. The properties that can be updated are:
- `dropRadius`
- `perturbance`
- `interactive`
