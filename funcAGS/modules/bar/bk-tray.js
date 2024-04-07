import { Widget, SystemTray, Gtk } from "../../imports.js";

const { Box, Icon, Button, Revealer } = Widget;
const systemtray = await Service.import('systemtray');
const revealerDuration = 100;

const SysTrayItem = item => Widget.Button({
	className: 'systrayitem',
	on_primary_click: (_, event) => item.activate(event),
    on_secondary_click: (_, event) => item.openMenu(event),
    child: Icon({
        hpack: 'center',
        icon: item.icon,
        setup: (self) => self.hook(item, (self) => self.icon = item.icon),
    }),
    setup: (self) => self
        .hook(item, (self) => self.tooltipMarkup = item['tooltip-markup']),
});

export const Tray = (props = {}) => {
	const trayContent = Box({
        className: 'tray',
        setup: (self) => self
            .hook(SystemTray, (self) => {
                self.children = SystemTray.items.map(SysTrayItem);
                self.show_all();
            })
        ,
    });
    const trayRevealer = Widget.Revealer({
        revealChild: true,
        transition: 'slide_left',
        transitionDuration: revealerDuration,
        child: trayContent,
    });
    return Box({
        ...props,
        children: [trayRevealer],
    });
    /*children: SystemTray.bind('items').as(i => i.map(SysTrayItem))*/
};
