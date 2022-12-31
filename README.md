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
-   Optional methods to add Highlight tags during static generation of the page to speed up page loading.

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

| Props         | Default value                                                                                                                                                                                     | Required |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| textContainer | undefined                                                                                                                                                                                         | true     |
| styleOptions  | { primaryColor: "#00D", secondaryColor: "55F", bgColor: "#FFF", textColor: "222" }                                                                                                                | false    |
| options       | { pitch: 1, rate: 1, language: 'en',voiceURI: 'Microsoft Aria Online (Natural) - English (United States)', volume: 1, isHighlightTextOn: true, isPreserveHighlighting: true, isSSROn: false, } | false    |

## License

MIT © [react-text2speech](https://github.com/Kais3rP/react-text2speech)
