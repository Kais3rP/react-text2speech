interface IContainerProps {
    isVisible: boolean;
    isMinimized: boolean;
    styleOptions: IStyleOptions;
}
interface IWindowButton {
    styleOptions: IStyleOptions;
}
interface ISeekbarContainer {
    isMinimized: boolean;
}
interface ISeekBar {
    styleOptions: IStyleOptions;
}
interface IControlsContainer {
    isMinimized: boolean;
}
interface IControlButton {
    styleOptions: IStyleOptions;
    isLoading: boolean;
}
interface IDots {
    styleOptions: IStyleOptions;
}
interface IReset {
    styleOptions: IStyleOptions;
}
interface IExtraSettings {
    styleOptions: IStyleOptions;
    issettingsvisible: boolean;
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
export {};
//# sourceMappingURL=styledComponents.d.ts.map