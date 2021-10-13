import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { heading, titleColor, backgroundColor } = attributes;

	// custom functions
	function onChangeHeading(newHeading) {
		setAttributes({ heading: newHeading });
	}

	function onChangeFontColor(newFontColor) {
		setAttributes({ titleColor: newFontColor });
	}

	function onChangeBackgroundColor(newBackgroundColor) {
		setAttributes({ backgroundColor: newBackgroundColor });
	}

	return [
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title={"Font Color"}>
				<p>
					<strong>Select font color:</strong>
				</p>
				<ColorPalette
					value={titleColor}
					onChange={onChangeFontColor}
				></ColorPalette>
			</PanelBody>
			,
			<PanelBody title={"Background Color"}>
				<p>
					<strong>Select background color:</strong>
				</p>
				<ColorPalette
					value={backgroundColor}
					onChange={onChangeBackgroundColor}
				></ColorPalette>
			</PanelBody>
		</InspectorControls>,

		<div
			class="circle-container"
			key="editable"
			onChange={onChangeBackgroundColor}
			style={{ background: backgroundColor }}
			{...useBlockProps()}
		>
			<RichText
				key="editable"
				tagName="h3"
				placeholder="Heading..."
				value={heading}
				onChange={onChangeHeading}
				style={{ color: titleColor }}
				{...useBlockProps()}
			/>
		</div>,
	];
}
