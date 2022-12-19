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
			<a
				href="https://github.com/Kais3rP/react-text2speech"
				className={styles.title}
				rel="no-referrer"
			>
				react-text2speech
			</a>
			{node && <AudioReader textContainer={node} />}
			<button
				className={styles.play}
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
			{isLoading && <div className="loader"></div>}
			<div className={styles.text} ref={setNode}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
				risus est, tempor at est non, auctor fringilla augue. Nullam vel
				fringilla ipsum, eget feugiat magna. Fusce et quam rhoncus,
				laoreet justo a, lacinia ipsum. Donec aliquet dictum est at
				feugiat. Aenean ullamcorper lobortis libero, sed malesuada
				lectus imperdiet eget. Nulla mattis mi sit amet justo consequat
				egestas. Phasellus rhoncus, turpis tincidunt congue egestas,
				erat turpis fringilla eros, ut blandit enim tortor quis magna.
				Etiam eget nisi sem. Nam vulputate elit massa, id egestas ipsum
				ultricies eget. Mauris iaculis vestibulum nisl nec lobortis.
				Mauris nec bibendum ante, in tincidunt nibh. Maecenas sapien
				ante, faucibus ut metus ut, maximus consequat felis. Donec sed
				ex semper, tempor sem gravida, posuere erat. Interdum et
				malesuada fames ac ante ipsum primis in faucibus. Vestibulum
				rhoncus leo vel aliquam vehicula. Maecenas bibendum sem in quam
				tincidunt, eget imperdiet metus pretium. Nullam placerat a ipsum
				at eleifend. Integer pharetra nulla ut arcu ultricies, et
				accumsan leo posuere. Quisque ac odio eu risus interdum
				vehicula. Ut sit amet tincidunt erat. Nullam porttitor convallis
				elementum. Fusce cursus urna vestibulum odio volutpat, vel
				volutpat enim interdum. Sed tincidunt gravida felis, ac finibus
				eros tempor nec. Nulla consectetur odio in turpis ultricies
				lobortis. Nunc augue tortor, gravida et lacinia a, aliquet et
				velit. Curabitur a elit eget felis consequat iaculis. Donec sit
				amet diam venenatis, elementum magna pulvinar, sollicitudin
				mauris. Vivamus mauris felis, venenatis at ultricies quis,
				bibendum eu sem. Sed aliquam rutrum malesuada. Cras suscipit ex
				in sapien luctus facilisis. Praesent placerat nisi et lacus
				pharetra, at finibus lorem malesuada. Pellentesque ac mollis
				justo. Orci varius natoque penatibus et magnis dis parturient
				montes, nascetur ridiculus mus. Curabitur finibus facilisis
				urna, in pellentesque est faucibus vitae. Quisque egestas, nulla
				non interdum dictum, nibh nunc tincidunt lacus, vel maximus orci
				dui sit amet quam. Vestibulum tempor neque at ipsum suscipit
				consectetur. Nulla tempor cursus odio id feugiat. Quisque
				dignissim non tortor malesuada pretium. Sed tincidunt porttitor
				velit, eu pretium orci sodales ullamcorper. Praesent interdum
				vitae ante sed lacinia. Ut a sagittis lorem. Nullam finibus
				purus ac tortor iaculis gravida. Integer ut aliquet justo. Morbi
				sed tristique dui. Aliquam neque ex, porta sit amet enim eu,
				vulputate dignissim sapien. Sed blandit felis quis imperdiet
				varius. Nam ac volutpat lorem. Curabitur feugiat massa ac
				vestibulum sagittis. Etiam ullamcorper risus eu sodales viverra.
				Praesent ut metus volutpat elit vulputate dapibus. Suspendisse
				potenti. Sed iaculis malesuada sodales. Aenean vitae convallis
				risus. Integer imperdiet pulvinar elit. Integer sed dolor nec mi
				bibendum auctor. Integer id blandit leo. Fusce nisl libero,
				porta nec erat id, luctus vehicula leo. Sed vitae leo eu nibh
				commodo facilisis a non enim. Nulla at hendrerit tellus, ut
				tempus mauris. Fusce nec eros luctus, tristique risus eu, mattis
				mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Aenean risus est, tempor at est non, auctor fringilla augue.
				Nullam vel fringilla ipsum, eget feugiat magna. Fusce et quam
				rhoncus, laoreet justo a, lacinia ipsum. Donec aliquet dictum
				est at feugiat. Aenean ullamcorper lobortis libero, sed
				malesuada lectus imperdiet eget. Nulla mattis mi sit amet justo
				consequat egestas. Phasellus rhoncus, turpis tincidunt congue
				egestas, erat turpis fringilla eros, ut blandit enim tortor quis
				magna. Etiam eget nisi sem. Nam vulputate elit massa, id egestas
				ipsum ultricies eget. Mauris iaculis vestibulum nisl nec
				lobortis. Mauris nec bibendum ante, in tincidunt nibh. Maecenas
				sapien ante, faucibus ut metus ut, maximus consequat felis.
				Donec sed ex semper, tempor sem gravida, posuere erat. Interdum
				et malesuada fames ac ante ipsum primis in faucibus. Vestibulum
				rhoncus leo vel aliquam vehicula. Maecenas bibendum sem in quam
				tincidunt, eget imperdiet metus pretium. Nullam placerat a ipsum
				at eleifend. Integer pharetra nulla ut arcu ultricies, et
				accumsan leo posuere. Quisque ac odio eu risus interdum
				vehicula. Ut sit amet tincidunt erat. Nullam porttitor convallis
				elementum. Fusce cursus urna vestibulum odio volutpat, vel
				volutpat enim interdum. Sed tincidunt gravida felis, ac finibus
				eros tempor nec. Nulla consectetur odio in turpis ultricies
				lobortis. Nunc augue tortor, gravida et lacinia a, aliquet et
				velit. Curabitur a elit eget felis consequat iaculis. Donec sit
				amet diam venenatis, elementum magna pulvinar, sollicitudin
				mauris. Vivamus mauris felis, venenatis at ultricies quis,
				bibendum eu sem. Sed aliquam rutrum malesuada. Cras suscipit ex
				in sapien luctus facilisis. Praesent placerat nisi et lacus
				pharetra, at finibus lorem malesuada. Pellentesque ac mollis
				justo. Orci varius natoque penatibus et magnis dis parturient
				montes, nascetur ridiculus mus. Curabitur finibus facilisis
				urna, in pellentesque est faucibus vitae. Quisque egestas, nulla
				non interdum dictum, nibh nunc tincidunt lacus, vel maximus orci
				dui sit amet quam. Vestibulum tempor neque at ipsum suscipit
				consectetur. Nulla tempor cursus odio id feugiat. Quisque
				dignissim non tortor malesuada pretium. Sed tincidunt porttitor
				velit, eu pretium orci sodales ullamcorper. Praesent interdum
				vitae ante sed lacinia. Ut a sagittis lorem. Nullam finibus
				purus ac tortor iaculis gravida. Integer ut aliquet justo. Morbi
				sed tristique dui. Aliquam neque ex, porta sit amet enim eu,
				vulputate dignissim sapien. Sed blandit felis quis imperdiet
				varius. Nam ac volutpat lorem. Curabitur feugiat massa ac
				vestibulum sagittis. Etiam ullamcorper risus eu sodales viverra.
				Praesent ut metus volutpat elit vulputate dapibus. Suspendisse
				potenti. Sed iaculis malesuada sodales. Aenean vitae convallis
				risus. Integer imperdiet pulvinar elit. Integer sed dolor nec mi
				bibendum auctor. Integer id blandit leo. Fusce nisl libero,
				porta nec erat id, luctus vehicula leo. Sed vitae leo eu nibh
				commodo facilisis a non enim. Nulla at hendrerit tellus, ut
				tempus mauris. Fusce nec eros luctus, tristique risus eu, mattis
				mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Aenean risus est, tempor at est non, auctor fringilla augue.
				Nullam vel fringilla ipsum, eget feugiat magna. Fusce et quam
				rhoncus, laoreet justo a, lacinia ipsum. Donec aliquet dictum
				est at feugiat. Aenean ullamcorper lobortis libero, sed
				malesuada lectus imperdiet eget. Nulla mattis mi sit amet justo
				consequat egestas. Phasellus rhoncus, turpis tincidunt congue
				egestas, erat turpis fringilla eros, ut blandit enim tortor quis
				magna. Etiam eget nisi sem. Nam vulputate elit massa, id egestas
				ipsum ultricies eget. Mauris iaculis vestibulum nisl nec
				lobortis. Mauris nec bibendum ante, in tincidunt nibh. Maecenas
				sapien ante, faucibus ut metus ut, maximus consequat felis.
				Donec sed ex semper, tempor sem gravida, posuere erat. Interdum
				et malesuada fames ac ante ipsum primis in faucibus. Vestibulum
				rhoncus leo vel aliquam vehicula. Maecenas bibendum sem in quam
				tincidunt, eget imperdiet metus pretium. Nullam placerat a ipsum
				at eleifend. Integer pharetra nulla ut arcu ultricies, et
				accumsan leo posuere. Quisque ac odio eu risus interdum
				vehicula. Ut sit amet tincidunt erat. Nullam porttitor convallis
				elementum. Fusce cursus urna vestibulum odio volutpat, vel
				volutpat enim interdum. Sed tincidunt gravida felis, ac finibus
				eros tempor nec. Nulla consectetur odio in turpis ultricies
				lobortis. Nunc augue tortor, gravida et lacinia a, aliquet et
				velit. Curabitur a elit eget felis consequat iaculis. Donec sit
				amet diam venenatis, elementum magna pulvinar, sollicitudin
				mauris. Vivamus mauris felis, venenatis at ultricies quis,
				bibendum eu sem. Sed aliquam rutrum malesuada. Cras suscipit ex
				in sapien luctus facilisis. Praesent placerat nisi et lacus
				pharetra, at finibus lorem malesuada. Pellentesque ac mollis
				justo. Orci varius natoque penatibus et magnis dis parturient
				montes, nascetur ridiculus mus. Curabitur finibus facilisis
				urna, in pellentesque est faucibus vitae. Quisque egestas, nulla
				non interdum dictum, nibh nunc tincidunt lacus, vel maximus orci
				dui sit amet quam. Vestibulum tempor neque at ipsum suscipit
				consectetur. Nulla tempor cursus odio id feugiat. Quisque
				dignissim non tortor malesuada pretium. Sed tincidunt porttitor
				velit, eu pretium orci sodales ullamcorper. Praesent interdum
				vitae ante sed lacinia. Ut a sagittis lorem. Nullam finibus
				purus ac tortor iaculis gravida. Integer ut aliquet justo. Morbi
				sed tristique dui. Aliquam neque ex, porta sit amet enim eu,
				vulputate dignissim sapien. Sed blandit felis quis imperdiet
				varius. Nam ac volutpat lorem. Curabitur feugiat massa ac
				vestibulum sagittis. Etiam ullamcorper risus eu sodales viverra.
				Praesent ut metus volutpat elit vulputate dapibus. Suspendisse
				potenti. Sed iaculis malesuada sodales. Aenean vitae convallis
				risus. Integer imperdiet pulvinar elit. Integer sed dolor nec mi
				bibendum auctor. Integer id blandit leo. Fusce nisl libero,
				porta nec erat id, luctus vehicula leo. Sed vitae leo eu nibh
				commodo facilisis a non enim. Nulla at hendrerit tellus, ut
				tempus mauris. Fusce nec eros luctus, tristique risus eu, mattis
				mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Aenean risus est, tempor at est non, auctor fringilla augue.
				Nullam vel fringilla ipsum, eget feugiat magna. Fusce et quam
				rhoncus, laoreet justo a, lacinia ipsum. Donec aliquet dictum
				est at feugiat. Aenean ullamcorper lobortis libero, sed
				malesuada lectus imperdiet eget. Nulla mattis mi sit amet justo
				consequat egestas. Phasellus rhoncus, turpis tincidunt congue
				egestas, erat turpis fringilla eros, ut blandit enim tortor quis
				magna. Etiam eget nisi sem. Nam vulputate elit massa, id egestas
				ipsum ultricies eget. Mauris iaculis vestibulum nisl nec
				lobortis. Mauris nec bibendum ante, in tincidunt nibh. Maecenas
				sapien ante, faucibus ut metus ut, maximus consequat felis.
				Donec sed ex semper, tempor sem gravida, posuere erat. Interdum
				et malesuada fames ac ante ipsum primis in faucibus. Vestibulum
				rhoncus leo vel aliquam vehicula. Maecenas bibendum sem in quam
				tincidunt, eget imperdiet metus pretium. Nullam placerat a ipsum
				at eleifend. Integer pharetra nulla ut arcu ultricies, et
				accumsan leo posuere. Quisque ac odio eu risus interdum
				vehicula. Ut sit amet tincidunt erat. Nullam porttitor convallis
				elementum. Fusce cursus urna vestibulum odio volutpat, vel
				volutpat enim interdum. Sed tincidunt gravida felis, ac finibus
				eros tempor nec. Nulla consectetur odio in turpis ultricies
				lobortis. Nunc augue tortor, gravida et lacinia a, aliquet et
				velit. Curabitur a elit eget felis consequat iaculis. Donec sit
				amet diam venenatis, elementum magna pulvinar, sollicitudin
				mauris. Vivamus mauris felis, venenatis at ultricies quis,
				bibendum eu sem. Sed aliquam rutrum malesuada. Cras suscipit ex
				in sapien luctus facilisis. Praesent placerat nisi et lacus
				pharetra, at finibus lorem malesuada. Pellentesque ac mollis
				justo. Orci varius natoque penatibus et magnis dis parturient
				montes, nascetur ridiculus mus. Curabitur finibus facilisis
				urna, in pellentesque est faucibus vitae. Quisque egestas, nulla
				non interdum dictum, nibh nunc tincidunt lacus, vel maximus orci
				dui sit amet quam. Vestibulum tempor neque at ipsum suscipit
				consectetur. Nulla tempor cursus odio id feugiat. Quisque
				dignissim non tortor malesuada pretium. Sed tincidunt porttitor
				velit, eu pretium orci sodales ullamcorper. Praesent interdum
				vitae ante sed lacinia. Ut a sagittis lorem. Nullam finibus
				purus ac tortor iaculis gravida. Integer ut aliquet justo. Morbi
				sed tristique dui. Aliquam neque ex, porta sit amet enim eu,
				vulputate dignissim sapien. Sed blandit felis quis imperdiet
				varius. Nam ac volutpat lorem. Curabitur feugiat massa ac
				vestibulum sagittis. Etiam ullamcorper risus eu sodales viverra.
				Praesent ut metus volutpat elit vulputate dapibus. Suspendisse
				potenti. Sed iaculis malesuada sodales. Aenean vitae convallis
				risus. Integer imperdiet pulvinar elit. Integer sed dolor nec mi
				bibendum auctor. Integer id blandit leo. Fusce nisl libero,
				porta nec erat id, luctus vehicula leo. Sed vitae leo eu nibh
				commodo facilisis a non enim. Nulla at hendrerit tellus, ut
				tempus mauris. Fusce nec eros luctus, tristique risus eu, mattis
				mi.
			</div>
		</div>
	);
}

export default App;
