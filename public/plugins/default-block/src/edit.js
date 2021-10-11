import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, body } = attributes;

	// custom functions
	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}

	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}

	return [
		<div class="guten-container">
			<RichText
				key="editable"
				tagName="h2"
				placeholder="Heading..."
				value={title}
				onChange={onChangeTitle}
			/>
			<RichText
				key="editable"
				tagName="p"
				placeholder="Content..."
				value={body}
				onChange={onChangeBody}
			/>
		</div>,
	];
}
