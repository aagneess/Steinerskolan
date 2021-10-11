import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="title-container" {...blockProps}>
			<h3>{title}</h3>
		</div>
	);
}
