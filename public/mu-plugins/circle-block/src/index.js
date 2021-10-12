import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/circle-block", {
	attributes: {
		heading: {
			type: "string",
			source: "html",
			selector: "h3",
		},
		titleColor: {
			type: "string",
			default: "black",
		},
		backgroundColor: {
			type: "string",
			default: "yellow",
		},
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
