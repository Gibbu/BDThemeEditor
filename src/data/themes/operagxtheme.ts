import type { ITheme } from '$types/theme';
import Hawk from '../devs/hawk';

const theme: ITheme = {
	name: 'OperaGX Theme',
	thumbnail: 'https://camo.githubusercontent.com/6f7125bdcae596d9407a4e38f7827bd32ffbc4fb3fe6a7dfaaa33f2d2b0ed55e/68747470733a2f2f692e696d6775722e636f6d2f767a4b4d31346c2e706e67',
	developer: Hawk,
	meta: {
		name: 'L-Ratio',
		author: 'Hawk#4872',
		version: '1',
		description: 'A highly customizable theme based off of the OperaGX browser.',
		source: 'https://github.com/L-Ratio/OperaGXTheme',
		invite: 'Xn7UUQUHbN'
	},
    preview: ` 
    @import url(https://l-ratio.github.io/OperaGXTheme/release/main.css);
   :root {                                                                                                                                                                                                                                                                                                                             
      --background:                     url(https://i.imgur.com/9wxpbVw.png)  ;
      --background-behind-appmount:     rgb(var(--darker-background-color))   ;
      --background-accent-color-1:      var(--accent-color-1)                 ;
      --accent-color-1:                 222,67,100                            ;
      --accent-color-2:                 222,67,100                            ;                                                
      --dark-background-color:          18, 16, 25                            ;
      --darker-background-color:        8, 5, 14                              ;                                                                                                                           
      --border-brightness: 1;
      --gx-red:                         181,32,63                             ;
      --gx-red-2:                       130,27,49                             ;
      --gx-yellow:                      234, 234, 34                          ;
      --gx-yellow-2:                    255, 255, 68                          ;
      --gx-green:                       0, 212, 81                            ;
      --gx-green-2:                     0, 255, 129                           ;
      
      --fullwhite-font:                 250, 253, 255                         ;
      --normal-font:                    201, 203, 206                         ;
      --normal-hover-font:              238, 239, 240                         ;
      --muted-font:                     114, 118, 125                         ;
      --link-text:                      0, 176, 244                           ;
      --font-in-accent:                 0, 0, 0                               ;
      
      --customFont:                    unset                                  ;
      --codeBlocksCustomFont:          unset                                  ;                                           
      --category-name-transform:        unset                                 ;
      
      --wintitlebar-background-blur:    none                                  ;
      --wintitlebar-transparency:       0.7                                   ;
      --wintitlebar-transparency-color: var(--dark-background-color)          ;
      --wintb-focused-alpha:            1                                     ;
      --wintb-focused-color:            var(--darker-background-color)        ;
      
      --header-background-blur:         none                                  ;
      --header-transparency:            0.5                                  ;
      --header-transparency-color:      var(--dark-background-color)          ;
      
      --serverlist-background-blur:     none                                  ;
      --serverlist-transparency:        0.5                                    ;  
      --serverlist-transparency-color:  var(--dark-background-color)          ;
      
      --channels-background-blur:       none                                  ;
      --channels-transparency:          0.5                                    ; 
      --channels-transparency-color:    var(--dark-background-color)          ;
      
      --chat-background-blur:           none                                  ;
      --chat-transparency:              0.5                                    ; 
      --chat-transparency-color:        var(--dark-background-color)          ;
      
        --memberlist-background-blur:     none                                  ; 
      --memberlist-transparency:        0.5                                    ;
      --memberlist-transparency-color:  var(--dark-background-color)          ;
      
      --st-l-scroller-bg-blur:          none                                  ;
      --st-l-scroller-transparency:     1                                     ;
      --st-l-scroller-color:            var(--dark-background-color)          ;
      --st-r-scroller-bg-blur:          none                                  ;
      --st-r-scroller-transparency:     1                                     ;
      --st-r-scroller-color:            var(--darker-background-color)        ;                                                                                                                                                                                                                                             
       --chatbox-transparency:           1                                     ;                                            
       --chatbox-focused-transparency:   1                                     ;                                                  
       --other-transparency:             1                                     ;                                                       
       --other-highlighted-transparency: 1                                     ;
    }`,
	features: ['background', 'font', 'transparent', 'home'],
	imports: [
		'https://l-ratio.github.io/OperaGXTheme/release/main.css',
	],
    variables: [
		{
			title: 'Main Settings',
			icon: 'Photo',
			description: 'The main background covering most of the app.',
			inputs: [
				{
					type: 'image',
					details: {
						variable: 'background',
						start: 'https://cdn.discordapp.com/attachments/1045691215330422864/1055544062213636196/grayscale.png',
						value: '',
						title: 'Image'
					}
				},
                {
					type: 'colour',
					details: {
						variable: 'background-behind-appmount',
						value: '8, 5, 14',
						type: 'RGB',
                        alpha: true,
						title: 'Background Behind Appmount',
                        hint: `Background incase image gets unloaded, if making a transparent theme set to 0,0,0,0 otherwise to the same as darker background`
					}
				},
                {
					type: 'colour',
					details: {
						variable: 'background-accent-color-1',
						value: '222,67,100 ',
						type: 'RGB',
                        alpha: true,
						title: 'Background Accent Overlay Color',
                        hint: `The default background is grayscaled. Set this to 0,0,0,0 if using a custom image or going transparent. Otherwise sync this with Primary Color`
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'accent-color-1',
						value: '222,67,100',
						type: 'RGB',
						title: 'Primary Colour'
					}
				},
                {
					type: 'colour',
					details: {
						variable: 'accent-color-2',
						value: '222,67,100',
						type: 'RGB',
						title: 'Secondary Colour'
					}
				},
                {
					type: 'slider',
					details: {
						variable: 'border-brightness',
						value: '1',
                        max: 1,
                        step: 1,
						title: 'Border Brightness',
                        hint: `Turns borders off and on`
					}
				},
                {
					type: 'colour',
					details: {
						variable: 'dark-background-color',
						value: '18, 16, 25 ',
						type: 'RGB',
						title: 'Dark Background Colour',
                        hint: `Background color used in some elements, like the chatbox.`
					}
				},
                {
					type: 'colour',
					details: {
						variable: 'darker-background-color',
						value: '8, 5, 14',
						type: 'RGB',
						title: 'Darker Background Colour',
                        hint: `Another background color, this is darker than Dark Background Color`
					}
				},
				
				
			]
		},
		{
			title: 'Background Transparency',
			icon: 'Sun',
			description: 'How dark parts of the background overlay are. 0 meaning fully transparent, 1 meaning full black.',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'wintitlebar-transparency',
						value: 0.7,
						max: 1,
						step: 0.1,
						title: 'Windows Titlebar Transparency'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'header-transparency',
						value: 0.5,
						max: 1,
						step: 0.1,
						title: 'Header Transparency'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'serverlist-transparency',
						value: 0.5,
						max: 1,
						step: 0.1,
						title: 'Serverlist Transparency',
					}
				},
                {
					type: 'slider',
					details: {
						variable: 'channels-transparency',
						value: 0.5,
						max: 1,
						step: 0.1,
						title: 'Channels Transparency',
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'chat-transparency',
						value: 0.5,
						max: 1,
						step: 0.1,
						title: 'Chat Transparency',
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'memberlist-transparency',
						value: 0.5,
						max: 1,
						step: 0.1,
						title: 'Memberlist Transparency',
					}
				}
			]
		},
        {
			title: 'Background Blur',
			icon: 'Sun',
			description: 'How blurry you want the backgrounds of each section to be.',
			inputs: [
				{
					type: 'slider',
					details: {
						variable: 'wintitlebar-background-blur',
                        value: 0,
                        max: 100,
                        step: 5,
                        unit: 'px',
						title: 'Windows Titlebar Blur'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'header-background-blur',
                        value: 0,
                        max: 100,
                        step: 5,
                        unit: 'px',
						title: 'Header Background Blur'
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'serverlist-background-blur',
                        value: 0,
                        max: 100,
                        step: 5,
                        unit: 'px',
						title: 'ServerList Background Blur',
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'channels-background-blur',
                        value: 0,
                        max: 100,
                        step: 5,
                        unit: 'px',
						title: 'Channels Background Blur',
					}
				},
				{
					type: 'slider',
					details: {
						variable: 'chat-background-blur',
                        value: 0,
                        max: 100,
                        step: 5,
                        unit: 'px',
						title: 'Chat Background Blur',
					}
				},
                {
                    type: 'slider',
                    details: {
                        variable: 'memberlist-background-blur',
                        max: 100,
                        step: 5,
                        unit: 'px',
                        value: 0,
                        title: 'Memberlist Background Blur',
                }
            }
			]
		},

		{
			title: 'Custom font',
			icon: 'ChatBubbleBottomCenterText',
			inputs: [
				{
					type: 'font',
					details: {
						variable: 'customFont',
						index: 0,
						value: 'Chakra Petch',
						title: 'Main Font'
					}
				},
                {
					type: 'font',
					details: {
						variable: 'codeBlocksCustomFont',
						index: 0,
						value: 'Chakra Petch',
						title: 'Codeblocks Font'
					}
				},
				{
					type: 'colour',
					details: {
						variable: 'fullwhite-font',
						value: '250, 253, 255',
						type: 'RGB',
						title: 'Full White Font',
						hint: 'This most white font'
					}
				},
                {
					type: 'colour',
					details: {
						variable: 'normal-font',
						value: '201, 203, 206',
						type: 'RGB',
						title: 'Normal Font Color'
					}
				},
                {
					type: 'colour',
					details: {
						variable: 'normal-hover-font',
						value: '238, 239, 240',
						type: 'RGB',
						title: 'Normal Font Hover Color'
					}
				},
                {
					type: 'colour',
					details: {
						variable: 'muted-font',
						value: '114, 118, 125',
						type: 'RGB',
						title: 'Muted Font Color'
					}
				},
                {
					type: 'colour',
					details: {
						variable: 'link-text',
						value: '0, 176, 244',
						type: 'RGB',
						title: 'Link Text Color'
					}
				},
			]
            
		},
	],
    hiddenVars: [
		{
			variable: 'gx-red',
			value: '181,32,63 '
		},
        {
			variable: 'gx-red-2',
			value: '181,32,63 '
		},
        {
			variable: 'gx-yellow',
			value: '234, 234, 34  '
		},
        {
			variable: 'gx-yellow-2',
			value: '255, 255, 68 '
		},
        {
			variable: 'gx-green',
			value: '0, 212, 81 '
		},
        {
			variable: 'gx-green-2',
			value: '0, 255, 129 '
		},
        {
			variable: 'font-in-accent',
			value: '0, 0, 0  '
		},
        {
			variable: 'category-name-transform',
			value: 'unset'
		},
        {
			variable: 'chatbox-transparency',
			value: '1'
		},
        {
			variable: 'chatbox-focused-transparency',
			value: '1'
		},
        {
			variable: 'other-highlighted-transparency',
			value: '1'
		},
        {
			variable: 'other-transparency',
			value: '1'
		},
        {
			variable: 'wintitlebar-transparency-color',
			value: 'var(--dark-background-color) '
		},
        {
			variable: 'wintb-focused-alpha',
			value: '1'
		},
        {
			variable: 'wintb-focused-color',
			value: 'var(--darker-background-color)'
		},
        {
			variable: 'header-transparency-color',
			value: 'var(--dark-background-color)'
		},
        {
			variable: 'serverlist-transparency-color',
			value: 'var(--dark-background-color)'
		},
        {
			variable: 'channels-transparency-color',
			value: 'var(--dark-background-color)'
		},
        {
			variable: 'chat-transparency-color',
			value: 'var(--dark-background-color)'
		},
        {
			variable: 'memberlist-transparency-color',
			value: 'var(--dark-background-color)'
		},

	],
	fonts: [],        
    
}
export default theme;