import { NgClass, NgStyle } from "@angular/common";
import { Component } from "@angular/core";

const BLUE = "#2196f3";
const GREEN = "#04aa6d";
const RED = "#f44336";
const WHITE = "#FFF";
const BLACK = "#000";
const YELLOW = "#ff9800";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [NgClass, NgStyle],
	templateUrl: "app.component.html",
	styleUrl: "app.component.scss",
})
export class AppComponent {
	/**	The alert to be shown */
	alert: {
		message: string;
		type: "primary" | "success" | "danger" | "unknown";
		width: number;
		backgroundColor: string;
		color: string;
	} = {
		message: "default message",
		type: "primary",
		width: 100,
		backgroundColor: BLUE,
		color: WHITE,
	};
	/** Additional styles to be used with NgStyle directive */
	styles: {
		backgroundColor: string;
		color: string;
		fontSize: string;
	} = {
		backgroundColor: YELLOW,
		color: WHITE,
		fontSize: "100px",
	};
	/** A default text to be used in an alert */
	text = "Hello Styles";
	/** Retrieve dynamically alert classes, based on the alert type */
	getClass(): "my-alert danger" | "my-alert success" | "my-alert primary" {
		switch (this.alert.type) {
			case "danger":
				return "my-alert danger";
			case "success":
				return "my-alert success";
			default:
			case "primary":
				return "my-alert primary";
		}
	}
	/**
	 * Change the alert style
	 * @param type the flavour of the alert, based on the priority/severity.
	 */
	onChangeAlertType(type: "danger" | "success" | "primary"): void {
		let alert = null;
		switch (type) {
			case "primary": {
				alert = {
					message: "Hello!",
					type,
					width: 100,
					backgroundColor: BLUE,
					color: WHITE,
				};
				break;
			}
			case "success": {
				alert = {
					message: "Oh, yeah!",
					type,
					width: 200,
					backgroundColor: GREEN,
					color: BLACK,
				};

				break;
			}
			case "danger": {
				alert = {
					message: "Oh, no!",
					type,
					width: 150,
					backgroundColor: RED,
					color: WHITE,
				};
				break;
			}
			default: {
				alert = {
					message: "Unknown status",
					type,
					width: 200,
					backgroundColor: "violet",
					color: WHITE,
				};
				break;
			}
		}
		this.alert = alert;
	}

	onClickStylesButton(type: "danger" | "success" | "primary"): void {
		let styles = null;
		switch (type) {
			case "primary": {
				styles = {
					backgroundColor: BLUE,
					color: WHITE,
					fontSize: "10px",
				};
				break;
			}
			case "success": {
				styles = {
					backgroundColor: GREEN,
					color: BLACK,
					fontSize: "10px",
				};

				break;
			}
			case "danger": {
				styles = {
					backgroundColor: RED,
					color: BLACK,
					fontSize: "10px",
				};

				break;
			}
			default: {
				styles = {
					backgroundColor: YELLOW,
					color: WHITE,
					fontSize: "100px",
				};
				break;
			}
		}
		this.styles = styles;
	}
}
