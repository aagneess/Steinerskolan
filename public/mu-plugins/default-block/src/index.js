import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/default-block", {
	attributes: {
		heading: {
			type: "string",
			source: "html",
			selector: "h3",
		},
		body: {
			type: "string",
			source: "html",
			selector: "p",
		},
	},

	edit: Edit,

	save,
});
