import { IAlert, IAlertStyle } from "./types";

export const BLUE = "#2196f3";
export const GREEN = "#04aa6d";
export const RED = "#f44336";
export const WHITE = "#fff";
export const BLACK = "#000";
export const YELLOW = "#ff9800";

export const DEFAULT_ALERT: IAlert = {
	message: "default message",
	type: "primary",
	width: 100,
	backgroundColor: BLUE,
	color: WHITE,
};

export const DEFAULT_STYLE: IAlertStyle = {
	backgroundColor: YELLOW,
	color: WHITE,
	fontSize: "100px",
};
