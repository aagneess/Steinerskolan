import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, body, phone, email } = attributes;

	// custom functions
	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}

	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}

	function onChangePhone(newPhone) {
		setAttributes({ phone: newPhone });
	}

	function onChangeEmail(newEmail) {
		setAttributes({ email: newEmail });
	}

	return [
		<div class="ansokan-container">
			<RichText
				key="editable"
				tagName="h3"
				placeholder="Title..."
				value={title}
				onChange={onChangeTitle}
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
				tagName="h4"
				placeholder="Subheading..."
				value={phone}
				onChange={onChangePhone}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				tagName="h4"
				placeholder="Subheading..."
				value={email}
				onChange={onChangeEmail}
				{...useBlockProps()}
			/>
		</div>,
	];
}
