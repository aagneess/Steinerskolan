import { __ } from "@wordpress/i18n";
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, heading, body } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="kontakt-container" {...blockProps}>
			<h3>{title}</h3>
			<RichText.Content tagName="p" value={body} />
			<p>Telefon: {phone}</p>
			<p>Email: {email}</p>
			{/* <RichText.Content tagName="p" value={email} /> */}
		</div>
	);
}
