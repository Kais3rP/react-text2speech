import styles from './styles.module.css';
import { useState } from 'react';
import AudioReader, { useAudioReaderStore } from 'react-text2speech';

function App() {
	const [node, setNode] = useState(null);

	const { isReading, isVisible, showAudioReader, startReading, stopReading } =
		useAudioReaderStore();

	return (
		<div className={styles.container}>
			<div ref={setNode}>
				<span>Hello world</span>
				<span>Hello world</span>
				<span>Hello world</span>
				<span>Hello world</span>
				<span>Hello world</span>
				<span>Hello world</span>
				<span>Hello world</span>
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
		</div>
	);
}

export default App;
