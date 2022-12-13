import styles from './styles.module.css';
import { useState } from 'react';
import AudioReader, { useAudioReaderStore } from 'react-text2speech';

function App() {
	const [node, setNode] = useState(null);

	const {
		isLoading,
		isReading,
		isVisible,
		showAudioReader,
		startReading,
		stopReading,
	} = useAudioReaderStore();

	return (
		<div className={styles.container}>
			<div ref={setNode}>
				In the last few months I found myself working on WebRTC
				technologies, I had never used them before and they represented
				a challenge for me. I had to implement a basic Video Call
				feature on a web application built on top of React/Node/Express,
				I admit it's been a bit of a struggle at start, to grasp the
				flow of the technology, since there are several steps to follow
				in order to set up the correct architecture, but once the main
				flow is understood everything becomes easier. I decided to write
				this guide because right now I found only outdated examnples on
				web, and nothing specifically addressing how to implement a
				fully working WebRTC feature with a MERN Stack on top of Web
				Sockets. This guide won't be focused too much on all the
				implementation details of the WebRTC stack of technologies, or
				on how WebRTC protocols internally handle the communication
				streams, you can visit: https://webrtc.org/ and:
				https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
			</div>
			{node && <AudioReader textContainer={node} />}
			<button
				onClick={
					isReading
						? stopReading
						: () => {
								if (!isVisible) showAudioReader();
								startReading();
						  }
				}
			>
				{isReading ? 'Pause' : 'Play'}
			</button>
			<h2>{isLoading && 'Loading...'}</h2>
		</div>
	);
}

export default App;
