import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;

	// custom functions
	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
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
		</div>,
	];
}
