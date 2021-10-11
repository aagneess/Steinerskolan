import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { heading, body } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="guten-container" {...blockProps}>
			<h3>{heading}</h3>
			<RichText.Content tagName="p" value={body} />
		</div>
	);
}
