import { Utils, App, Gio, Gtk, Hyprland } from "./imports.js";

// Windows
import { Bar } from "./modules/bar/bar.js";
import { Dashboard } from "./modules/dashboard/dashboard.js";

const { execAsync, exec, monitorFile } = Utils;

const scss = `${App.configDir}/style/main.scss`;
const css = `${App.configDir}/style.css`;
const icons = `${App.configDir}/Icons`;

const applyScss = () => {
	// monitor for changes
	monitorFile(
		// directory that contains the scss files
		`${App.configDir}/style`,
	
		Hyprland.messageAsync(`dispatch exec sass ${scss} ${css}`),
		console.log("Scss compiled"),
	
		// main scss file
		App.resetCss(),
		console.log("Reset"),
		App.applyCss(css),
		console.log("Compiled css applied"),
	);
};

//applyScss();


// Main config
App.config({
    style: applyScss(),
	icons: icons,
    windows: [ Bar() ],
})
