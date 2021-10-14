import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="quote-container" {...blockProps}>
			<h2>{title}</h2>
		</div>
	);
}
