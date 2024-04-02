import { NgClass, NgStyle } from "@angular/common";
import { Component } from "@angular/core";
import { BLACK, BLUE, DEFAULT_ALERT, DEFAULT_STYLE, GREEN, RED, WHITE, YELLOW } from "./consts";
import { AlertType, IAlert, IAlertStyle } from "./types";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [NgClass, NgStyle],
	templateUrl: "app.component.html",
	styleUrl: "app.component.scss",
})
export class AppComponent {
	/**	The alert to be shown */
	alert: IAlert = DEFAULT_ALERT;
	/** Additional styles to be used with NgStyle directive */
	styles: IAlertStyle = DEFAULT_STYLE;
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
	onChangeAlertType(type: AlertType): void {
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
	/**
	 * Change the alert style based on type
	 */
	onClickStylesButton(type: AlertType): void {
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
