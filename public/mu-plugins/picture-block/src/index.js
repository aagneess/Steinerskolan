import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/picture-block", {
	attributes: {
		backgroundImage: {
			type: "string",
			default: null,
		},
		backgroundColor: {
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
