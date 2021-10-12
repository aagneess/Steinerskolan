import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { backgroundImage } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div
			class="image-container"
			{...blockProps}
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		></div>
	);
}
