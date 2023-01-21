# react-text2speech

[![NPM](https://img.shields.io/npm/v/react-text2speech.svg)](https://www.npmjs.com/package/react-text2speech)
[![npm](https://img.shields.io/npm/dm/react-text2speech.svg)](https://www.npmjs.com/package/react-text2speech)

## Try it out

Try it [here](https://kais3rp.github.io/react-text2speech/)

## Introduction

A React Component that leverages WEB Speech API to implement a text reader for web pages.

## Features:

-   Voice language customization
-   Highlight of text during reading
-   Full control on timeline by sliding seekbar or by manually clicking text words
-   Preview of reading time ( time is averagely calculated )
-   Control reading speed
-   Select voice type and language

## Notes

Since the speech engine behaves differently on mobile browsers or according to the selected language, there are some optimization workaround to prevent special characters like "/" or "-" to send out of sync the highlighting of text. There surely are some cases that have not yet been taken into account, if you are experiencing any problem you are kindly asked to open an issue.
Stuff inside `<code>` tags won't be parsed and the engine is not going to read it, for the same reason stated above.
More info are provided in the _Edge Cases_ section.

## Install

```bash
npm install --save react-text2speech
```

Or with yarn:

```bash
yarn add react-text2speech
```

## Usage

_Check the `example` folder for a comprehensive example of how to import and use the React Component in your application._

1. Import the Component and the zustand store:
   `import TextReader, { useTextReaderStore } from 'react-text2speech';`
2. The store exports a set of global state variables and setters which are used internally by the Reader Component, and you should not mess with them, these are the ones you should use if you want to have an extra control on the reader and show extra UI behavior:

```javascript
const {
	isLoading,
	isReading,
	isVisible,
	showTextReader,
	hideTextReader,
	startReading,
	stopReading,
} = useTextReaderStore();
```

3. Using the Component is as easy as doing:
   `<TextReader textContainer={node} />`
   Where `node` must be an `HTMLElement` containing the text or HTML child nodes containing text, that you want to be read.
   Since in React the DOM refs receive the reference to the DOM element after the first render, the best way to pass the `ref` to the `TextReader` Component is setting it as a React State:

```javascript
const [node, setNode] = useState(null);

...

<div ref={setNode}>Some text to be read here</div>
{node && <TextReader textContainer={node} />}

```

4. The `TextReader` Component expects just the `textContainer` prop as required, you can pass two extra props though to tweak style and options:

## API / Props

| Props         | Default value                                                                      | Required |
| ------------- | ---------------------------------------------------------------------------------- | -------- |
| textContainer | undefined                                                                          | true     |
| styleOptions  | { primaryColor: "#00D", secondaryColor: "55F", bgColor: "#FFF", textColor: "222" } | false    |
| options       | { language: 'en' }                                                                 | false    |

**_Remember to set the language accordingly to the language of the text that it's going to be read, it's enough you type the first locale letters e.g. "en", "de", "fr", etc... _**

## Edge Cases

There are some edge cases not yet covered and hardly coverable with extreme precision since the speech synth handles some special characters like "/" or "." and "," in numbers ( 1.000 , 1,000 ) in different ways depending on the language choosen, some locales use "." for decimals, others use ",".
Some cases are automically covered during the content parsing, for example if you happen to have grammar inconstencies like "word , word" instead of "word, word", they are going to be fixed automatically.
Some edge cases like dots in the middle of word like "some.word" are going to be parsed and read as "dot" in english, while dots used as punctuation marks won't be read by the synth.
These are currently the issues and edge cases not yet covered:

-   Punctuation marks directly after an HTML tag won't be taken into account as a chunk delimiter.

## License

MIT © [react-text2speech](https://github.com/Kais3rP/react-text2speech)
