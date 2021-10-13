import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/alumni-left", {
	attributes: {
		backgroundImage: {
			type: "string",
			default: null,
		},
		backgroundColor: {
			type: "string",
			default: "white",
		},
		containerColor: {
			type: "string",
			default: "white",
		},
		heading: {
			type: "string",
			source: "html",
			selector: "h3",
		},
		info: {
			type: "string",
			source: "html",
			selector: "h4",
		},
		body: {
			type: "string",
			source: "html",
			selector: "p",
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
