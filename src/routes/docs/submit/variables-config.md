# Variables Config

These define how the left sidebar navigation is displayed and what inputs are to be inside the editing panel.

```ts
const theme = {
	// ...
	variables: [
		{
			title: 'Background image',
			icon: 'Image',
			inputs: [] // Available inputs are below.
		}
	]
	// ...
};
```

Available properties:

| Properity   | Type    | Required | Description                                                       |
| :---------- | :------ | :------- | :---------------------------------------------------------------- |
| `title`     | string  | true     | The text displayed in the tooltip on the left sidebar navigation. |
| `icon`      | string  | true     | The icon to be displayed in the left sidebar navigation.          |
| `varGroup`  | string  | false    | The css selector for the input to be placed. Default is `:root`.  |
| `userModal` | boolean | false    | Displays the user modal/profile if the tab is active.             |

# Input Types

The inputs to allow the user to change. These inputs also define your theme file variables.

## Global properties

These properties are available for all inputs.

| Properity  | Type   | Required | Description                                                                         |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------- |
| `variable` | string | true     | Name of your variable. Note: you do not need to prefix the variable name with `--`. |
| `value`    | string |          | Starting value. `value` can be required or not, depends on the input.               |
| `title`    | string | true     | Text to be displayed above/beside the input.                                        |
| `hint`     | string | false    | Displays small text under the title.                                                |
| `comment`  | string | false    | Displays a CSS comment next to the variable in the end result of the theme file.    |

## Colour

The colour picker.

```json
{
	"type": "colour",
	"details": {
		"variable": "main-colour",
		"title": "Main colour",
		"value": "100,0,100",
		"type": "RGB",
		"alpha": false,
		"rule": false,
		"hint": "Colour for mentions, selected channels, selected member, ect..."
	}
}
```

Available properties:

| Properity | Type                | Required | Description                                                                             |
| :-------- | :------------------ | :------- | :-------------------------------------------------------------------------------------- |
| `value`   | string              | true     | Starting value of the colour picker.                                                    |
| `type`    | `HEX`, `RGB`, `HSL` | true     | Output of the colour picker.                                                            |
| `alpha`   | boolean             | false    | Outputs the alpha value of the colour picker. This does not work for HEX values.        |
| `rule`    | boolean             | false    | Outputs the css rule of the give `type`. So if true the output will be `rgb(100,0,100)` |

## Font

The font input.

```json
{
	"type": "font",
	"details": {
		"variable": "font",
		"title": "Custom font",
		"value": "Inter",
		"index": 0 // The next Font input will be 1, next 2, and so on...
	}
}
```

Available properties:

| Properity | Type   | Required | Description                                                                         |
| :-------- | :----- | :------- | :---------------------------------------------------------------------------------- |
| `index`   | number | true     | The index of the font to modify. Each font option's index should be increased by 1. |
| `value`   | string | false    | Starting value of the font input.                                                   |

## Image

The image input/uploader.

```json
{
	"type": "image",
	"details": {
		"variable": "bg-image",
		"title": "Background Image",
		"start": "https://i.imgur.com/Gr8JJAv.jpg"
	}
}
```

Available properties:

| Properity | Type   | Required | Description                                                                             |
| :-------- | :----- | :------- | :-------------------------------------------------------------------------------------- |
| `start`   | string | true     | The default value. Will not be displayed in the input.                                  |
| `value`   | string | false    | Setting this will overwrite `start` properity and will display the string in the input. |

## Number

The number input.

```json
{
	"type": "number",
	"details": {
		"variable": "sidebar-width",
		"title": "Sidebar width",
		"value": 270,
		"unit": "px",
		"max": 350
	}
}
```

Available properties:

| Properity | Type   | Required | Description                         |
| :-------- | :----- | :------- | :---------------------------------- |
| `value`   | number | true     | Starting value.                     |
| `unit`    | string | false    | Unit to be appended to the `value`. |
| `min`     | number | false    | Minimum of the `value`.             |
| `max`     | number | false    | Maximum of the `value`.             |

## Select

The select dropdown.

```json
{
	"type": "select",
	"details": {
		"variable": "show-chat-buttons",
		"title": "Show chat buttons",
		"value": "block",
		"options": [
			{ "label": "True", "value": "block" },
			{ "label": "False", "value": "none" }
		],
		"customValue": false
	}
}
```

Available properties:

| Properity     | Type    | Required | Description                                                      |
| :------------ | :------ | :------- | :--------------------------------------------------------------- |
| `value`       | string  | true     | Starting value. Will auto select `options` with the given value. |
| `options`     | array   | true     | Options available for the user to pick through.                  |
| `customValue` | boolean | false    | Allows the user to type value they wish. Default = `true`        |

## Slider

The slider input.

```json
{
	"type": "slider",
	"details": {
		"variable": "background-image-blur",
		"title": "Background Blur",
		"value": 5,
		"step": 0.25,
		"max": 100,
		"unit": "px"
	}
}
```

Available properties:

| Properity | Type   | Required | Description                                     |
| :-------- | :----- | :------- | :---------------------------------------------- |
| `value`   | number | true     | Starting value.                                 |
| `max`     | number | true     | Maximum of the `value`.                         |
| `min`     | number | false    | Minimum of the `value`. Default = `0`           |
| `step`    | number | false    | Stepping interval between values. Default = `1` |
| `unit`    | string | false    | Unit to be appended to the `value`.             |

> Note: users are able to switch from the slider to a number input box to allow for precise values.

## Example

This example is taken from Tranquil by Monster.

```js
const theme = {
	// ...
	variables: [
		{
			title: 'Colours',
			icon: 'Colour',
			inputs: [
				{
					type: 'colour',
					details: {
						variable: 'main-color',
						value: '#8d2036',
						type: 'HEX',
						title: 'Main colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'hover-color',
						value: '#6f182a',
						type: 'HEX',
						title: 'Hover colour',
						hint: 'Usually darker than Main colour'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'home-color',
						value: '#eee',
						type: 'HEX',
						title: 'Home button colour'
					}
				}
			]
		},
		{
			title: 'Others',
			icon: 'Gear',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'roundness',
						value: 50,
						unit: 'px',
						max: 50,
						step: 1,
						title: 'Roundness'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'shadow',
						value: 'rgba(0,0,0,.4)',
						alpha: true,
						rule: true,
						type: 'RGB',
						title: 'Shadow colour'
					}
				}
			]
		}
	]
	// ...
};
```

You can view a better example by looking at the [ClearVision Config](https://github.com/Gibbu/BDThemeEditor/blob/main/src/data/themes/clearvision.ts#L20-L708).
