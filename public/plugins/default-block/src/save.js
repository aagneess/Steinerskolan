import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, body } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="guten-container" {...blockProps}>
			<h2>{title}</h2>
			<RichText.Content tagName="p" value={body} />
		</div>
	);
}
