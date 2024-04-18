import { opt, mkOptions } from "./lib/option"
import { distro } from "./lib/variables"
import { icon } from "./lib/utils"
import icons from "./lib/icons"

const options = mkOptions(OPTIONS, {
    autotheme: opt(false),

    bar: {
		flatButtons: opt(false),
        position: opt<"top" | "bottom">("top"),
        workspaces: {
            workspaces: opt(4),
        }},
  layout: {
            start: opt<Array<import("./modules/bar/Bar").BarWidget>>([
                "workspaces",
                "title",
            ]),
            center: opt<Array<import("./modules/bar/Bar").BarWidget>>([
                "media",
            ]),
            end: opt<Array<import("./modules/bar/Bar").BarWidget>>([
                "systray",
                "sysinfo",
                "dashbtn",
            ]),
        },
    overview: {
        scale: opt(9),
        workspaces: opt(4),
        monochromeIcon: opt(false),
    },

    datewin: {
        position: opt<Array<"top" | "bottom" | "left" | "right">>(["top", "right"]),
    },
    
    playwin: {
        position: opt<Array<"top" | "bottom" | "left" | "right">>(["top"]),
    },
    
    dashvol: {
        position: opt<Array<"top" | "bottom" | "left" | "right">>(["top", "right"]),
    },
    
    dashboard: {
        position: opt<Array<"top" | "bottom" | "left" | "right">>(["top", "right"]),
    },
    
    notifications: {
        position: opt<Array<"top" | "bottom" | "left" | "right">>(["top", "right"]),
        width: opt(440),
    },
})

globalThis["options"] = options
export default options
