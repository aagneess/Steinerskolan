import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/event-block", {
	attributes: {
		date: {
			type: "string",
			source: "html",
			selector: "h4",
		},
		event: {
			type: "string",
			source: "html",
			selector: "p",
		},
		dateColor: {
			type: "string",
			default: "white",
		},
		eventColor: {
			type: "string",
			default: "white",
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
