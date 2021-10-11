import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { heading, body } = attributes;

	// custom functions
	function onChangeHeading(newHeading) {
		setAttributes({ heading: newHeading });
	}

	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}

	return [
		<div class="guten-container">
			<RichText
				key="editable"
				tagName="h3"
				placeholder="Heading..."
				value={heading}
				onChange={onChangeHeading}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				tagName="p"
				placeholder="Content..."
				value={body}
				onChange={onChangeBody}
				{...useBlockProps()}
			/>
		</div>,
	];
}
