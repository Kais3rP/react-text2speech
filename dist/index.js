'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var EventEmitter = require('events');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default["default"].createContext && React__default["default"].createContext(DefaultContext);

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
    return React__default["default"].createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React__default["default"].createElement(IconBase, __assign({
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
    return React__default["default"].createElement("svg", __assign({
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
    }), title && React__default["default"].createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function AiFillFastBackward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M517.6 273.5L230.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 0 0 0 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"}}]})(props);
}function AiFillFastForward (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M793.8 499.3L506.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.6c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8a16.14 16.14 0 0 0 0-25.4zm-320 0L186.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.5c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8c4.1-3.2 6.2-8 6.2-12.7 0-4.6-2.1-9.4-6.2-12.6zM857.6 248h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"}}]})(props);
}function AiFillPauseCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z"}}]})(props);
}function AiFillPlayCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"}}]})(props);
}

/*! *****************************************************************************
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
    /* Regex Utils */
    static isPunctuation(str) {
        return /^\s*[.,;:]+\s*$/.test(str);
    }
    static isTag(str) {
        return /<.+?>/.test(str);
    }
    static isCodeOpenTag(str) {
        return /<code>/.test(str);
    }
    static isCodeCloseTag(str) {
        return /<\/code>/.test(str);
    }
    static isSpecialCharacter(str) {
        return /^([.,;:\-_`'"*+()[\]{}<>\s\n])$/.test(str);
    }
    static isHTMLEntity(str) {
        return /&[a-z]+?;+/.test(str);
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

class SpeechSynth extends EventEmitter__default["default"] {
    constructor(textContainer, { 
    /* Settings */
    pitch = 1, rate = 1, language = 'en-US', voiceURI = 'Microsoft Aria Online (Natural) - English (United States)', volume = 1, 
    /* Style */
    color1 = '#DEE', color2 = '#9DE', 
    /* Ev handlers */
    onEnd = () => null, onStart = () => null, onEffectivelySpeakingStart = () => null, onPause = () => null, onResume = () => null, onReset = () => null, onBoundary = () => null, onTimeTick = () => null, onWordClick = () => null, onSeek = () => null, 
    /* Options */
    isHighlightTextOn = true, isPreserveHighlighting = true, isSSROn = false, }) {
        super();
        this.textContainer = textContainer;
        this.style = { color1, color2 };
        /* Instances */
        this.synth = window.speechSynthesis;
        this.utterance = new window.SpeechSynthesisUtterance();
        /* Timeouts */
        this.timeoutRef = undefined;
        this.seekTimeoutRef = undefined;
        /* Utterance settings */
        this.settings = {
            pitch: pitch,
            voiceURI: voiceURI,
            language: language,
            rate: rate,
            volume: volume,
        };
        this.events = [
            { type: 'boundary', handler: onBoundary },
            { type: 'time-tick', handler: onTimeTick },
            { type: 'word-click', handler: onWordClick },
            { type: 'speaking-start', handler: onEffectivelySpeakingStart },
            { type: 'start', handler: onStart },
            { type: 'pause', handler: onPause },
            { type: 'resume', handler: onResume },
            { type: 'reset', handler: onReset },
            { type: 'seek', handler: onSeek },
            { type: 'end', handler: onEnd },
        ];
        this.options = {
            isHighlightTextOn,
            isPreserveHighlighting,
            isSSROn,
        };
        /* State */
        this.state = {
            /* Internal properties */
            voice: {},
            voices: [],
            /* UI */
            isLoading: true,
            /* Highlight & Reading time */
            currentWordIndex: 1,
            highlightedWords: [],
            lastWordPosition: 0,
            numberOfWords: 0,
            wholeText: '',
            wholeTextArray: [],
            textRemaining: '',
            duration: 0,
            elapsedTime: 0,
            /* Controls  */
            isPaused: false,
            isPlaying: false,
        };
    }
    init() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            /* Get voices */
            try {
                this.state.voices = yield this.getVoices();
                this.state.voices = this.state.voices.filter((voice) => voice.lang === this.settings.language);
                this.state.voice =
                    this.state.voices.filter((v) => v.voiceURI === this.settings.voiceURI).length > 0
                        ? this.state.voices.filter((v) => v.voiceURI === this.settings.voiceURI)[0]
                        : this.state.voices[0];
                /* Add HTML highlight tags if SSR is off, in SSR the tags are added server side invoking the method ".addHTMLHighlightTags"
        on stringified HTML */
                if (this.options.isHighlightTextOn && !this.options.isSSROn)
                    SpeechSynth.addHTMLHighlightTags(this.textContainer);
                /* Add basic style to the words that have just been tagged wit HTML tags */
                this.applyBasicStyleToWords(this.textContainer, '[data-id]');
                /* Init state properties */
                /* Get the total number of words to highlight */
                this.state.numberOfWords = this.retrieveNumberOfWords(this.textContainer, '[data-id]');
                /* Get the whole raw text */
                this.state.wholeText = this.retrieveWholeText(this.textContainer, '[data-id]');
                /* Get the total estimated duration of reading */
                this.state.duration = this.getTextDuration(this.state.wholeText, this.settings.rate);
                /* Get the array of words that will be read */
                this.state.wholeTextArray = this.retrieveWholeTextArray(this.textContainer, '[data-id]');
                /* -------------------------------------------------------------------- */
                /* Add listeners */
                this.utterance.onboundary = this.handleBoundary.bind(this);
                this.utterance.onstart = (_a = this.events.find((evs) => evs.type === 'speaking-start')) === null || _a === void 0 ? void 0 : _a.handler;
                /* Attach click event listener to words */
                this.attachEventListenersToWords(this.textContainer, '[data-id]', {
                    type: 'click',
                    fn: (e) => {
                        this.emit('word-click', this, e);
                    },
                });
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
        this.utterance.text = this.state.wholeText;
        this.utterance.lang = this.settings.language;
        this.utterance.voice = this.state.voice;
        this.utterance.pitch = this.settings.pitch;
        this.utterance.rate = this.settings.rate;
        this.utterance.volume = this.settings.volume;
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
    startTimeCount(frequency) {
        if (frequency % 10 !== 0)
            throw new Error('Frequency must be a multiple of 10');
        this.state.elapsedTime += frequency;
        if (this.state.elapsedTime % 1000 === 0)
            this.emit('time-tick', this, this.state.elapsedTime);
        this.timeoutRef = setTimeout(this.startTimeCount.bind(this, frequency), frequency);
        // if (this.state.elapsedTime >= 10000) this.resetTimeCount();
    }
    pauseTimeCount() {
        clearTimeout(this.timeoutRef);
    }
    resetTimeCount() {
        this.state.elapsedTime = 0;
        clearTimeout(this.timeoutRef);
    }
    handleBoundary(e) {
        const length = this.state.wholeTextArray.length;
        /* Calculate and set the remaining text */
        this.state.textRemaining = this.state.wholeTextArray
            .slice(this.state.currentWordIndex, length + 1)
            .join(' ');
        /* Highlight the current word */
        this.highlightText(this.state.currentWordIndex);
        /* Increase the current index of word read */
        this.state.currentWordIndex += 1;
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
                        resolve(this.synth.getVoices());
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
        // eslint-disable-next-line prettier/prettier
        const wordToHighlight = this.textContainer.querySelector(`[data-id="${wordIndex}"]`);
        if (!wordToHighlight)
            return;
        /* Update highlighted words array */
        this.state.highlightedWords.push(wordToHighlight);
        /* Calculate current word position */
        const position = wordToHighlight.getBoundingClientRect().x;
        /* Scroll to the right row position */
        if (position <= this.state.lastWordPosition) {
            this.scrollTo(this.state.currentWordIndex);
            /* Reset the row highlight */
            if (!this.options.isPreserveHighlighting) {
                this.state.highlightedWords.forEach((el) => {
                    el.style.backgroundColor = '';
                });
                this.state.highlightedWords = [wordToHighlight];
            }
        }
        /* Update last word position */
        this.state.lastWordPosition = position;
        /* Apply highlight style */
        wordToHighlight.style.backgroundColor = this.style.color1;
        wordToHighlight.style.boxShadow = `8px 0px 0px 0px ${this.style.color1}`;
        wordToHighlight.style.textDecoration = 'underline';
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
            if (e.handler && Utils.isFunction(e.handler))
                this.on(e.type, e.handler.bind(this));
        });
    }
    attachEventListenersToWords(node, selector, { type, fn }) {
        [...node.querySelectorAll(selector)].forEach((el) => {
            el.addEventListener(type, fn);
        });
    }
    retrieveNumberOfWords(node, selector) {
        return [...node.querySelectorAll(selector)].length;
    }
    retrieveWholeText(node, selector) {
        return [...node.querySelectorAll(selector)]
            .map((el) => el.textContent)
            .join(' ');
    }
    retrieveWholeTextArray(node, selector) {
        return [...node.querySelectorAll(selector)]
            .map((el) => el.textContent)
            .filter((el) => el && !Utils.isPunctuation(el)); // Exclude punctuation and "" empty string characters
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
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PUBLIC METHODS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    editUtterance(obj) {
        const isPlaying = this.isPlaying();
        const isPaused = this.isPaused();
        /* Cancel synth instance */
        this.synth.cancel();
        /* Reset timeout  */
        clearTimeout(this.timeoutRef);
        if (obj.voiceURI) {
            this.state.voice =
                this.state.voices.filter((v) => v.voiceURI === obj.voiceURI &&
                    v.lang === this.settings.language).length > 0
                    ? this.state.voices.filter((v) => v.voiceURI === obj.voiceURI &&
                        v.lang === this.settings.language)[0]
                    : this.state.voices[0];
            this.utterance.voice = this.state.voice;
        }
        /* Update utterance object, adding the remaining text left to be played */
        this.utterance = Object.assign(this.utterance, Object.assign(Object.assign({}, obj), { text: this.state.textRemaining }));
        /* Update instance settings object to keep them in sync with utterance settings */
        this.settings = Object.assign(Object.assign({}, this.settings), obj);
        /* Recalculate total duration  and current elapsedTime when rate changes */
        if (obj.rate) {
            this.state.duration = this.getTextDuration(this.state.wholeText, obj.rate);
            /* Recalculate time elapsed */
            this.state.elapsedTime = this.getAverageTextElapsedTime(this.state.wholeTextArray, this.state.currentWordIndex)(this.settings.rate);
            this.emit('time-tick', this, this.state.elapsedTime);
        }
        /* Do not play if settings are changed before the first play */
        /* Play immediately after settings change if settings are changed while playing */
        if (isPlaying)
            this.play();
        /* Play the remaining text with the new settings applied and pause if the settings are changed while in pause */
        if (isPaused) {
            this.play();
            this.pause();
        }
    }
    /* Control methods */
    seekTo(index) {
        const isPlaying = this.isPlaying();
        const isPaused = this.isPaused();
        this.emit('seek', this, index);
        /* Cancel synth instance */
        // this.synth.cancel();
        /* Reset timeout  */
        clearTimeout(this.timeoutRef);
        /* Set the new text slice */
        const textArr = this.state.wholeTextArray;
        const newText = textArr.slice(index, textArr.length + 1).join(' ');
        this.state.textRemaining = newText;
        /* Update current word index */
        /* Need to increase the index by 1 */
        this.state.currentWordIndex = index + 1;
        /* Update utterance instance with  the new text slice */
        this.utterance.text = this.state.textRemaining;
        /* Highlight */
        this.resetHighlight();
        this.highlightText(this.state.currentWordIndex);
        /* Recalculate time elapsed */
        this.state.elapsedTime = this.getAverageTextElapsedTime(this.state.wholeTextArray, this.state.currentWordIndex)(this.settings.rate);
        this.emit('time-tick', this, this.state.elapsedTime);
        if (isPlaying) {
            clearTimeout(this.seekTimeoutRef);
            this.seekTimeoutRef = setTimeout(() => {
                this.synth.cancel();
                this.play();
            }, 500);
        }
        if (isPaused) {
            clearTimeout(this.seekTimeoutRef);
            this.seekTimeoutRef = setTimeout(() => {
                this.synth.cancel();
                this.play();
                this.pause();
            }, 500);
        }
    }
    /* ------------------------------------------------------------------------------------ */
    /* Public Methods to control the player state */
    play() {
        this.synth.speak(this.utterance);
        this.state.isPaused = false;
        this.state.isPlaying = true;
        /* Start timer */
        this.startTimeCount(20);
        /* Emit start event */
        this.emit('start', this);
        return new Promise((resolve) => {
            this.utterance.onend = () => {
                this.emit('end', this);
                /* 				this.reset();  // Commented to let the handling of the reset directly to the Component that consumes this library.
                 */ resolve(null);
            };
        });
    }
    pause() {
        this.synth.pause();
        this.state.isPaused = true;
        this.state.isPlaying = false;
        this.emit('pause', this);
        /* Pause timer */
        this.pauseTimeCount();
    }
    resume() {
        this.synth.resume();
        this.state.isPaused = false;
        this.state.isPlaying = true;
        this.emit('resume');
        /* Restart timer */
        this.startTimeCount(20);
    }
    reset() {
        this.synth.cancel();
        this.emit('reset');
        this.resetHighlight();
        /* Reset timer */
        this.resetTimeCount();
        this.state = Object.assign(Object.assign({}, this.state), { textRemaining: this.state.wholeText, currentWordIndex: 1, highlightedWords: [], lastWordPosition: 0, isPaused: false, isPlaying: false });
        /* Reset the utterance state ( needed to reset the text utterance ) */
        this.initUtterance();
        /* Scroll back to top word */
        this.scrollTo(1);
    }
    /* State check */
    isPlaying() {
        return this.state.isPlaying;
    }
    isPaused() {
        return this.state.isPaused;
    }
    /* Static public methods */
    /*  Highlight  */
    static addHTMLHighlightTags(node, options = { excludeCodeTags: false }) {
        /* Add utils method to Array */
        // eslint-disable-next-line no-extend-native
        Array.prototype.__join__ = Utils.__join__;
        let isCode = false;
        let index = 0;
        let code = '';
        try {
            if (typeof node === 'string')
                code = node;
            else if (typeof window !== 'undefined' &&
                node instanceof HTMLElement)
                code = node.innerHTML;
            console.log('INNER HTML', code);
            code = code
                .split('\n') // Add br break line in place of \n
                .join('<br/>')
                .replace(/\(\s*(.+?)\s*\)/g, (_, b) => `(${b})`) // Fix extra spaces in () parens to avoid highlighting extra characters
                .replace(/\s+([;.,:]+?)/g, (_, b) => b) // Fix extra spaces in [] parens to avoid highlighting extra characters
                .replace(/<.+?>/g, (match) => '#' + match.replace(/\s/g, '@@') + '#') // Separate html tags and add @@ symbol to spaces inside HTML tags
                .replace(/(\d+\.\d+)(\w*)/, (_, a, b) => a + ' ' + b) // Separate numbers from measures units e.g. 1.7k -> 1.7 k since the reader ha issues reading that format
                .split(/[#\s]/)
                .filter((el) => el)
                .map((el) => {
                if (options === null || options === void 0 ? void 0 : options.excludeCodeTags) {
                    // Exclude code tags
                    if (Utils.isCodeOpenTag(el)) {
                        isCode = true;
                        return el;
                    }
                    if (Utils.isCodeCloseTag(el)) {
                        isCode = false;
                        return el;
                    }
                    if (isCode)
                        return el;
                }
                if (Utils.isSpecialCharacter(el) || Utils.isHTMLEntity(el))
                    return el; // prevent punctuation and html entities to be assigned an highlight span tag
                if (!Utils.isTag(el)) {
                    index++;
                    return `<span data-id="${index}">${el}</span>`;
                }
                return el;
            })
                .__join__((_, i, arr) => {
                /* There are certain situations where punctuation is separated from the previous word
      (e.g. if the previous word is wrapped in a <strong> tag). In this case we join the word
      and the punctuation directly with no extra space. */
                if (Utils.isPunctuation(arr[i + 1])) {
                    return '';
                }
                return ' '; // Space between HTML tags is interpreted as a &nbsp and the text content will render a space.
            })
                .replace(/@@/g, ' ');
            /* Apply the tags to the HTML DOM node if SSR is off */
            if (typeof window !== 'undefined' && node instanceof HTMLElement) {
                node.innerHTML = code;
            }
            return code;
        }
        catch (e) {
            throw new Error(e);
        }
    }
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vanilla = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

var createStoreImpl = function createStoreImpl(createState) {
  var state;
  var listeners = new Set();

  var setState = function setState(partial, replace) {
    var nextState = typeof partial === 'function' ? partial(state) : partial;

    if (nextState !== state) {
      var _previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach(function (listener) {
        return listener(state, _previousState);
      });
    }
  };

  var getState = function getState() {
    return state;
  };

  var subscribe = function subscribe(listener) {
    listeners.add(listener);
    return function () {
      return listeners.delete(listener);
    };
  };

  var destroy = function destroy() {
    return listeners.clear();
  };

  var api = {
    setState: setState,
    getState: getState,
    subscribe: subscribe,
    destroy: destroy
  };
  state = createState(setState, getState, api);
  return api;
};

var createStore = function createStore(createState) {
  return createState ? createStoreImpl(createState) : createStoreImpl;
};

exports["default"] = createStore;
});

unwrapExports(vanilla);

function h$2(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k$3="function"===typeof Object.is?Object.is:h$2,l$2=React__default["default"].useState,m$1=React__default["default"].useEffect,n$2=React__default["default"].useLayoutEffect,p$3=React__default["default"].useDebugValue;function q$4(a,b){var d=b(),f=l$2({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n$2(function(){c.value=d;c.getSnapshot=b;r$3(c)&&g({inst:c});},[a,d,b]);m$1(function(){r$3(c)&&g({inst:c});return a(function(){r$3(c)&&g({inst:c});})},[a]);p$3(d);return d}
function r$3(a){var b=a.getSnapshot;a=a.value;try{var d=b();return !k$3(a,d)}catch(f){return !0}}function t$3(a,b){return b()}var u$2="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t$3:q$4;var useSyncExternalStore=void 0!==React__default["default"].useSyncExternalStore?React__default["default"].useSyncExternalStore:u$2;

var useSyncExternalStoreShim_production_min = {
	useSyncExternalStore: useSyncExternalStore
};

var useSyncExternalStoreShim_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = React__default["default"];

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}
});
useSyncExternalStoreShim_development.useSyncExternalStore;

var shim = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = useSyncExternalStoreShim_production_min;
} else {
  module.exports = useSyncExternalStoreShim_development;
}
});

function p$2(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q$3="function"===typeof Object.is?Object.is:p$2,r$2=shim.useSyncExternalStore,t$2=React__default["default"].useRef,u$1=React__default["default"].useEffect,v$3=React__default["default"].useMemo,w$3=React__default["default"].useDebugValue;
var useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t$2(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f;}else f=c.current;c=v$3(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q$3(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return [function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r$2(a,c[0],c[1]);
u$1(function(){f.hasValue=!0;f.value=d;},[d]);w$3(d);return d};

var withSelector_production_min = {
	useSyncExternalStoreWithSelector: useSyncExternalStoreWithSelector
};

var withSelector_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = React__default["default"];
var shim$1 = shim;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = shim$1.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}
});
withSelector_development.useSyncExternalStoreWithSelector;

var withSelector = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = withSelector_production_min;
} else {
  module.exports = withSelector_development;
}
});

var createStore = vanilla;

var zustand = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });





function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var createStore__default = /*#__PURE__*/_interopDefaultLegacy(createStore);
var useSyncExternalStoreExports__default = /*#__PURE__*/_interopDefaultLegacy(withSelector);

var useSyncExternalStoreWithSelector = useSyncExternalStoreExports__default["default"].useSyncExternalStoreWithSelector;
function useStore(api, selector, equalityFn) {
  if (selector === void 0) {
    selector = api.getState;
  }

  var slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getState, selector, equalityFn);
  React__default["default"].useDebugValue(slice);
  return slice;
}

var createImpl = function createImpl(createState) {
  var api = typeof createState === 'function' ? createStore__default["default"](createState) : createState;

  var useBoundStore = function useBoundStore(selector, equalityFn) {
    return useStore(api, selector, equalityFn);
  };

  Object.assign(useBoundStore, api);
  return useBoundStore;
};

var create = function create(createState) {
  return createState ? createImpl(createState) : createImpl;
};

var create$1 = create;

Object.defineProperty(exports, 'createStore', {
  enumerable: true,
  get: function () { return createStore__default["default"]; }
});
exports["default"] = create$1;
exports.useStore = useStore;
Object.keys(createStore).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return createStore[k]; }
  });
});
});

var create = unwrapExports(zustand);
zustand.useStore;

var middleware = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var reduxImpl = function reduxImpl(reducer, initial) {
  return function (set, _get, api) {
    api.dispatch = function (action) {
      set(function (state) {
        return reducer(state, action);
      }, false, action);
      return action;
    };

    api.dispatchFromDevtools = true;
    return _extends({
      dispatch: function dispatch() {
        var _ref;

        return (_ref = api).dispatch.apply(_ref, arguments);
      }
    }, initial);
  };
};

var redux = reduxImpl;

var _excluded = ["enabled", "anonymousActionType"];

var devtoolsImpl = function devtoolsImpl(fn, devtoolsOptions) {
  if (devtoolsOptions === void 0) {
    devtoolsOptions = {};
  }

  return function (set, get, api) {
    var _devtoolsOptions = devtoolsOptions,
        enabled = _devtoolsOptions.enabled,
        anonymousActionType = _devtoolsOptions.anonymousActionType,
        options = _objectWithoutPropertiesLoose(_devtoolsOptions, _excluded);

    var extensionConnector;

    try {
      extensionConnector = (enabled != null ? enabled : process.env.NODE_ENV !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch (_unused) {}

    if (!extensionConnector) {
      if (process.env.NODE_ENV !== "production" && enabled) {
        console.warn('[zustand devtools middleware] Please install/enable Redux devtools extension');
      }

      return fn(set, get, api);
    }

    var extension = extensionConnector.connect(options);
    var isRecording = true;

    api.setState = function (state, replace, nameOrAction) {
      var r = set(state, replace);
      if (!isRecording) return r;
      extension.send(nameOrAction === undefined ? {
        type: anonymousActionType || 'anonymous'
      } : typeof nameOrAction === 'string' ? {
        type: nameOrAction
      } : nameOrAction, get());
      return r;
    };

    var setStateFromDevtools = function setStateFromDevtools() {
      var originalIsRecording = isRecording;
      isRecording = false;
      set.apply(void 0, arguments);
      isRecording = originalIsRecording;
    };

    var initialState = fn(api.setState, get, api);
    extension.init(initialState);

    if (api.dispatchFromDevtools && typeof api.dispatch === 'function') {
      var didWarnAboutReservedActionType = false;
      var originalDispatch = api.dispatch;

      api.dispatch = function () {
        for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
          a[_key] = arguments[_key];
        }

        if (process.env.NODE_ENV !== "production" && a[0].type === '__setState' && !didWarnAboutReservedActionType) {
          console.warn('[zustand devtools middleware] "__setState" action type is reserved ' + 'to set state from the devtools. Avoid using it.');
          didWarnAboutReservedActionType = true;
        }
        originalDispatch.apply(void 0, a);
      };
    }
    extension.subscribe(function (message) {
      switch (message.type) {
        case 'ACTION':
          if (typeof message.payload !== 'string') {
            console.error('[zustand devtools middleware] Unsupported action format');
            return;
          }

          return parseJsonThen(message.payload, function (action) {
            if (action.type === '__setState') {
              setStateFromDevtools(action.state);
              return;
            }

            if (!api.dispatchFromDevtools) return;
            if (typeof api.dispatch !== 'function') return;
            api.dispatch(action);
          });

        case 'DISPATCH':
          switch (message.payload.type) {
            case 'RESET':
              setStateFromDevtools(initialState);
              return extension.init(api.getState());

            case 'COMMIT':
              return extension.init(api.getState());

            case 'ROLLBACK':
              return parseJsonThen(message.state, function (state) {
                setStateFromDevtools(state);
                extension.init(api.getState());
              });

            case 'JUMP_TO_STATE':
            case 'JUMP_TO_ACTION':
              return parseJsonThen(message.state, function (state) {
                setStateFromDevtools(state);
              });

            case 'IMPORT_STATE':
              {
                var _nextLiftedState$comp;

                var nextLiftedState = message.payload.nextLiftedState;
                var lastComputedState = (_nextLiftedState$comp = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _nextLiftedState$comp.state;
                if (!lastComputedState) return;
                setStateFromDevtools(lastComputedState);
                extension.send(null, nextLiftedState);
                return;
              }

            case 'PAUSE_RECORDING':
              return isRecording = !isRecording;
          }

          return;
      }
    });
    return initialState;
  };
};

var devtools = devtoolsImpl;

var parseJsonThen = function parseJsonThen(stringified, f) {
  var parsed;

  try {
    parsed = JSON.parse(stringified);
  } catch (e) {
    console.error('[zustand devtools middleware] Could not parse the received json', e);
  }

  if (parsed !== undefined) f(parsed);
};

var subscribeWithSelectorImpl = function subscribeWithSelectorImpl(fn) {
  return function (set, get, api) {
    var origSubscribe = api.subscribe;

    api.subscribe = function (selector, optListener, options) {
      var listener = selector;

      if (optListener) {
        var equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
        var currentSlice = selector(api.getState());

        listener = function listener(state) {
          var nextSlice = selector(state);

          if (!equalityFn(currentSlice, nextSlice)) {
            var previousSlice = currentSlice;
            optListener(currentSlice = nextSlice, previousSlice);
          }
        };

        if (options != null && options.fireImmediately) {
          optListener(currentSlice, currentSlice);
        }
      }

      return origSubscribe(listener);
    };

    var initialState = fn(set, get, api);
    return initialState;
  };
};

var subscribeWithSelector = subscribeWithSelectorImpl;

var combine = function combine(initialState, create) {
  return function () {
    return Object.assign({}, initialState, create.apply(void 0, arguments));
  };
};

var toThenable = function toThenable(fn) {
  return function (input) {
    try {
      var result = fn(input);

      if (result instanceof Promise) {
        return result;
      }

      return {
        then: function then(onFulfilled) {
          return toThenable(onFulfilled)(result);
        },
        catch: function _catch(_onRejected) {
          return this;
        }
      };
    } catch (e) {
      return {
        then: function then(_onFulfilled) {
          return this;
        },
        catch: function _catch(onRejected) {
          return toThenable(onRejected)(e);
        }
      };
    }
  };
};

var persistImpl = function persistImpl(config, baseOptions) {
  return function (set, get, api) {
    var options = _extends({
      getStorage: function getStorage() {
        return localStorage;
      },
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      partialize: function partialize(state) {
        return state;
      },
      version: 0,
      merge: function merge(persistedState, currentState) {
        return _extends({}, currentState, persistedState);
      }
    }, baseOptions);

    var _hasHydrated = false;
    var hydrationListeners = new Set();
    var finishHydrationListeners = new Set();
    var storage;

    try {
      storage = options.getStorage();
    } catch (e) {}

    if (!storage) {
      return config(function () {
        console.warn("[zustand persist middleware] Unable to update item '" + options.name + "', the given storage is currently unavailable.");
        set.apply(void 0, arguments);
      }, get, api);
    }

    var thenableSerialize = toThenable(options.serialize);

    var setItem = function setItem() {
      var state = options.partialize(_extends({}, get()));
      var errorInSync;
      var thenable = thenableSerialize({
        state: state,
        version: options.version
      }).then(function (serializedValue) {
        return storage.setItem(options.name, serializedValue);
      }).catch(function (e) {
        errorInSync = e;
      });

      if (errorInSync) {
        throw errorInSync;
      }

      return thenable;
    };

    var savedSetState = api.setState;

    api.setState = function (state, replace) {
      savedSetState(state, replace);
      void setItem();
    };

    var configResult = config(function () {
      set.apply(void 0, arguments);
      void setItem();
    }, get, api);
    var stateFromStorage;

    var hydrate = function hydrate() {
      if (!storage) return;
      _hasHydrated = false;
      hydrationListeners.forEach(function (cb) {
        return cb(get());
      });
      var postRehydrationCallback = (options.onRehydrateStorage == null ? void 0 : options.onRehydrateStorage(get())) || undefined;
      return toThenable(storage.getItem.bind(storage))(options.name).then(function (storageValue) {
        if (storageValue) {
          return options.deserialize(storageValue);
        }
      }).then(function (deserializedStorageValue) {
        if (deserializedStorageValue) {
          if (typeof deserializedStorageValue.version === 'number' && deserializedStorageValue.version !== options.version) {
            if (options.migrate) {
              return options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
            }

            console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
          } else {
            return deserializedStorageValue.state;
          }
        }
      }).then(function (migratedState) {
        var _get;

        stateFromStorage = options.merge(migratedState, (_get = get()) != null ? _get : configResult);
        set(stateFromStorage, true);
        return setItem();
      }).then(function () {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, undefined);
        _hasHydrated = true;
        finishHydrationListeners.forEach(function (cb) {
          return cb(stateFromStorage);
        });
      }).catch(function (e) {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(undefined, e);
      });
    };

    api.persist = {
      setOptions: function setOptions(newOptions) {
        options = _extends({}, options, newOptions);

        if (newOptions.getStorage) {
          storage = newOptions.getStorage();
        }
      },
      clearStorage: function clearStorage() {
        var _storage;

        (_storage = storage) == null ? void 0 : _storage.removeItem(options.name);
      },
      getOptions: function getOptions() {
        return options;
      },
      rehydrate: function rehydrate() {
        return hydrate();
      },
      hasHydrated: function hasHydrated() {
        return _hasHydrated;
      },
      onHydrate: function onHydrate(cb) {
        hydrationListeners.add(cb);
        return function () {
          hydrationListeners.delete(cb);
        };
      },
      onFinishHydration: function onFinishHydration(cb) {
        finishHydrationListeners.add(cb);
        return function () {
          finishHydrationListeners.delete(cb);
        };
      }
    };
    hydrate();
    return stateFromStorage || configResult;
  };
};

var persist = persistImpl;

exports.combine = combine;
exports.devtools = devtools;
exports.persist = persist;
exports.redux = redux;
exports.subscribeWithSelector = subscribeWithSelector;
});

unwrapExports(middleware);
middleware.combine;
var middleware_2 = middleware.devtools;
var middleware_3 = middleware.persist;
middleware.redux;
middleware.subscribeWithSelector;

function n$1(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if("production"!==process.env.NODE_ENV){var i=Y$1[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return "'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r$1(n){return !!n&&!!n[Q$1]}function t$1(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var r=Object.getPrototypeOf(n);if(null===r)return !0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z$1}(n)||Array.isArray(n)||!!n[L$1]||!!n.constructor[L$1]||s(n)||v$2(n))}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n);})):n.forEach((function(t,e){return r(e,t,n)}));}function o(n){var r=n[Q$1];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v$2(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f$1(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t;}function c$1(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X$1&&n instanceof Map}function v$2(n){return q$2&&n instanceof Set}function p$1(n){return n.o||n.t}function l$1(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q$1];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),r)}function d$1(n,e){return void 0===e&&(e=!1),y$2(n)||r$1(n)||!t$1(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h$1),Object.freeze(n),e&&i(n,(function(n,r){return d$1(r,!0)}),!0),n)}function h$1(){n$1(2);}function y$2(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b$2(r){var t=tn[r];return t||n$1(18,r),t}function _$1(){return "production"===process.env.NODE_ENV||U$1||n$1(0),U$1}function j$1(n,r){r&&(b$2("Patches"),n.u=[],n.s=[],n.v=r);}function O$1(n){g$2(n),n.p.forEach(S$1),n.p=null;}function g$2(n){n===U$1&&(U$1=n.l);}function w$2(n){return U$1={p:[],l:U$1,h:n,m:!0,_:0}}function S$1(n){var r=n[Q$1];0===r.i||1===r.i?r.j():r.O=!0;}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b$2("ES5").S(e,r,o),o?(i[Q$1].P&&(O$1(e),n$1(4)),t$1(r)&&(r=M$1(e,r),e.l||x$2(e,r)),e.u&&b$2("Patches").M(i[Q$1].t,r,e.u,e.s)):r=M$1(e,i,[]),O$1(e),e.u&&e.v(e.u,e.s),r!==H$1?r:void 0}function M$1(n,r,t){if(y$2(r))return r;var e=r[Q$1];if(!e)return i(r,(function(i,o){return A$1(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x$2(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l$1(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A$1(n,e,o,r,i,t)})),x$2(n,o,!1),t&&n.u&&b$2("Patches").R(e,t,n.u,n.s);}return e.o}function A$1(e,i,o,a,c,s){if("production"!==process.env.NODE_ENV&&c===o&&n$1(5),r$1(c)){var v=M$1(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f$1(o,a,v),!r$1(v))return;e.m=!1;}if(t$1(c)&&!y$2(c)){if(!e.h.F&&e._<1)return;M$1(e,c),i&&i.A.l||x$2(e,c);}}function x$2(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d$1(r,t);}function z$2(n,r){var t=n[Q$1];return (t?p$1(t):n)[r]}function I$1(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t);}}function k$2(n){n.P||(n.P=!0,n.l&&k$2(n.l));}function E$1(n){n.o||(n.o=l$1(n.t));}function R$1(n,r,t){var e=s(r)?b$2("MapSet").N(r,t):v$2(r)?b$2("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_$1(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b$2("ES5").J(r,t);return (t?t.A:_$1()).p.push(e),e}function D$1(e){return r$1(e)||n$1(22,e),function n(r){if(!t$1(r))return r;var e,u=r[Q$1],c=o(r);if(u){if(!u.P&&(u.i<4||!b$2("ES5").K(u)))return u.t;u.I=!0,e=F$1(r,c),u.I=!1;}else e=F$1(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f$1(e,r,n(t));})),3===c?new Set(e):e}(e)}function F$1(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l$1(n)}var G$1,U$1,W$1="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X$1="undefined"!=typeof Map,q$2="undefined"!=typeof Set,B$1="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H$1=W$1?Symbol.for("immer-nothing"):((G$1={})["immer-nothing"]=!0,G$1),L$1=W$1?Symbol.for("immer-draftable"):"__$immer_draftable",Q$1=W$1?Symbol.for("immer-state"):"__$immer_state",Y$1={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return "Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return "Unsupported patch operation: "+n},18:function(n){return "The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return "'current' expects a draft, got: "+n},23:function(n){return "'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z$1=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t);})),r},tn={},en={get:function(n,r){if(r===Q$1)return n;var e=p$1(n);if(!u(e,r))return function(n,r,t){var e,i=I$1(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t$1(i)?i:i===z$2(n.t,r)?(E$1(n),n.o[r]=R$1(n.A.h,i,n)):i},has:function(n,r){return r in p$1(n)},ownKeys:function(n){return Reflect.ownKeys(p$1(n))},set:function(n,r,t){var e=I$1(p$1(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z$2(p$1(n),r),o=null==i?void 0:i[Q$1];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c$1(t,i)&&(void 0!==t||u(n.t,r)))return !0;E$1(n),k$2(n);}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z$2(n.t,r)||r in n.t?(n.D[r]=!1,E$1(n),k$2(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p$1(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n$1(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n$1(12);}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)};})),on.deleteProperty=function(r,t){return "production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&n$1(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return "production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&n$1(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B$1,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return (t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n$1(6),void 0!==o&&"function"!=typeof o&&n$1(7),t$1(r)){var c=w$2(e),s=R$1(e,r,void 0),v=!0;try{f=i(s),v=!1;}finally{v?O$1(c):g$2(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j$1(c,o),P(n,c)}),(function(n){throw O$1(c),n})):(j$1(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H$1&&(f=void 0),e.F&&d$1(f,!0),o){var p=[],l=[];b$2("Patches").M(r,f,p,l),o(p,l);}return f}n$1(21,r);},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r;}));return "undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return [n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){t$1(e)||n$1(8),r$1(e)&&(e=D$1(e));var i=w$2(this),o=R$1(this,e,void 0);return o[Q$1].C=!0,g$2(i),o},i.finishDraft=function(r,t){var e=r&&r[Q$1];"production"!==process.env.NODE_ENV&&(e&&e.C||n$1(9),e.I&&n$1(10));var i=e.A;return j$1(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n;},i.setUseProxies=function(r){r&&!B$1&&n$1(20),this.g=r;},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b$2("Patches").$;return r$1(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);

const useAudioReaderStore = create()(middleware_2(middleware_3((set) => ({
    isReading: false,
    isLoading: false,
    rate: '1',
    voice: 'Microsoft Aria Online (Natural) - English (United States)',
    voices: [],
    volume: '0.5',
    elapsedTime: 0,
    isPreserveHighlighting: true,
    isMinimized: true,
    isVisible: true,
    isSettingsVisible: false,
    numberOfWords: 0,
    currentWordIndex: 1,
    duration: 0,
    setIsLoading: (b) => set(fn((state) => {
        state.isLoading = b;
    })),
    setDuration: (n) => set(fn((state) => {
        state.duration = n;
    })),
    setCurrentWordIndex: (n) => set(fn((state) => {
        state.currentWordIndex = n;
    })),
    setNumberOfWords: (n) => set(fn((state) => {
        state.numberOfWords = n;
    })),
    enablePreserveHighlighting: () => set(fn((state) => {
        state.isPreserveHighlighting = true;
    })),
    disablePreserveHighlighting: () => set(fn((state) => {
        state.isPreserveHighlighting = false;
    })),
    showSettings: () => set(fn((state) => {
        state.isSettingsVisible = true;
    })),
    hideSettings: () => set(fn((state) => {
        state.isSettingsVisible = false;
    })),
    showAudioReader: () => set(fn((state) => {
        state.isVisible = true;
    })),
    hideAudioReader: () => set(fn((state) => {
        state.isVisible = false;
    })),
    minimize: () => set(fn((state) => {
        state.isMinimized = true;
    })),
    maximize: () => set(fn((state) => {
        state.isMinimized = false;
    })),
    stopReading: () => set(fn((state) => {
        state.isReading = false;
    })),
    startReading: () => set(fn((state) => {
        state.isReading = true;
    })),
    setRate: (rate) => set(fn((state) => {
        state.rate = rate;
    })),
    setVoice: (voice) => set(fn((state) => {
        state.voice = voice;
    })),
    setVoices: (voices) => set(fn((state) => {
        state.voices = voices;
    })),
    setVolume: (volume) => set(fn((state) => {
        state.volume = volume;
    })),
    setElapsedTime: (time) => set(fn((state) => {
        state.elapsedTime = time;
    })),
}), {
    name: 'IAudioReaderState',
    partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => ![
        'elapsedTime',
        'isReading',
        'currentWordIndex',
    ].includes(key))),
})));

// THIS FILE IS AUTO GENERATED
function BiDotsHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 10h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4z"}}]})(props);
}function BiReset (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z"}},{"tag":"path","attr":{"d":"M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"}}]})(props);
}function BiVolumeFull (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"}},{"tag":"path","attr":{"d":"M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function FiMaximize (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"}}]})(props);
}function FiMinimize (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"}}]})(props);
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c=b$1?Symbol.for("react.element"):60103,d=b$1?Symbol.for("react.portal"):60106,e=b$1?Symbol.for("react.fragment"):60107,f=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l=b$1?Symbol.for("react.async_mode"):60111,m=b$1?Symbol.for("react.concurrent_mode"):60111,n=b$1?Symbol.for("react.forward_ref"):60112,p=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r=b$1?Symbol.for("react.memo"):60115,t=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g$1:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z$1(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k$1;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g$1;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z$1(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z$1(a)===k$1};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z$1(a)===n};var isFragment=function(a){return z$1(a)===e};var isLazy=function(a){return z$1(a)===t};
var isMemo=function(a){return z$1(a)===r};var isPortal=function(a){return z$1(a)===d};var isProfiler=function(a){return z$1(a)===g$1};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g$1||a===f||a===p||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};var typeOf=z$1;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});
reactIs.AsyncMode;
reactIs.ConcurrentMode;
reactIs.ContextConsumer;
reactIs.ContextProvider;
reactIs.Element;
reactIs.ForwardRef;
reactIs.Fragment;
reactIs.Lazy;
reactIs.Memo;
reactIs.Portal;
reactIs.Profiler;
reactIs.StrictMode;
reactIs.Suspense;
reactIs.isAsyncMode;
reactIs.isConcurrentMode;
reactIs.isContextConsumer;
reactIs.isContextProvider;
var reactIs_18 = reactIs.isElement;
reactIs.isForwardRef;
reactIs.isFragment;
reactIs.isLazy;
reactIs.isMemo;
reactIs.isPortal;
reactIs.isProfiler;
reactIs.isStrictMode;
reactIs.isSuspense;
var reactIs_27 = reactIs.isValidElementType;
var reactIs_28 = reactIs.typeOf;

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function y(){return (y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var v=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs_28(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return "function"==typeof e}function b(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function _(e){return e&&"string"==typeof e.styledComponentId}var N="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),O="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},z=function(e){return x.get(e)},B=function(e,t){t>=k&&(k=t+1),T.set(e,t),x.set(t,e);},M="style["+N+'][data-styled-version="5.3.5"]',G=new RegExp("^"+N+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},F=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),L(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},Y=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(N))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(N,"active"),r.setAttribute("data-styled-version","5.3.5");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=C,J={isServer:!C,useCSSOMInjection:!I},X=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=y({},J,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&C&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(N)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(y({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=N+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),Z=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return (K(t%52)+n).replace(Z,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!_(n))return !1}return !0}var re=te("5.3.5"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&ne(e),this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,X.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=_e(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=ee(u,h+d));else if(h){var p=_e(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f;}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new stylis_min(a),d=[],p=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,s){return 0===r&&-1!==ie.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=React__default["default"].createContext();ce.Consumer;var le=React__default["default"].createContext(),de=(le.Consumer,new X),he=ae();function pe(){return React.useContext(ce)||de}function fe(){return React.useContext(le)||he}var ye=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ve=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return "-"+e.toLowerCase()};function Ee(e){return ve.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function _e(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=_e(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return "";if(_(e))return "."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIs_18(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),_e(u,n,r,o)}var l;return e instanceof ye?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(Array.isArray(t[i])&&t[i].isCss||E(t[i])?s.push(Ee(i)+":",t[i],";"):g(t[i])?s.push.apply(s,e(t[i],i)):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ne=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(_e(v(S,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(_e(v(e,n)))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ce.test(e))o=!1,Ie.delete(n);else {for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s));}},React.useRef(),o&&!Ie.has(n)&&(console.warn(n),Ie.add(n));}catch(e){Ce.test(e.message)&&Ie.delete(n);}finally{console.error=r;}}},Oe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return Q(te(e)>>>0)};function xe(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var ke=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];ke(t)&&ke(r)?Be(r,t):e[n]=t;}function Be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(ke(i))for(var a in i)Ve(a)&&ze(e,i[a],a);}return e}var Me=React__default["default"].createContext();Me.Consumer;var Fe={};function Ye(e,t,n){var o=_(e),i=!xe(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.5"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,v=void 0===p?function(e){return xe(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,N=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&React.useDebugValue(h);var m=function(e,t,n){void 0===e&&(e=w);var r=y({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Oe(t,React.useContext(Me),a)||w,t,o),v=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return "production"!==process.env.NODE_ENV&&React.useDebugValue(i),"production"!==process.env.NODE_ENV&&!t&&r&&r(i),i}(i,r,v,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),b=n,_=g.$as||t.$as||g.as||t.as||p,N=xe(_),A=g!==t?y({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,isPropValid,_):!N||isPropValid(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=y({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=b,React.createElement(_,C)}(C,e,t,P)};return O.displayName=v,(C=React__default["default"].forwardRef(O)).attrs=N,C.componentStyle=I,C.displayName=v,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:je(b(e)));return Ye(e,y({},o,{attrs:N,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Be({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Pe(v,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(v,g)),C.toString=function(){return "."+C.styledComponentId},i&&hoistNonReactStatics_cjs(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!reactIs_27(r))return D(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,y({},o,{},n))},s.attrs=function(n){return e(t,r,y({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e);}));"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);var styled = qe;

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
const useIsFirstRender = () => {
    const ref = React.useRef(true);
    React.useEffect(() => {
        ref.current = false;
    }, []);
    return ref.current;
};

const Container$1 = styled.div `
	margin-right: 10px;
`;
const StyledButton = styled.button `
	position: relative;
	font-size: 0.7rem;
	font-weight: bold;
	color: ${(props) => props.styleoptions.primaryColor};
	cursor: pointer;
	transition: all 0.5s linear;
	border: none;
	background: none;
	padding: 1px 6px !important;
	&:hover {
		color: ${(props) => props.styleoptions.secondaryColor};
	}
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 0px;
		height: 1.2px;
		background-color: ${(props) => props.styleoptions.primaryColor};
		transition: all 0.2s ease-in;
	}
	&:hover::after {
		width: 100%;
	}
`;
const OptionsContainer$1 = styled.div `
	opacity: ${(props) => (props.showOptions ? 1 : 0)};
	pointer-events: ${(props) => (props.showOptions ? 'all' : 'none')};
	position: absolute;
	width: 100%;
	height: 46px;
	bottom: 0px;
	right: 0;
	background-color: ${(props) => props.styleoptions.bgColor};
	color: ${(props) => props.styleoptions.primaryColor};
	z-index: 100;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
`;
const Button = (_a) => {
    var { children, styleOptions } = _a, props = __rest(_a, ["children", "styleOptions"]);
    return (React__default["default"].createElement(StyledButton, Object.assign({ styleoptions: styleOptions }, props), children));
};
const CustomSelect = (_a) => {
    var _b;
    var { options, value, title, onChange, styleOptions, style } = _a, props = __rest(_a, ["options", "value", "title", "onChange", "styleOptions", "style"]);
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
    return (React__default["default"].createElement(Container$1, Object.assign({}, props),
        React__default["default"].createElement(StyledButton, { type: "button", onClick: show, styleoptions: styleOptions }, (_b = options.find((o) => o.value === value)) === null || _b === void 0 ? void 0 : _b.name),
        React__default["default"].createElement(OptionsContainer$1, { ref: ref, styleoptions: styleOptions, showOptions: showOptions }, options.map((opt) => (React__default["default"].createElement(Button, { key: opt.value, onClick: () => {
                onOptionClick(opt.value);
            }, styleOptions: styleOptions }, opt.name))))));
};

/* Styled Components */
const SliderContainer$1 = styled.div `
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	& input {
		width: 100%;
	}

	& label {
		position: absolute;
		top: 0;
		font-size: 0.7rem;
		right: 0%;
	}

	& label.value {
		top: -1rem;
		color: var(--color-extra1);
	}
`;
const StyledSlider = styled.input `
	width: 100%;
	appearance: none;
	height: 2px;
	background: ${(props) => props.styleoptions.primaryColor};
	outline: none;
	opacity: 0.7;
	transition: opacity 0.2s;
	&:hover {
		opacity: 1;
	}
	&::-webkit-slider-thumb {
		appearance: none;
		width: 8px; /* Set a specific slider handle width */
		height: 17px; /* Slider handle height */
		background: ${(props) => props.styleoptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		width: 3px;
		border: 2px solid ${(props) => props.styleoptions.primaryColor};
		border-radius: 2px;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
	&::-webkit-slider-thumb:hover {
		transform: scale(2, 1.1);
	}
	&::-moz-range-thumb {
		appearance: none;
		width: 8px; /* Set a specific slider handle width */
		height: 20px; /* Slider handle height */
		background: ${(props) => props.styleoptions.primaryColor};
		cursor: pointer; /* Cursor on hover */
		width: 3px;
		border: 2px solid ${(props) => props.styleoptions.primaryColor};
		border-radius: 2px;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
`;
const Icon = styled.div `
	font-size: 0.9rem;
	margin-right: 5px;
	& * {
		stroke: ${(props) => props.styleoptions.primaryColor};
		color: ${(props) => props.styleoptions.primaryColor};
	}
`;
const Slider = (_a) => {
    var { data, onChange, icon, styleOptions } = _a, props = __rest(_a, ["data", "onChange", "icon", "styleOptions"]);
    return (React__default["default"].createElement(SliderContainer$1, Object.assign({}, props),
        icon && React__default["default"].createElement(Icon, { styleoptions: styleOptions }, icon),
        React__default["default"].createElement(StyledSlider, { min: data.min, max: data.max, step: data.step, type: "range", value: data.value, onChange: onChange, styleoptions: styleOptions })));
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

// THIS FILE IS AUTO GENERATED
function MdOutlineClose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}}]})(props);
}

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

/* Styled Components */
const Container = styled.div `
	position: fixed;
	z-index: 1000;
	bottom: 5px;
	right: ${(props) => (props.isvisible === 'true' ? '10px' : '-2000px')};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 200ms linear;
	width: ${(props) => props.isminimized === 'true' ? '150px' : '300px'};
	border-radius: 5px;
	box-shadow: 0px 0px 10px 2px #aaa;
	padding: 15px;
	background-color: ${(props) => props.styleoptions.bgColor};
	font-family: Arial, sans-serif !important;
`;
const WindowButton = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	font-size: 1rem !important;
	width: 16px;
	height: 16px;
	border-radius: 3px;
	border: 2px solid ${(props) => props.styleoptions.primaryColor};
	background-color: ${(props) => props.styleoptions.bgColor};
	color: ${(props) => props.styleoptions.textColor};
	font-weight: bold !important;
	cursor: pointer;
	transition: all 0.2s linear;
	&:hover {
		backgroundcolor: ${(props) => props.styleoptions.bgColor};
		color: ${(props) => props.styleoptions.secondaryColor};
	}
`;
const SeekbarContainer = styled.div `
	text-align: center;
	width: ${(props) => (props.isminimized === 'true' ? '100%' : '90%')};
	position: relative;
	z-index: 2;
	margin-top: 10px;
`;
const Time = styled.h5 `
	width: 50px;
	font-size: 0.7rem !important;
	font-weight: normal !important;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 19px;
	left: -15px;
	z-index: 100 !important;
	color: #111;
	margin: 0 !important;
`;
const Seekbar = styled.input `
	width: 100%;
	appearance: none;
	height: 2px;
	background: ${(props) => props.styleoptions.primaryColor};
	outline: none;
	opacity: 0.7;
	transition: opacity 0.2s;
	::-webkit-slider-thumb {
		appearance: none;
		width: 14px; /* Set a specific slider handle width */
		height: 14px; /* Slider handle height */
		background: ${(props) => props.styleoptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		border: 2px solid ${(props) => props.styleoptions.primaryColor};
		border-radius: 50%;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
	&::-webkit-slider-thumb:hover {
		transform: scale(1.1);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
	}
	::-moz-range-thumb {
		appearance: none;
		width: 12px; /* Set a specific slider handle width */
		height: 12px; /* Slider handle height */
		background: ${(props) => props.styleoptions.bgColor};
		cursor: pointer; /* Cursor on hover */
		border: 2px solid ${(props) => props.styleoptions.primaryColor};
		border-radius: 50%;
		z-index: 1;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
		cursor: pointer;
		transition: transform 0.1s ease-out;
	}
`;
const ControlsContainer = styled.div `
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 1;
	margin: 5px 0px 5px 0px;
	& div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	${(props) => props.isminimized === 'true'
    ? 'border-bottom: 1px; padding: 2px 0px 2px 0px;'
    : 'padding-top: 2px'}
`;
const ControlButton = styled.div `
	border-radius: 50%;
	background-color: ${(props) => props.styleoptions.bgColor};
	color: ${(props) => props.styleoptions.primaryColor};
	font-size: normal !important;
	cursor: pointer;
	border: 2px solid ${(props) => props.styleoptions.secondaryColor};
	&:hover {
		border: 2px solid ${(props) => props.styleoptions.primaryColor};
		background-color: ${(props) => props.styleoptions.bgColor};
		color: ${(props) => props.styleoptions.secondaryColor};
	}
	transition: all 0.2s;
	font-size: 1rem !important;
	pointer-events: ${(props) => props.isloading === 'true' ? 'none' : 'default'};
`;
const OptionsContainer = styled.div `
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-bottom: 13px;
	& div#options-wrapper-1 {
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
	}
	& div#options-wrapper-2 {
		width: 200px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
`;
const Dots = styled(BiDotsHorizontal) `
	font-size: 0.8rem;
	color: ${(props) => props.styleoptions.primaryColor};
	margin-bottom: 3px;
	padding: 0px;
	cursor: pointer;
	&:hover {
		color: ${(props) => props.styleoptions.secondaryColor};
	}
`;
const Reset = styled(BiReset) `
	position: absolute;
	top: 50%;
	right: 5px;
	font-weight: bold;
	cursor: pointer;
	transition: 0.2s ease-in;
	font-size: 0.9rem;
	color: ${(props) => props.styleoptions.primaryColor};
	&:hover {
		color: ${(props) => props.styleoptions.secondaryColor};
	}
`;
const SliderContainer = styled.div `
	width: 70px;
`;
const ExtraSettings = styled.div `
	opacity: ${(props) => (props.issettingsvisible === 'true' ? 1 : 0)};
	pointer-events: ${(props) => props.issettingsvisible === 'true' ? 'all' : 'none'};
	position: absolute;
	width: 100%;
	height: 46px;
	bottom: 0px;
	right: 0px;
	background-color: ${(props) => props.styleoptions.bgColor};
	color: ${(props) => props.styleoptions.primaryColor};
	z-index: 100;
	display: flex;
	justify-content: start;
	align-items: center;
	transition: all 0.2s linear;

	& label {
		display: flex;
		padding: 0px;
		margin: 0px;
	}

	& input {
		cursor: pointer;
	}

	& h5 {
		padding: 0px;
		margin: 0px;
		font-size: 0.8rem;
		margin-left: 1px;
		font-weight: normal !important;
		line-height: 20px !important;
	}
`;

const AudioReader = ({ textContainer, options, styleOptions }) => {
    const isFirstRender = useIsFirstRender();
    const { isReading, rate, voice, voices, volume, elapsedTime, currentWordIndex, duration, numberOfWords, isLoading, stopReading, startReading, setRate, setVoice, setVoices, setVolume, setElapsedTime, isMinimized, minimize, maximize, hideAudioReader, isVisible, isSettingsVisible, showSettings, hideSettings, isPreserveHighlighting, enablePreserveHighlighting, disablePreserveHighlighting, setNumberOfWords, setCurrentWordIndex, setDuration, setIsLoading, } = useAudioReaderStore();
    const audioReaderRef = React.useRef();
    /* Handlers */
    const handleAudioReadPlay = () => {
        startReading();
    };
    const handleAudioReadPause = () => {
        stopReading();
    };
    const handleReset = () => {
        const reader = audioReaderRef.current;
        reader === null || reader === void 0 ? void 0 : reader.reset();
        stopReading();
        setElapsedTime(0);
        setCurrentWordIndex(1);
    };
    const handleRateChange = (value) => {
        const reader = audioReaderRef.current;
        if (!reader)
            return;
        reader.editUtterance({ rate: +value });
        setRate(value);
        setDuration(reader.state.duration);
    };
    const handleVoiceChange = (value) => {
        const reader = audioReaderRef.current;
        reader === null || reader === void 0 ? void 0 : reader.editUtterance({ voiceURI: value });
        setVoice(value);
    };
    const handleVolumeChange = (e) => {
        const reader = audioReaderRef.current;
        const target = e.target;
        if (!reader)
            return;
        reader.editUtterance({ volume: +target.value });
        setVolume(target.value);
    };
    const handleHideReader = () => {
        hideAudioReader();
        handleAudioReadPause();
    };
    const handleMinimizeReader = () => {
        minimize();
    };
    const handleMaximizeReader = () => {
        maximize();
    };
    const handlePreserveHighlighting = (e) => {
        const reader = audioReaderRef.current;
        const target = e.target;
        if (!reader)
            return;
        if (target.checked) {
            enablePreserveHighlighting();
            reader.options.isPreserveHighlighting = true;
        }
        else {
            disablePreserveHighlighting();
            reader.options.isPreserveHighlighting = false;
        }
    };
    const toggleSettings = () => {
        if (isSettingsVisible)
            hideSettings();
        else
            showSettings();
    };
    /* Seeking handlers */
    const debouncedHandleManualSeek = lodash_debounce((value) => {
        const reader = audioReaderRef.current;
        if (!reader)
            return;
        reader.seekTo(value);
    }, 5);
    const handleManualSeek = React.useMemo(() => (e) => {
        debouncedHandleManualSeek(+e.target.value);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const handleGenericSeek = (val) => {
        const reader = audioReaderRef.current;
        reader === null || reader === void 0 ? void 0 : reader.seekTo(val);
    };
    React.useEffect(() => {
        /* Reset browser active speech synth queue on refresh or new load */
        window.speechSynthesis.cancel();
        if (!textContainer)
            return;
        audioReaderRef.current = new SpeechSynth(textContainer, Object.assign(Object.assign({}, options), { color1: styleOptions.highlightColor1, color2: styleOptions.highlightColor2, onStart: (reader) => {
                console.log('Start');
                setIsLoading(true);
            }, onEffectivelySpeakingStart: (reader) => {
                console.log('Voice speaking');
                setIsLoading(false);
            }, onPause: (reader) => {
                console.log('Pause');
            }, onResume: (reader) => {
                console.log('Resume');
            }, onReset: (reader) => {
                console.log('Reset');
            }, onEnd: () => {
                console.log('End');
                handleReset();
            }, onBoundary: (reader, e) => {
                setCurrentWordIndex(reader.state.currentWordIndex);
            }, onSeek: (reader, value) => {
                setCurrentWordIndex(value);
            }, onTimeTick: (reader, value) => {
                setElapsedTime(reader.state.elapsedTime);
            }, onWordClick: (reader, e) => {
                const target = e.target;
                const idx = +target.dataset.id;
                handleGenericSeek(idx - 1);
            } }));
        audioReaderRef.current
            .init()
            .then((reader) => {
            setVoices(reader.state.voices);
            setNumberOfWords(reader.state.numberOfWords);
            setDuration(reader.state.duration);
        })
            .catch((e) => console.log(e));
        return () => {
            var _a;
            (_a = audioReaderRef.current) === null || _a === void 0 ? void 0 : _a.reset();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textContainer]);
    /* Play */
    React.useEffect(() => {
        const reader = audioReaderRef.current;
        if (!reader || isFirstRender)
            return setIsLoading(false);
        if (isReading) {
            if (reader.isPaused()) {
                console.log('Resuming');
                reader.resume();
            }
            else {
                console.log('Playing');
                reader.play();
            }
        }
        else {
            if (reader.isPlaying())
                reader.pause();
        }
    }, [isReading, textContainer, isFirstRender, setIsLoading]);
    return (React__default["default"].createElement(Container, { isvisible: isVisible.toString(), isminimized: isMinimized.toString(), styleoptions: styleOptions },
        React__default["default"].createElement(WindowButton, { style: { position: 'absolute', top: '2px', right: '3px' }, styleoptions: styleOptions, onPointerDown: handleHideReader },
            React__default["default"].createElement(MdOutlineClose, { title: "Close" })),
        React__default["default"].createElement(WindowButton, { style: { position: 'absolute', top: '2px', right: '24px' }, title: isMinimized ? 'Maximize' : 'Minimize', styleoptions: styleOptions, onPointerDown: isMinimized ? handleMaximizeReader : handleMinimizeReader }, isMinimized ? React__default["default"].createElement(FiMaximize, null) : React__default["default"].createElement(FiMinimize, null)),
        React__default["default"].createElement(SeekbarContainer, { isminimized: isMinimized.toString() },
            React__default["default"].createElement(Time, null, formatDuration_1(elapsedTime)),
            React__default["default"].createElement(Seekbar, { styleoptions: styleOptions, type: "range", min: "0", max: numberOfWords, step: "1", value: currentWordIndex, onChange: handleManualSeek }),
            React__default["default"].createElement(Time, { style: { left: 'auto', right: '-15px' } },
                formatDuration_1(duration),
                "*")),
        React__default["default"].createElement(ControlsContainer, { isminimized: isMinimized.toString() },
            React__default["default"].createElement("div", null,
                React__default["default"].createElement(ControlButton, { as: AiFillFastBackward, title: "Fast backward", onDoubleClick: (e) => e.preventDefault(), onPointerDown: () => handleGenericSeek(currentWordIndex - 5 <= 0
                        ? 0
                        : currentWordIndex - 5), styleoptions: styleOptions, isloading: isLoading.toString() }),
                !isReading ? (React__default["default"].createElement(ControlButton, { as: AiFillPlayCircle, title: "Play", onPointerDown: handleAudioReadPlay, styleoptions: styleOptions, isloading: isLoading.toString() })) : (React__default["default"].createElement(ControlButton, { as: AiFillPauseCircle, title: "Pause", styleoptions: styleOptions, onPointerDown: handleAudioReadPause, isloading: isLoading.toString() })),
                React__default["default"].createElement(ControlButton, { as: AiFillFastForward, title: "Fast forsward", onPointerDown: () => {
                        var _a, _b, _c;
                        return handleGenericSeek(currentWordIndex + 5 >=
                            ((_a = audioReaderRef.current) === null || _a === void 0 ? void 0 : _a.state.wholeTextArray.length)
                            ? (_c = (_b = audioReaderRef.current) === null || _b === void 0 ? void 0 : _b.state.wholeTextArray) === null || _c === void 0 ? void 0 : _c.length
                            : currentWordIndex + 5);
                    }, styleoptions: styleOptions, isloading: isLoading.toString() }),
                React__default["default"].createElement(Reset, { title: "reset", styleoptions: styleOptions, onClick: handleReset }))),
        !isMinimized && (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(OptionsContainer, null,
                React__default["default"].createElement("div", { id: "options-wrapper-1" },
                    React__default["default"].createElement(CustomSelect, { name: "rate", options: [
                            { value: '0.5', name: '0.5x' },
                            { value: '0.75', name: '0.75x' },
                            { value: '1', name: '1x' },
                            { value: '1.25', name: '1.25x' },
                            { value: '1.5', name: '1.5x' },
                            { value: '2', name: '2x' },
                        ], onChange: handleRateChange, value: rate, defaultValue: "1", title: "Rate", styleOptions: styleOptions }),
                    React__default["default"].createElement(CustomSelect, { name: "voice", options: voices === null || voices === void 0 ? void 0 : voices.map((voice) => {
                            var _a;
                            return ({
                                name: (_a = voice.name) === null || _a === void 0 ? void 0 : _a.replace(/(Microsoft)|(Online)|(\(Natural\)) -\s.*$/gm, ''),
                                value: voice.voiceURI,
                            });
                        }), onChange: handleVoiceChange, value: voice, defaultValue: "1", title: "Voices", styleOptions: styleOptions }),
                    React__default["default"].createElement(Dots, { styleoptions: styleOptions, onPointerDown: toggleSettings })),
                React__default["default"].createElement("div", { id: "options-wrapper-2" },
                    React__default["default"].createElement(SliderContainer, null,
                        React__default["default"].createElement(Slider, { icon: React__default["default"].createElement(BiVolumeFull, null), onChange: handleVolumeChange, data: {
                                min: '0.1',
                                max: '1',
                                step: '0.1',
                                value: +volume,
                                unit: '%',
                            }, styleOptions: styleOptions })))),
            React__default["default"].createElement(ExtraSettings, { styleoptions: styleOptions, issettingsvisible: isSettingsVisible.toString(), onPointerDown: toggleSettings },
                React__default["default"].createElement("label", { htmlFor: "is-row-check", onPointerDown: (e) => e.stopPropagation() },
                    React__default["default"].createElement("input", { id: "is-row-check", type: "checkbox", checked: isPreserveHighlighting, onChange: handlePreserveHighlighting }),
                    React__default["default"].createElement("h5", null, "Preserve Highlighting")))))));
};
AudioReader.defaultProps = {
    options: {
        isHighlightTextOn: true,
        isPreserveHighlighting: true,
        isSSROn: false,
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

exports.SpeechSynth = SpeechSynth;
exports["default"] = AudioReader;
exports.useAudioReaderStore = useAudioReaderStore;
//# sourceMappingURL=index.js.map
