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
	const { backgroundImage } = attributes;

	// custom functions
	const onSelectImage = (newImage) => {
		setAttributes({
			backgroundImage: newImage.sizes.full.url,
		});
	};

	return [
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
		</PanelBody>,
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
