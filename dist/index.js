'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var EventEmitter = require('events');

var IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/refactoringui/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
];

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon$i(data) {
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest$1(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

var esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DefaultContext: DefaultContext,
  GenIcon: GenIcon$i,
  IconBase: IconBase,
  IconContext: IconContext,
  IconsManifest: IconsManifest
});

// THIS FILE IS AUTO GENERATED
var GenIcon$h = esm.GenIcon;
var IoMdArrowBack_1 = function IoMdArrowBack (props) {
  return GenIcon$h({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}}]})(props);
};

const createAction = (type, payload) => ({
    type,
    payload,
});
/* Actions */
const changeUIState = (payload) => createAction('CHANGE_UISTATE', payload);
const changeSettings = (payload) => createAction('CHANGE_SETTINGS', payload);
const changeOptions = (payload) => createAction('CHANGE_OPTIONS', payload);
const changeState = (payload) => createAction('CHANGE_STATE', payload);
const changeHighlightStyle = (payload) => createAction('CHANGE_HIGHLIGHT_STYLE', payload);
const updateError = (payload) => createAction('UPDATE_ERROR', payload);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$f = ".styles-module_showButton__kw1jn {\n\tposition: fixed;\n\tbottom: 20px;\n\tright: -19px;\n\tborder-radius: 50%;\n\tborder: 2px solid var(--primaryColor);\n\twidth: 40px;\n\theight: 40px;\n\tbackground-color: var(--secondaryColor);\n\tcursor: pointer;\n\tz-index: 100;\n\ttransition: all 0.2s ease-out;\n}\n\n.styles-module_showButton__kw1jn:hover {\n\tborder: 2px solid var(--secondaryColor);\n\ttransform: scale(1.05);\n\tbox-shadow: 0px 0px 10px 2px var(--secondaryColor);\n\tbackground-color: var(--bgColor);\n}\n\n.styles-module_showButton__kw1jn:hover .styles-module_arrow__8nMp9 {\n\tfill: var(--primaryColor);\n\tleft: -60px;\n\ttransform: scale(3) translateY(-3px);\n\topacity: 0;\n}\n\n.styles-module_line__RX9UN {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\theight: 38px;\n\twidth: 2px;\n\tbackground-color: var(--primaryColor);\n}\n\n.styles-module_arrow__8nMp9 {\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tleft: -1px;\n\twidth: 20px;\n\theight: 20px;\n\tfont-size: 340px;\n\tfill: var(--bgColor);\n\ttransition: all 0.7s ease-out;\n\tpointer-events: none;\n\t/* animation: movingArrow 0.5s infinite linear; */\n}\n";
var styles$f = {"showButton":"styles-module_showButton__kw1jn","arrow":"styles-module_arrow__8nMp9","line":"styles-module_line__RX9UN"};
styleInject(css_248z$f);

const StoreContext = React.createContext(null);
const MainPropsContext = React.createContext(null);
const ReaderContext = React.createContext(null);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class IDeviceInfo {
}
class DeviceInfo extends IDeviceInfo {
    constructor() {
        super();
        this.isMobile = DeviceInfo.isMobile();
        this.isSafari = DeviceInfo.isSafari();
        this.isBrowserSupported = DeviceInfo.isBrowserSupported();
    }
    static isMobile() {
        if (!navigator || !window)
            return false;
        /* Dev mode */
        //	return true;
        // check the user agent string
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            return true;
        // check the platform string
        if (/iPad|iPhone|iPod/.test(navigator.platform))
            return true;
        // check the screen size and pixel density
        if (window.innerWidth < 768 || window.devicePixelRatio > 1)
            return true;
        return false;
    }
    static isSafari() {
        return (navigator.userAgent.indexOf('Safari') > -1 &&
            navigator.userAgent.indexOf('Chrome') === -1);
    }
    static isBrowserSupported() {
        try {
            /* Test if the browser supports speech synthesis */
            if (window.speechSynthesis === undefined ||
                window.SpeechSynthesisUtterance === undefined)
                return false;
            return true;
        }
        catch (e) {
            return false;
        }
    }
}

class TextUtils {
    /* Regex Utils */
    static isSlashTextContent(str) {
        if (!str)
            return false;
        return /<.+>\/<\/.+>/.test(str);
    }
    static isDigitTextContent(str) {
        if (!str)
            return false;
        return /<.+>\d+<\/.+>/.test(str);
    }
    static isWordTextContent(str) {
        if (!str)
            return false;
        return /<.+>[a-zA-Z]+<\/.+>/.test(str);
    }
    static isWord(str) {
        if (!str)
            return false;
        return /^[a-zA-Z]/.test(str);
    }
    static isWordWithNumbers(str) {
        if (!str)
            return false;
        return /^[a-zA-Z0-9]+$/.test(str);
    }
    static isNumber(str) {
        if (!str)
            return false;
        return (!isNaN(+str) && isFinite(+str)) || parseFloat(str);
    }
    static isURL(str) {
        if (!str)
            return false;
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(str);
    }
    static isSpace(str) {
        return str === ' ';
    }
    static isEmptyString(str) {
        return str === '';
    }
    static isWhitespaceChar(str) {
        return /^[\n\r\t]+$/.test(str);
    }
    static isAt(str) {
        return str === '@';
    }
    static isDot(str) {
        return str === '.';
    }
    static isZero(str) {
        return str === '0';
    }
    static isPunctuation(str) {
        if (!str)
            return false;
        return /^[.,;:!?]+$/.test(str);
    }
    static isPunctuationButDot(str) {
        if (!str)
            return false;
        return /^[,;:!?]+$/.test(str);
    }
    static isHashtag(str) {
        return str === '#';
    }
    static isSlash(str) {
        return str === '/';
    }
    static isParens(str) {
        if (!str)
            return false;
        return /^[()[\]{}]+$/.test(str);
    }
    static isTag(str) {
        if (!str)
            return false;
        return /<.+?>/.test(str);
    }
    static isCodeOpenTag(str) {
        if (!str)
            return false;
        return /<code(@@)?\s?([a-zA-Z-]+="[a-zA-Z-_@\s]+")?>/.test(str);
    }
    static isCodeCloseTag(str) {
        if (!str)
            return false;
        return /<\/code>/.test(str);
    }
    static isWordInsideAngularBrackets(str) {
        if (!str)
            return false;
        return /^<+.*>+\.?$/.test(str);
    }
    static isSpecialReadableCharacter(str) {
        if (!str)
            return false;
        return /^[@#\\/_*^°£$%&=+]+$/.test(str);
    }
    static isSpecialUnreadableCharacter(str) {
        if (!str)
            return false;
        return /^[()[\]{}'"<>`|-]+$/.test(str);
    }
    static isSpecialCharacter(str) {
        if (!str)
            return false;
        return /^([.,;:\-_`'"*+()[\]{}<>\s\n])$/.test(str);
    }
    static isHTMLEntity(str) {
        if (!str)
            return false;
        return /&[a-z]+?;+/.test(str);
    }
    static isValidDate(str) {
        // @ts-expect-error
        return new Date(str) > 0;
    }
    static retrieveChunks(text) {
        let currentPunctuationSymbol = '.';
        const chunks = [];
        let previousEnd = 0;
        /* 1
        Take into account that all the special readable characters will be counted as plain words hence we need to:
        - use the "wholeTextArray" which holds all the text elements that were wrapped in a span tag with a data-id attribute,
          this ensures that it will contain all readable content, since only readable words/characters are given such a wrap tag in
          "addHTMLHighlightTags" method.
          This further ensures to have a unique source of truth to keep in sync reading content and visual highlighting.
        - join with spaces every single character wrapped with a data-id attribute tag to be able to further split on given breakpoints
        - split in segments relative to periods that have words ending with a punctuation mark, to do so we use this regexp "/(?<=[a-zA-Z0-9])[.?!;]/"
          to make sure to select any punctuation mark that is preceeded by a word
          ( to avoid to consider punctuation in the middle of words as chunk edges, we use the wholeTextArray array
            which already owns all characters that will be read, included dots in the middle of words e.g. text.text -> "text dot text" ).
        - for each of the chunk extracted we build an object containg all the info on the chunk, start,end,length, index and text.
          The text is the content that will be passed to the speech synth
        - The chunk text has to be further manipulated since now as we manipulated the chunk the dots in the middle of the word won't be read as they are detached from the previous and next words.
          The strategy here is the same used in the "retrieveWholeText" method, which is: using the custom __join__ method
          tho use a space " " to join all the plain words and a no space "" to join the words that have a punctuation element next to them and dots element themselves */
        /*
        Alternative regexps:
            1- /(?<![\s])[.?!;]+(?=[\s\n])/ This is safer since it just checks if there are spaces before and after the dot
            2- /(?<=[a-zA-Z0-9])[.?!;]/  This does not take into account dots placed after a special character like a parens e.g. (word). <-- That dot won't be matched
            */
        /*
        Since Safari does not handle lookbehind I needed to implement a custom split() method. Using this until Safari won't add support for lookbehind.
        The __split__ method take 3 params, the first one is the separator, the second and the third ones are respectively the char to lookbehind and the one to lookahead, they are tested
        against any single char of the string passed.
        */
        // @ts-ignore
        const textArray = text.__split__(/[.!?;]/, /[^\s]/, /[\s\n]+/);
        textArray.forEach((c, i) => {
            if (TextUtils.isPunctuation(c))
                currentPunctuationSymbol = c;
            else {
                const length = c
                    .trim()
                    .split(/[\s]/)
                    .filter((el) => el).length;
                /*  */
                const text = c.split(/\s+/).__join__((el, i, arr) => {
                    if (TextUtils.isPunctuation(arr[i + 1]) ||
                        TextUtils.isDot(el)) {
                        return '';
                    }
                    else
                        return ' ';
                });
                const result = {
                    text: text + currentPunctuationSymbol,
                    length: length,
                    start: previousEnd,
                    end: previousEnd + length - 1,
                    idx: i,
                };
                previousEnd = previousEnd + length;
                chunks.push(result);
            }
        });
        return chunks;
    }
    static getTextDuration(str, rate) {
        return (str.length * 100 * 1) / rate;
    }
    static getAverageTextElapsedTime(textArray, idx) {
        const _text = textArray.slice(0, idx).join(' ');
        return (rate) => TextUtils.getTextDuration(_text, rate);
    }
    /* Prototype extension of primitives */
    static __split__(separator, pre, post) {
        if (typeof separator !== 'string' && !(separator instanceof RegExp))
            throw new Error('The separator must be a string or a Regular Expression');
        const words = [];
        let currentWord = '';
        const _separator = separator instanceof RegExp ? separator : new RegExp(separator);
        let prevChar = '';
        let postChar = '';
        const _pre = pre instanceof RegExp ? pre : new RegExp(pre);
        const _post = post instanceof RegExp ? post : new RegExp(post);
        for (const [i, c] of Object.entries(this)) {
            postChar = this[+i + 1];
            if (_separator.test(c) &&
                _pre.test(prevChar) &&
                _post.test(postChar)) {
                words.push(currentWord);
                currentWord = '';
            }
            else {
                currentWord += c;
            }
            prevChar = c;
        }
        if (currentWord.length > 0) {
            words.push(currentWord);
        }
        return words;
    }
}
TextUtils.__join__ = function (fn) {
    let str = ``;
    let i = 0;
    for (const el of this) {
        const separator = fn(el, i, this);
        str = str + el.toString() + separator;
        i++;
    }
    return str;
};

class Utils {
    /* Type Checks */
    static isFunction(fn) {
        return fn && typeof fn === 'function';
    }
    /* Utilities */
    static formatMsToTime(n) {
        let seconds, minutes, hours;
        let secondsLeft = 0;
        let minutesLeft = 0;
        seconds = Math.floor(n / 1000);
        secondsLeft = Math.floor(seconds % 60);
        minutes = Math.floor(seconds / 60);
        minutesLeft = Math.floor(minutes % 60);
        hours = Math.floor(minutes / 60);
        /* format */
        seconds = secondsLeft.toString().padStart(2, '0');
        minutes = (minutes === minutesLeft ? minutes : minutesLeft)
            .toString()
            .padStart(2, '0');
        hours = hours.toString().padStart(2, 0);
        return hours > 0
            ? `${hours}:${minutes}:${seconds}`
            : `${minutes}:${seconds}`;
    }
    static debounce(fn, delay) {
        let timeout;
        return function (...args) {
            if (timeout)
                clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    }
    static hexToRGB(hex, format) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        switch (format) {
            case 'object':
                return result
                    ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16),
                    }
                    : null;
            case 'string':
                return result
                    ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})`
                    : null;
            default:
                return result
                    ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})`
                    : null;
        }
    }
    static isDarkColor(hex) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        // extract color components
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        // calculate luminance
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        // return true if color is dark, false otherwise
        return luminance < 128;
    }
    static invertColor(hex) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        // invert color components
        const r = (255 - parseInt(hex.slice(0, 2), 16))
            .toString(16)
            .padStart(2, '0');
        const g = (255 - parseInt(hex.slice(2, 4), 16))
            .toString(16)
            .padStart(2, '0');
        const b = (255 - parseInt(hex.slice(4, 6), 16))
            .toString(16)
            .padStart(2, '0');
        // return inverted color
        return '#' + r + g + b;
    }
    static formatVoices(voices) {
        return voices.map((voice) => {
            var _a;
            return ({
                name: (_a = voice.name) === null || _a === void 0 ? void 0 : _a.replace(/(Microsoft\s)|(Online\s)|(\(Natural\))|(\s-.*$)/gm, // Display only the plain voice name
                ''),
                value: voice.voiceURI,
            });
        });
    }
    static getBrushURL(name, color) {
        const _color = color.replace('#', '');
        const URL = `s2.svgbox.net/pen-brushes.svg?ic=${name}&color=${_color}`;
        return { http: `https://${URL}`, css: `url(//${URL})` };
    }
    static isBrushAvailable(brush, color) {
        return __awaiter(this, void 0, void 0, function* () {
            const URL = Utils.getBrushURL(brush, color).http;
            const res = yield fetch(URL);
            const data = yield res.blob();
            if (res.ok && /image/.test(data === null || data === void 0 ? void 0 : data.type))
                return true;
            else
                return false;
        });
    }
}

class DOMUtils {
    constructor() {
        this.HTMLTags = [
            'div',
            'span',
            'a',
            'i',
            'img',
            'html',
            'body',
            'section',
            'article',
            'main',
            'head',
            'header',
            'aside',
            'nav',
        ];
        this.tagIndex = 0;
    }
    addHTMLHighlightTags(node) {
        const nodes = [...node.childNodes];
        nodes.forEach((el) => {
            /* Exclude code tags and its content from parsing */
            if (el.nodeType === 1 &&
                (el.tagName === 'PRE' ||
                    el.tagName === 'CODE'))
                return;
            /* Recurse if the element is an HTMLElement */
            if (el.nodeType === 1)
                this.addHTMLHighlightTags(el);
            /* Begin text node parsing if node type is TextNode */
            if (el.nodeType === 3) {
                if (TextUtils.isEmptyString(el.textContent) ||
                    TextUtils.isSpace(el.textContent) ||
                    TextUtils.isWhitespaceChar(el.textContent))
                    return;
                const wrapper = document.createElement('span');
                el.data
                    .split('')
                    .filter((char, i, arr) => {
                    /* Dismiss empty strings or non valid values */
                    if (!char)
                        return false;
                    /* Get rid of spaces between words and punctuation */
                    if (TextUtils.isSpace(char) &&
                        TextUtils.isPunctuation(arr[i + 1]))
                        return false;
                    /* Get rid of multiple spaces to avoid inconsistencies */
                    if (TextUtils.isSpace(char) &&
                        TextUtils.isSpace(arr[i + 1]))
                        return false;
                    return true;
                })
                    /* Separate special characters that will be read as single characters */
                    .map((c, i, arr) => {
                    /* Replace whitespace characters with common spaces */
                    if (TextUtils.isWhitespaceChar(c))
                        return ' ';
                    /* Separate the special readable characters like @#^*° so they can be read accordingly */
                    if (TextUtils.isSpecialReadableCharacter(c))
                        return ` ${c} `;
                    /* Handle dots in the middle of numbers e.g. 1.000 1.23 */
                    if (TextUtils.isDot(c) &&
                        TextUtils.isNumber(arr[i - 1]) &&
                        TextUtils.isNumber(arr[i + 1]))
                        return `${c}`;
                    /* Handle dots in the middle of words and numbers e.g. some.text e.g. abc33.bb32 ,
                    since in this case they are read as a character : "some dot text" "one dot zero zero zero" */
                    if (TextUtils.isDot(c) &&
                        TextUtils.isWordWithNumbers(arr[i - 1]) &&
                        TextUtils.isWordWithNumbers(arr[i + 1]))
                        return ` ${c} `;
                    /* Handle the punctation characters apart dots placed in the middle of a word e.g. test:test --> test: test */
                    if (TextUtils.isPunctuationButDot(c) &&
                        TextUtils.isWord(arr[i - 1]) &&
                        TextUtils.isWord(arr[i + 1]))
                        return `${c} `;
                    /* Handle multiple zeroes in a row, since they are read a single separated words */
                    return c;
                })
                    .join('')
                    .split(' ')
                    .forEach((word, i, arr) => {
                    if (!word)
                        return;
                    /* If it's a special unreadable character or a dot it does not add an highlight data-id since those characters won't  be read */
                    if (
                    // TextUtils.isPunctuation(word) ||
                    TextUtils.isSpecialUnreadableCharacter(word) ||
                        TextUtils.isWordInsideAngularBrackets(word)) {
                        const newEl = document.createTextNode(word + ' ');
                        wrapper.appendChild(newEl);
                    }
                    else {
                        /* In all other cases, which is, "plain words or slashes or any other readable character" we add the data-id attribute */
                        const newEl = document.createElement('span');
                        newEl.setAttribute('data-id', (this.tagIndex++).toString());
                        newEl.setAttribute('data-type', 'WORD');
                        /* Do not add a space after the word if it's a special readable character or if the next word is not a plain word */
                        if (TextUtils.isSpecialReadableCharacter(word) ||
                            TextUtils.isSpecialReadableCharacter(arr[i + 1]) ||
                            TextUtils.isDot(word) ||
                            TextUtils.isDot(arr[i + 1]) ||
                            TextUtils.isZero(word)) {
                            newEl.textContent = word;
                        }
                        else
                            newEl.textContent = word + ' ';
                        /* Add a space after the words that are Text words */
                        wrapper.appendChild(newEl);
                    }
                });
                node.replaceChild(wrapper, el);
            }
        });
    }
    static applyBasicStyleToWords(node, selector) {
        [...node.querySelectorAll(selector)]
            /* .filter(
                (el) => el && !TextUtils.isPunctuation(el.textContent as string)
            ) */
            .forEach((el) => {
            el.style.transition =
                'background-color 0.2s linear, color 0.2s linear';
            el.style.margin = '0px -0.3em';
            el.style.padding = '0.2em 0.3em';
            el.style.backgroundSize = 'cover';
        });
    }
    static addCustomEventListeners(events, emitter) {
        events.forEach((e) => {
            if (e.handlers.length > 0) {
                for (const handler of e.handlers) {
                    if (Utils.isFunction(handler))
                        emitter.on(e.type, handler.bind(this));
                }
            }
        });
    }
    static attachEventListenersToWords(node, selector, { type, fn }) {
        [...node.querySelectorAll(selector)].forEach((el) => {
            el.addEventListener(type, fn);
        });
    }
    static scrollTo(idx) {
        const el = document.querySelector(`[data-id="${idx}"]`);
        if (el)
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
    }
    static retrieveNumberOfWords(node, selector) {
        return [...node.querySelectorAll(selector)].length;
    }
    static retrieveWholeText(node, selector) {
        return [...node.querySelectorAll(selector)]
            .map((el) => el.textContent)
            .__join__((el, i, arr) => {
            if (TextUtils.isPunctuation(arr[i + 1]) ||
                TextUtils.isDot(el)) {
                return '';
            }
            else
                return ' ';
        });
    }
    static retrieveWholeTextArray(node, selector) {
        return [...node.querySelectorAll(selector)].map((el) => el.textContent);
    }
}

class Errors {
}
Errors.browserNotSupported = 'Your browser does not support Speech Synthesis, please switch to a more modern browser.';
Errors.initializeError = 'Init error';
Errors.safariNotFullySupported = 'Safari might present weird behaviour and bugs, update to the latest version or switch to a fully supported browser';
Errors.timeoutError = 'Timeout reached';
Errors.voicesRetrieveTimeoutError = 'Impossible to retrieve the voices (If you are using Firefox on Linux you need the "speech-dispatcher" package installed).';

class SpeechSynth extends EventEmitter {
    /*
    The constructor only required @Param is the TextContainer HTMLElement,
    the second @Param is an optional object and all its properties are optional as well
    */
    constructor(textContainer, { 
    /* Generic Settings */
    language = 'en', 
    /* Style */
    color1 = '#DEE', color2 = '#9DE', 
    /* Ev handlers */
    onStateChange = () => null, onSettingsChange = () => null, onOptionsChange = () => null, onStyleChange = () => null, } = {
        /* Generic Settings */
        language: 'en',
        /* Style */
        color1: '#DEE',
        color2: '#9DE',
        /* Ev handlers */
        onStateChange: () => null,
        onSettingsChange: () => null,
        onOptionsChange: () => null,
        onStyleChange: () => null,
    }) {
        super();
        this.textContainer = textContainer;
        /* Instances */
        this.deviceInfo = new DeviceInfo();
        this.DOMUtils = new DOMUtils();
        /* Timeouts */
        this.timeoutRef = undefined;
        this.debouncedRestartTimeoutRef = undefined;
        /* Events */
        this.events = [
            { type: 'state-change', handlers: [onStateChange] },
            { type: 'settings-change', handlers: [onSettingsChange] },
            { type: 'options-change', handlers: [onOptionsChange] },
            { type: 'style-change', handlers: [onStyleChange] },
        ];
        /* @@@ Proxies @@@ */
        /*
        Remember to perform the Reflection before anything else so they modifications to the instance properties
        are applied before any side effect is performed
        */
        /* Settings (Utterance settings) */
        const settingsSetter = (obj, key, value) => {
            const result = Reflect.set(obj, key, value);
            this.clearTimeCount(); // Reset timer when a setting changes since the utterance has to be restarted
            switch (key) {
                case 'voiceURI':
                    this.changeVoice();
                    break;
                case 'rate':
                    this.changeRate();
                    break;
                case 'language':
                    this.changeLanguage();
                    break;
                default:
                    this.utterance[key] = value;
            }
            /* Recalculate the remaining text on utterance settings change */
            this.initUtterance();
            this.debouncedRestart(200);
            this.emit('settings-change', this);
            return result;
        };
        this.settings = new Proxy({
            pitch: 1,
            voiceURI: '',
            language: language,
            rate: 1,
            volume: 0.5,
        }, {
            set: settingsSetter,
        });
        /* Reader Options */
        const optionsSetter = (obj, key, value) => {
            const result = Reflect.set(obj, key, value);
            /* Extra actions to perform internally when an option gets changed */
            switch (key) {
                case 'isChunksModeOn':
                    this.changeChunkMode();
                    break;
                case 'isUnderlinedOn':
                    this.applyStyleToHighlightedWords();
                    break;
                case 'isBrushOn':
                    this.applyStyleToHighlightedWords();
                    break;
                case 'isHighlightTextOn':
                    if (value) {
                        if (this.options.isChunksModeOn)
                            /* Highlight the current chunk */
                            this.highlightChunk(this.state.currentChunkIndex);
                    }
                    else
                        this.resetHighlight();
                    break;
            }
            this.emit('options-change', this);
            return result;
        };
        this.options = new Proxy({
            isHighlightTextOn: true,
            isChunksModeOn: this.deviceInfo.isMobile,
            isPreserveHighlighting: true,
            isUnderlinedOn: false,
            isBrushOn: true,
        }, {
            set: optionsSetter,
        });
        /* State */
        const stateSetter = (obj, key, value) => {
            const result = Reflect.set(obj, key, value);
            switch (key) {
                case 'elapsedTime':
                    if (value % 1000 === 0)
                        this.emit('state-change', this, key);
                    return result;
            }
            this.emit('state-change', this, key);
            return result;
        };
        this.state = new Proxy({
            /* Internal properties */
            allVoices: [],
            voices: [],
            voice: {},
            /* UI */
            isLoading: false,
            /* Highlight & Reading time */
            currentWord: '',
            currentWordIndex: 0,
            currentWordProps: { charIndex: 0, charLength: 0 },
            highlightedWords: [],
            lastWordPosition: 0,
            numberOfWords: 0,
            wholeText: '',
            wholeTextArray: [],
            textRemaining: '',
            duration: 0,
            elapsedTime: 0,
            currentChunkIndex: 0,
            chunksArray: [],
            isBrushAvailable: false,
            /* Controls  */
            isPaused: false,
            isReading: false,
            isUtteranceCanceled: false,
        }, {
            set: stateSetter,
        });
        const styleSetter = (obj, key, value) => {
            const result = Reflect.set(obj, key, value);
            this.applyStyleToHighlightedWords();
            this.emit('style-change', this);
            return result;
        };
        this.style = new Proxy({ color1, color2, brush: 'brush-1' }, {
            set: styleSetter,
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            /* Exit if the browser is not supported */
            if (!this.deviceInfo.isBrowserSupported)
                throw new Error(Errors.browserNotSupported);
            /* Add custom methods to primitives */
            // eslint-disable-next-line no-extend-native
            Array.prototype.__join__ = TextUtils.__join__;
            // @ts-ignore
            // eslint-disable-next-line no-extend-native
            String.prototype.__split__ = TextUtils.__split__;
            try {
                /* Init WEB Speech API instances */
                this.synth = window.speechSynthesis;
                this.utterance = new window.SpeechSynthesisUtterance();
                /* Get voices */
                yield this.retrieveAndSetVoices();
                this.DOMUtils.addHTMLHighlightTags(this.textContainer);
                DOMUtils.applyBasicStyleToWords(this.textContainer, '[data-id]');
                /* Init state properties */
                this.state.numberOfWords = DOMUtils.retrieveNumberOfWords(this.textContainer, '[data-id]');
                this.state.wholeText = DOMUtils.retrieveWholeText(this.textContainer, '[data-id]');
                this.state.textRemaining = this.state.wholeText;
                this.state.duration = TextUtils.getTextDuration(this.state.wholeText, this.settings.rate);
                this.state.wholeTextArray = DOMUtils.retrieveWholeTextArray(this.textContainer, '[data-id]');
                this.state.chunksArray = TextUtils.retrieveChunks(this.state.wholeText);
                this.state.isBrushAvailable = yield Utils.isBrushAvailable(this.style.brush, this.style.color1);
                /* -------------------------------------------------------------------- */
                /* Attach click event listener to words */
                DOMUtils.attachEventListenersToWords(this.textContainer, '[data-id]', {
                    type: 'click',
                    fn: (e) => {
                        const target = e.target;
                        const idx = +target.dataset.id;
                        this.seekTo(idx);
                    },
                });
                /* Add class custom event listeners */
                DOMUtils.addCustomEventListeners(this.events, this);
                /* -------------------------------------------------------------------- */
                /* Init utterance settings */
                this.initUtterance();
                return this;
            }
            catch (e) {
                throw new Error(`${Errors.initializeError}, Reason: ${e}`);
            }
        });
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PRIVATE METHODS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    initUtterance() {
        this.utterance.text = this.options.isChunksModeOn
            ? this.getCurrentChunkText()
            : this.getRemainingText();
        this.utterance.lang = this.settings.language;
        this.utterance.voice = this.state.voice;
        this.utterance.pitch = this.settings.pitch;
        this.utterance.rate = this.settings.rate;
        this.utterance.volume = this.settings.volume;
        /* Add the boundary handler to the utterance to manage the highlight ( no mobile supported ) */
        this.utterance.onboundary = this.handleBoundary.bind(this);
        /*
        When chunks mode is enabled this event is fired multiple times at the end of each chunk.
        Use this to manage chunk highlighting and extra logic that concerns chunks management
        */
        this.utterance.onend = (e) => {
            /* Since synth.cancel() method triggers the "end" event on Firefox and other browsers, this prevents bugs while using these browsers.
             */
            if (this.state.isUtteranceCanceled)
                return;
            /* This prevents the execution of code if the end event is called in response to the reset method being called */
            if (this.state.isReading === false && this.state.isPaused === false)
                return;
            /* Emit the "end" event which signals the end of the WHOLE text, only when the whole text has finished to be read */
            if ((!this.options.isChunksModeOn &&
                this.state.currentWordIndex >=
                    this.state.wholeTextArray.length - 1) ||
                (this.options.isChunksModeOn &&
                    this.state.currentChunkIndex >=
                        this.state.chunksArray.length - 1))
                return this.emit('end', this);
            /* Handle the highlight options change dynamically */
            /*
            If the isPreserveHighlighting option is disabled,
            it has to reset the highlighting of the whole previous chunk while skipping to the next one
            */
            if (!this.options.isPreserveHighlighting) {
                this.resetHighlight();
            }
            /* Manage the highlighting of the next chunk just before it starts */
            if (this.options.isChunksModeOn && this.state.isReading)
                this.handleChunkHighlighting();
            /* Finally play the next chunk */
            this.play();
        };
    }
    /*
    This method handles the DOM traversing to add the Highlightint tags to the readable elements and all the logic in it is responsible
    for how the text content appears visually
    e.g. alignment of punctuation, spaces, etc...
    */
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /*  Highlight Methods  */
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    highlightText(wordIndex) {
        /* Do not highlight if the option is disabled */
        if (!this.options.isHighlightTextOn)
            return;
        // eslint-disable-next-line prettier/prettier
        const wordToHighlight = this.textContainer.querySelector(`[data-id="${wordIndex}"]`);
        if (!wordToHighlight)
            return;
        /* Update highlighted words array */
        this.state.highlightedWords.push(wordToHighlight);
        /* Calculate current word position */
        const position = wordToHighlight.getBoundingClientRect().x;
        /* Scroll to the right row position */
        if (position <= this.state.lastWordPosition)
            DOMUtils.scrollTo(this.state.currentWordIndex);
        /* Reset the row highlight only if it's not in chunks mode.
           In chunks mode, it has to be managed during the chunks switch ( in the "onend" handler) */
        if (!this.options.isPreserveHighlighting &&
            !this.options.isChunksModeOn) {
            this.resetHighlight();
            this.state.highlightedWords = [wordToHighlight];
        }
        /* Update last word position */
        this.state.lastWordPosition = position;
        /* Apply highlight style */
        this.applyStyleToWord(wordToHighlight);
    }
    resetHighlight() {
        this.state.highlightedWords.forEach((n) => {
            n.style.backgroundImage = '';
            n.style.backgroundColor = '';
            n.style.color = '';
            n.style.textDecoration = 'none';
            this.state.highlightedWords = [];
        });
    }
    /* Chunk highlighting */
    highlightChunk(idx) {
        const length = this.state.currentWordIndex + this.state.chunksArray[idx].length;
        for (let i = this.state.currentWordIndex; i < length; i++)
            this.highlightText(i);
    }
    handleChunkHighlighting() {
        // eslint-disable-next-line prettier/prettier
        const currentChunk = this.state.chunksArray[this.state.currentChunkIndex];
        // eslint-disable-next-line prettier/prettier
        const nextChunk = this.state.chunksArray[++this.state.currentChunkIndex];
        this.utterance.text = nextChunk.text;
        /* Keep the currentWordIndex in sync */
        this.state.currentWordIndex += currentChunk.length;
        /* Highlight the next chunk */
        this.highlightChunk(this.state.currentChunkIndex);
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* Timer handling methods */
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    timeCount(e, frequency) {
        if (frequency % 10 !== 0)
            throw new Error('Frequency must be a multiple of 10');
        this.state.elapsedTime += frequency;
        this.timeoutRef = setTimeout(this.timeCount.bind(this, e, frequency), frequency);
    }
    clearTimeCount() {
        clearTimeout(this.timeoutRef);
    }
    resetTimeCount() {
        this.state.elapsedTime = 0;
        this.clearTimeCount();
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* Event Handlers */
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    handleBoundary(e) {
        /* Disable boundary if it's in chunk mode */
        if (this.options.isChunksModeOn)
            return;
        this.state.currentWord =
            this.state.wholeTextArray[this.state.currentWordIndex];
        const previousWord = this.state.wholeTextArray[this.state.currentWordIndex - 1];
        /* This is very important since it ensures the sync among words that are read
        and those that are highlighted is not messed up  */
        if (e.name !== 'word' || e.charLength === 0)
            return;
        /*
        Disable boundary if the word is the repetition of the previous one, this happens in certain cases like numbers
        e.g. 1000 is spelled "one thousand" even if it's just one word, hence the boundary is fired twice and dates.
        This increase consistency in visual highlighting and audio sync.
        */
        if ((TextUtils.isNumber(previousWord) ||
            TextUtils.isValidDate(previousWord)) &&
            e.charIndex === this.state.currentWordProps.charIndex &&
            e.charLength === this.state.currentWordProps.charLength)
            return;
        /* Sync current word props */
        this.state.currentWordProps = {
            charIndex: e.charIndex,
            charLength: e.charLength,
        };
        /* Highlight the current word */
        this.highlightText(this.state.currentWordIndex);
        /* Increase the current index of word read */
        this.state.currentWordIndex += 1;
        /* Synchronize the chunk index if the current word has a chunk delimiter character in it ( punctuation ) */
        if (/[.?!;]+/.test(this.state.wholeTextArray[this.state.currentWordIndex]))
            this.state.currentChunkIndex++;
        /* Emit boundary event */
        this.emit('boundary', this, e);
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* Manage voices retrieval and setting - Voices retrieval is asynchronous since they are populated asynchronously on browser */
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    filterVoices(voices) {
        return voices.filter((voice) => voice.lang.startsWith(this.settings.language));
    }
    getAllVoices() {
        return new Promise((resolve, reject) => {
            let id = null;
            let counter = 0;
            try {
                id = setInterval(() => {
                    counter += 10;
                    if (this.synth.getVoices().length !== 0) {
                        clearInterval(id);
                        resolve(this.synth.getVoices());
                    }
                    if (counter >= 1000) {
                        // timeout after 1s)
                        clearInterval(id);
                        reject(Errors.voicesRetrieveTimeoutError);
                    }
                }, 10);
            }
            catch (e) {
                reject(e);
                clearInterval(id);
            }
        });
    }
    updateVoices() {
        var _a;
        this.state.voices = this.filterVoices(this.state.allVoices);
        this.state.voice = this.state.voices[0];
        this.settings.voiceURI = ((_a = this.state.voice) === null || _a === void 0 ? void 0 : _a.voiceURI) || '';
    }
    retrieveAndSetVoices() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.state.allVoices = yield this.getAllVoices();
                this.updateVoices();
            }
            catch (e) {
                // eslint-disable-next-line no-throw-literal
                throw e;
            }
        });
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* Style methods */
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    applyStyleToWord(el) {
        const URL = Utils.getBrushURL(this.style.brush, this.style.color1).css;
        el.style.backgroundImage =
            this.state.isBrushAvailable && this.options.isBrushOn
                ? URL
                : 'none';
        el.style.backgroundColor =
            this.state.isBrushAvailable && this.options.isBrushOn
                ? 'transparent'
                : this.style.color1;
        el.style.color = this.style.color2;
        el.style.textDecoration = this.options.isUnderlinedOn
            ? 'underline'
            : 'none';
    }
    applyStyleToHighlightedWords() {
        this.state.highlightedWords.forEach((w) => this.applyStyleToWord(w));
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* Private handlers for proxy traps */
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    changeChunkMode() {
        this.clearTimeCount();
        /* Since che chunk mode change triggers a restart of the utterance playing,
        make sure the current word index gets synchronized with the current chunk index start word,
        since the sentence is restarted from the first word of the sentence itself */
        // eslint-disable-next-line prettier/prettier
        this.state.currentWordIndex =
            this.state.chunksArray[this.state.currentChunkIndex].start;
        /* This manages the starting highlight if chunk mode is on or off:
            1. if it starts in single word mode and it gets changed to chunk mode, it highlights the whole chunk
            2. if it starts in chunk mode and it gets changed to single word mode, it resets all the current highlighthing and starts to highlight words singularly */
        if (this.options.isChunksModeOn) {
            this.utterance.text = this.getCurrentChunkText();
            this.highlightChunk(this.state.currentChunkIndex);
        }
        else {
            this.getAndSetText();
            this.resetHighlight();
        }
        this.restart();
    }
    changeVoice() {
        const voice = this.state.voices.find((v) => v.voiceURI === this.settings.voiceURI) || this.state.voices[0];
        this.state.voice = voice;
        this.utterance.voice = voice;
    }
    changeRate() {
        this.state.duration = TextUtils.getTextDuration(this.state.wholeText, this.settings.rate);
        this.state.elapsedTime = TextUtils.getAverageTextElapsedTime(this.state.wholeTextArray, this.state.currentWordIndex)(this.settings.rate);
        this.utterance.rate = this.settings.rate;
        this.emit('time-tick', this, this.state.elapsedTime);
    }
    changeLanguage() {
        return __awaiter(this, void 0, void 0, function* () {
            this.updateVoices();
        });
    }
    getRemainingText() {
        const length = this.state.wholeTextArray.length;
        /* Calculate and set the remaining text */
        return this.state.wholeTextArray
            .slice(this.state.currentWordIndex, length + 1)
            .__join__((el, i, arr) => {
            if (TextUtils.isDot(arr[i + 1]) ||
                TextUtils.isDot(el)) {
                return '';
            }
            else
                return ' ';
        });
    }
    getCurrentChunkText() {
        var _a;
        return (_a = this.state.chunksArray[this.state.currentChunkIndex]) === null || _a === void 0 ? void 0 : _a.text;
    }
    getAndSetText() {
        this.state.textRemaining = this.getRemainingText();
        this.utterance.text = this.state.textRemaining;
    }
    cancelUtterance() {
        /* This flag is required in order to prevent the "onend" handler to execute the default behaviour when the "end" event is fired
           after synth.cancel() is called during utterance restart
        */
        this.state.isUtteranceCanceled = true;
        this.synth.cancel();
        setTimeout(() => (this.state.isUtteranceCanceled = false), 1000);
    }
    cancel() {
        this.synth.cancel();
    }
    debouncedRestart(delay) {
        clearTimeout(this.debouncedRestartTimeoutRef);
        this.debouncedRestartTimeoutRef = setTimeout(() => {
            this.cancelUtterance();
            if (this.isReading())
                this.play();
            if (this.isPaused()) {
                this.play().then(() => {
                    /* Asynchronous */
                    this.pause();
                });
                /* Asynchronous polyfill for FIrefox, otherwise pause() doesn't work properly if fired immediately after "start" event is triggered */
                setTimeout(() => this.pause(), 10);
                setTimeout(() => this.pause(), 20);
                setTimeout(() => this.pause(), 30);
                setTimeout(() => this.pause(), 40);
                setTimeout(() => this.pause(), 50);
                setTimeout(() => this.pause(), 100);
                setTimeout(() => this.pause(), 500);
                /* Synchronous */
                this.pause();
            }
        }, delay);
    }
    restart() {
        this.cancel();
        if (this.isReading())
            this.play();
        /* To make sure the pause event is called after the "start" event has fired, which is asynchronous, we call it both synchronously and asynchronously */
        if (this.isPaused()) {
            this.play().then(() => this.pause());
            this.pause();
        }
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PUBLIC METHODS - EXPOSED API @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* Control methods */
    seekTo(idx) {
        /* Reset timeouts  */
        this.clearTimeCount();
        /* Sync the current chunk in both cases that the seeking is performed in chunk or non chunk mode */
        const chunk = this.state.chunksArray.find((c) => idx >= c.start && idx <= c.end);
        this.state.currentChunkIndex = chunk.idx;
        if (!this.options.isChunksModeOn) {
            /* Update current word index */
            this.state.currentWordIndex = idx;
            /* Set the new text slice */
            this.getAndSetText();
            /* Highlight */
            this.resetHighlight();
            this.highlightText(this.state.currentWordIndex);
        }
        else {
            /* In Chunks mode sync the current word index with the start of the chunk */
            this.state.currentWordIndex = chunk.start;
            this.utterance.text = chunk.text;
            /* Highlight */
            this.resetHighlight();
            this.highlightChunk(this.state.currentChunkIndex);
        }
        /* Recalculate time elapsed */
        this.state.elapsedTime = TextUtils.getAverageTextElapsedTime(this.state.wholeTextArray, this.state.currentWordIndex)(this.settings.rate);
        this.emit('time-tick', this, this.state.elapsedTime);
        this.debouncedRestart(500);
    }
    /* ------------------------------------------------------------------------------------ */
    /* Public Methods to control the player state */
    /* ------------------------------------------------------------------------------------ */
    play() {
        /* Canceling the queue before calling synth.speak() prevenst subtle bugs on some browsers like FIrefox that trigger the "start" event only if the queue is empty  */
        this.cancel();
        this.clearTimeCount(); // Makes sure to not trigger multiple timeouts
        this.synth.speak(this.utterance);
        this.state.isPaused = false;
        this.state.isReading = true;
        this.state.isLoading = true;
        return new Promise((resolve) => {
            this.utterance.onstart = (e) => {
                /* Highlight the first chunk on the first start if it's chunks mode ON / mobile */
                if (this.options.isChunksModeOn)
                    this.highlightChunk(0);
                this.state.isLoading = false;
                this.timeCount(null, 20);
                resolve(null);
            };
        });
    }
    pause() {
        this.synth.pause();
        this.state.isPaused = true;
        this.state.isReading = false;
        this.emit('pause', this);
        /* Pause timer */
        this.clearTimeCount();
    }
    resume() {
        if (!this.options.isChunksModeOn)
            this.synth.resume();
        else
            this.play();
        this.state.isPaused = false;
        this.state.isReading = true;
        this.emit('resume', this);
        /* Restart timer */
        this.timeCount(null, 20);
    }
    reset() {
        this.cancel();
        this.resetHighlight();
        /* Reset timer */
        this.resetTimeCount();
        /* State props */
        const statePropsToReset = {
            textRemaining: this.state.wholeText,
            currentWordIndex: 0,
            currentChunkIndex: 0,
            highlightedWords: [],
            lastWordPosition: 0,
            isPaused: false,
            isReading: false,
            isUtteranceCanceled: false,
        };
        for (const entry of Object.entries(statePropsToReset))
            this.state[entry[0]] = entry[1];
        /* Settings props  */
        const settingsPropsToReset = {
            pitch: 1,
            rate: 1,
            volume: 0.5,
        };
        for (const entry of Object.entries(settingsPropsToReset))
            this.settings[entry[0]] = entry[1];
        /* Reset the utterance state ( needed to reset the text utterance ) */
        this.initUtterance();
        /* Scroll back to top word */
        DOMUtils.scrollTo(1);
        this.emit('reset', this);
    }
    /* Utility getters */
    isReading() {
        return this.state.isReading;
    }
    isPaused() {
        return this.state.isPaused;
    }
}

const globalState = {
    UIState: {
        isMinimized: true,
        isVisible: false,
        isDark: false,
    },
    error: null,
    settings: {
        rate: 1,
        voiceURI: '',
        volume: 0.5,
        pitch: 0,
        language: 'en',
    },
    options: {
        isPreserveHighlighting: true,
        isHighlightTextOn: true,
        isChunksModeOn: false,
        isUnderlinedOn: false,
        isBrushOn: true,
    },
    highlightStyle: {
        color1: '',
        color2: '',
        brush: 'brush-1',
    },
    state: {
        /* Internal properties */
        allVoices: [],
        voice: {},
        voices: [],
        /* UI */
        isLoading: false,
        /* Highlight & Reading time */
        currentWord: '',
        currentWordIndex: 0,
        currentWordProps: { charIndex: 0, charLength: 0 },
        highlightedWords: [],
        lastWordPosition: 0,
        numberOfWords: 0,
        wholeText: '',
        wholeTextArray: [],
        textRemaining: '',
        duration: 0,
        elapsedTime: 0,
        currentChunkIndex: 0,
        chunksArray: [],
        isBrushAvailable: false,
        /* Controls  */
        isPaused: false,
        isReading: false,
        isUtteranceCanceled: false,
    },
};
const rootReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_UISTATE': {
            return Object.assign(Object.assign({}, state), { UIState: Object.assign(Object.assign({}, state.UIState), payload) });
        }
        case 'CHANGE_STATE': {
            return Object.assign(Object.assign({}, state), { state: Object.assign(Object.assign({}, state.state), payload) });
        }
        case 'CHANGE_SETTINGS': {
            return Object.assign(Object.assign({}, state), { settings: Object.assign(Object.assign({}, state.settings), payload) });
        }
        case 'CHANGE_OPTIONS': {
            return Object.assign(Object.assign({}, state), { options: Object.assign(Object.assign({}, state.options), payload) });
        }
        case 'CHANGE_HIGHLIGHT_STYLE': {
            return Object.assign(Object.assign({}, state), { highlightStyle: Object.assign(Object.assign({}, state.highlightStyle), payload) });
        }
        case 'UPDATE_ERROR': {
            return Object.assign(Object.assign({}, state), { error: payload });
        }
        default:
            return Object.assign({}, state);
    }
};

const useStore = () => {
    const store = React.useContext(StoreContext);
    return store;
};
const useReader = () => {
    const reader = React.useContext(ReaderContext);
    return reader;
};
const useMainProps = () => {
    const mainProps = React.useContext(MainPropsContext);
    return mainProps;
};

/* Provides the main props */
const MainPropsProvider = ({ value, children, }) => {
    return (React.createElement(MainPropsContext.Provider, { value: value }, children));
};
/* Provides the reader instance */
const ReaderProvider = ({ children }) => {
    const { dispatch } = useStore();
    const { textContainer, options, styleOptions } = useMainProps();
    const readerRef = React.useRef(new SpeechSynth(textContainer, Object.assign(Object.assign({}, options), { color1: (styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.highlightColor1) || '#DEE', color2: styleOptions.highlightColor2 || '#9DE', onStateChange: (reader, key) => {
            /* Avoid unnecessary rerenders, update elapsedTime only each second */
            if (key === 'elapsedTime' && reader.state[key] % 1000 === 0)
                dispatch(changeState({ [key]: reader.state[key] }));
            else
                dispatch(changeState({ [key]: reader.state[key] }));
        }, onSettingsChange: (reader) => {
            dispatch(changeSettings(reader.settings));
        }, onOptionsChange: (reader) => {
            dispatch(changeOptions(reader.options));
        }, onStyleChange: (reader) => {
            dispatch(changeHighlightStyle(reader.style));
        } })));
    return (React.createElement(ReaderContext.Provider, { value: { reader: readerRef.current } }, children));
};
/* Provides the store */
const StoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(rootReducer, globalState);
    return (React.createElement(StoreContext.Provider, { value: { state, dispatch } }, children));
};

const ShowButton = () => {
    const { dispatch } = useStore();
    const handleShowReader = (e) => {
        e.stopPropagation();
        dispatch(changeUIState({ isVisible: true }));
    };
    return (React.createElement("div", { title: 'Show', className: styles$f.showButton, onPointerDown: handleShowReader, onTouchEnd: (e) => {
            e.preventDefault();
            e.stopPropagation();
        } },
        React.createElement("div", { className: styles$f.line }),
        React.createElement(IoMdArrowBack_1, { className: styles$f.arrow })));
};

// THIS FILE IS AUTO GENERATED
var GenIcon$g = esm.GenIcon;
var AiFillFastBackward_1 = function AiFillFastBackward (props) {
  return GenIcon$g({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$f = esm.GenIcon;
var AiFillFastForward_1 = function AiFillFastForward (props) {
  return GenIcon$f({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M793.8 499.3L506.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.6c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8a16.14 16.14 0 0 0 0-25.4zm-320 0L186.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.5c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8c4.1-3.2 6.2-8 6.2-12.7 0-4.6-2.1-9.4-6.2-12.6zM857.6 248h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$e = esm.GenIcon;
var AiFillPlayCircle_1 = function AiFillPlayCircle (props) {
  return GenIcon$e({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$d = esm.GenIcon;
var AiFillPauseCircle_1 = function AiFillPauseCircle (props) {
  return GenIcon$d({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$c = esm.GenIcon;
var BiReset_1 = function BiReset (props) {
  return GenIcon$c({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12,16c1.671,0,3-1.331,3-3s-1.329-3-3-3s-3,1.331-3,3S10.329,16,12,16z"}},{"tag":"path","attr":{"d":"M20.817,11.186c-0.12-0.583-0.297-1.151-0.525-1.688c-0.225-0.532-0.504-1.046-0.83-1.531 c-0.324-0.479-0.693-0.926-1.098-1.329c-0.404-0.406-0.853-0.776-1.332-1.101c-0.483-0.326-0.998-0.604-1.528-0.829 c-0.538-0.229-1.106-0.405-1.691-0.526c-0.6-0.123-1.219-0.182-1.838-0.18V2L8,5l3.975,3V6.002C12.459,6,12.943,6.046,13.41,6.142 c0.454,0.094,0.896,0.231,1.314,0.409c0.413,0.174,0.813,0.392,1.188,0.644c0.373,0.252,0.722,0.54,1.038,0.857 c0.315,0.314,0.604,0.663,0.854,1.035c0.254,0.376,0.471,0.776,0.646,1.191c0.178,0.417,0.314,0.859,0.408,1.311 C18.952,12.048,19,12.523,19,13s-0.048,0.952-0.142,1.41c-0.094,0.454-0.23,0.896-0.408,1.315 c-0.175,0.413-0.392,0.813-0.644,1.188c-0.253,0.373-0.542,0.722-0.858,1.039c-0.315,0.316-0.663,0.603-1.036,0.854 c-0.372,0.251-0.771,0.468-1.189,0.645c-0.417,0.177-0.858,0.314-1.311,0.408c-0.92,0.188-1.906,0.188-2.822,0 c-0.454-0.094-0.896-0.231-1.314-0.409c-0.416-0.176-0.815-0.393-1.189-0.645c-0.371-0.25-0.719-0.538-1.035-0.854 c-0.315-0.316-0.604-0.665-0.855-1.036c-0.254-0.376-0.471-0.776-0.646-1.19c-0.178-0.418-0.314-0.86-0.408-1.312 C5.048,13.952,5,13.477,5,13H3c0,0.611,0.062,1.221,0.183,1.814c0.12,0.582,0.297,1.15,0.525,1.689 c0.225,0.532,0.504,1.046,0.831,1.531c0.323,0.477,0.692,0.924,1.097,1.329c0.406,0.407,0.854,0.777,1.331,1.099 c0.479,0.325,0.994,0.604,1.529,0.83c0.538,0.229,1.106,0.405,1.691,0.526C10.779,21.938,11.389,22,12,22s1.221-0.062,1.814-0.183 c0.583-0.121,1.151-0.297,1.688-0.525c0.537-0.227,1.052-0.506,1.53-0.83c0.478-0.322,0.926-0.692,1.331-1.099 c0.405-0.405,0.774-0.853,1.1-1.332c0.325-0.483,0.604-0.998,0.829-1.528c0.229-0.54,0.405-1.108,0.525-1.692 C20.938,14.221,21,13.611,21,13S20.938,11.779,20.817,11.186z"}}]})(props);
};

var css_248z$e = ".styles-module_container__2RHmB {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n\tz-index: 1;\n\tmargin: 10px 0px 0px 0px;\n}\n\n.styles-module_minimized__qd4bl {\n\tborder-bottom: 1px;\n\tpadding: 2px 0px 2px 0px;\n}\n\n.styles-module_notMinimized__vhRsj {\n\tpadding-top: 2px;\n}\n\n.styles-module_button__l6T6c {\n\tborder-radius: 50%;\n\tmargin: 2px;\n\tbackground-color: var(--bgColor);\n\tcolor: var(--primaryColor);\n\tfont-weight: normal !important;\n\tcursor: pointer;\n\tborder: 4px solid var(--secondaryColor);\n\ttransition: all 0.2s;\n\tfont-size: 1.5em;\n}\n\n.styles-module_button__l6T6c:hover {\n\tborder: 3px solid var(--primaryColor);\n\tcolor: var(--secondaryColor);\n}\n\n.styles-module_loading__-h2hU {\n\tpointer-events: none;\n}\n\n.styles-module_notLoading__GJ8Ir {\n\tpointer-events: all;\n}\n\n.styles-module_reset__hvUvm {\n\tposition: absolute;\n\ttop: 12px;\n\tright: 0px;\n\tfont-weight: bold;\n\tcursor: pointer;\n\ttransition: 0.2s ease-in;\n\tfont-size: 0.9em;\n\tcolor: var(--primaryColor);\n}\n\n.styles-module_reset__hvUvm:hover {\n\tcolor: var(--secondaryColor);\n}\n\n.styles-module_controlsContainer__nBn7j {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.styles-module_sliderContainer__1XPS- {\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 2px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 70px;\n}\n\n.styles-module_volumeContainer__UORe9 {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 20px;\n}\n\n.styles-module_pitchContainer__cBB1f {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 20px;\n}\n";
var styles$e = {"container":"styles-module_container__2RHmB","minimized":"styles-module_minimized__qd4bl","notMinimized":"styles-module_notMinimized__vhRsj","button":"styles-module_button__l6T6c","loading":"styles-module_loading__-h2hU","notLoading":"styles-module_notLoading__GJ8Ir","reset":"styles-module_reset__hvUvm","controlsContainer":"styles-module_controlsContainer__nBn7j","sliderContainer":"styles-module_sliderContainer__1XPS-","volumeContainer":"styles-module_volumeContainer__UORe9","pitchContainer":"styles-module_pitchContainer__cBB1f"};
styleInject(css_248z$e);

// THIS FILE IS AUTO GENERATED
var GenIcon$b = esm.GenIcon;
var BiVolumeFull_1 = function BiVolumeFull (props) {
  return GenIcon$b({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16,21c3.527-1.547,5.999-4.909,5.999-9S19.527,4.547,16,3v2c2.387,1.386,3.999,4.047,3.999,7S18.387,17.614,16,19V21z"}},{"tag":"path","attr":{"d":"M16 7v10c1.225-1.1 2-3.229 2-5S17.225 8.1 16 7zM4 17h2.697l5.748 3.832C12.612 20.943 12.806 21 13 21c.162 0 .324-.039.472-.118C13.797 20.708 14 20.369 14 20V4c0-.369-.203-.708-.528-.882-.324-.175-.72-.154-1.026.05L6.697 7H4C2.897 7 2 7.897 2 9v6C2 16.103 2.897 17 4 17zM4 9h3c.033 0 .061-.016.093-.019.064-.006.125-.02.188-.038.068-.021.131-.045.192-.078.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033-.061-.033-.123-.058-.19-.078-.064-.019-.126-.032-.192-.038C7.059 15.016 7.032 15 7 15H4V9z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$a = esm.GenIcon;
var BsMusicNote_1 = function BsMusicNote (props) {
  return GenIcon$a({"tag":"svg","attr":{"viewBox":"0 0 16 16","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 3v10H8V3h1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M8 2.82a1 1 0 01.804-.98l3-.6A1 1 0 0113 2.22V4L8 5V2.82z"}}]})(props);
};

var css_248z$d = ".styles-module_container__rkaUB {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n}\n\n.styles-module_container__rkaUB input {\n\twidth: 100%;\n}\n\n.styles-module_container__rkaUB label {\n\tposition: absolute;\n\ttop: 0;\n\tfont-size: 0.7rem;\n\tright: 0%;\n}\n\n.styles-module_container__rkaUB label.styles-module_value__eh3ZO {\n\ttop: -1rem;\n\tcolor: var(--color-extra1);\n}\n\n.styles-module_slider__Lf7kP {\n\twidth: 100%;\n\tappearance: none;\n\theight: 2px;\n\tbackground: var(--primaryColor);\n\toutline: none;\n\topacity: 0.7;\n\ttransition: opacity 0.2s;\n}\n\n.styles-module_slider__Lf7kP:hover {\n\topacity: 1;\n}\n\n.styles-module_slider__Lf7kP::-webkit-slider-thumb {\n\tappearance: none;\n\twidth: 10px; /* Set a specific slider handle width */\n\theight: 10px; /* Slider handle height */\n\tbackground: var(--bgColor);\n\tcursor: pointer; /* Cursor on hover */\n\tborder: 2px solid var(--primaryColor);\n\tborder-radius: 50%;\n\tz-index: 1;\n\tbox-shadow: 0 2px 5px var(--secondaryColor);\n\ttransition: transform 0.1s ease-out;\n}\n.styles-module_slider__Lf7kP::-moz-range-thumb {\n\tappearance: none;\n\twidth: 10px; /* Set a specific slider handle width */\n\theight: 10px; /* Slider handle height */\n\tbackground: var(--bgColor);\n\tcursor: pointer; /* Cursor on hover */\n\tborder: 2px solid var(--primaryColor);\n\tborder-radius: 50%;\n\tz-index: 1;\n\tbox-shadow: 0 2px 5px var(--secondaryColor);\n\ttransition: transform 0.4s ease-out;\n}\n\n.styles-module_slider__Lf7kP::-webkit-slider-thumb:hover {\n\ttransform: scale(1.1);\n\tbox-shadow: 0 2px 10px var(--bgColor);\n}\n\n::-moz-range-thumb:hover {\n\ttransform: scale(1.1);\n\tbox-shadow: 0 2px 10px var(--bgColor);\n}\n\n.styles-module_slider__Lf7kP::-webkit-slider-thumb:active {\n}\n\n::-moz-range-thumb:active {\n}\n\n.styles-module_icon__b92n5 {\n\tfont-size: 0.8rem;\n\t/* margin-right: 3px; */\n}\n\n.styles-module_icon__b92n5 * {\n\tstroke: var(--primaryColor);\n\tcolor: var(--primaryColor);\n}\n";
var styles$d = {"container":"styles-module_container__rkaUB","value":"styles-module_value__eh3ZO","slider":"styles-module_slider__Lf7kP","icon":"styles-module_icon__b92n5"};
styleInject(css_248z$d);

const GenericSlider = (_a) => {
    var { data, onChange, icon } = _a, props = __rest(_a, ["data", "onChange", "icon"]);
    const debouncedOnChange = Utils.debounce(onChange, 5);
    const handleChange = (e) => {
        const value = +e.target.value;
        debouncedOnChange(value);
    };
    return (React.createElement("div", Object.assign({ className: styles$d.container }, props),
        icon && React.createElement("div", { className: styles$d.icon }, icon),
        React.createElement("input", { className: styles$d.slider, min: data.min, max: data.max, step: data.step, type: "range", value: data.value, onChange: handleChange })));
};

const MainControls = () => {
    const { reader } = useReader();
    const { state } = useStore();
    const { state: { isReading, isLoading }, UIState: { isMinimized }, settings: { volume, pitch }, } = state;
    const handleTextReadPlay = () => {
        if (reader === null || reader === void 0 ? void 0 : reader.isPaused())
            reader === null || reader === void 0 ? void 0 : reader.resume();
        else
            reader === null || reader === void 0 ? void 0 : reader.play();
    };
    const handleTextReadPause = () => {
        reader === null || reader === void 0 ? void 0 : reader.pause();
    };
    const handleReset = () => {
        reader === null || reader === void 0 ? void 0 : reader.reset();
    };
    const handleFastBackward = () => {
        if (!reader)
            return;
        if (reader === null || reader === void 0 ? void 0 : reader.options.isChunksModeOn) {
            if (reader.state.currentChunkIndex - 1 >= 0)
                reader.seekTo(reader.state.chunksArray[reader.state.currentChunkIndex - 1]
                    .start);
        }
        else if (reader.state.currentWordIndex - 1 >= 0)
            reader.seekTo(reader.state.currentWordIndex - 1);
    };
    const handleFastForward = () => {
        if (!reader)
            return;
        if (reader === null || reader === void 0 ? void 0 : reader.options.isChunksModeOn) {
            if (reader.state.currentChunkIndex + 1 <
                reader.state.chunksArray.length)
                /* Go to the next chunk */
                reader.seekTo(reader.state.chunksArray[reader.state.currentChunkIndex + 1]
                    .start);
        }
        else if (reader.state.currentWordIndex + 1 <=
            reader.state.wholeTextArray.length)
            reader.seekTo(reader.state.currentWordIndex + 1);
    };
    const handleVolumeChange = (value) => {
        if (!reader)
            return;
        reader.settings.volume = value;
    };
    const handlePitchChange = (value) => {
        if (!reader)
            return;
        reader.settings.pitch = value;
    };
    return (React.createElement("div", { className: `${styles$e.container} ${isMinimized ? styles$e.minimized : styles$e.notMinimized}` },
        !isMinimized && (React.createElement("div", { className: styles$e.sliderContainer },
            React.createElement("div", { className: styles$e.volumeContainer },
                React.createElement(GenericSlider, { title: "Volume", icon: React.createElement(BiVolumeFull_1, null), onChange: handleVolumeChange, data: {
                        min: '0.1',
                        max: '1',
                        step: '0.1',
                        value: volume,
                        unit: 'x',
                    } })),
            React.createElement("div", { className: styles$e.pitchContainer },
                ' ',
                React.createElement(GenericSlider, { title: "Pitch", icon: React.createElement(BsMusicNote_1, null), onChange: handlePitchChange, data: {
                        min: '0.1',
                        max: '2',
                        step: '0.1',
                        value: pitch,
                        unit: 'x',
                    } })))),
        React.createElement("div", { className: styles$e.controlsContainer },
            React.createElement(AiFillFastBackward_1, { className: `${styles$e.button} ${isLoading ? styles$e.loading : styles$e.notLoading}`, title: "Fast backward", onDoubleClick: (e) => e.preventDefault(), onPointerDown: handleFastBackward }),
            isReading ? (React.createElement(AiFillPauseCircle_1, { style: {
                    fontSize: '2em',
                }, className: `${styles$e.button} ${isLoading ? styles$e.loading : styles$e.notLoading}`, title: 'Pause', onPointerDown: handleTextReadPause })) : (React.createElement(AiFillPlayCircle_1, { style: {
                    fontSize: '2em',
                }, className: `${styles$e.button} ${isLoading ? styles$e.loading : styles$e.notLoading}`, title: 'Play', onPointerDown: handleTextReadPlay })),
            React.createElement(AiFillFastForward_1, { title: "Fast forward", className: `${styles$e.button} ${isLoading ? styles$e.loading : styles$e.notLoading}`, onPointerDown: handleFastForward })),
        React.createElement(BiReset_1, { className: styles$e.reset, title: "reset", onPointerDown: handleReset })));
};

// THIS FILE IS AUTO GENERATED
var GenIcon$9 = esm.GenIcon;
var FiMaximize_1 = function FiMaximize (props) {
  return GenIcon$9({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$8 = esm.GenIcon;
var FiMinimize_1 = function FiMinimize (props) {
  return GenIcon$8({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$7 = esm.GenIcon;
var MdClose_1 = function MdClose (props) {
  return GenIcon$7({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(props);
};

var css_248z$c = ".styles-module_container__i2xy1 {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n\theight: 30px;\n\twidth: 100%;\n}\n\n.styles-module_button__9sOag {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tz-index: 100;\n\tfont-size: 1em !important;\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 3px;\n\tborder: 2px solid var(--primaryColor);\n\tbackground-color: var(--bgColor);\n\tcolor: var(--textColor);\n\tfont-weight: bold !important;\n\tcursor: pointer;\n\ttransition: all 0.1s linear;\n}\n\n.styles-module_button__9sOag:hover {\n\tbackground-color: var(--bgColor);\n\tcolor: var(--secondaryColor);\n\ttransform: scale(1.05);\n}\n\n@keyframes styles-module_movingArrow__FUSwM {\n\t0% {\n\t\tleft: -1px;\n\t}\n\n\t25% {\n\t\tleft: -2px;\n\t}\n\n\t50% {\n\t\tleft: -1px;\n\t}\n\n\t75% {\n\t\tleft: 0px;\n\t}\n\n\t100% {\n\t\tleft: -1px;\n\t}\n}\n\n.styles-module_hideButton__ysi6M {\n\tposition: absolute;\n\ttop: 2px;\n\tright: -11px;\n}\n\n.styles-module_minimizeButton__wcU-y {\n\tposition: absolute;\n\ttop: 2px;\n\tright: 11px;\n}\n\n.styles-module_darkModeButton__sdB-D {\n\tposition: absolute;\n\ttop: 2px;\n\tleft: -11px;\n}\n";
var styles$c = {"container":"styles-module_container__i2xy1","button":"styles-module_button__9sOag","hideButton":"styles-module_hideButton__ysi6M","minimizeButton":"styles-module_minimizeButton__wcU-y","darkModeButton":"styles-module_darkModeButton__sdB-D","movingArrow":"styles-module_movingArrow__FUSwM"};
styleInject(css_248z$c);

// THIS FILE IS AUTO GENERATED
var GenIcon$6 = esm.GenIcon;
var BsSun_1 = function BsSun (props) {
  return GenIcon$6({"tag":"svg","attr":{"viewBox":"0 0 16 16","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.202.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L5.232.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.19l-1.532-.245a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.509.36a.25.25 0 00-.154.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334L.79 10.768a.25.25 0 00.154.374l1.51.36a.25.25 0 01.188.282l-.244 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.508a.25.25 0 00-.374-.155l-1.322.812a.25.25 0 01-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z","clipRule":"evenodd"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$5 = esm.GenIcon;
var BsMoon_1 = function BsMoon (props) {
  return GenIcon$5({"tag":"svg","attr":{"viewBox":"0 0 16 16","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z","clipRule":"evenodd"}}]})(props);
};

const WindowControls = () => {
    const { state: { UIState: { isMinimized, isDark }, }, dispatch, } = useStore();
    const handleHideReader = (e) => {
        e.stopPropagation();
        dispatch(changeUIState({ isVisible: false }));
    };
    const toggleMinimizeReader = (e) => {
        e.stopPropagation();
        dispatch(changeUIState({ isMinimized: !isMinimized }));
    };
    const toggleDarkMode = (e) => {
        e.stopPropagation();
        dispatch(changeUIState({ isDark: !isDark }));
    };
    return (React.createElement("div", { className: styles$c.container },
        React.createElement("div", { title: `${isDark ? 'Light' : 'Dark'} Mode`, className: `${styles$c.button} ${styles$c.darkModeButton}`, onPointerDown: toggleDarkMode, onTouchEnd: (e) => {
                e.preventDefault();
                e.stopPropagation();
            } }, isDark ? React.createElement(BsSun_1, null) : React.createElement(BsMoon_1, null)),
        React.createElement("div", { title: 'Hide', className: `${styles$c.button} ${styles$c.hideButton}`, onPointerDown: handleHideReader, onTouchEnd: (e) => {
                e.preventDefault();
                e.stopPropagation();
            } },
            React.createElement(MdClose_1, null)),
        React.createElement("div", { title: isMinimized ? 'Maximize' : 'Minimize', className: `${styles$c.button} ${styles$c.minimizeButton}`, onPointerDown: toggleMinimizeReader, onTouchEnd: (e) => {
                e.preventDefault();
                e.stopPropagation();
            } }, isMinimized ? React.createElement(FiMaximize_1, null) : React.createElement(FiMinimize_1, null))));
};

var css_248z$b = ".styles-module_container__0pmKL {\n\twidth: 100%;\n\ttext-align: center;\n\tposition: relative;\n\tz-index: 2;\n\t/* margin: 25x 0px 5px 0px; */\n}\n\n.styles-module_minimized__YNN-c {\n\twidth: 90%;\n\t/* margin: 30px 0px 10px 0px; */\n}\n\n.styles-module_seekbar__vpQeo {\n\twidth: 100%;\n\tappearance: none;\n\theight: 2px;\n\tbackground: var(--primaryColor);\n\toutline: none;\n\topacity: 0.7;\n\ttransition: opacity 0.2s;\n\tpadding: 0 !important;\n}\n\n.styles-module_seekbar__vpQeo::-webkit-slider-thumb {\n\tappearance: none;\n\twidth: 14px; /* Set a specific slider handle width */\n\theight: 14px; /* Slider handle height */\n\tbackground: var(--bgColor);\n\tcursor: grab; /* Cursor on hover */\n\tborder: 2px solid var(--primaryColor);\n\tborder-radius: 50%;\n\tz-index: 1;\n\tbox-shadow: 0 2px 5px var(--secondaryColor);\n\ttransition: transform 0.1s ease-out;\n}\n.styles-module_seekbar__vpQeo::-moz-range-thumb {\n\tappearance: none;\n\twidth: 14px; /* Set a specific slider handle width */\n\theight: 14px; /* Slider handle height */\n\tbackground: var(--bgColor);\n\tcursor: pointer; /* Cursor on hover */\n\tborder: 2px solid var(--primaryColor);\n\tborder-radius: 50%;\n\tz-index: 1;\n\tbox-shadow: 0 2px 5px var(--secondaryColor);\n\ttransition: transform 0.4s ease-out;\n}\n\n.styles-module_seekbar__vpQeo::-webkit-slider-thumb:hover {\n\ttransform: scale(1.1);\n\tbox-shadow: 0 2px 10px var(--bgColor);\n}\n\n.styles-module_seekbar__vpQeo::-webkit-slider-thumb:active {\n\tcursor: grabbing;\n}\n\n.styles-module_time__HfKnv {\n\twidth: 50px;\n\tfont-size: 0.7em !important;\n\tfont-weight: normal !important;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 20px;\n\tleft: -15px;\n\tz-index: 100 !important;\n\tcolor: var(--textColor);\n\tmargin: 0 !important;\n\tline-height: normal;\n}\n";
var styles$b = {"container":"styles-module_container__0pmKL","minimized":"styles-module_minimized__YNN-c","seekbar":"styles-module_seekbar__vpQeo","time":"styles-module_time__HfKnv"};
styleInject(css_248z$b);

const SeekBar = () => {
    const { reader } = useReader();
    const { state } = useStore();
    const { state: { elapsedTime, numberOfWords, currentWordIndex, duration }, UIState: { isMinimized }, } = state;
    const debouncedHandleManualSeek = Utils.debounce((reader === null || reader === void 0 ? void 0 : reader.seekTo.bind(reader)) || Function, 3);
    const handleManualSeek = (e) => {
        if (!reader)
            return;
        const value = +e.target.value;
        debouncedHandleManualSeek(value);
    };
    return (React.createElement("div", { className: `${styles$b.container} ${isMinimized && styles$b.minimized}` },
        React.createElement("h5", { className: styles$b.time }, Utils.formatMsToTime(elapsedTime)),
        React.createElement("input", { className: styles$b.seekbar, type: "range", min: "0", max: numberOfWords - 1, step: "1", value: currentWordIndex, onChange: handleManualSeek }),
        React.createElement("h5", { style: { left: 'auto', right: '-15px' }, className: styles$b.time },
            Utils.formatMsToTime(duration),
            "*")));
};

const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
        const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event === null || event === void 0 ? void 0 : event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        document.addEventListener('pointerDown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
            document.removeEventListener('pointerDown', listener);
        };
    }, 
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]);
};
const useScrollToTop = () => {
    React.useEffect(() => {
        setTimeout(() => window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        }), 0);
    }, []);
};

var css_248z$a = ".styles-module_container__dB4nt {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: auto;\n\theight: 100%;\n}\n\n.styles-module_optionsContainer__miH3Q {\n\tposition: absolute;\n\topacity: 0;\n\tpointer-events: none;\n\twidth: 100%;\n\theight: 40px;\n\tbottom: 0px;\n\tright: 0;\n\tbackground-color: var(--bgColor);\n\tcolor: var(--primaryColor);\n\tz-index: 100;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.styles-module_optionsWrapper__JBONI {\n\theight: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\toverflow-y: auto;\n}\n\n.styles-module_optionsContainer__miH3Q i {\n\tmargin: 3px;\n}\n\n.styles-module_visible__eJpaP {\n\topacity: 1;\n\tpointer-events: all;\n}\n\n.styles-module_extraComponentWrapper__3xRJY {\n\tpadding: 0px 5px 0px 10px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n}\n";
var styles$a = {"container":"styles-module_container__dB4nt","optionsContainer":"styles-module_optionsContainer__miH3Q","optionsWrapper":"styles-module_optionsWrapper__JBONI","visible":"styles-module_visible__eJpaP","extraComponentWrapper":"styles-module_extraComponentWrapper__3xRJY"};
styleInject(css_248z$a);

const CustomSelect = (_a) => {
    var { options, value, title, onChange, Icon, ExtraComponent } = _a, props = __rest(_a, ["options", "value", "title", "onChange", "Icon", "ExtraComponent"]);
    const currentOption = React.useMemo(() => options.find((o) => o.value === value), [options, value]);
    const [showOptions, setShowOptions] = React.useState(false);
    const [localOption, setLocalOption] = React.useState(currentOption); // This state is used only locally to the selector
    const ref = React.useRef(null);
    const show = React.useCallback(() => {
        setShowOptions(true);
    }, []);
    const hide = React.useCallback(() => {
        setShowOptions(false);
    }, []);
    const onOptionClick = (val) => {
        onChange(val);
        hide();
    };
    const changeLocalOption = (value) => {
        setLocalOption(value);
    };
    useOnClickOutside(ref, hide);
    return (React.createElement("div", Object.assign({ className: styles$a.container }, props, { ref: ref }),
        React.createElement(Icon, { onPointerDown: (e) => {
                e.stopPropagation();
                show();
            }, option: currentOption }),
        React.createElement("div", { className: `${styles$a.optionsContainer} ${showOptions && styles$a.visible}` },
            React.createElement("div", { className: styles$a.optionsWrapper }, options.map((opt) => (React.createElement(Icon, { key: opt.value, onPointerDown: (e) => {
                    e.stopPropagation();
                    onOptionClick(opt.value);
                }, onMouseEnter: () => changeLocalOption(opt), option: opt })))),
            ExtraComponent && (React.createElement("div", { className: styles$a.extraComponentWrapper },
                React.createElement(ExtraComponent, { option: localOption }))))));
};

var css_248z$9 = ".styles-module_container__69qRW {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n\theight: 50px;\n}\n\n.styles-module_optionsWrapper1__OJ-aO {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-end;\n}\n.styles-module_optionsWrapper2__5V17- {\n\twidth: 200px;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n";
var styles$9 = {"container":"styles-module_container__69qRW","optionsWrapper1":"styles-module_optionsWrapper1__OJ-aO","optionsWrapper2":"styles-module_optionsWrapper2__5V17-"};
styleInject(css_248z$9);

var css_248z$8 = ".styles-module_container__bAbpe {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: auto;\n}\n\n.styles-module_icon__J4xQk {\n\tfont-size: 1.1em;\n\tpadding: 0px;\n\tcursor: pointer;\n\ttransition: all 0.4s ease-out;\n}\n\n.styles-module_icon__J4xQk path {\n\tfill: var(--primaryColor);\n}\n.styles-module_icon__J4xQk:hover path {\n\tfill: var(--secondaryColor);\n}\n\n.styles-module_overlayContainer__iWVEa {\n\topacity: 0;\n\tpointer-events: none;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 40px;\n\tbottom: 0px;\n\tright: 0px;\n\tbackground-color: var(--bgColor);\n\tcolor: var(--primaryColor);\n\tz-index: 100;\n\tdisplay: flex;\n\tjustify-content: start;\n\talign-items: start;\n\tflex-wrap: wrap;\n\ttransition: all 0.2s linear;\n\tpadding: 0px 0px 0px 10px;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n\n.styles-module_overlayContainer__iWVEa label {\n\tpadding: 0px;\n\tmargin: 0px;\n\tdisplay: flex;\n\twidth: 33%;\n}\n\n.styles-module_overlayContainer__iWVEa input {\n\tcursor: pointer;\n}\n\n.styles-module_overlayContainer__iWVEa h5 {\n\tpadding: 0px;\n\tmargin: 0px;\n\tfont-size: 0.6em;\n\tmargin-left: 1px;\n\tfont-weight: normal !important;\n\tline-height: 20px !important;\n}\n\n.styles-module_visible__Ci-XW {\n\topacity: 1;\n\tpointer-events: all;\n}\n";
var styles$8 = {"container":"styles-module_container__bAbpe","icon":"styles-module_icon__J4xQk","overlayContainer":"styles-module_overlayContainer__iWVEa","visible":"styles-module_visible__Ci-XW"};
styleInject(css_248z$8);

// THIS FILE IS AUTO GENERATED
var GenIcon$4 = esm.GenIcon;
var FcSettings_1 = function FcSettings (props) {
  return GenIcon$4({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M39.6,27.2c0.1-0.7,0.2-1.4,0.2-2.2s-0.1-1.5-0.2-2.2l4.5-3.2c0.4-0.3,0.6-0.9,0.3-1.4L40,10.8 c-0.3-0.5-0.8-0.7-1.3-0.4l-5,2.3c-1.2-0.9-2.4-1.6-3.8-2.2l-0.5-5.5c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9l-0.5,5.5 c-1.4,0.6-2.7,1.3-3.8,2.2l-5-2.3c-0.5-0.2-1.1,0-1.3,0.4l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4l4.5,3.2c-0.1,0.7-0.2,1.4-0.2,2.2 s0.1,1.5,0.2,2.2L4,30.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,39.2c0.3,0.5,0.8,0.7,1.3,0.4l5-2.3c1.2,0.9,2.4,1.6,3.8,2.2l0.5,5.5 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.5-5.5c1.4-0.6,2.7-1.3,3.8-2.2l5,2.3c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L39.6,27.2z M24,35c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C34,30.5,29.5,35,24,35z"}},{"tag":"path","attr":{"fill":"#455A64","d":"M24,13c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C36,18.4,30.6,13,24,13z M24,30 c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C29,27.8,26.8,30,24,30z"}}]})(props);
};

const useOptions = () => {
    const { reader } = useReader();
    const { state } = useStore();
    const { options: { isChunksModeOn, isHighlightTextOn, isPreserveHighlighting, isUnderlinedOn, isBrushOn, }, } = state;
    /* Options Handlers */
    const options = React.useMemo(() => {
        const handlePreserveHighlighting = (e) => {
            if (!reader)
                return;
            const target = e.target;
            reader.options.isPreserveHighlighting = target.checked;
        };
        const handleIsHighlightTextOn = (e) => {
            if (!reader)
                return;
            const target = e.target;
            reader.options.isHighlightTextOn = target.checked;
        };
        const handleIsChunksModeOn = (e) => {
            if ((reader === null || reader === void 0 ? void 0 : reader.deviceInfo.isMobile) || !reader)
                return; // Disable this option for mobile devices
            const target = e.target;
            reader.options.isChunksModeOn = target.checked;
        };
        const handleIsUnderlinedOn = (e) => {
            if (!reader)
                return;
            const target = e.target;
            reader.options.isUnderlinedOn = target.checked;
        };
        const handleIsBrushOn = (e) => {
            if (!reader)
                return;
            const target = e.target;
            reader.options.isBrushOn = target.checked;
        };
        return [
            {
                id: 'highlight-option',
                label: 'Highlight',
                value: isHighlightTextOn,
                handler: handleIsHighlightTextOn,
            },
            {
                id: 'preserve-option',
                label: 'Preserve',
                value: isPreserveHighlighting,
                handler: handlePreserveHighlighting,
            },
            {
                id: 'chunksmode-option',
                label: 'Chunks',
                value: isChunksModeOn,
                handler: handleIsChunksModeOn,
            },
            {
                id: 'underlined-option',
                label: 'Underline',
                value: isUnderlinedOn,
                handler: handleIsUnderlinedOn,
            },
            {
                id: 'brush-option',
                label: 'Brush',
                value: isBrushOn,
                handler: handleIsBrushOn,
            },
        ];
    }, [
        isBrushOn,
        isChunksModeOn,
        isHighlightTextOn,
        isPreserveHighlighting,
        isUnderlinedOn,
        reader,
    ]);
    return options;
};

const Options = () => {
    const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);
    const ref = React.useRef(null);
    const showOptions = () => {
        setIsOptionsVisible(true);
    };
    const hideOptions = () => {
        setIsOptionsVisible(false);
    };
    const options = useOptions();
    useOnClickOutside(ref, hideOptions);
    return (React.createElement("div", { className: styles$8.container, ref: ref },
        React.createElement(FcSettings_1, { className: styles$8.icon, onPointerDown: showOptions }),
        React.createElement("div", { className: `${styles$8.overlayContainer} ${isOptionsVisible && styles$8.visible}`, onPointerDown: hideOptions }, options.map((o) => (React.createElement("label", { key: o.id, htmlFor: o.id, onPointerDown: (e) => e.stopPropagation() },
            React.createElement("input", { id: o.id, type: "checkbox", checked: o.value, onChange: o.handler }),
            React.createElement("h5", null, o.label)))))));
};

var css_248z$7 = ".styles-module_icon__Z2LW9 {\n\tdisplay: inline-block;\n\twidth: 16px;\n\theight: 16px;\n\tmargin: 0px 5px 0px 5px;\n\tcursor: pointer;\n\t/* border: 2px solid #111; */\n\tborder-radius: 4px;\n\ttransition: all 0.1s ease-in;\n\tbox-shadow: 0px 0px 2px 1px var(--primaryColor);\n}\n\n.styles-module_icon__Z2LW9:hover {\n\ttransform: scale(1.05);\n}\n";
var styles$7 = {"icon":"styles-module_icon__Z2LW9"};
styleInject(css_248z$7);

/* React Components */
const ColorIcon = (_a) => {
    var { children, option } = _a, props = __rest(_a, ["children", "option"]);
    return (option && (React.createElement("span", Object.assign({ className: styles$7.icon, style: { backgroundColor: option.value } }, props), children)));
};

var css_248z$6 = ".styles-module_container__dGcW- {\n\tposition: relative;\n\tfont-size: 0.7em;\n\tfont-weight: bold;\n\tcolor: var(--primaryColor);\n\tcursor: pointer;\n\ttransition: all 0.5s linear;\n\tborder: none;\n\tbackground: none;\n\tpadding: 1px 6px !important;\n\tline-height: normal !important;\n\twhite-space: nowrap;\n}\n\n.styles-module_container__dGcW-:hover {\n\tcolor: var(--secondaryColor);\n}\n.styles-module_container__dGcW-::after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 0;\n\tbottom: -2px;\n\twidth: 0px;\n\theight: 1.2px;\n\tbackground-color: var(--primaryColor);\n\ttransition: all 0.2s ease-in;\n}\n.styles-module_container__dGcW-:hover::after {\n\twidth: 100%;\n}\n";
var styles$6 = {"container":"styles-module_container__dGcW-"};
styleInject(css_248z$6);

const UnderlinedTextIcon = (_a) => {
    var { children, option } = _a, props = __rest(_a, ["children", "option"]);
    return (option && (React.createElement("div", Object.assign({ className: styles$6.container }, props),
        option.name,
        children)));
};

var css_248z$5 = ".styles-module_container__k5Fas {\n\tposition: relative;\n\twidth: 35px;\n\theight: 35px;\n\toverflow: hidden;\n\tborder-radius: 5px;\n\ttransition: all 0.2s ease-in-out;\n\tbox-shadow: 0px 0px 2px 1px var(--primaryColor);\n}\n\n.styles-module_label__9Eq-Q {\n\twidth: 35px;\n\ttext-align: center;\n\tposition: absolute;\n\ttop: 10px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tfont-size: 8px;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: #fff;\n\ttext-overflow: ellipsis;\n\tmix-blend-mode: exclusion;\n\toverflow: hidden;\n\twhite-space: pre-wrap;\n\tfont-weight: normal;\n}\n\n.styles-module_ascii__iK7ja {\n\tposition: absolute;\n\tbottom: 2px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tfont-size: 6px;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: #fff;\n\tmix-blend-mode: difference;\n}\n";
var styles$5 = {"container":"styles-module_container__k5Fas","label":"styles-module_label__9Eq-Q","ascii":"styles-module_ascii__iK7ja"};
styleInject(css_248z$5);

/* React Components */
const ColorPreview = ({ option }) => {
    return (React.createElement("div", { className: styles$5.container, style: { backgroundColor: option.value } },
        React.createElement("h5", { className: styles$5.label }, option.name)));
};

var css_248z$4 = ".styles-module_icon__zepm5 {\n\tposition: relative;\n\twidth: 16px;\n\theight: 16px;\n\tmargin: 0px 5px 0px 5px;\n\tcursor: pointer;\n\tborder-radius: 2px;\n\tpadding: 2px;\n\ttransition: all 0.1s ease-in;\n\tbox-shadow: 0px 0px 2px 1px var(--primaryColor);\n\tbackground-size: cover;\n\n}\n\n.styles-module_icon__zepm5:hover {\n\ttransform: scale(1.05);\n}\n\n.styles-module_label__y4R48 {\n\tposition: absolute;\n\tbottom: 0px;\n\tright: 2px;\n\tcolor: var(--bgColor);\n\t/* mix-blend-mode: exclusion; */\n\tfont-size: 8px;\n}\n";
var styles$4 = {"icon":"styles-module_icon__zepm5","label":"styles-module_label__y4R48"};
styleInject(css_248z$4);

/* React Components */
const BrushIcon = (_a) => {
    var { children, option } = _a, props = __rest(_a, ["children", "option"]);
    const { state } = useStore();
    const { color1 } = state.highlightStyle;
    const URL = Utils.getBrushURL(option.value, color1);
    return (option && (React.createElement("div", Object.assign({ className: styles$4.icon, style: { backgroundImage: URL.css } }, props),
        React.createElement("h5", { className: styles$4.label }, option.name),
        children)));
};

var css_248z$3 = ".styles-module_container__UeFFK {\n\tposition: relative;\n\twidth: 60px;\n\theight: 28px;\n\toverflow: hidden;\n\tborder-radius: 5px;\n\ttransition: all 0.2s ease-in-out;\n\tbox-shadow: 0px 0px 2px 1px var(--primaryColor);\n\tbackground-size: cover;\n}\n\n.styles-module_label__e3y03 {\n\twidth: 35px;\n\ttext-align: center;\n\tposition: absolute;\n\ttop: 10px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tfont-size: 8px;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: #fff;\n\ttext-overflow: ellipsis;\n\tmix-blend-mode: exclusion;\n\toverflow: hidden;\n\twhite-space: pre-wrap;\n\tfont-weight: normal;\n}\n\n.styles-module_ascii__MLhac {\n\tposition: absolute;\n\tbottom: 2px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tfont-size: 6px;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: #fff;\n\tmix-blend-mode: difference;\n}\n";
var styles$3 = {"container":"styles-module_container__UeFFK","label":"styles-module_label__e3y03","ascii":"styles-module_ascii__MLhac"};
styleInject(css_248z$3);

/* React Components */
const BrushPreview = ({ option }) => {
    const { state } = useStore();
    const { color1 } = state.highlightStyle;
    const URL = Utils.getBrushURL(option.value, color1);
    return (React.createElement("div", { className: styles$3.container, style: { backgroundImage: URL.css } }));
};

var css_248z$2 = ".styles-module_container__9-aGo {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: auto;\n}\n\n.styles-module_icon__BWG4b {\n\tfont-size: 1.1em;\n\tpadding: 0px;\n\tcursor: pointer;\n\tmargin-right: 5px;\n\ttransition: all 0.4s ease-out;\n}\n\n.styles-module_icon__BWG4b path {\n\tfill: var(--primaryColor);\n}\n.styles-module_icon__BWG4b:hover path {\n\tfill: var(--secondaryColor);\n}\n\n.styles-module_overlayContainer__-d-Ra {\n\topacity: 0;\n\tpointer-events: none;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbottom: 0px;\n\tright: 0px;\n\tbackground-color: var(--bgColor);\n\tcolor: var(--primaryColor);\n\tz-index: 2;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttransition: all 0.2s linear;\n\tpadding: 25px 20px 5px 20px;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n\n.styles-module_overlayContainer__-d-Ra label {\n\tpadding: 0px;\n\tmargin: 0px;\n\tdisplay: flex;\n\tfont-size: 0.9em;\n}\n\n.styles-module_overlayContainer__-d-Ra h5 {\n\tpadding: 0px;\n\tmargin: 0px;\n\tfont-size: 0.8em;\n\tmargin-left: 1px;\n\tfont-weight: normal !important;\n\tline-height: 20px !important;\n}\n\n.styles-module_overlayContainer__-d-Ra a {\n\tcolor: var(--secondaryColor);\n\ttext-decoration: none;\n}\n\n.styles-module_visible__js5U4 {\n\topacity: 1;\n\tpointer-events: all;\n}\n\n.styles-module_name__KgWLV {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 10px;\n}\n\n.styles-module_name__KgWLV i {\n\tmargin-right: 10px;\n}\n\n.styles-module_infoWrapper__ZLhGa {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: flex-start;\n\toverflow: hidden;\n}\n\n.styles-module_info__GKdTQ {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tflex-wrap: wrap;\n}\n\n.styles-module_info__GKdTQ a {\n\tmargin-left: 5px;\n}\n\n.styles-module_buttonsContainer__4OlR2 {\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.styles-module_buttonsContainer__4OlR2 a {\n\tfont-size: 1.3em;\n\ttransition: all 0.1s linear;\n}\n\n.styles-module_buttonsContainer__4OlR2 a:hover {\n\tfont-size: 1.3em;\n\ttransform: scale(1.1);\n}\n";
var styles$2 = {"container":"styles-module_container__9-aGo","icon":"styles-module_icon__BWG4b","overlayContainer":"styles-module_overlayContainer__-d-Ra","visible":"styles-module_visible__js5U4","name":"styles-module_name__KgWLV","infoWrapper":"styles-module_infoWrapper__ZLhGa","info":"styles-module_info__GKdTQ","buttonsContainer":"styles-module_buttonsContainer__4OlR2"};
styleInject(css_248z$2);

// THIS FILE IS AUTO GENERATED
var GenIcon$3 = esm.GenIcon;
var ImInfo_1 = function ImInfo (props) {
  return GenIcon$3({"tag":"svg","attr":{"version":"1.1","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M7 4.75c0-0.412 0.338-0.75 0.75-0.75h0.5c0.412 0 0.75 0.338 0.75 0.75v0.5c0 0.412-0.338 0.75-0.75 0.75h-0.5c-0.412 0-0.75-0.338-0.75-0.75v-0.5z"}},{"tag":"path","attr":{"d":"M10 12h-4v-1h1v-3h-1v-1h3v4h1z"}},{"tag":"path","attr":{"d":"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$2 = esm.GenIcon;
var FaNpm_1 = function FaNpm (props) {
  return GenIcon$2({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$1 = esm.GenIcon;
var FaGithubAlt_1 = function FaGithubAlt (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 480 512"},"child":[{"tag":"path","attr":{"d":"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon = esm.GenIcon;
var FaReadme_1 = function FaReadme (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M528.3 46.5H388.5c-48.1 0-89.9 33.3-100.4 80.3-10.6-47-52.3-80.3-100.4-80.3H48c-26.5 0-48 21.5-48 48v245.8c0 26.5 21.5 48 48 48h89.7c102.2 0 132.7 24.4 147.3 75 .7 2.8 5.2 2.8 6 0 14.7-50.6 45.2-75 147.3-75H528c26.5 0 48-21.5 48-48V94.6c0-26.4-21.3-47.9-47.7-48.1zM242 311.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5V289c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V251zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H78.2c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm259.3 121.7c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.9c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5V228c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5v22.9zm0-60.9c0 1.9-1.5 3.5-3.5 3.5H337.5c-1.9 0-3.5-1.5-3.5-3.5v-22.8c0-1.9 1.5-3.5 3.5-3.5h160.4c1.9 0 3.5 1.5 3.5 3.5V190z"}}]})(props);
};

var name = "react-text2speech";
var version = "3.9.8";
var author = "Cesare Polonara - https://www.cesarepolonara.com";
var repository = {
	url: "https://github.com/Kais3rP/react-text2speech",
	type: "git"
};
var license = "MIT";

const Info = () => {
    const [isInfoVisible, setIsInfoVisible] = React.useState(false);
    const ref = React.useRef(null);
    const showInfo = () => {
        setIsInfoVisible(true);
    };
    const hideInfo = () => {
        setIsInfoVisible(false);
    };
    useOnClickOutside(ref, hideInfo);
    const [_author, _website] = author.split(' - ');
    return (React.createElement("div", { className: styles$2.container, ref: ref },
        React.createElement(ImInfo_1, { className: styles$2.icon, onPointerDown: showInfo }),
        React.createElement("div", { className: `${styles$2.overlayContainer} ${isInfoVisible && styles$2.visible}`, onPointerDown: hideInfo },
            React.createElement("div", { className: styles$2.name },
                React.createElement("i", null, "\uD83D\uDDE3\uFE0F"),
                React.createElement("h4", null, name)),
            React.createElement("div", { className: styles$2.infoWrapper },
                React.createElement("div", { className: styles$2.info },
                    React.createElement("h5", null,
                        "Author:",
                        React.createElement("a", { href: _website, target: "_blank", rel: "noreferrer", onPointerDown: (e) => e.stopPropagation() }, _author)),
                    React.createElement("h5", null,
                        "Version: ",
                        version),
                    React.createElement("h5", null,
                        "License: ",
                        license,
                        " \u00A9 ",
                        name)),
                React.createElement("div", { className: styles$2.buttonsContainer },
                    React.createElement("a", { href: repository.url, target: "_blank", rel: "noreferrer", onPointerDown: (e) => e.stopPropagation() },
                        React.createElement(FaGithubAlt_1, null)),
                    React.createElement("a", { href: "https://www.npmjs.com/package/react-text2speech", target: "_blank", rel: "noreferrer", onPointerDown: (e) => e.stopPropagation() },
                        React.createElement(FaNpm_1, null)),
                    React.createElement("a", { href: `${repository.url}#readme`, target: "_blank", rel: "noreferrer", onPointerDown: (e) => e.stopPropagation() },
                        React.createElement(FaReadme_1, null)))))));
};

const rates = [
    { value: '0.5', name: '0.5x' },
    { value: '0.75', name: '0.75x' },
    { value: '1', name: '1x' },
    { value: '1.25', name: '1.25x' },
    { value: '1.5', name: '1.5x' },
    { value: '2', name: '2x' },
];
const palette = [
    { name: 'Chocolate', value: '#C85A17' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Orange', value: '#FFA500' },
    { name: 'Light Slate Blue', value: '#736AFF' },
    { name: 'Ruby Red', value: '#F62217' },
    { name: 'Bright Neon Pink', value: '#F433FF' },
    { name: 'Desert Sand', value: '#EDC9AF' },
    { name: 'Dark Goldenrod', value: '#AF7817' },
    { name: 'Cotton Candy', value: '#FCDFFF' },
    { name: 'Chartreuse', value: '#8AFB17' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Black', value: '#000000' },
];
const brushes = [
    { name: '1', value: 'brush-1' },
    { name: '2', value: 'brush-2' },
    { name: '3', value: 'brush-3' },
    { name: '4', value: 'brush-4' },
    { name: '5', value: 'brush-5' },
    { name: '6', value: 'brush-6' },
    { name: '7', value: 'brush-7' },
    { name: '8', value: 'brush-8' },
    { name: '9', value: 'brush-9' },
    { name: '10', value: 'brush-10' },
];
const languages = [
    { name: 'English', value: 'en' },
    { name: 'Italian', value: 'it' },
    { name: 'French', value: 'fr' },
    { name: 'Spanish', value: 'es' },
    { name: 'German', value: 'de' },
    { name: 'Chinese', value: 'ch' },
];
const SecondaryControls = () => {
    const { reader } = useReader();
    const { state } = useStore();
    const { state: { voices }, settings: { voiceURI, rate, language }, highlightStyle, } = state;
    /* Settings Handlers */
    const handleRateChange = (value) => {
        if (!reader)
            return;
        reader.settings.rate = +value;
    };
    const handleVoiceChange = (value) => {
        if (!reader)
            return;
        reader.settings.voiceURI = value;
    };
    const handleLanguageChange = (value) => {
        if (!reader)
            return;
        reader.settings.language = value;
    };
    const handleHighlightColorChange = (value) => {
        if (!reader)
            return;
        reader.style.color1 = value;
    };
    const handleHighlightFontColorChange = (value) => {
        if (!reader)
            return;
        reader.style.color2 = value;
    };
    const handleBrushChange = (value) => {
        if (!reader)
            return;
        reader.style.brush = value;
    };
    /* Update the palette colors shown adding the custom highlight colors passed by props on the initial TextReader render */
    const colors = React.useMemo(() => {
        const updatedPalette = [...palette];
        for (const entry of Object.entries(highlightStyle))
            if (!palette.find((c) => c.value === entry[1]) &&
                /color/.test(entry[0]))
                updatedPalette.push({
                    name: entry[1],
                    value: entry[1],
                });
        return updatedPalette;
    }, [highlightStyle]);
    const formattedVoices = React.useMemo(() => Utils.formatVoices(voices), [voices]);
    return (React.createElement("div", { className: styles$9.container },
        React.createElement("div", { className: styles$9.optionsWrapper1 },
            React.createElement(CustomSelect, { name: "rate", options: rates, onChange: handleRateChange, value: rate.toString(), defaultValue: "1", title: "Rate", Icon: UnderlinedTextIcon }),
            React.createElement(CustomSelect, { name: "language", options: languages, onChange: handleLanguageChange, value: language || '', defaultValue: "1", title: "Language", Icon: UnderlinedTextIcon }),
            React.createElement(CustomSelect, { name: "voice", options: formattedVoices, onChange: handleVoiceChange, value: voiceURI || '', defaultValue: "1", title: "Voice", Icon: UnderlinedTextIcon }),
            React.createElement(CustomSelect, { name: "palette", options: colors, onChange: handleHighlightColorChange, value: highlightStyle.color1, defaultValue: "lavander", title: "Palette", Icon: ColorIcon, ExtraComponent: ColorPreview }),
            React.createElement(CustomSelect, { name: "palette", options: colors, onChange: handleHighlightFontColorChange, value: highlightStyle.color2, defaultValue: "lavander", title: "Palette", Icon: ColorIcon, ExtraComponent: ColorPreview }),
            React.createElement(CustomSelect, { name: "brush-type", options: brushes, onChange: handleBrushChange, value: highlightStyle.brush, defaultValue: "lavander", title: "Palette", Icon: BrushIcon, ExtraComponent: BrushPreview })),
        React.createElement("div", { className: styles$9.optionsWrapper2 },
            React.createElement(Info, null),
            React.createElement(Options, null))));
};
// "The Sea's Symphony"
/*
Deep in the ocean blue,
Where colorful fishes swim,
They sing a melody,
A symphony within.

The whales and dolphins join in,
Their songs so grand and true,
The sea is alive, gives chillings,
A symphony for me and you.

The coral reefs, the seaweed beds,
All play their part,
That's a real work of art.

The ocean is a treasure,
We must protect it still,
For the sea's symphony,
Is a melody worth the thrill.

*/

/* Produce the binder to pass the state and the state handlers to the Consumer Component */
const useBindTextReader = () => {
    const { reader } = useReader();
    const { state, dispatch } = useStore();
    const { isMinimized, isVisible, isDark } = state.UIState;
    const { isReading, isLoading, elapsedTime, duration } = state.state;
    const { bindReader } = useMainProps();
    const handlers = React.useMemo(() => ({
        showReader: () => {
            dispatch(changeUIState({ isVisible: true }));
        },
        hideReader: () => {
            dispatch(changeUIState({ isVisible: false }));
        },
        minimizeReader: () => {
            dispatch(changeUIState({ isMinimized: true }));
        },
        maximizeReader: () => {
            dispatch(changeUIState({ isMinimized: false }));
        },
        play: () => {
            if (reader === null || reader === void 0 ? void 0 : reader.isPaused())
                reader === null || reader === void 0 ? void 0 : reader.resume();
            else
                reader === null || reader === void 0 ? void 0 : reader.play();
        },
        pause: () => reader === null || reader === void 0 ? void 0 : reader.pause(),
    }), [dispatch, reader]);
    React.useLayoutEffect(() => {
        if (!bindReader || typeof bindReader !== 'function')
            return;
        const exposedState = {
            isMinimized,
            isVisible,
            isReading,
            isLoading,
            elapsedTime,
            duration,
            isDark,
        };
        bindReader(exposedState, handlers);
    }, [
        bindReader,
        dispatch,
        handlers,
        isLoading,
        isMinimized,
        isReading,
        isVisible,
        elapsedTime,
        duration,
        isDark,
    ]);
};
/* Initialize the Reader and synchronize its internal state with the TextReader state */
const useInitializeReader = () => {
    const { reader } = useReader();
    const { dispatch } = useStore();
    React.useEffect(() => {
        /* Reset browser active speech synth queue on refresh or new load */
        var _a;
        (_a = window.speechSynthesis) === null || _a === void 0 ? void 0 : _a.cancel();
        reader === null || reader === void 0 ? void 0 : reader.init().then((reader) => {
            /* Synchronize UI state with reader initial state */
            dispatch(changeState(reader.state));
            dispatch(changeSettings(reader.settings));
            dispatch(changeOptions(reader.options));
            dispatch(changeHighlightStyle(reader.style));
        }).catch((e) => {
            dispatch(updateError({ message: e.message, object: e }));
        });
        return () => { var _a; return (_a = window.speechSynthesis) === null || _a === void 0 ? void 0 : _a.cancel(); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reader]);
};
/* Set the theme passed by props as CSS root variables ( calculate the inverted theme for dark/light mode ) */
const useSetCSSVariables = () => {
    const { state: { UIState: { isDark }, }, } = useStore();
    const { styleOptions } = useMainProps();
    const { lightTheme, darkTheme } = React.useMemo(() => {
        let lightTheme = {
            primaryColor: '',
            secondaryColor: '',
            bgColor: '',
            textColor: '',
            highlightColor1: '',
            highlightColor2: '',
        };
        let darkTheme = {
            primaryColor: '',
            secondaryColor: '',
            bgColor: '',
            textColor: '',
            highlightColor1: '',
            highlightColor2: '',
        };
        const inverted = Object.entries(styleOptions).reduce((acc, [key, value]) => {
            if (key === 'highlightColor1' || key === 'highlightColor2')
                return Object.assign(Object.assign({}, acc), { [key]: value });
            else
                return Object.assign(Object.assign({}, acc), { [key]: Utils.invertColor(value) });
        }, {});
        lightTheme = Utils.isDarkColor(styleOptions.bgColor)
            ? inverted
            : Object.assign({}, styleOptions);
        darkTheme = Utils.isDarkColor(styleOptions.bgColor)
            ? Object.assign({}, styleOptions) : inverted;
        return { lightTheme, darkTheme };
    }, [styleOptions]);
    React.useEffect(() => {
        const theme = isDark ? darkTheme : lightTheme;
        for (const entry of Object.entries(theme))
            document.documentElement.style.setProperty(`--${entry[0]}`, entry[1]);
    }, [isDark, darkTheme, lightTheme]);
};
/* Check the User Agent color scheme */
const useUserColorScheme = () => {
    const { dispatch } = useStore();
    React.useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        dispatch(changeUIState({ isDark }));
    }, [dispatch]);
};

var css_248z$1 = ".styles-module_container__xkMLR {\n\topacity: 0;\n\twidth: min(100vw, 350px);\n\t/* height: 135px; */\n\tright: -350px;\n\tfont-size: 16px;\n\tposition: fixed;\n\tz-index: 1000;\n\tbottom: 2px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 5px;\n\tbox-shadow: 0px 0px 10px 2px #aaa;\n\tbackground-color: var(--bgColor);\n\tfont-family: Arial, sans-serif !important;\n\tbox-sizing: border-box;\n\ttransition: right 0.1s ease-out, width 0.05s linear, height 0.05s linear,\n\t\topacity 0.7s ease-out;\n\tpadding: 0px 15px;\n}\n\n.styles-module_container__xkMLR * {\n\tbox-sizing: border-box;\n}\n\n.styles-module_container__xkMLR h5,\n.styles-module_container__xkMLR h4,\n.styles-module_container__xkMLR h3,\n.styles-module_container__xkMLR h2,\n.styles-module_container__xkMLR h1 {\n\tmargin-block-end: auto;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n}\n\n.styles-module_visible__ZUiLT {\n\tright: 5px;\n\topacity: 1;\n}\n\n.styles-module_minimized__W5TJy {\n\twidth: 150px;\n\theight: 100px;\n}\n";
var styles$1 = {"container":"styles-module_container__xkMLR","visible":"styles-module_visible__ZUiLT","minimized":"styles-module_minimized__W5TJy"};
styleInject(css_248z$1);

var css_248z = ".styles-module_overlay__h8b85 {\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 3;\n\tbackground-color: rgba(242, 236, 236, 0.7);\n\tbackdrop-filter: blur(2px);\n\tfont-size: 0.7em;\n\tcolor: #000;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tpadding: 20px 5px 5px 5px;\n}\n\n.styles-module_error__-Bl5v {\n\t/* background-color: rgba(242, 236, 236, 1);\n\tpadding: 20px;\n\tbackdrop-filter: blur(10px); */\n\tfont-weight: 100;\n}\n";
var styles = {"overlay":"styles-module_overlay__h8b85","error":"styles-module_error__-Bl5v"};
styleInject(css_248z);

const ErrorOverlay = ({ error }) => {
    return (React.createElement("div", { className: styles.overlay },
        React.createElement("h5", { className: styles.error }, error.message)));
};

const TextReader = () => {
    const { state: { UIState: { isMinimized, isVisible }, error, }, } = useStore();
    useScrollToTop();
    useSetCSSVariables();
    useUserColorScheme();
    useBindTextReader();
    useInitializeReader();
    return (React.createElement("div", { className: `${styles$1.container} ${isVisible && styles$1.visible} ${isMinimized && styles$1.minimized}` },
        error && React.createElement(ErrorOverlay, { error: error }),
        React.createElement(WindowControls, null),
        React.createElement(SeekBar, null),
        React.createElement(MainControls, null),
        !isMinimized && React.createElement(SecondaryControls, null)));
};

const Wrapper = () => {
    const { state: { UIState: { isVisible }, }, } = useStore();
    return (React.createElement(React.Fragment, null,
        !isVisible && React.createElement(ShowButton, null),
        React.createElement(TextReader, null)));
};

/* Providers */
const App = ({ options, styleOptions, textContainer, bindReader, }) => {
    return (React.createElement(MainPropsProvider, { value: {
            options,
            styleOptions,
            textContainer,
            bindReader,
        } },
        React.createElement(StoreProvider, null,
            React.createElement(ReaderProvider, null,
                React.createElement(Wrapper, null)))));
};
App.defaultProps = {
    options: {
        language: 'en',
    },
    styleOptions: {
        primaryColor: '#00D',
        secondaryColor: '#55F',
        bgColor: '#FFF',
        textColor: '#222',
        highlightColor1: '#306EFF',
        highlightColor2: '#FCDFFF', // font color
    },
};
/* Exported members */
const useTextReader = () => {
    const [handlers, setHandlers] = React.useState({});
    const [state, setState] = React.useState({});
    const bindReader = React.useCallback((state, handlers) => {
        setState(state);
        setHandlers(handlers);
    }, [setState, setHandlers]);
    return { handlers, state, bindReader };
};

exports.SpeechSynth = SpeechSynth;
exports.default = App;
exports.useTextReader = useTextReader;
//# sourceMappingURL=index.js.map
