import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		heading_1,
		body_1,
		heading_2,
		body_2,
		heading_3,
		body_3,
		heading_4,
		body_4,
	} = attributes;

	// custom functions
	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}

	function onChangeHeading_1(newHeading_1) {
		setAttributes({ heading_1: newHeading_1 });
	}

	function onChangeBody_1(newBody_1) {
		setAttributes({ body_1: newBody_1 });
	}

	function onChangeHeading_2(newHeading_2) {
		setAttributes({ heading_2: newHeading_2 });
	}

	function onChangeBody_2(newBody_2) {
		setAttributes({ body_2: newBody_2 });
	}

	function onChangeHeading_3(newHeading_3) {
		setAttributes({ heading_3: newHeading_3 });
	}

	function onChangeBody_3(newBody_3) {
		setAttributes({ body_3: newBody_3 });
	}

	function onChangeHeading_4(newHeading_4) {
		setAttributes({ heading_4: newHeading_4 });
	}

	function onChangeBody_4(newBody_4) {
		setAttributes({ body_4: newBody_4 });
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
				className=".heading_1"
				tagName="h3"
				placeholder="Subheading..."
				value={heading_1}
				onChange={onChangeHeading_1}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				className=".body_1"
				tagName="p"
				placeholder="Content..."
				value={body_1}
				onChange={onChangeBody_1}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				className=".heading_2"
				tagName="h3"
				placeholder="Subheading..."
				value={heading_2}
				onChange={onChangeHeading_2}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				className=".body_2"
				tagName="p"
				placeholder="Content..."
				value={body_2}
				onChange={onChangeBody_2}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				className=".heading_3"
				tagName="h3"
				placeholder="Subheading..."
				value={heading_3}
				onChange={onChangeHeading_3}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				className=".body_3"
				tagName="p"
				placeholder="Content..."
				value={body_3}
				onChange={onChangeBody_3}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				className=".heading_4"
				tagName="h3"
				placeholder="Subheading..."
				value={heading_4}
				onChange={onChangeHeading_4}
				{...useBlockProps()}
			/>
			<RichText
				key="editable"
				className=".body_4"
				tagName="p"
				placeholder="Content..."
				value={body_4}
				onChange={onChangeBody_4}
				{...useBlockProps()}
			/>
		</div>,
	];
}
