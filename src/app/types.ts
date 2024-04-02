export interface IAlert {
	message: string;
	type: AlertType;
	width: number;
	backgroundColor: string;
	color: string;
}
export type AlertType = "primary" | "success" | "danger" | "unknown";

export interface IAlertStyle {
	backgroundColor: string;
	color: string;
	fontSize: string;
}
