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
	console.log('Is loading', isLoading);
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
			<h2>{isLoading && 'Loading...'}</h2>
		</div>
	);
}

export default App;
