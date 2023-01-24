interface ISettingsIcon {
    styleoptions: IStyleOptions;
}
interface IInfoIcon {
    styleoptions: IStyleOptions;
}
interface IExtraSettings {
    styleoptions: IStyleOptions;
    isOptionsVisible: string;
}
interface ICheckBox {
}
export declare const OptionsContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SettingsIcon: import("styled-components").StyledComponent<import("react-icons/lib").IconType, any, ISettingsIcon, never>;
export declare const InfoIcon: import("styled-components").StyledComponent<import("react-icons/lib").IconType, any, IInfoIcon, never>;
export declare const ExtraSettingsContainer: import("styled-components").StyledComponent<"div", any, IExtraSettings, never>;
export declare const CheckBox: import("styled-components").StyledComponent<"input", any, ICheckBox, never>;
export {};
//# sourceMappingURL=styles.d.ts.map