import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		backgroundImage,
		backgroundColor,
		containerColor,
		heading,
		body,
		info,
	} = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div style={{ background: containerColor }} class="alumni-right-container">
			<div
				style={{ background: backgroundColor }}
				class="alumni-circle"
				{...blockProps}
			>
				<div
					class="alumni-image"
					{...blockProps}
					style={{
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				></div>
			</div>
			<div class="text-container" {...blockProps}>
				<h3>{heading}</h3>
				<RichText.Content
					tagName="h4"
					style={{ color: backgroundColor }}
					value={info}
				/>
				<RichText.Content tagName="p" value={body} />
			</div>
		</div>
	);
}
