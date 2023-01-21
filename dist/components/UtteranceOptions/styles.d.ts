interface IControlsContainer {
    isminimized: string;
}
interface IControlButton {
    styleoptions: IStyleOptions;
    isloading: string;
}
interface IReset {
    styleoptions: IStyleOptions;
}
export declare const ControlsContainer: import("styled-components").StyledComponent<"div", any, IControlsContainer, never>;
export declare const ControlButton: import("styled-components").StyledComponent<"div", any, IControlButton, never>;
export declare const Reset: import("styled-components").StyledComponent<import("react-icons/lib").IconType, any, IReset, never>;
export {};
//# sourceMappingURL=styles.d.ts.map