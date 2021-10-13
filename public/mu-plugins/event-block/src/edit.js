import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { date, event, dateColor, eventColor } = attributes;

	// custom functions
	function onChangeDate(newDate) {
		setAttributes({ date: newDate });
	}

	function onChangeEvent(newEvent) {
		setAttributes({ event: newEvent });
	}

	function onChangeDateColor(newDateColor) {
		setAttributes({ dateColor: newDateColor });
	}

	function onChangeEventColor(newEventColor) {
		setAttributes({ eventColor: newEventColor });
	}

	return [
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title={"Left Color"}>
				<p>
					<strong>Select color for the date:</strong>
				</p>
				<ColorPalette
					value={dateColor}
					onChange={onChangeDateColor}
				></ColorPalette>
			</PanelBody>
			,
			<PanelBody title={"Right Color"}>
				<p>
					<strong>Select color for the event:</strong>
				</p>
				<ColorPalette
					value={eventColor}
					onChange={onChangeEventColor}
				></ColorPalette>
			</PanelBody>
		</InspectorControls>,
		<div class="event-block">
			<div
				class="date-container"
				key="editable"
				onChange={onChangeDateColor}
				style={{ background: dateColor }}
				{...useBlockProps()}
			>
				<RichText
					key="editable"
					tagName="h4"
					placeholder="date..."
					value={date}
					onChange={onChangeDate}
					{...useBlockProps()}
				/>
			</div>
			<div
				class="event-container"
				key="editable"
				onChange={onChangeEventColor}
				style={{ background: eventColor }}
				{...useBlockProps()}
			>
				<RichText
					key="editable"
					tagName="p"
					placeholder="Time and event..."
					value={event}
					onChange={onChangeEvent}
					{...useBlockProps()}
				/>
			</div>
		</div>,
	];
}
