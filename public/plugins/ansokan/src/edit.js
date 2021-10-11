import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, heading, body } = attributes;

	// custom functions
	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}

	function onChangeHeading(newHeading) {
		setAttributes({ heading: newHeading });
	}

	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}

	return [
		<div class="ansokan-container">
			<RichText
				key="editable"
				tagName="h2"
				placeholder="Title..."
				value={title}
				onChange={onChangeTitle}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				tagName="h3"
				placeholder="Subheading..."
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
			<RichText
				key="editable"
				tagName="h3"
				placeholder="Subheading..."
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
			<RichText
				key="editable"
				tagName="h3"
				placeholder="Subheading..."
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
			<RichText
				key="editable"
				tagName="h3"
				placeholder="Subheading..."
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
