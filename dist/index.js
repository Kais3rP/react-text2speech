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

function GenIcon$a(data) {
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
  GenIcon: GenIcon$a,
  IconBase: IconBase,
  IconContext: IconContext,
  IconsManifest: IconsManifest
});

// THIS FILE IS AUTO GENERATED
var GenIcon$9 = esm.GenIcon;
var AiFillFastBackward_1 = function AiFillFastBackward (props) {
  return GenIcon$9({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$8 = esm.GenIcon;
var AiFillFastForward_1 = function AiFillFastForward (props) {
  return GenIcon$8({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M793.8 499.3L506.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.6c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8a16.14 16.14 0 0 0 0-25.4zm-320 0L186.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.5c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8c4.1-3.2 6.2-8 6.2-12.7 0-4.6-2.1-9.4-6.2-12.6zM857.6 248h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$7 = esm.GenIcon;
var AiFillPlayCircle_1 = function AiFillPlayCircle (props) {
  return GenIcon$7({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$6 = esm.GenIcon;
var AiFillPauseCircle_1 = function AiFillPauseCircle (props) {
  return GenIcon$6({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$5 = esm.GenIcon;
var BiReset_1 = function BiReset (props) {
  return GenIcon$5({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12,16c1.671,0,3-1.331,3-3s-1.329-3-3-3s-3,1.331-3,3S10.329,16,12,16z"}},{"tag":"path","attr":{"d":"M20.817,11.186c-0.12-0.583-0.297-1.151-0.525-1.688c-0.225-0.532-0.504-1.046-0.83-1.531 c-0.324-0.479-0.693-0.926-1.098-1.329c-0.404-0.406-0.853-0.776-1.332-1.101c-0.483-0.326-0.998-0.604-1.528-0.829 c-0.538-0.229-1.106-0.405-1.691-0.526c-0.6-0.123-1.219-0.182-1.838-0.18V2L8,5l3.975,3V6.002C12.459,6,12.943,6.046,13.41,6.142 c0.454,0.094,0.896,0.231,1.314,0.409c0.413,0.174,0.813,0.392,1.188,0.644c0.373,0.252,0.722,0.54,1.038,0.857 c0.315,0.314,0.604,0.663,0.854,1.035c0.254,0.376,0.471,0.776,0.646,1.191c0.178,0.417,0.314,0.859,0.408,1.311 C18.952,12.048,19,12.523,19,13s-0.048,0.952-0.142,1.41c-0.094,0.454-0.23,0.896-0.408,1.315 c-0.175,0.413-0.392,0.813-0.644,1.188c-0.253,0.373-0.542,0.722-0.858,1.039c-0.315,0.316-0.663,0.603-1.036,0.854 c-0.372,0.251-0.771,0.468-1.189,0.645c-0.417,0.177-0.858,0.314-1.311,0.408c-0.92,0.188-1.906,0.188-2.822,0 c-0.454-0.094-0.896-0.231-1.314-0.409c-0.416-0.176-0.815-0.393-1.189-0.645c-0.371-0.25-0.719-0.538-1.035-0.854 c-0.315-0.316-0.604-0.665-0.855-1.036c-0.254-0.376-0.471-0.776-0.646-1.19c-0.178-0.418-0.314-0.86-0.408-1.312 C5.048,13.952,5,13.477,5,13H3c0,0.611,0.062,1.221,0.183,1.814c0.12,0.582,0.297,1.15,0.525,1.689 c0.225,0.532,0.504,1.046,0.831,1.531c0.323,0.477,0.692,0.924,1.097,1.329c0.406,0.407,0.854,0.777,1.331,1.099 c0.479,0.325,0.994,0.604,1.529,0.83c0.538,0.229,1.106,0.405,1.691,0.526C10.779,21.938,11.389,22,12,22s1.221-0.062,1.814-0.183 c0.583-0.121,1.151-0.297,1.688-0.525c0.537-0.227,1.052-0.506,1.53-0.83c0.478-0.322,0.926-0.692,1.331-1.099 c0.405-0.405,0.774-0.853,1.1-1.332c0.325-0.483,0.604-0.998,0.829-1.528c0.229-0.54,0.405-1.108,0.525-1.692 C20.938,14.221,21,13.611,21,13S20.938,11.779,20.817,11.186z"}}]})(props);
};

const createAction = (type, payload) => ({
    type,
    payload,
});
/* Actions */
/* Actions that might be used to control the Reader externally */
const setIsReading = (payload) => createAction('SET_IS_READING', payload);
const setIsMinimized = (payload) => createAction('SET_IS_MINIMIZED', payload);
const setIsVisible = (payload) => createAction('SET_IS_VISIBLE', payload);
/* Actions used internally by the Reader  */
const setIsLoading = (payload) => createAction('SET_IS_LOADING', payload);
const setIsSettingsVisible = (payload) => createAction('SET_IS_SETTINGS_VISIBLE', payload);
const setVoices = (payload) => createAction('SET_VOICES', payload);
const setElapsedTime = (payload) => createAction('SET_ELAPSED_TIME', payload);
const setNumberOfWords = (payload) => createAction('SET_NUMBER_OF_WORDS', payload);
const setCurrentWordIndex = (payload) => createAction('SET_CURRENT_WORD_INDEX', payload);
const setDuration = (payload) => createAction('SET_DURATION', payload);
const changeSettings = (payload) => createAction('CHANGE_SETTINGS', payload);
const changeOptions = (payload) => createAction('CHANGE_OPTIONS', payload);

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

class Utils {
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
    }
    static isMobile() {
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
    /* Type Checks */
    static isFunction(fn) {
        return fn && typeof fn === 'function';
    }
}
/* Array utils */
Utils.__join__ = function (fn) {
    let str = ``;
    let i = 0;
    for (const el of this) {
        const separator = fn(el, i, this);
        str = str + el.toString() + separator;
        i++;
    }
    return str;
};

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
    onEnd = () => null, onStart = () => null, onPause = () => null, onResume = () => null, onReset = () => null, onBoundary = () => null, onTimeTick = () => null, onWordClick = () => null, onSeek = () => null, onSettingsChange = () => null, onOptionsChange = () => null, } = {
        /* Generic Settings */
        language: 'en',
        /* Style */
        color1: '#DEE',
        color2: '#9DE',
        /* Ev handlers */
        onPlay: () => null,
        onEnd: () => null,
        onStart: () => null,
        onPause: () => null,
        onResume: () => null,
        onReset: () => null,
        onBoundary: () => null,
        onTimeTick: () => null,
        onWordClick: () => null,
        onSeek: () => null,
        onSettingsChange: () => null,
        onOptionsChange: () => null,
    }) {
        super();
        this.textContainer = textContainer;
        this.style = { color1, color2 };
        /* Instances */
        this.synth = window.speechSynthesis;
        this.utterance = new window.SpeechSynthesisUtterance();
        /* Timeouts */
        this.timeoutRef = undefined;
        this.seekTimeoutRef = undefined;
        this.editTimeoutRef = undefined;
        /* Events */
        this.events = [
            { type: 'boundary', handlers: [onBoundary] },
            { type: 'time-tick', handlers: [onTimeTick] },
            { type: 'word-click', handlers: [onWordClick] },
            { type: 'start', handlers: [onStart] },
            { type: 'pause', handlers: [onPause] },
            { type: 'resume', handlers: [onResume] },
            { type: 'reset', handlers: [onReset] },
            { type: 'seek', handlers: [onSeek] },
            { type: 'end', handlers: [onEnd] },
            { type: 'settings-change', handlers: [onSettingsChange] },
            { type: 'options-change', handlers: [onOptionsChange] },
        ];
        /* @@@ Proxies @@@ */
        /* Settings (Utterance settings) */
        const settingsSetter = (obj, key, value) => {
            this.emit('settings-change', this);
            return Reflect.set(obj, key, value);
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
            this.emit('options-change', this);
            return Reflect.set(obj, key, value);
        };
        this.options = new Proxy({
            isHighlightTextOn: true,
            isChunksModeOn: Utils.isMobile(),
            isPreserveHighlighting: true,
        }, {
            set: optionsSetter,
        });
        /* State */
        const stateSetter = (obj, key, value) => {
            console.log('State trap', key, value);
            if (key === 'currentWordIndex')
                this.emit('seek', this);
            this.emit('state-change');
            return Reflect.set(obj, key, value);
        };
        this.state = new Proxy({
            isMobile: Utils.isMobile(),
            /* Internal properties */
            voice: {},
            voices: [],
            /* UI */
            isLoading: true,
            /* Highlight & Reading time */
            tagIndex: 0,
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
            /* Controls  */
            isPaused: false,
            isReading: false,
        }, {
            set: stateSetter,
        });
    }
    /*
    This method handles the DOM traversing to add the Highlightint tags to the readable elements and all the logic in it is responsible
    for how the text content appears visually
    e.g. alignment of punctuation, spaces, etc...
    */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            /* Add custom methods to primitives */
            // eslint-disable-next-line no-extend-native
            Array.prototype.__join__ = Utils.__join__;
            /* Get voices */
            try {
                this.state.voices = yield this.getVoices();
                this.state.voice = this.state.voices[0];
                this.settings.voiceURI = this.state.voice.voiceURI;
                /* Add HTML highlight tags if SSR is off, in SSR the tags are added server side invoking the method ".addHTMLHighlightTags"
        on stringified HTML */
                this.addHTMLHighlightTags(this.textContainer);
                /* Add basic style to the words that have just been tagged wit HTML tags */
                this.applyBasicStyleToWords(this.textContainer, '[data-id]');
                /* Init state properties */
                /* Get the total number of words to highlight */
                this.state.numberOfWords = this.retrieveNumberOfWords(this.textContainer, '[data-id]');
                /* Get the whole raw text */
                this.state.wholeText = this.retrieveWholeText(this.textContainer, '[data-id]');
                this.state.textRemaining = this.state.wholeText;
                /* Get the total estimated duration of reading */
                this.state.duration = this.getTextDuration(this.state.wholeText, this.settings.rate);
                /* Get the array of words that will be read */
                this.state.wholeTextArray = this.retrieveWholeTextArray(this.textContainer, '[data-id]');
                this.state.chunksArray = this.retrieveChunks();
                /* -------------------------------------------------------------------- */
                /* Attach click event listener to words */
                this.attachEventListenersToWords(this.textContainer, '[data-id]', {
                    type: 'click',
                    fn: (e) => {
                        this.emit('word-click', this, e);
                    },
                });
                /* Add class custom event listeners */
                this.addCustomEventListeners();
                /* -------------------------------------------------------------------- */
                /* Init utterance settings */
                this.initUtterance();
                return this;
            }
            catch (e) {
                console.log('Init error', e);
                return this;
            }
        });
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PRIVATE METHODS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    initUtterance() {
        this.utterance.text = this.options.isChunksModeOn
            ? this.state.chunksArray[this.state.currentChunkIndex].text
            : this.state.wholeText;
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
            /* Emit the seek event to keep the UI seekbar in sync with the currentWordIndex */
            // this.emit('seek', this);
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
            this.play('next-chunk-start');
        };
    }
    addHTMLHighlightTags(node) {
        const tree = [...node.childNodes];
        tree.forEach((el) => {
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
                if (Utils.isEmptyString(el.textContent) ||
                    Utils.isSpace(el.textContent) ||
                    Utils.isWhitespaceChar(el.textContent))
                    return;
                const wrapper = document.createElement('span');
                el.data
                    .split('')
                    .filter((char, i, arr) => {
                    /* Dismiss empty strings or non valid values */
                    if (!char)
                        return false;
                    /* Get rid of spaces between words and punctuation */
                    if (Utils.isSpace(char) &&
                        Utils.isPunctuation(arr[i + 1]))
                        return false;
                    /* Get rid of multiple spaces to avoid inconsistencies */
                    if (Utils.isSpace(char) && Utils.isSpace(arr[i + 1]))
                        return false;
                    return true;
                })
                    /* Separate special characters that will be read as single characters */
                    .map((c, i, arr) => {
                    /* Replace whitespace characters with common spaces */
                    if (Utils.isWhitespaceChar(c))
                        return ' ';
                    /* Separate the special readable characters like @#^*° so they can be read accordingly */
                    if (Utils.isSpecialReadableCharacter(c))
                        return ` ${c} `;
                    /* Handle dots in the middle of numbers e.g. 1.000 1.23 */
                    if (Utils.isDot(c) &&
                        Utils.isNumber(arr[i - 1]) &&
                        Utils.isNumber(arr[i + 1]))
                        return `${c}`;
                    /* Handle dots in the middle of words and numbers e.g. some.text e.g. abc33.bb32 ,
                    since in this case they are read as a character : "some dot text" "one dot zero zero zero" */
                    if (Utils.isDot(c) &&
                        Utils.isWordWithNumbers(arr[i - 1]) &&
                        Utils.isWordWithNumbers(arr[i + 1]))
                        return ` ${c} `;
                    /* Handle the punctation characters apart dots placed in the middle of a word e.g. test:test --> test: test */
                    if (Utils.isPunctuationButDot(c) &&
                        Utils.isWord(arr[i - 1]) &&
                        Utils.isWord(arr[i + 1]))
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
                    // Utils.isPunctuation(word) ||
                    Utils.isSpecialUnreadableCharacter(word) ||
                        Utils.isWordInsideAngularBrackets(word)) {
                        const newEl = document.createTextNode(word + ' ');
                        wrapper.appendChild(newEl);
                    }
                    else {
                        /* In all other cases, which is, "plain words or slashes or any other readable character" we add the data-id attribute */
                        const newEl = document.createElement('span');
                        newEl.setAttribute('data-id', (this.state.tagIndex++).toString());
                        newEl.setAttribute('data-type', 'WORD');
                        /* Do not add a space after the word if it's a special readable character or if the next word is not a plain word */
                        if (Utils.isSpecialReadableCharacter(word) ||
                            Utils.isSpecialReadableCharacter(arr[i + 1]) ||
                            Utils.isDot(word) ||
                            Utils.isDot(arr[i + 1]) ||
                            Utils.isZero(word)) {
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
    /*  Highlight  */
    highlightChunk(idx) {
        const length = this.state.currentWordIndex + this.state.chunksArray[idx].length;
        for (let i = this.state.currentWordIndex; i < length; i++)
            this.highlightText(i);
    }
    retrieveChunks() {
        let currentPunctuationSymbol = '.';
        const chunks = [];
        let previousEnd = 0;
        /*
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
        this.state.wholeTextArray
            .join(' ')
            /* Alternative regexps:
            1- /(?<![\s])[.?!;]+(?=[\s\n])/ This is safer since it just checks if there are spaces before and after the dot
            2- /(?<=[a-zA-Z0-9])[.?!;]/  This does not take into account dots placed after a special character like a parens e.g. (word). <-- That dot won't be matched
            */
            .split(/(?<![\s])[.?!;]+(?=[\s\n])/)
            .forEach((c, i) => {
            if (Utils.isPunctuation(c))
                currentPunctuationSymbol = c;
            else {
                const length = c
                    .trim()
                    .split(/[\s]/)
                    .filter((el) => el).length;
                /*  */
                const text = c.split(/\s+/).__join__((el, i, arr) => {
                    if (Utils.isPunctuation(arr[i + 1]) ||
                        Utils.isDot(el)) {
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
    scrollTo(idx) {
        const el = this.textContainer.querySelector(`[data-id="${idx}"]`);
        if (el)
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
    }
    /* Timer */
    timeCount(e, frequency) {
        if (frequency % 10 !== 0)
            throw new Error('Frequency must be a multiple of 10');
        this.state.elapsedTime += frequency;
        if (this.state.elapsedTime % 1000 === 0) {
            /* Instructions executed every 1000ms when the reader is active */
            this.emit('time-tick', this, this.state.elapsedTime);
        }
        this.timeoutRef = setTimeout(this.timeCount.bind(this, e, frequency), frequency);
    }
    pauseTimeCount() {
        clearTimeout(this.timeoutRef);
    }
    resetTimeCount() {
        this.state.elapsedTime = 0;
        clearTimeout(this.timeoutRef);
    }
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
        if ((Utils.isNumber(previousWord) || Utils.isValidDate(previousWord)) &&
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
        /* Synchronize the chunk index */
        if (/[.?!;]+/.test(this.state.wholeTextArray[this.state.currentWordIndex]))
            this.state.currentChunkIndex++;
        /* Emit boundary event */
        this.emit('boundary', this, e);
    }
    /* VOICES ARE POPULATED ASYNCHRONOUSLY ON BROWSER LOAD */
    getVoices() {
        return new Promise((resolve, reject) => {
            let id = null;
            try {
                id = setInterval(() => {
                    if (this.synth.getVoices().length !== 0) {
                        resolve(this.synth
                            .getVoices()
                            .filter((voice) => voice.lang.startsWith(this.settings.language)));
                        clearInterval(id);
                    }
                }, 10);
            }
            catch (e) {
                reject(e);
                clearInterval(id);
            }
        });
    }
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
            this.scrollTo(this.state.currentWordIndex);
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
        wordToHighlight.style.backgroundColor = this.style.color1;
        wordToHighlight.style.boxShadow = `10px 0px 0px 0px ${this.style.color1}`;
        wordToHighlight.style.textDecoration = 'underline';
    }
    changeChunkMode(b) {
        clearTimeout(this.timeoutRef);
        this.options.isChunksModeOn = b;
        /* Since che chunk mode change triggers a restart of the utterance playing,
        make sure the current word index gets synchronized with the current chunk index start word,
        since the sentence is restarted from the first word of the sentence itself */
        // eslint-disable-next-line prettier/prettier
        this.state.currentWordIndex =
            this.state.chunksArray[this.state.currentChunkIndex].start;
        /* This manages the starting highlight if chunk mode is on or off:
            1. if it starts in single word mode and it gets changed to chunk mode, it highlights the whole chunk
            2. if it starts in chunk mode and it gets changed to single word mode, it resets all the current highlighthing and starts to highlight words singularly */
        if (this.options.isChunksModeOn)
            this.highlightChunk(this.state.currentChunkIndex);
        else
            this.resetHighlight();
        this.utterance.text = this.options.isChunksModeOn
            ? this.getCurrentChunkText(this.state.currentChunkIndex)
            : this.getRemainingText(this.state.currentWordIndex);
        this.restart('chunks-mode-change', 500);
    }
    resetHighlight() {
        this.state.highlightedWords.forEach((n) => {
            n.style.backgroundColor = '';
            n.style.boxShadow = '';
            n.style.textDecoration = 'none';
            this.state.highlightedWords = [];
        });
    }
    addCustomEventListeners() {
        this.events.forEach((e) => {
            if (e.handlers.length > 0) {
                for (const handler of e.handlers) {
                    if (Utils.isFunction(handler))
                        this.on(e.type, handler.bind(this));
                }
            }
        });
    }
    attachEventListenersToWords(node, selector, { type, fn }) {
        [...node.querySelectorAll(selector)].forEach((el) => {
            el.addEventListener(type, fn);
        });
    }
    getRemainingText(idx) {
        const length = this.state.wholeTextArray.length;
        /* Calculate and set the remaining text */
        return this.state.wholeTextArray
            .slice(idx, length + 1)
            .__join__((el, i, arr) => {
            if (Utils.isDot(arr[i + 1]) || Utils.isDot(el)) {
                return '';
            }
            else
                return ' ';
        });
    }
    getCurrentChunkText(idx) {
        return this.state.chunksArray[idx].text;
    }
    retrieveNumberOfWords(node, selector) {
        return [...node.querySelectorAll(selector)].length;
    }
    retrieveWholeText(node, selector) {
        return [...node.querySelectorAll(selector)]
            .map((el) => el.textContent)
            .__join__((el, i, arr) => {
            if (Utils.isPunctuation(arr[i + 1]) ||
                Utils.isDot(el)) {
                return '';
            }
            else
                return ' ';
        });
    }
    retrieveWholeTextArray(node, selector) {
        return [...node.querySelectorAll(selector)].map((el) => el.textContent);
    }
    applyBasicStyleToWords(node, selector) {
        [...node.querySelectorAll(selector)]
            .filter((el) => el && !Utils.isPunctuation(el.textContent))
            .forEach((el) => {
            if (!el)
                return;
            el.style.transition = 'all 0.4s';
        });
    }
    getTextDuration(str, rate) {
        return (str.length * 100 * 1) / rate;
    }
    getAverageTextElapsedTime(textArray, idx) {
        const _text = textArray.slice(0, idx).join(' ');
        return (rate) => this.getTextDuration(_text, rate);
    }
    delayRestart(type, delay) {
        return setTimeout(() => {
            this.synth.cancel();
            if (this.isReading())
                this.play(type);
            if (this.isPaused()) {
                this.play(type).then(() => this.pause());
                this.pause();
            }
        }, 500);
    }
    restart(type, delay) {
        this.synth.cancel();
        if (this.isReading())
            this.play(type);
        if (this.isPaused()) {
            this.play(type).then(() => this.pause());
            this.pause();
        }
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PUBLIC METHODS - EXPOSED API @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    changeSettings(obj) {
        /* Reset timeouts  */
        clearTimeout(this.timeoutRef);
        clearTimeout(this.editTimeoutRef);
        /* Update voice in the state if it changes */
        if (obj.voiceURI) {
            const voice = this.state.voices.filter((v) => v.voiceURI === obj.voiceURI)
                .length > 0
                ? this.state.voices.filter((v) => v.voiceURI === obj.voiceURI)[0]
                : this.state.voices[0];
            this.state.voice = voice;
            this.utterance.voice = voice;
        }
        /* Recalculate total duration  and current elapsedTime when rate changes */
        if (obj.rate) {
            this.state.duration = this.getTextDuration(this.state.wholeText, obj.rate);
            /* Recalculate time elapsed */
            this.state.elapsedTime = this.getAverageTextElapsedTime(this.state.wholeTextArray, this.state.currentWordIndex)(this.settings.rate);
            this.emit('time-tick', this, this.state.elapsedTime);
        }
        /* Update utterance object, adding the remaining settings and remaining text left to be played */
        this.utterance = Object.assign(this.utterance, Object.assign(Object.assign({}, obj), { text: this.options.isChunksModeOn
                ? this.getCurrentChunkText(this.state.currentChunkIndex)
                : this.getRemainingText(this.state.currentWordIndex) }));
        /* Update instance settings object to keep them in sync with utterance settings and trigger the Proxy trap to emit the "change-settings" event */
        for (const entry of Object.entries(obj))
            this.settings[entry[0]] = entry[1];
        /*  Debounce to handle volume change properly */
        this.editTimeoutRef = this.delayRestart('edit-utterance', 500);
    }
    changeOptions(obj) {
        /* Handle chunks mode option change */
        if ('isChunksModeOn' in obj) {
            this.changeChunkMode(obj.isChunksModeOn);
        }
        for (const entry of Object.entries(obj))
            this.options[entry[0]] = entry[1];
    }
    /* Control methods */
    seekTo(idx) {
        /* Reset timeouts  */
        clearTimeout(this.timeoutRef);
        clearTimeout(this.seekTimeoutRef);
        /* Sync the current chunk in both cases that the seeking is performed in chunk or non chunk mode */
        const chunk = this.state.chunksArray.find((c) => idx >= c.start && idx <= c.end);
        this.state.currentChunkIndex = chunk.idx;
        this.state.currentWordIndex = chunk.start;
        if (!this.options.isChunksModeOn) {
            /* Set the new text slice */
            this.state.textRemaining = this.getRemainingText(idx);
            /* Update current word index */
            /* Need to increase the index by 1 */
            this.state.currentWordIndex = idx;
            /* Update utterance instance with  the new text slice */
            this.utterance.text = this.state.textRemaining;
            /* Highlight */
            this.resetHighlight();
            this.highlightText(this.state.currentWordIndex);
        }
        else {
            this.utterance.text = chunk.text;
            /* Highlight */
            this.resetHighlight();
            this.highlightChunk(this.state.currentChunkIndex);
        }
        /* Recalculate time elapsed */
        this.state.elapsedTime = this.getAverageTextElapsedTime(this.state.wholeTextArray, this.state.currentWordIndex)(this.settings.rate);
        this.emit('time-tick', this, this.state.elapsedTime);
        this.seekTimeoutRef = this.delayRestart('seek', 500);
    }
    /* ------------------------------------------------------------------------------------ */
    /* Public Methods to control the player state */
    /* ------------------------------------------------------------------------------------ */
    play(type) {
        this.synth.cancel(); // Makes sure the queue is empty when starting
        clearTimeout(this.timeoutRef); // Makes sure to not trigger multiple timeouts
        this.synth.speak(this.utterance);
        this.state.isPaused = false;
        this.state.isReading = true;
        this.timeCount(null, 20);
        switch (type) {
            case 'start': {
                this.emit('start', this);
                return new Promise((resolve) => {
                    this.utterance.onstart = (e) => {
                        /* Highlight the first chunk on the first start if it's chunks mode ON / mobile */
                        if (this.options.isChunksModeOn)
                            this.highlightChunk(0);
                        resolve(null);
                    };
                });
            }
            case 'resume-chunk-mode': {
                this.emit('resume-chunk-mode', this);
                return new Promise((resolve) => {
                    this.utterance.onstart = (e) => {
                        resolve(null);
                    };
                });
            }
            case 'next-chunk-start': {
                this.emit('next-chunk-start', this, this.state.chunksArray[this.state.currentChunkIndex]);
                return new Promise((resolve) => {
                    this.utterance.onstart = (e) => {
                        resolve(null);
                    };
                });
            }
            case 'edit-utterance-settings': {
                return new Promise((resolve) => {
                    this.utterance.onstart = (e) => {
                        resolve(null);
                    };
                });
            }
            case 'chunks-mode-change': {
                return new Promise((resolve) => {
                    this.utterance.onstart = (e) => {
                        resolve(null);
                    };
                });
            }
            default:
                return new Promise((resolve) => {
                    this.utterance.onstart = (e) => {
                        resolve(null);
                    };
                });
        }
    }
    pause() {
        this.synth.pause();
        this.state.isPaused = true;
        this.state.isReading = false;
        this.emit('pause', this);
        /* Pause timer */
        this.pauseTimeCount();
    }
    resume() {
        if (!this.options.isChunksModeOn)
            this.synth.resume();
        else
            this.play('resume-chunk-mode');
        this.state.isPaused = false;
        this.state.isReading = true;
        this.emit('resume', this);
        /* Restart timer */
        this.timeCount(null, 20);
    }
    reset() {
        this.synth.cancel();
        this.resetHighlight();
        /* Reset timer */
        this.resetTimeCount();
        this.state = Object.assign(Object.assign({}, this.state), { textRemaining: this.state.wholeText, currentWordIndex: 0, currentChunkIndex: 0, highlightedWords: [], lastWordPosition: 0, isPaused: false, isReading: false });
        /* Reset the utterance state ( needed to reset the text utterance ) */
        this.initUtterance();
        /* Scroll back to top word */
        this.scrollTo(1);
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
    },
    isReading: false,
    isLoading: false,
    voices: [],
    elapsedTime: 0,
    isMinimized: true,
    isVisible: true,
    isSettingsVisible: false,
    numberOfWords: 0,
    currentWordIndex: 1,
    duration: 0,
};
const rootReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_IS_READING': {
            return Object.assign(Object.assign({}, state), { isReading: payload });
        }
        case 'SET_IS_LOADING': {
            return Object.assign(Object.assign({}, state), { isLoading: payload });
        }
        case 'SET_IS_MINIMIZED': {
            return Object.assign(Object.assign({}, state), { isMinimized: payload });
        }
        case 'SET_IS_VISIBLE': {
            return Object.assign(Object.assign({}, state), { isVisible: payload });
        }
        case 'SET_IS_SETTINGS_VISIBLE': {
            return Object.assign(Object.assign({}, state), { isSettingsVisible: payload });
        }
        case 'SET_VOICES': {
            return Object.assign(Object.assign({}, state), { voices: payload });
        }
        case 'SET_ELAPSED_TIME': {
            return Object.assign(Object.assign({}, state), { elapsedTime: payload });
        }
        case 'SET_DURATION': {
            return Object.assign(Object.assign({}, state), { duration: payload });
        }
        case 'SET_NUMBER_OF_WORDS': {
            return Object.assign(Object.assign({}, state), { numberOfWords: payload });
        }
        case 'SET_CURRENT_WORD_INDEX': {
            return Object.assign(Object.assign({}, state), { currentWordIndex: payload });
        }
        case 'CHANGE_SETTINGS': {
            return Object.assign(Object.assign({}, state), { settings: Object.assign(Object.assign({}, state.settings), payload) });
        }
        case 'CHANGE_OPTIONS': {
            return Object.assign(Object.assign({}, state), { options: Object.assign(Object.assign({}, state.options), payload) });
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
    const readerRef = React.useRef(new SpeechSynth(textContainer, Object.assign(Object.assign({}, options), { color1: (styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.highlightColor1) || '#DEE', color2: styleOptions.highlightColor2 || '#9DE', onStart: (reader) => {
            console.log('Start');
            dispatch(setIsReading(reader.state.isReading));
        }, onPause: (reader) => {
            console.log('Pause');
            dispatch(setIsReading(reader.state.isReading));
        }, onResume: (reader) => {
            console.log('Resume');
            dispatch(setIsReading(reader.state.isReading));
        }, onReset: (reader) => {
            console.log('Reset Event called', reader.state.elapsedTime);
            dispatch(setIsReading(reader.state.isReading));
            dispatch(setElapsedTime(reader.state.elapsedTime));
            dispatch(setCurrentWordIndex(reader.state.currentWordIndex));
        }, onEnd: (reader) => {
            console.log('End');
            reader.reset();
        }, onBoundary: (reader, e) => {
            console.log('Boundary event');
        }, onSeek: (reader) => {
            dispatch(setCurrentWordIndex(reader.state.currentWordIndex));
        }, onTimeTick: (reader) => {
            dispatch(setElapsedTime(reader.state.elapsedTime));
        }, onWordClick: (reader, e) => {
            const target = e.target;
            const idx = +target.dataset.id;
            reader === null || reader === void 0 ? void 0 : reader.seekTo(idx);
        }, onSettingsChange: (reader) => {
            console.log('Settings change');
            dispatch(changeSettings(reader.settings));
        }, onOptionsChange: (reader, obj) => {
            console.log('Options change', obj);
            dispatch(changeOptions(reader.options));
        } })));
    return (React.createElement(ReaderContext.Provider, { value: { reader: readerRef.current } }, children));
};
/* Provides the store */
const StoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(rootReducer, globalState);
    return (React.createElement(StoreContext.Provider, { value: { state, dispatch } }, children));
};

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

var css_248z$6 = ".styles-module_container__2RHmB {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tmargin: 5px 0px 5px 0px;\r\n}\r\n\r\n.styles-module_minimized__qd4bl {\r\n\tborder-bottom: 1px;\r\n\tpadding: 2px 0px 2px 0px;\r\n}\r\n\r\n.styles-module_notMinimized__vhRsj {\r\n\tpadding-top: 2px;\r\n}\r\n\r\n.styles-module_button__l6T6c {\r\n\tborder-radius: 50%;\r\n\tmargin: 2px;\r\n\tbackground-color: var(--bgColor);\r\n\tcolor: var(--primaryColor);\r\n\tfont-weight: normal !important;\r\n\tcursor: pointer;\r\n\tborder: 4px solid var(--secondaryColor);\r\n\ttransition: all 0.2s;\r\n\tfont-size: 1.5em;\r\n}\r\n\r\n.styles-module_button__l6T6c:hover {\r\n\tborder: 3px solid var(--primaryColor);\r\n\tcolor: var(--secondaryColor);\r\n}\r\n\r\n.styles-module_loading__-h2hU {\r\n\tpointer-events: none;\r\n}\r\n\r\n.styles-module_notLoading__GJ8Ir {\r\n\tpointer-events: all;\r\n}\r\n\r\n.styles-module_reset__hvUvm {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tright: 0px;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\r\n\ttransition: 0.2s ease-in;\r\n\tfont-size: 0.9em;\r\n\tcolor: var(--primaryColor);\r\n}\r\n\r\n.styles-module_reset__hvUvm:hover {\r\n\tcolor: var(--secondaryColor);\r\n}\r\n";
var styles$6 = {"container":"styles-module_container__2RHmB","minimized":"styles-module_minimized__qd4bl","notMinimized":"styles-module_notMinimized__vhRsj","button":"styles-module_button__l6T6c","loading":"styles-module_loading__-h2hU","notLoading":"styles-module_notLoading__GJ8Ir","reset":"styles-module_reset__hvUvm"};
styleInject(css_248z$6);

const MainControls = () => {
    const { reader } = useReader();
    const { state, dispatch } = useStore();
    const { isReading, isLoading, isMinimized } = state;
    const handleTextReadPlay = () => {
        if (reader === null || reader === void 0 ? void 0 : reader.isPaused())
            reader === null || reader === void 0 ? void 0 : reader.resume();
        else
            reader === null || reader === void 0 ? void 0 : reader.play('start').then(() => {
                dispatch(setIsLoading(false));
            });
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
    return (React.createElement("div", { className: `${styles$6.container} ${isMinimized ? styles$6.minimized : styles$6.notMinimized}` },
        React.createElement(AiFillFastBackward_1, { className: `${styles$6.button} ${isLoading ? styles$6.loading : styles$6.notLoading}`, title: "Fast backward", onDoubleClick: (e) => e.preventDefault(), onPointerDown: handleFastBackward }),
        isReading ? (React.createElement(AiFillPauseCircle_1, { style: {
                fontSize: '2em',
            }, className: `${styles$6.button} ${isLoading ? styles$6.loading : styles$6.notLoading}`, title: 'Pause', onPointerDown: handleTextReadPause })) : (React.createElement(AiFillPlayCircle_1, { style: {
                fontSize: '2em',
            }, className: `${styles$6.button} ${isLoading ? styles$6.loading : styles$6.notLoading}`, title: 'Play', onPointerDown: handleTextReadPlay })),
        React.createElement(AiFillFastForward_1, { title: "Fast forward", className: `${styles$6.button} ${isLoading ? styles$6.loading : styles$6.notLoading}`, onPointerDown: handleFastForward }),
        React.createElement(BiReset_1, { className: styles$6.reset, title: "reset", onClick: handleReset })));
};

// THIS FILE IS AUTO GENERATED
var GenIcon$4 = esm.GenIcon;
var FiMaximize_1 = function FiMaximize (props) {
  return GenIcon$4({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$3 = esm.GenIcon;
var FiMinimize_1 = function FiMinimize (props) {
  return GenIcon$3({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}}]})(props);
};

// THIS FILE IS AUTO GENERATED
var GenIcon$2 = esm.GenIcon;
var MdClose_1 = function MdClose (props) {
  return GenIcon$2({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(props);
};

var css_248z$5 = ".styles-module_button__9sOag {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tz-index: 100;\r\n\tfont-size: 1em !important;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 3px;\r\n\tborder: 2px solid var(--primaryColor);\r\n\tbackground-color: var(--bgColor);\r\n\tcolor: var(--textColor);\r\n\tfont-weight: bold !important;\r\n\tcursor: pointer;\r\n\ttransition: all 0.2s linear;\r\n}\r\n\r\n.styles-module_button__9sOag:hover {\r\n\tbackground-color: var(--bgColor);\r\n\tcolor: var(--secondaryColor);\r\n}\r\n";
var styles$5 = {"button":"styles-module_button__9sOag"};
styleInject(css_248z$5);

const WindowControls = () => {
    const { reader } = useReader();
    const { state, dispatch } = useStore();
    const { isMinimized } = state;
    const handleHideReader = () => {
        dispatch(setIsVisible(false));
        reader === null || reader === void 0 ? void 0 : reader.reset();
    };
    const handleMinimizeReader = () => {
        dispatch(setIsMinimized(true));
    };
    const handleMaximizeReader = () => {
        dispatch(setIsMinimized(false));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { position: 'absolute', top: '2px', right: '3px' }, title: 'Close', className: styles$5.button, onPointerDown: handleHideReader },
            React.createElement(MdClose_1, { title: "Close" })),
        React.createElement("div", { style: { position: 'absolute', top: '2px', right: '24px' }, title: isMinimized ? 'Maximize' : 'Minimize', className: styles$5.button, onPointerDown: isMinimized ? handleMaximizeReader : handleMinimizeReader }, isMinimized ? React.createElement(FiMaximize_1, null) : React.createElement(FiMinimize_1, null))));
};

// adapted from https://github.com/sindresorhus/parse-ms.
// moved to internal function because parse-ms is now pure ESM.
function parseMs (milliseconds) {
  if (typeof milliseconds !== 'number') {
    throw new TypeError('Expected a number')
  }

  return {
    days: Math.trunc(milliseconds / 86400000),
    hours: Math.trunc(milliseconds / 3600000) % 24,
    minutes: Math.trunc(milliseconds / 60000) % 60,
    seconds: Math.trunc(milliseconds / 1000) % 60,
    milliseconds: Math.trunc(milliseconds) % 1000
  }
}

// adapted from https://github.com/rafaelrinaldi/add-zero.
// moved to internal function b/c addZero is unmaintained (7+ years).
// stripped out negative sign logic since we're already doing it elsewhere.
function addZero (value, digits) {
  digits = digits || 2;

  let str = value.toString();
  let size = 0;

  size = digits - str.length + 1;
  str = new Array(size).join('0').concat(str);

  return str
}

/**
 * Convert a number in milliseconds to a standard duration string.
 * @param {number} ms - duration in milliseconds
 * @param {object} options - formatDuration options object
 * @param {boolean} [options.leading=false] - add leading zero
 * @returns string - formatted duration string
 */
function formatDuration (ms, options) {
  const leading = options && options.leading;
  const unsignedMs = ms < 0 ? -ms : ms;
  const sign = ms <= -1000 ? '-' : '';
  const t = parseMs(unsignedMs);
  const seconds = addZero(t.seconds);
  if (t.days) return sign + t.days + ':' + addZero(t.hours) + ':' + addZero(t.minutes) + ':' + seconds
  if (t.hours) return sign + (leading ? addZero(t.hours) : t.hours) + ':' + addZero(t.minutes) + ':' + seconds
  return sign + (leading ? addZero(t.minutes) : t.minutes) + ':' + seconds
}

var formatDuration_1 = formatDuration;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;

var css_248z$4 = ".styles-module_container__0pmKL {\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tmargin: 10px 0px 0px 0px;\r\n}\r\n\r\n.styles-module_minimized__YNN-c {\r\n\twidth: 90%;\r\n\tmargin: 10px 0px 10px 0px;\r\n}\r\n\r\n.styles-module_seekbar__vpQeo {\r\n\twidth: 100%;\r\n\tappearance: none;\r\n\theight: 2px;\r\n\tbackground: var(--primaryColor);\r\n\toutline: none;\r\n\topacity: 0.7;\r\n\ttransition: opacity 0.2s;\r\n}\r\n\r\n.styles-module_seekbar__vpQeo::-webkit-slider-thumb {\r\n\tappearance: none;\r\n\twidth: 14px; /* Set a specific slider handle width */\r\n\theight: 14px; /* Slider handle height */\r\n\tbackground: var(--bgColor);\r\n\tcursor: grab; /* Cursor on hover */\r\n\tborder: 2px solid var(--primaryColor);\r\n\tborder-radius: 50%;\r\n\tz-index: 1;\r\n\tbox-shadow: 0 2px 5px var(--secondaryColor);\r\n\ttransition: transform 0.1s ease-out;\r\n}\r\n.styles-module_seekbar__vpQeo::-moz-range-thumb {\r\n\tappearance: none;\r\n\twidth: 12px; /* Set a specific slider handle width */\r\n\theight: 12px; /* Slider handle height */\r\n\tbackground: var(--bgColor);\r\n\tcursor: pointer; /* Cursor on hover */\r\n\tborder: 2px solid var(--primaryColor);\r\n\tborder-radius: 50%;\r\n\tz-index: 1;\r\n\tbox-shadow: 0 2px 5px var(--secondaryColor);\r\n\ttransition: transform 0.4s ease-out;\r\n}\r\n\r\n.styles-module_seekbar__vpQeo::-webkit-slider-thumb:hover {\r\n\ttransform: scale(1.1);\r\n\tbox-shadow: 0 2px 10px var(--bgColor);\r\n}\r\n\r\n.styles-module_seekbar__vpQeo::-webkit-slider-thumb:active {\r\n\tcursor: grabbing;\r\n}\r\n\r\n.styles-module_time__HfKnv {\r\n\twidth: 50px;\r\n\tfont-size: 0.7em !important;\r\n\tfont-weight: normal !important;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: absolute;\r\n\ttop: 19px;\r\n\tleft: -15px;\r\n\tz-index: 100 !important;\r\n\tcolor: #111;\r\n\tmargin: 0 !important;\r\n}\r\n";
var styles$4 = {"container":"styles-module_container__0pmKL","minimized":"styles-module_minimized__YNN-c","seekbar":"styles-module_seekbar__vpQeo","time":"styles-module_time__HfKnv"};
styleInject(css_248z$4);

const SeekBar = () => {
    const { reader } = useReader();
    const { state } = useStore();
    const { elapsedTime, numberOfWords, currentWordIndex, isMinimized, duration, } = state;
    const debouncedHandleManualSeek = lodash_debounce((value) => {
        reader === null || reader === void 0 ? void 0 : reader.seekTo(value);
    }, 5);
    const handleManualSeek = (e) => {
        debouncedHandleManualSeek(+e.target.value);
    };
    return (React.createElement("div", { className: `${styles$4.container} ${isMinimized && styles$4.minimized}` },
        React.createElement("h5", { className: styles$4.time }, formatDuration_1(elapsedTime)),
        React.createElement("input", { className: styles$4.seekbar, type: "range", min: "0", max: numberOfWords, step: "1", value: currentWordIndex, onChange: handleManualSeek }),
        React.createElement("h5", { style: { left: 'auto', right: '-15px' }, className: styles$4.time },
            formatDuration_1(duration),
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
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
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

var css_248z$3 = ".styles-module_container__dB4nt {\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.styles-module_button__oFwwA {\r\n\tposition: relative;\r\n\tfont-size: 0.7em;\r\n\tfont-weight: bold;\r\n\tcolor: var(--primaryColor);\r\n\tcursor: pointer;\r\n\ttransition: all 0.5s linear;\r\n\tborder: none;\r\n\tbackground: none;\r\n\tpadding: 1px 6px !important;\r\n}\r\n\r\n.styles-module_button__oFwwA:hover {\r\n\tcolor: var(--secondaryColor);\r\n}\r\n.styles-module_button__oFwwA::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tbottom: -2px;\r\n\twidth: 0px;\r\n\theight: 1.2px;\r\n\tbackground-color: var(--primaryColor);\r\n\ttransition: all 0.2s ease-in;\r\n}\r\n.styles-module_button__oFwwA:hover::after {\r\n\twidth: 100%;\r\n}\r\n\r\n.styles-module_optionsContainer__miH3Q {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n\twidth: 100%;\r\n\theight: 46px;\r\n\tbottom: 0px;\r\n\tright: 0;\r\n\tbackground-color: var(--bgColor);\r\n\tcolor: var(--primaryColor);\r\n\tz-index: 100;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\toverflow-x: hidden;\r\n}\r\n\r\n.styles-module_visible__eJpaP {\r\n\topacity: 1;\r\n\tpointer-events: all;\r\n}\r\n";
var styles$3 = {"container":"styles-module_container__dB4nt","button":"styles-module_button__oFwwA","optionsContainer":"styles-module_optionsContainer__miH3Q","visible":"styles-module_visible__eJpaP"};
styleInject(css_248z$3);

/* React Components */
const Button = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement("div", Object.assign({ className: styles$3.button }, props), children));
};

const CustomSelect = (_a) => {
    var _b;
    var { options, value, title, onChange, style } = _a, props = __rest(_a, ["options", "value", "title", "onChange", "style"]);
    const [showOptions, setShowOptions] = React.useState(false);
    const ref = React.useRef(null);
    const show = () => {
        setShowOptions(true);
    };
    const hide = React.useCallback(() => {
        setShowOptions(false);
    }, []);
    const onOptionClick = (val) => {
        onChange(val);
        hide();
    };
    useOnClickOutside(ref, hide);
    return (React.createElement("div", Object.assign({ className: styles$3.container }, props),
        React.createElement(Button, { type: "button", onClick: show }, (_b = options.find((o) => o.value === value)) === null || _b === void 0 ? void 0 : _b.name),
        React.createElement("div", { ref: ref, className: `${styles$3.optionsContainer} ${showOptions && styles$3.visible}` }, options.map((opt) => (React.createElement(Button, { key: opt.value, onClick: () => {
                onOptionClick(opt.value);
            } }, opt.name))))));
};

// THIS FILE IS AUTO GENERATED
var GenIcon$1 = esm.GenIcon;
var BiVolumeFull_1 = function BiVolumeFull (props) {
  return GenIcon$1({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16,21c3.527-1.547,5.999-4.909,5.999-9S19.527,4.547,16,3v2c2.387,1.386,3.999,4.047,3.999,7S18.387,17.614,16,19V21z"}},{"tag":"path","attr":{"d":"M16 7v10c1.225-1.1 2-3.229 2-5S17.225 8.1 16 7zM4 17h2.697l5.748 3.832C12.612 20.943 12.806 21 13 21c.162 0 .324-.039.472-.118C13.797 20.708 14 20.369 14 20V4c0-.369-.203-.708-.528-.882-.324-.175-.72-.154-1.026.05L6.697 7H4C2.897 7 2 7.897 2 9v6C2 16.103 2.897 17 4 17zM4 9h3c.033 0 .061-.016.093-.019.064-.006.125-.02.188-.038.068-.021.131-.045.192-.078.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033-.061-.033-.123-.058-.19-.078-.064-.019-.126-.032-.192-.038C7.059 15.016 7.032 15 7 15H4V9z"}}]})(props);
};

var css_248z$2 = ".styles-module_container__b86L6 {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\twidth: 70px;\r\n}\r\n\r\n.styles-module_container__b86L6 input {\r\n\twidth: 100%;\r\n}\r\n\r\n.styles-module_container__b86L6 label {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tfont-size: 0.7rem;\r\n\tright: 0%;\r\n}\r\n\r\n.styles-module_container__b86L6 label.styles-module_value__ildtp {\r\n\ttop: -1rem;\r\n\tcolor: var(--color-extra1);\r\n}\r\n\r\n.styles-module_slider__Y4O-v {\r\n\twidth: 100%;\r\n\tappearance: none;\r\n\theight: 2px;\r\n\tbackground: var(--primaryColor);\r\n\toutline: none;\r\n\topacity: 0.7;\r\n\ttransition: opacity 0.2s;\r\n}\r\n\r\n.styles-module_slider__Y4O-v:hover {\r\n\topacity: 1;\r\n}\r\n\r\n.styles-module_slider__Y4O-v::-webkit-slider-thumb {\r\n\tappearance: none;\r\n\twidth: 10px; /* Set a specific slider handle width */\r\n\theight: 10px; /* Slider handle height */\r\n\tbackground: var(--bgColor);\r\n\tcursor: pointer; /* Cursor on hover */\r\n\tborder: 2px solid var(--primaryColor);\r\n\tborder-radius: 50%;\r\n\tz-index: 1;\r\n\tbox-shadow: 0 2px 5px var(--secondaryColor);\r\n\ttransition: transform 0.1s ease-out;\r\n}\r\n.styles-module_slider__Y4O-v::-moz-range-thumb {\r\n\tappearance: none;\r\n\twidth: 10px; /* Set a specific slider handle width */\r\n\theight: 10px; /* Slider handle height */\r\n\tbackground: var(--bgColor);\r\n\tcursor: pointer; /* Cursor on hover */\r\n\tborder: 2px solid var(--primaryColor);\r\n\tborder-radius: 50%;\r\n\tz-index: 1;\r\n\tbox-shadow: 0 2px 5px var(--secondaryColor);\r\n\ttransition: transform 0.4s ease-out;\r\n}\r\n\r\n.styles-module_slider__Y4O-v::-webkit-slider-thumb:hover {\r\n\ttransform: scale(1.1);\r\n\tbox-shadow: 0 2px 10px var(--bgColor);\r\n}\r\n\r\n::-moz-range-thumb:hover {\r\n\ttransform: scale(1.1);\r\n\tbox-shadow: 0 2px 10px var(--bgColor);\r\n}\r\n\r\n.styles-module_slider__Y4O-v::-webkit-slider-thumb:active {\r\n}\r\n\r\n::-moz-range-thumb:active {\r\n}\r\n\r\n.styles-module_icon__1apXm {\r\n\tfont-size: 0.9rem;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.styles-module_icon__1apXm * {\r\n\tstroke: var(--primaryColor);\r\n\tcolor: var(--primaryColor);\r\n}\r\n";
var styles$2 = {"container":"styles-module_container__b86L6","value":"styles-module_value__ildtp","slider":"styles-module_slider__Y4O-v","icon":"styles-module_icon__1apXm"};
styleInject(css_248z$2);

const VolumeSlider = (_a) => {
    var { data, onChange, icon, styleOptions } = _a, props = __rest(_a, ["data", "onChange", "icon", "styleOptions"]);
    return (React.createElement("div", Object.assign({ className: styles$2.container }, props),
        icon && React.createElement("div", { className: styles$2.icon }, icon),
        React.createElement("input", { className: styles$2.slider, min: data.min, max: data.max, step: data.step, type: "range", value: data.value, onChange: onChange })));
};

var css_248z$1 = ".styles-module_container__69qRW {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\tpadding-bottom: 13px;\r\n}\r\n\r\n.styles-module_optionsWrapper1__OJ-aO {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: flex-end;\r\n}\r\n.styles-module_optionsWrapper2__5V17- {\r\n\twidth: 200px;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n}\r\n\r\n.styles-module_icon__7uc9b {\r\n\tfont-size: 1.1em;\r\n\tpadding: 0px;\r\n\tcursor: pointer;\r\n\ttransition: all 0.4s ease-out;\r\n}\r\n\r\n.styles-module_icon__7uc9b path {\r\n\tfill: var(--primaryColor);\r\n}\r\n.styles-module_icon__7uc9b:hover path {\r\n\tfill: var(--secondaryColor);\r\n}\r\n\r\n.styles-module_overlayContainer__kuM3h {\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 46px;\r\n\tbottom: 0px;\r\n\tright: 0px;\r\n\tbackground-color: var(--bgColor);\r\n\tcolor: var(--primaryColor);\r\n\tz-index: 100;\r\n\tdisplay: flex;\r\n\tjustify-content: start;\r\n\tflex-direction: column;\r\n\talign-items: start;\r\n\tflex-wrap: wrap;\r\n\ttransition: all 0.2s linear;\r\n\tpadding: 0px 0px 0px 10px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.styles-module_overlayContainer__kuM3h label {\r\n\tdisplay: flex;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n\r\n.styles-module_overlayContainer__kuM3h input {\r\n\tcursor: pointer;\r\n}\r\n\r\n.styles-module_overlayContainer__kuM3h h5 {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tfont-size: 0.6em;\r\n\tmargin-left: 1px;\r\n\tfont-weight: normal !important;\r\n\tline-height: 20px !important;\r\n}\r\n\r\n.styles-module_visible__KInGF {\r\n\topacity: 1;\r\n\tpointer-events: all;\r\n}\r\n";
var styles$1 = {"container":"styles-module_container__69qRW","optionsWrapper1":"styles-module_optionsWrapper1__OJ-aO","optionsWrapper2":"styles-module_optionsWrapper2__5V17-","icon":"styles-module_icon__7uc9b","overlayContainer":"styles-module_overlayContainer__kuM3h","visible":"styles-module_visible__KInGF"};
styleInject(css_248z$1);

// THIS FILE IS AUTO GENERATED
var GenIcon = esm.GenIcon;
var FcSettings_1 = function FcSettings (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1","viewBox":"0 0 48 48","enableBackground":"new 0 0 48 48"},"child":[{"tag":"path","attr":{"fill":"#607D8B","d":"M39.6,27.2c0.1-0.7,0.2-1.4,0.2-2.2s-0.1-1.5-0.2-2.2l4.5-3.2c0.4-0.3,0.6-0.9,0.3-1.4L40,10.8 c-0.3-0.5-0.8-0.7-1.3-0.4l-5,2.3c-1.2-0.9-2.4-1.6-3.8-2.2l-0.5-5.5c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9l-0.5,5.5 c-1.4,0.6-2.7,1.3-3.8,2.2l-5-2.3c-0.5-0.2-1.1,0-1.3,0.4l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4l4.5,3.2c-0.1,0.7-0.2,1.4-0.2,2.2 s0.1,1.5,0.2,2.2L4,30.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,39.2c0.3,0.5,0.8,0.7,1.3,0.4l5-2.3c1.2,0.9,2.4,1.6,3.8,2.2l0.5,5.5 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.5-5.5c1.4-0.6,2.7-1.3,3.8-2.2l5,2.3c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L39.6,27.2z M24,35c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C34,30.5,29.5,35,24,35z"}},{"tag":"path","attr":{"fill":"#455A64","d":"M24,13c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C36,18.4,30.6,13,24,13z M24,30 c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5s5,2.2,5,5C29,27.8,26.8,30,24,30z"}}]})(props);
};

/* import { ImInfo } from 'react-icons/im';
 */
const SecondaryControls = () => {
    const { reader } = useReader();
    const { state, dispatch } = useStore();
    const { styleOptions } = useMainProps();
    const { voices, isSettingsVisible, settings: { voiceURI, volume, rate }, options: { isChunksModeOn, isHighlightTextOn, isPreserveHighlighting }, } = state;
    const toggleSettings = () => {
        dispatch(setIsSettingsVisible(!isSettingsVisible));
    };
    /* Settings Handlers */
    const handleRateChange = (value) => {
        reader === null || reader === void 0 ? void 0 : reader.changeSettings({ rate: +value });
        dispatch(setDuration((reader === null || reader === void 0 ? void 0 : reader.state.duration) || 0));
    };
    const handleVoiceChange = (value) => {
        reader === null || reader === void 0 ? void 0 : reader.changeSettings({ voiceURI: value });
    };
    const handleVolumeChange = (e) => {
        const target = e.target;
        reader === null || reader === void 0 ? void 0 : reader.changeSettings({ volume: +target.value });
    };
    /* Options Handlers */
    const handlePreserveHighlighting = (e) => {
        const target = e.target;
        reader === null || reader === void 0 ? void 0 : reader.changeOptions({ isPreserveHighlighting: target.checked });
    };
    const handleIsHighlightTextOn = (e) => {
        const target = e.target;
        reader === null || reader === void 0 ? void 0 : reader.changeOptions({ isHighlightTextOn: target.checked });
    };
    const handleIsChunksModeOn = (e) => {
        if (reader === null || reader === void 0 ? void 0 : reader.state.isMobile)
            return; // Disable this option for mobile devices
        const target = e.target;
        reader === null || reader === void 0 ? void 0 : reader.changeOptions({ isChunksModeOn: target.checked });
    };
    return (React.createElement("div", { className: styles$1.container },
        React.createElement("div", { className: styles$1.optionsWrapper1 },
            React.createElement(CustomSelect, { name: "rate", options: [
                    { value: '0.5', name: '0.5x' },
                    { value: '0.75', name: '0.75x' },
                    { value: '1', name: '1x' },
                    { value: '1.25', name: '1.25x' },
                    { value: '1.5', name: '1.5x' },
                    { value: '2', name: '2x' },
                ], onChange: handleRateChange, value: rate.toString(), defaultValue: "1", title: "Rate", styleOptions: styleOptions }),
            React.createElement(CustomSelect, { name: "voice", options: voices, onChange: handleVoiceChange, value: voiceURI || '', defaultValue: "1", title: "Voices", styleOptions: styleOptions }),
            React.createElement(FcSettings_1, { className: styles$1.icon, onPointerDown: toggleSettings })),
        React.createElement("div", { className: styles$1.optionsWrapper2 },
            React.createElement(VolumeSlider, { icon: React.createElement(BiVolumeFull_1, null), onChange: handleVolumeChange, data: {
                    min: '0.1',
                    max: '1',
                    step: '0.1',
                    value: volume,
                    unit: '%',
                }, styleOptions: styleOptions })),
        React.createElement("div", { className: `${styles$1.overlayContainer} ${isSettingsVisible && styles$1.visible}`, onPointerDown: toggleSettings },
            React.createElement("label", { htmlFor: "preserve-option", onPointerDown: (e) => e.stopPropagation() },
                React.createElement("input", { id: "preserve-option", type: "checkbox", checked: isPreserveHighlighting, onChange: handlePreserveHighlighting }),
                React.createElement("h5", null, "Preserve Highlighting")),
            React.createElement("label", { htmlFor: "highlight-option", onPointerDown: (e) => e.stopPropagation() },
                React.createElement("input", { id: "highlight-option", type: "checkbox", checked: isHighlightTextOn, onChange: handleIsHighlightTextOn }),
                React.createElement("h5", null, "Highlight Text")),
            React.createElement("label", { htmlFor: "mode-option", onPointerDown: (e) => e.stopPropagation() },
                React.createElement("input", { id: "mode-option", type: "checkbox", checked: isChunksModeOn, onChange: handleIsChunksModeOn }),
                React.createElement("h5", null, "Chunks Mode")))));
};

const useBindTextReader = () => {
    const { reader } = useReader();
    const { state, dispatch } = useStore();
    const { isMinimized, isVisible, isReading, isLoading } = state;
    const { bindReader } = useMainProps();
    const handlers = React.useMemo(() => ({
        showReader: () => {
            dispatch(setIsVisible(true));
        },
        hideReader: () => {
            dispatch(setIsVisible(false));
        },
        minimizeReader: () => {
            dispatch(setIsMinimized(true));
        },
        maximizeReader: () => {
            dispatch(setIsMinimized(false));
        },
        play: () => {
            if (reader === null || reader === void 0 ? void 0 : reader.isPaused())
                reader === null || reader === void 0 ? void 0 : reader.resume();
            else
                reader === null || reader === void 0 ? void 0 : reader.play('start').then(() => {
                    dispatch(setIsLoading(false));
                });
        },
        pause: () => reader === null || reader === void 0 ? void 0 : reader.pause(),
    }), [dispatch, reader]);
    React.useEffect(() => {
        if (!bindReader || typeof bindReader !== 'function')
            return;
        const exposedState = { isMinimized, isVisible, isReading, isLoading };
        bindReader(exposedState, handlers);
    }, [
        bindReader,
        dispatch,
        handlers,
        isLoading,
        isMinimized,
        isReading,
        isVisible,
    ]);
};
const useInitializeReader = () => {
    const { reader } = useReader();
    const { dispatch } = useStore();
    React.useEffect(() => {
        /* Reset browser active speech synth queue on refresh or new load */
        window.speechSynthesis.cancel();
        reader === null || reader === void 0 ? void 0 : reader.init().then((reader) => {
            var _a;
            const formattedVoices = (_a = reader.state.voices) === null || _a === void 0 ? void 0 : _a.map((voice) => {
                var _a;
                return ({
                    name: (_a = voice.name) === null || _a === void 0 ? void 0 : _a.replace(/(Microsoft\s)|(Online\s)|(\(Natural\))|(\s-.*$)/gm, // Display only the plain voice name
                    ''),
                    value: voice.voiceURI,
                });
            });
            /* Synchronize UI state with reader initial state */
            dispatch(setVoices(formattedVoices));
            dispatch(setNumberOfWords(reader.state.numberOfWords));
            dispatch(setDuration(reader.state.duration));
            dispatch(changeSettings(reader.settings));
            dispatch(changeOptions(reader.options));
        }).catch((e) => console.log(e));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
const useSetCSSVAriables = () => {
    const { styleOptions } = useMainProps();
    React.useEffect(() => {
        for (const entry of Object.entries(styleOptions))
            document.documentElement.style.setProperty(`--${entry[0]}`, entry[1]);
    }, [styleOptions]);
};

var css_248z = ".styles-module_container__xkMLR {\r\n\twidth: 300px;\r\n\theight: 125px;\r\n\tright: -2000px;\r\n\tfont-size: 16px;\r\n\tposition: fixed;\r\n\tz-index: 1000;\r\n\tbottom: 5px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\ttransition: all 200ms linear;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 0px 0px 10px 2px #aaa;\r\n\tpadding: 15px;\r\n\tbackground-color: var(--bgColor);\r\n\tfont-family: Arial, sans-serif !important;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.styles-module_container__xkMLR * {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.styles-module_visible__ZUiLT {\r\n\tright: 10px;\r\n}\r\n\r\n.styles-module_minimized__W5TJy {\r\n\twidth: 150px;\r\n\theight: 100px;\r\n}\r\n";
var styles = {"container":"styles-module_container__xkMLR","visible":"styles-module_visible__ZUiLT","minimized":"styles-module_minimized__W5TJy"};
styleInject(css_248z);

const TextReader = () => {
    const { state } = useStore();
    const { isMinimized, isVisible } = state;
    useSetCSSVAriables();
    useBindTextReader();
    useInitializeReader();
    return (React.createElement("div", { className: `${styles.container} ${isVisible && styles.visible} ${isMinimized && styles.minimized}` },
        React.createElement(WindowControls, null),
        React.createElement(SeekBar, null),
        React.createElement(MainControls, null),
        !isMinimized && React.createElement(SecondaryControls, null)));
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
                React.createElement(TextReader, null)))));
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
        highlightColor1: '#98AFC7',
        highlightColor2: '#737CA1',
    },
};
const useTextReader = () => {
    const [handlers, setHandlers] = React.useState({});
    const [state, setState] = React.useState({});
    const bindReader = React.useCallback((state, handlers) => {
        setState(state);
        setHandlers(handlers);
    }, [setState, setHandlers]);
    return { handlers, state, bindReader };
};

exports.default = App;
exports.useTextReader = useTextReader;
//# sourceMappingURL=index.js.map
