import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { backgroundImage, backgroundColor } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="picture-container">
			<div
				style={{ background: backgroundColor }}
				class="circle-container"
				{...blockProps}
			>
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
			</div>
		</div>
	);
}
