/// <reference types="node" />
import EventEmitter from 'events';
import { IEvent } from './types';
export declare class DOMUtils {
    HTMLTags: string[];
    tagIndex: number;
    constructor();
    addHTMLHighlightTags(node: Element): void;
    static applyBasicStyleToWords(node: Element, selector: string): void;
    static addCustomEventListeners(events: IEvent[], emitter: EventEmitter): void;
    static attachEventListenersToWords(node: Element, selector: string, { type, fn }: {
        type: string;
        fn: (e: Event) => any;
    }): void;
    static scrollTo(idx: number): void;
    static retrieveNumberOfWords(node: Element, selector: string): number;
    static retrieveWholeText(node: Element, selector: string): string;
    static retrieveWholeTextArray(node: Element, selector: string): (string | null)[];
}
//# sourceMappingURL=DOMUtils.d.ts.map