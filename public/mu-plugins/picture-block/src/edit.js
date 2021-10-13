import { __ } from "@wordpress/i18n";
import {
	MediaUpload,
	InspectorControls,
	ColorPalette,
	useBlockProps,
} from "@wordpress/block-editor";
import { IconButton, PanelBody } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { backgroundImage, backgroundColor } = attributes;

	// custom functions
	function onChangeBackgroundColor(newBackgroundColor) {
		setAttributes({ backgroundColor: newBackgroundColor });
	}

	const onSelectImage = (newImage) => {
		setAttributes({
			backgroundImage: newImage.sizes.full.url,
		});
	};

	return [
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title={"Background Image Settings"}>
				<p>
					<strong>Select a Background Image:</strong>
				</p>
				<MediaUpload
					onSelect={onSelectImage}
					type="image"
					value={backgroundImage}
					render={({ open }) => (
						<IconButton
							className="editor-media-placeholder__button is-button is-default is-large"
							icon="upload"
							onClick={open}
						>
							Background Image
						</IconButton>
					)}
				/>
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
			,
		</InspectorControls>,

		<div
			class="pictureframe-container"
			key="editable"
			onChange={onChangeBackgroundColor}
			style={{ background: backgroundColor }}
			{...useBlockProps()}
		></div>,
		<div
			class="image-container"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		></div>,
	];
}
