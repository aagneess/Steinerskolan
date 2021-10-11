import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, heading, body } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="ansokan-container" {...blockProps}>
			<h2>{title}</h2>
			<RichText.Content tagName="h3" value={heading} />
			<RichText.Content tagName="p" value={body} />
			<RichText.Content tagName="h3" value={heading} />
			<RichText.Content tagName="p" value={body} />
			<RichText.Content tagName="h3" value={heading} />
			<RichText.Content tagName="p" value={body} />
			<RichText.Content tagName="h3" value={heading} />
			<RichText.Content tagName="p" value={body} />
		</div>
	);
}
