import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;

	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}

	return (
		<div class="title-container">
			<RichText
				key="editable"
				tagName="h2"
				placeholder="Title..."
				value={title}
				onChange={onChangeTitle}
				{...useBlockProps()}
			/>
		</div>
	);
}
