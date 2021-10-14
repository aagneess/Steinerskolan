import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { heading, titleColor, backgroundColor } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div>
			<div
				style={{ background: backgroundColor }}
				class="circle-block-container"
				{...blockProps}
			>
				<h3 style={{ color: titleColor }}>{heading}</h3>
			</div>
		</div>
	);
}
