export function hexToRGB(hexColor: string): string {
	// Remove the "#" if it's present
	hexColor = hexColor.replace(/^#/, "");

	// Parse the red, green, and blue components
	const red = parseInt(hexColor.substring(0, 2), 16);
	const green = parseInt(hexColor.substring(2, 4), 16);
	const blue = parseInt(hexColor.substring(4, 6), 16);

	// Return the RGB value
	return `rgb(${red}, ${green}, ${blue})`;
}
