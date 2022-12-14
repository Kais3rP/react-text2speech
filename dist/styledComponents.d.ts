interface IContainerProps {
    isvisible: string;
    isminimized: string;
    styleoptions: IStyleOptions;
}
interface IWindowButton {
    styleoptions: IStyleOptions;
}
interface ISeekbarContainer {
    isminimized: string;
}
interface ISeekBar {
    styleoptions: IStyleOptions;
}
interface IControlsContainer {
    isminimized: string;
}
interface IControlButton {
    styleoptions: IStyleOptions;
    isloading: string;
}
interface IDots {
    styleoptions: IStyleOptions;
}
interface IReset {
    styleoptions: IStyleOptions;
}
interface IExtraSettings {
    styleoptions: IStyleOptions;
    issettingsvisible: string;
}
interface ICheckBox {
}
export declare const Container: import("styled-components").StyledComponent<"div", any, IContainerProps, never>;
export declare const WindowButton: import("styled-components").StyledComponent<"div", any, IWindowButton, never>;
export declare const SeekbarContainer: import("styled-components").StyledComponent<"div", any, ISeekbarContainer, never>;
export declare const Time: import("styled-components").StyledComponent<"h5", any, {}, never>;
export declare const Seekbar: import("styled-components").StyledComponent<"input", any, ISeekBar, never>;
export declare const ControlsContainer: import("styled-components").StyledComponent<"div", any, IControlsContainer, never>;
export declare const ControlButton: import("styled-components").StyledComponent<"div", any, IControlButton, never>;
export declare const OptionsContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Dots: import("styled-components").StyledComponent<import("react-icons/lib").IconType, any, IDots, never>;
export declare const Reset: import("styled-components").StyledComponent<import("react-icons/lib").IconType, any, IReset, never>;
export declare const SliderContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ExtraSettings: import("styled-components").StyledComponent<"div", any, IExtraSettings, never>;
export declare const CheckBox: import("styled-components").StyledComponent<"input", any, ICheckBox, never>;
export {};
//# sourceMappingURL=styledComponents.d.ts.map