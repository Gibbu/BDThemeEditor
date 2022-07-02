import type { ITheme } from "$types/theme";
import TheCommieAxolotl from "$data/devs/thecommieaxolotl";

const theme: ITheme = {
    name: "MaterialDesign",
    previewUrl: "https://thecommieaxolotl.github.io/BetterDiscord-Stuff/MaterialDesign/MaterialDesign.theme.css",
    thumbnail: "https://raw.githubusercontent.com/TheCommieAxolotl/BetterDiscord-Stuff/main/MaterialDesign/assets/md.png",
    developer: TheCommieAxolotl,
    meta: {
        name: "MaterialDesign",
        version: "0.9.9",
        author: "TheCommieAxolotl#0001",
        authorId: "538487970408300544",
        description: "A clean theme inspired by Google's Material Design Guidelines.",
        source: "https://github.com/TheCommieAxolotl/BetterDiscord-Stuff/tree/main/MaterialDesign",
        website: "https://thecommieaxolotl.github.io/BetterDiscord-Stuff/",
        invite: "g2KnUw7u7N",
        donate: "https://github.com/sponsors/TheCommieAxolotl/",
    },
    imports: [
        "https://discord-custom-covers.github.io/usrbg/dist/usrbg.css",
        "https://thecommieaxolotl.github.io/BetterDiscord-Stuff/Imports/UserBadges.css",
        "https://maendisease.github.io/BetterDiscordStuff/css/bettterInvites.css",
        "https://thecommieaxolotl.github.io/BetterDiscord-Stuff/MaterialDesign/Clients/betterdiscord.css",
    ],
    fonts: [
        "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        "https://fonts.googleapis.com/css2?family=Source Code Pro:wght@550&display=swap",
    ],
    varGroups: [":root", ".theme-dark", ".theme-light"],
    variables: [
        {
            title: "Colours (Dark Mode)",
            icon: "Colour",
            inputs: [
                {
                    type: "slider",
                    varGroup: ".theme-dark",
                    details: {
                        variable: "skin-accent-h",
                        max: 360,
                        min: 0,
                        value: 264,
                        title: "Accent Hue",
                        hint: "The hue of the accent color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-dark",
                    details: {
                        variable: "skin-accent-s",
                        max: 100,
                        min: 0,
                        unit: "%",
                        value: 84,
                        title: "Accent Saturation",
                        hint: "The saturation of the accent color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-dark",
                    details: {
                        variable: "skin-accent-l",
                        max: 100,
                        min: 0,
                        value: 100,
                        title: "Accent Lightness",
                        hint: "The lightness of the accent color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-dark",
                    details: {
                        variable: "skin-accent-a",
                        max: 100,
                        min: 0,
                        value: 100,
                        title: "Accent Alpha",
                        hint: "The opacity of the accent color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-dark",
                    details: {
                        variable: "skin-background-h",
                        max: 360,
                        min: 0,
                        value: 0,
                        title: "Background Hue",
                        hint: "The hue of the background color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-dark",
                    details: {
                        variable: "skin-background-s",
                        max: 100,
                        min: 0,
                        unit: "%",
                        value: 0,
                        title: "Background Saturation",
                        hint: "The saturation of the background color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-dark",
                    details: {
                        variable: "skin-background-l",
                        max: 100,
                        min: 0,
                        value: 100,
                        title: "Background Lightness",
                        hint: "The lightness of the background color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-dark",
                    details: {
                        variable: "skin-background-a",
                        max: 100,
                        min: 0,
                        value: 100,
                        title: "Background Alpha",
                        hint: "The opacity of the background color.",
                    },
                },
                {
                    type: "colour",
                    varGroup: ".theme-dark",
                    details: {
                        type: "HSL",
                        title: "Switch Checked Background",
                        variable: "switch-checked-background",
                        value: "hsl(101, calc(var(--saturation-factor) * 54%), 27%)",
                    },
                },
                {
                    type: "colour",
                    varGroup: ".theme-dark",
                    details: {
                        title: "Switch Unchecked Background",
                        type: "HEX",
                        variable: "switch-unchecked-background",
                        value: "#74796e33",
                    },
                },
                {
                    type: "colour",
                    varGroup: ".theme-dark",
                    details: {
                        title: "Switch Unchecked Color",
                        type: "HEX",
                        variable: "switch-unchecked-color",
                        value: "#74796e",
                    },
                },
            ],
        },
        {
            title: "Colours (Light Mode)",
            icon: "Colour",
            inputs: [
                {
                    type: "slider",
                    varGroup: ".theme-light",
                    details: {
                        variable: "skin-accent-h",
                        max: 360,
                        min: 0,
                        value: 264,
                        title: "Accent Hue",
                        hint: "The hue of the accent color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-light",
                    details: {
                        variable: "skin-accent-s",
                        max: 100,
                        min: 0,
                        unit: "%",
                        value: 84,
                        title: "Accent Saturation",
                        hint: "The saturation of the accent color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-light",
                    details: {
                        variable: "skin-accent-l",
                        max: 100,
                        min: 0,
                        value: 100,
                        title: "Accent Lightness",
                        hint: "The lightness of the accent color.",
                    },
                },
                {
                    type: "slider",
                    varGroup: ".theme-light",
                    details: {
                        variable: "skin-accent-a",
                        max: 100,
                        min: 0,
                        value: 100,
                        title: "Accent Alpha",
                        hint: "The opacity of the accent color.",
                    },
                },
                {
                    type: "colour",
                    varGroup: ".theme-light",
                    details: {
                        type: "HSL",
                        title: "Switch Checked Background",
                        variable: "switch-checked-background",
                        value: "hsl(101, calc(var(--saturation-factor) * 54%), 27%)",
                    },
                },
                {
                    type: "colour",
                    varGroup: ".theme-light",
                    details: {
                        title: "Switch Unchecked Background",
                        type: "HEX",
                        variable: "switch-unchecked-background",
                        value: "#74796e33",
                    },
                },
                {
                    type: "colour",
                    varGroup: ".theme-light",
                    details: {
                        title: "Switch Unchecked Color",
                        type: "HEX",
                        variable: "switch-unchecked-color",
                        value: "#74796e",
                    },
                },
            ],
        },
        {
            title: "Fonts",
            icon: "Font",
            inputs: [
                {
                    type: "font",
                    varGroup: ":root",
                    details: {
                        variable: "font-primary",
                        value: "Roboto",
                        title: "Font",
                        index: 0,
                    },
                },
                {
                    type: "font",
                    varGroup: ":root",
                    details: {
                        variable: "font-code",
                        value: "Source Code Pro",
                        title: "Code Font",
                        index: 1,
                    },
                },
            ],
        },
        {
            title: "Floating Backgrounds",
            icon: "Border",
            inputs: [
                {
                    type: "slider",
                    details: {
                        variable: "floating-background-opacity",
                        max: 100,
                        min: 0,
                        value: 100,
                        title: "Opacity",
                        hint: "The opacity of floating backgrounds.",
                    },
                },
                {
                    type: "slider",
                    details: {
                        variable: "floating-background-blur",
                        max: 40,
                        min: 0,
                        unit: "px",
                        value: 0,
                        title: "Blur",
                        hint: "The blur of floating backgrounds.",
                    },
                },
            ],
        },
    ],
    hiddenVars: [
        {
            variable: "version",
            value: '"0.9.9"',
            varGroup: ":root",
        },
        {
            variable: "version0_9_9",
            value: "none",
            varGroup: ":root",
        },
        {
            variable: "01dpShadow",
            value: "0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)",
            varGroup: ":root",
        },
        {
            variable: "02dpShadow",
            value: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
            varGroup: ":root",
        },
        {
            variable: "03dpShadow",
            value: "0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12)",
            varGroup: ":root",
        },
        {
            variable: "04dpShadow",
            value: "0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)",
            varGroup: ":root",
        },
        {
            variable: "06dpShadow",
            value: "0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)",
            varGroup: ":root",
        },
        {
            variable: "08dpShadow",
            value: "0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)",
            varGroup: ":root",
        },
        {
            variable: "12dpShadow",
            value: "0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)",
            varGroup: ":root",
        },
        {
            variable: "16dpShadow",
            value: "0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12)",
            varGroup: ":root",
        },
        {
            variable: "24dpShadow",
            value: "0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)",
            varGroup: ":root",
        },
        {
            variable: "skin-name",
            value: '"Default"',
            varGroup: ".theme-dark",
        },
        {
            variable: "skin-author",
            value: '"TheCommieAxolotl"',
            varGroup: ".theme-dark",
        },
        {
            variable: "skin-name",
            value: '"Default Light"',
            varGroup: ".theme-light",
        },
        {
            variable: "skin-author",
            value: '"TheCommieAxolotl"',
            varGroup: ".theme-light",
        },
        {
            variable: "00dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.07% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },

        {
            variable: "01dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.11% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "02dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.13% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "03dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.14% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "04dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.15% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "06dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.17% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "08dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.18% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "12dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.19% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "16dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.2% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "24dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.22% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "26dp",
            value: "hsla(var(--skin-background-h, 0), calc(var(--saturation-factor, 1) * var(--skin-background-s, 0%)), calc(0.27% * var(--skin-background-l, 0)), calc(1% * var(--skin-background-a, 100)))",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-primary",
            value: "var(--02dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-secondary",
            value: "var(--01dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-mobile-secondary",
            value: "var(--01dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-accent",
            value: "var(--12dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-tertiary",
            value: "var(--00dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-secondary-alt",
            value: "var(--06dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "channeltextarea-background",
            value: "var(--24dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-floating",
            value: "var(--24dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-modifier-selected",
            value: "var(--06dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-modifier-hover",
            value: "var(--02dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-modifier-active",
            value: "var(--04dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-mentioned",
            value: "transparent",
            varGroup: ".theme-dark",
        },
        {
            variable: "background-mentioned-hover",
            value: "#e7c21f04",
            varGroup: ".theme-dark",
        },
        {
            variable: "info-warning-foreground",
            value: "hsl(54, calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), 75%)",
            varGroup: ".theme-dark",
        },
        {
            variable: "scrollbar-thin-thumb",
            value: "var(--12dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "scrollbar-thin-track",
            value: "transparent",
            varGroup: ".theme-dark",
        },
        {
            variable: "scrollbar-auto-thumb",
            value: "var(--12dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "scrollbar-auto-track",
            value: "var(--04dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "input-background",
            value: "var(--08dp)",
            varGroup: ".theme-dark",
        },
        {
            variable: "switch-checked-background",
            value: "hsl(101, calc(var(--saturation-factor) * 54%), 27%)",
            varGroup: ".theme-dark",
        },
        {
            variable: "switch-unchecked-background",
            value: "#74796e33",
            varGroup: ".theme-dark",
        },
        {
            variable: "switch-unchecked-color",
            value: "#74796e",
            varGroup: ".theme-dark",
        },
        {
            variable: "brand-experiment",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-100",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.98% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-130",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.96.1% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-160",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.94.2% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-200",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.92.3% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-230",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.90.3% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-260",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.88.4% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-300",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.86.5% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-330",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.84.6% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-360",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.82.7% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-400",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.80.8% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-430",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.78.8% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-460",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.76.9% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-500",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-530",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.69% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-560",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.63% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-600",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.57% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-630",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.51% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-660",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.45% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-700",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.39% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-730",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.33% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-760",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.27% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-800",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.21% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-830",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.15% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-860",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.9% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-900",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.3% * var(--skin-accent-l, 100)), calc(1% * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-05a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0005 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-10a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.001 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-15a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0015 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-20a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.002 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-25a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0025 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-30a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.003 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-35a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0035 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-40a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.004 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-45a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0045 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-50a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.005 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-55a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0055 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-60a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.006 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-65a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0065 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-70a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.007 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-75a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0075 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-80a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.008 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-85a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0085 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-90a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.009 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
        {
            variable: "brand-experiment-95a",
            value: "hsla(var(--skin-accent-h, 264), calc(var(--saturation-factor, 1) * var(--skin-accent-s, 84%)), calc(00.75% * var(--skin-accent-l, 100)), calc(0.0095 * var(--skin-accent-a, 100)))",
            varGroup: ":root",
        },
    ],
};

export default theme;
