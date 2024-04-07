import { Widget, Gtk} from "../../imports.js";
import PopupWindow from "../../utils/popupWindow.js";
const { Box } = Widget;
const { execAsync } = Utils;

export const Calendar = () =>  PopupWindow({
    name: "Calendar",
    anchor: ["top","bottom", "right"],
    margins: [12, 12, 15],
    transition: "slide_down",
    transitionDuration: 150,
    vpack: 'end',
    child: 
        Box({
			className: "calendarWidget",
            vertical:true,
            children: [
                Widget.subclass(Gtk.Calendar)({
					showDayNames: true,
					showHeading: true,
				})
            ]
        })
});
