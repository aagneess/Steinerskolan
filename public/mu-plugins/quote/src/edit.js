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
		<div class="quote-container">
			<RichText
				key="editable"
				tagName="h2"
				placeholder="Quote heading..."
				value={title}
				onChange={onChangeTitle}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				tagName="p"
				placeholder="Quote content..."
				value={body}
				onChange={onChangeBody}
				{...useBlockProps()}
			/>
		</div>,
	];
}
