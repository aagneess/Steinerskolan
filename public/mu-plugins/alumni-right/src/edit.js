import { __ } from "@wordpress/i18n";
import {
	MediaUpload,
	InspectorControls,
	ColorPalette,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { IconButton, PanelBody } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		backgroundImage,
		backgroundColor,
		containerColor,
		heading,
		info,
		body,
	} = attributes;

	// custom container/text functions
	function onChangeContainerColor(newContainerColor) {
		setAttributes({ containerColor: newContainerColor });
	}

	function onChangeHeading(newHeading) {
		setAttributes({ heading: newHeading });
	}

	function onChangeInfo(newInfo) {
		setAttributes({ info: newInfo });
	}

	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}

	// custom image functions
	function onChangeBackgroundColor(newBackgroundColor) {
		setAttributes({ backgroundColor: newBackgroundColor });
	}

	const onSelectImage = (newImage) => {
		setAttributes({
			backgroundImage: newImage.sizes.full.url,
		});
	};

	return [
		// COLOR SETTINGS
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

			<PanelBody title={"Frame Color"}>
				<p>
					<strong>Select frame color:</strong>
				</p>
				<ColorPalette
					value={backgroundColor}
					onChange={onChangeBackgroundColor}
				></ColorPalette>
			</PanelBody>

			<PanelBody title={"Container Color"}>
				<p>
					<strong>Select container color:</strong>
				</p>
				<ColorPalette
					value={containerColor}
					onChange={onChangeContainerColor}
				></ColorPalette>
			</PanelBody>
		</InspectorControls>,

		// END OF COLOR SETTINGS
		<div class="alumni-right-container">
			<div
				class="circle-container"
				key="editable"
				onChange={onChangeBackgroundColor}
				style={{ background: backgroundColor }}
				{...useBlockProps()}
			></div>

			<div
				class="image-container"
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			></div>

			<div class="text-container">
				<RichText
					key="editable"
					tagName="h3"
					placeholder="Heading..."
					value={heading}
					onChange={onChangeHeading}
					{...useBlockProps()}
				/>
				<RichText
					key="editable"
					tagName="h4"
					placeholder="Info..."
					value={info}
					onChange={onChangeInfo}
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
			</div>
		</div>,
	];
}
