import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		title,
		heading_1,
		body_1,
		heading_2,
		body_2,
		heading_3,
		body_3,
		heading_4,
		body_4,
	} = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="ansokan-container" {...blockProps}>
			<h2>{title}</h2>
			<RichText.Content className="heading_1" tagName="h3" value={heading_1} />
			<RichText.Content className="body_1" tagName="p" value={body_1} />
			<RichText.Content className="heading_2" tagName="h3" value={heading_2} />
			<RichText.Content className="body_2" tagName="p" value={body_2} />
			<RichText.Content className="heading_3" tagName="h3" value={heading_3} />
			<RichText.Content className="body_3" tagName="p" value={body_3} />
			<RichText.Content className="heading_4" tagName="h3" value={heading_4} />
			<RichText.Content className="body_4" tagName="p" value={body_4} />
		</div>
	);
}
