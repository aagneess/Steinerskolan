import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { date, event, dateColor, eventColor } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div class="event-block">
			<div
				style={{ background: dateColor }}
				class="date-container"
				{...blockProps}
			>
				<RichText.Content tagName="h4" value={date} />
			</div>

			<div
				style={{ background: eventColor }}
				class="event-container"
				{...blockProps}
			>
				<RichText.Content tagName="p" value={event} />
			</div>
		</div>
	);
}
