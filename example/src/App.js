import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import TextReader, { useTextReader } from 'react-text2speech';
import { highlightAll, languages } from 'prismjs/components/prism-core';
import format from 'format-duration';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';

function App() {
	const [node, setNode] = useState(null);

	/* Use the useTextReader hook to retrieve the state and the handlers to control the reader from your application, ù
	remember to set the bindReader prop on TextReader component to bind your Components higher in the tree hierarchy
	with its own state */

	const { bindReader, handlers, state } = useTextReader();

	const { play, pause, showReader } = handlers;
	const { isReading, isLoading, isVisible, elapsedTime = 0 } = state;

	useEffect(() => {
		if (node) {
			highlightAll(languages.js);
		}
	}, [node]);

	return (
		<div className={styles.container}>
			{node && (
				<TextReader
					textContainer={node}
					options={{ language: 'en' }}
					bindReader={bindReader}
				/>
			)}
			<a
				href="https://github.com/Kais3rP/react-text2speech"
				className={styles.title}
				rel="no-referrer"
			>
				react-text2speech
			</a>

			<button
				className={styles.play}
				onPointerDown={
					isReading
						? pause
						: () => {
								if (!isVisible) showReader();
								play();
						  }
				}
			>
				{isReading ? 'Pause' : 'Play'}
			</button>
			<h5 className={styles.time}>{format(elapsedTime)}</h5>
			{isLoading && <div className="loader"></div>}
			<div className={styles.text} ref={setNode}>
				<h1>Ut vero dolorem ea illum fugit.</h1>
				<p>
					Lorem dolor sit amet. Et animi debitis eos tenetur
					inventoreQui totam qui iure ratione ab distinctio deleniti
					ut modi inventore. Sed totam iste et dolorem autem
					<em>
						Eum magni sit quaerat voluptate et officiis tempora in
						laborum modi.
					</em>
					Ad dolorem illum qui quibusdam veritatisEum nihil rem quod
					laborum hic doloremque nesciunt rem beatae iusto. Sit esse
					libero non enim ametEum quidem et dignissimos repellat qui
					voluptatem possimus. Et aperiam sapienteQui dignissimos ut
					excepturi reiciendis sed dignissimos quidem ut ratione ullam
					quo animi quas ea enim odio. Quo tempore internos At
					corporis mollitia33 nemo sit voluptatem ullam cum mollitia
					tempore ad minima soluta. Ut mollitia necessitatibus ea
					delectus eiusqui voluptas! At fugiat praesentium aut
					veritatis officiisut error.
				</p>
				<ul>
					<li>
						Vel consequatur officia rem error facere est doloribus
						fugiat.
					</li>
					<li>
						Qui tempore cumque non inventore culpa non adipisci
						inventore.
					</li>
					<li>
						Et voluptatem voluptatem et recusandae eius At tenetur
						eaque.
					</li>
					<li>In voluptates velit hic facere reiciendis. </li>
					<li>Qui officiis atque a voluptate aperiam. </li>
					<li>
						Quo harum consequatur aut saepe consequuntur aut
						praesentium incidunt.
					</li>
				</ul>
				<blockquote cite="https://www.loremipzum.com">
					Est molestias assumenda non veritatis libero est voluptates
					corrupti sed quis Quis et consequatur dolores.
				</blockquote>
				<h2>Vel natus dignissimos ad totam earum a omnis enim! </h2>
				<p>
					Ad impedit temporaQui quos sit aliquid enim qui maxime modi
					non fugiat voluptatem non accusantium galisum vel voluptate
					fuga. Sed architecto veritatis ut iusto asperioresest
					consectetur et inventore illum. Et commodi quasiAut
					asperiores est accusamus quidem eum explicabo facilis? 33
					nihil modiAut voluptates 33 quis fuga aut quia ullam sed
					voluptate provident aut fugiat nesciunt? Et explicabo illo
					qui veritatis impeditEum velit eos ratione sunt est nihil
					nobis aut provident delectus et galisum eius. Et omnis
					eaqueUt quae qui pariatur ratione eos mollitia saepe? Aut
					repellendus quaerat <em>Aut quibusdam</em> et iusto quia.
					Sit ratione omnis quo deserunt itaqueEst nobis et culpa
					dolorum rem similique culpa ad amet aliquam aut totam velit.
					Ea modi architecto ut eveniet ipsamIn eveniet ut pariatur
					libero eos eveniet voluptatem cum iste galisum. Non dolorum
					nobisQuo dolore est quibusdam quidem eos mollitia explicabo
					ab esse rerum quo optio facilis eum galisum laudantium. In
					fuga nesciunt
					<a
						href="https://www.loremipzum.com"
						target="_blank"
						rel="noreferrer"
					>
						Et assumenda sit doloremque dicta est beatae doloremque
					</a>
					33 ratione natus id voluptas quidem ut inventore
					consequatur.
				</p>
				<ol>
					<li>
						Et voluptatem dolor aut perspiciatis nesciunt id
						nesciunt ipsum.
					</li>
					<li>Ut unde odit et labore Quis. </li>
					<li>
						Non quia doloribus ut doloremque rerum in galisum
						exercitationem ut rerum ipsa.
					</li>
					<li>
						Ut quia voluptas qui perferendis earum aut
						exercitationem aspernatur.
					</li>
					<li>
						Sit eius aperiam ut tenetur asperiores est debitis
						doloremque qui quaerat quaerat.
					</li>
				</ol>
				<h3>Qui laborum quidem et vero autem ut quos aliquam. </h3>
				<p>
					Aut accusantium consequatur et reprehenderit eiuset magni et
					quas doloremque qui ipsam quia. Ut voluptate numquamEum
					beatae et voluptas dignissimos. Non laborum nesciunt ad
					rerum nesciuntEst praesentium aut veniam modi nam culpa
					nulla quo autem fugiat. Cum atque rationeNon neque sit
					ratione fugiat qui aspernatur quos vel voluptates facilis.
					Est consequatur illo est quis teneturqui Quis aut itaque
					quae ea laborum omnis. Ut eligendi magnamEx pariatur in
					quasi enim est quia impedit et odio nulla. Aut repudiandae
					quos aut possimus maxime
					<strong>Ut quaerat qui ullam dolorem</strong> id ratione
					neque qui iste minima quo quia eius. Nam optio vitae ea
					cumque repudiandae
					<a
						href="https://www.loremipzum.com"
						target="_blank"
						rel="noreferrer"
					>
						Non molestias eos accusantium laboriosam
					</a>
					qui velit dolorem in sapiente voluptates At nihil totam. Non
					illum aspernatur sit similique odita iste est iure
					consequatur. Eos impedit adipisci ut recusandae rerumEum
					culpa qui excepturi sequi. Sed magni laudantium At odit
					quisNon fuga sit alias libero sit dolorem dolorem qui itaque
					doloremque qui optio excepturi. Vel aliquid voluptasEt quae
					cum soluta molestiae non saepe dolores eum voluptatibus
					asperiores et possimus enim. Et distinctio officia qui
					tempora fugaAut porro est recusandae repellat. Ea placeat
					commodi quo excepturi enimId iste?
				</p>
				<dl>
					<dt>
						<dfn>Sed eius placeat sed repellat dicta. </dfn>
					</dt>
					<dd>Aut omnis mollitia id dignissimos ipsum. </dd>
					<dt>
						<dfn>
							Aut perferendis tempore non dolore reiciendis.
						</dfn>
					</dt>
					<dd>Et expedita internos qui voluptatibus sint. </dd>
				</dl>
				<h2>Edge Cases:</h2>
				<h4>Test code:</h4>
				<pre>
					<code className="language-javascript">{`
function App() {
	const [node, setNode] = useState(null);

	useEffect(() => {
		if (node) {
			// highlightAll(languages.js);
		}
	}, [node]);

	const {
		isLoading,
		isReading,
		isVisible,
		showTextReader,
		play,
		pause(),
	} = useTextReaderStore();

	return (
		<div className={styles.container}>
			<a
				href="https://github.com/Kais3rP/react-text2speech"
				className={styles.title}
				rel="no-referrer"
			>
				react-text2speech
			</a>
			{node && (
				<TextReader textContainer={node} options={{ language: 'it' }} />
			)}
			<button
				className={styles.play}
				onPointerDOwn={
					isReading
						? pause()
						: () => {
								if (!isVisible) showTextReader();
								play();
						  }
				}
			>
				{isReading ? 'Pause' : 'Play'}
			</button>
			{isLoading && <div className="loader"></div>}
			<div className={styles.text} ref={setNode}>Some text</div>
		</div>
	);
}
					`}</code>
				</pre>
				<h4>Special readable characters:</h4>
				<span>
					# @ / \ _ = + $ £ % & #@/\_ test@test test/test test\test
					test#test test_test °Test ^Test test°test test^test.
				</span>
				<h4>Special unreadable characters:</h4>
				<span>{` - () [] {} " ' < > \` | "quotation" 'quotation' \`quotation\` <unreadablequotation> <<unreadablequotation>>.`}</span>
				<h4>Test punctuation in the middle of text:</h4>
				<span>
					so.me.text.text so.it so.org so.vercel.app so.com so.me.text
					www.com abc33.bc32 test.com http://test.com www.test.com
					so:me:text:text so;me;text;text so,me,text,text.
				</span>
				<h4>Test pound:</h4>
				<span> # #hashtag # hash-tag.</span>
				<h4>Test email:</h4>
				<span> test@email.com.</span>
				<h4>Test parens:</h4>
				<span>{`Test parens: ( parens ) (parens)  [ parens ] [parens] { parens } {parens}.`}</span>
				<h4>Test punctuation </h4>
				<span>{`Test punctuation  : Test , Test : Test ; Test . Test ! Test ?`}</span>
				Free text test.
				<h4>Test numbers: </h4>
				<span>10 100 1000 1,000 </span>
				<h4>Test decimals</h4>
				<span>0.001 10.1001 10.100</span>
				<h4>Test Dates:</h4>
				<span>12/12/2112 10/01/1001 06-02-1999</span>
				<h4>Test time:</h4>
				<span>14:12:12</span>
				<h4>Test slashes: </h4>
				<span>test/test/test.</span>
				<h4>Test ellipsis:</h4>
				<span>Test...</span>
				<h4>Test nonsense random words: </h4>
				<span>dfsdf sdfsdf.</span>
				<h4>
					Test numbers + units of measure: 1.2Kg 1.3Lb 300Km
					100.000m/s .
				</h4>
				<p>
					<em>Test punctuation outside an HTML element</em>.
					<em>Test punctuation outside an HTML element</em>;
					<em>Test punctuation outside an HTML element</em>!
					<em>Test punctuation outside an HTML element</em>?
				</p>
				<h4>
					Test link:
					<a href="123">
						https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
					</a>
				</h4>
				<h4>Emoji: </h4>
				<p>😀 😃 😄 😁 😆 😅 😂 🤣</p>
			</div>
		</div>
	);
}

export default App;
