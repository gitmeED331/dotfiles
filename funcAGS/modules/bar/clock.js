import { Widget, Utils } from "../../imports.js";
const { execAsync } = Utils;
import { Calendar } from "./calendar.js";

App.config({
    windows: [
		Calendar (),
    ]
});

export const Clock = () => Widget.Button({
    className: "clock",
    onClicked: () => App.toggleWindow("Calendar"),
    setup: (self) => {
        self.poll(1000, (self) =>
            execAsync(["date", "+%a %b %d %H:%M"])
                .then((time) => (self.label = time))
                .catch(console.error),
        );
    },
});
