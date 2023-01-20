import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import TextReader, { useTextReaderStore } from 'react-text2speech';
import { highlightAll, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';

function App() {
	const [node, setNode] = useState(null);

	useEffect(() => {
		if (node) {
			highlightAll(languages.js);
		}
	}, [node]);

	const {
		isLoading,
		isReading,
		isVisible,
		showTextReader,
		startReading,
		stopReading,
	} = useTextReaderStore();

	const test = ` <p>
	In the last few months I found myself working on
	<strong>WebRTC</strong> technologies, I had never used them
	before and they represented a challenge for me. I had to
	implement a basic Video Call feature on a web application
	built on top of React/Node/Express, I admit it's been a bit
	of a struggle at start, to grasp the flow of the technology,
	since there are several steps to follow in order to set up
	the correct architecture, but once the main flow is
	understood everything becomes easier.
</p>
<p>
	I decided to write this guide because right now I found only
	outdated examnples on web, and nothing specifically
	addressing how to implement a fully working
	<strong>WebRTC</strong> feature with a MERN Stack on top of
	Web Sockets.
</p>
<p>
	This guide won't be focused too much on all the
	implementation details of the <strong>WebRTC</strong> stack
	of technologies, or on how <strong>WebRTC</strong> protocols
	internally handle the communication streams, you can visit:
	<br />
	<a href="https://webrtc.org/">https://webrtc.org/</a>
	<br />
	and:
	<br />
	<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API">
		https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
	</a>
</p>
<p>
	for more detailed info on this technology.
	<br />
	The quantity of information might result a bit overwhelming,
	so if you are like me, which is, you need to have something
	at least basically working to play with, to learn something
	and to experiment, this guide might help you to save time
	and resources instead of wandering with no mean on official
	DOCs.
	<br />I will try to focus more on how to set up a minimum
	viable <strong>WebRTC</strong> communication application
	between two (or more) peers, by sharing a webcam stream of
	data ( audio + video ).
	<br />
	The clientside code examples will make use of React library,
	but they will be just code snippets. The serverside code
	will make use of Node.js/Express The Signaling phase ( which
	we will address in the next page ) will be taken care of by
	WebSockets communication, using Socket.io library.
	<br />
	<em>
		There are some guides or tutorials that already address
		a similar stack (web sockets and Node serverside) but I
		found them often using code that is by now already
		deprecated, so this guide will be currently updated with
		the best practices at
	</em>
	<strong>23/01/2021</strong>
	<em>
		and I'll try to keep it updated while
		<strong>WebRTC</strong> specs are going to change (
		cause they change quite often ).
	</em>
	<br />
	We are going to face all the necessary phases in order to
	establish a secure connection between the peers, through the
	<strong>WebRTC</strong> protocol:
</p>
<h2>PHASES</h2>
<p>
	<strong>SIGNALING</strong>
	<br />
	<strong>CONNECTING</strong>
	<br />
	<strong>SECURING</strong>
	<br />
	<strong>COMMUNICATING</strong>
	<br />
	Let's begin!
</p>
<h1>SIGNAL / CONNECT / COMMUNICATE</h1>
<h2>
	SIGNALING also known as: NEGOTIATION + CONNECTING +
	COMMUNICATING
</h2>
<p>
	The SIGNALING phase is the most important one, because it's
	here that the peers start to establish an handshake and
	confirm that they want to start a communication, this is
	done through the exchange of two objects called the offer
	and the answer . Again, I won't dig into the nature of these
	objects or their representation (you can find everything in
	the official documentation ) what's enough we know, is this:
	the <strong>INITIALIZER</strong> of the connection creates
	an offer and saves it locally as a sort of a
	<strong>LOCAL TOKEN</strong>. it sends it to the remote
	peer. the remote peer saves the offer as a
	<strong>REMOTE TOKEN</strong>. the remote peer itself in
	this very same moment proceeds to create a new token, which
	is the answer and saves it locally as its
	<strong>LOCAL TOKEN</strong>. it sends it to the
	<strong>initializer</strong> peer. the
	<strong>initializer</strong> peer saves it as its
	<strong>REMOTE TOKEN</strong> as soon as it receives it. Now
	that both the peers own the offer/answer pair they can pass
	to the next phase. The <strong>WebRTC</strong> specs do not
	force you to use a specific technology for the negotiation
	phase, you can use whatever you want, you could even find
	yourself sending the offer/answer via e-mail or through a
	REST API, or by a phone call and the other peer would have
	to give his answer the same way, or another way, it doesn't
	matter, what matters is that both the peers would have to
	save them locally and remotely on the RTCPeerConnection
	instance, and it would work.
	<em>
		I will discuss the CONNECTING phase mixed to the
		SIGNALING phase, because they actually happen
		simultaneously.
	</em>`;

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
				onClick={
					isReading
						? stopReading
						: () => {
								if (!isVisible) showTextReader();
								startReading();
						  }
				}
			>
				{isReading ? 'Pause' : 'Play'}
			</button>
			{isLoading && <div className="loader"></div>}
			<div
				className={styles.text}
				ref={setNode}
				dangerouslySetInnerHTML={{ __html: test }}
			>
				{/* <p>
					In the last few months I found myself working on
					<strong>WebRTC</strong> technologies, I had never used them
					before and they represented a challenge for me. I had to
					implement a basic Video Call feature on a web application
					built on top of React/Node/Express, I admit it's been a bit
					of a struggle at start, to grasp the flow of the technology,
					since there are several steps to follow in order to set up
					the correct architecture, but once the main flow is
					understood everything becomes easier.
				</p>
				<p>
					I decided to write this guide because right now I found only
					outdated examnples on web, and nothing specifically
					addressing how to implement a fully working
					<strong>WebRTC</strong> feature with a MERN Stack on top of
					Web Sockets.
				</p>
				<p>
					This guide won't be focused too much on all the
					implementation details of the <strong>WebRTC</strong> stack
					of technologies, or on how <strong>WebRTC</strong> protocols
					internally handle the communication streams, you can visit:
					<br />
					<a href="https://webrtc.org/">https://webrtc.org/</a>
					<br />
					and:
					<br />
					<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API">
						https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
					</a>
				</p>
				<p>
					for more detailed info on this technology.
					<br />
					The quantity of information might result a bit overwhelming,
					so if you are like me, which is, you need to have something
					at least basically working to play with, to learn something
					and to experiment, this guide might help you to save time
					and resources instead of wandering with no mean on official
					DOCs.
					<br />I will try to focus more on how to set up a minimum
					viable <strong>WebRTC</strong> communication application
					between two (or more) peers, by sharing a webcam stream of
					data ( audio + video ).
					<br />
					The clientside code examples will make use of React library,
					but they will be just code snippets. The serverside code
					will make use of Node.js/Express The Signaling phase ( which
					we will address in the next page ) will be taken care of by
					WebSockets communication, using Socket.io library.
					<br />
					<em>
						There are some guides or tutorials that already address
						a similar stack (web sockets and Node serverside) but I
						found them often using code that is by now already
						deprecated, so this guide will be currently updated with
						the best practices at
					</em>
					<strong>23/01/2021</strong>
					<em>
						and I'll try to keep it updated while
						<strong>WebRTC</strong> specs are going to change (
						cause they change quite often ).
					</em>
					<br />
					We are going to face all the necessary phases in order to
					establish a secure connection between the peers, through the
					<strong>WebRTC</strong> protocol:
				</p>
				<h2>PHASES</h2>
				<p>
					<strong>SIGNALING</strong>
					<br />
					<strong>CONNECTING</strong>
					<br />
					<strong>SECURING</strong>
					<br />
					<strong>COMMUNICATING</strong>
					<br />
					Let's begin!
				</p>
				<h1>SIGNAL / CONNECT / COMMUNICATE</h1>
				<h2>
					SIGNALING also known as: NEGOTIATION + CONNECTING +
					COMMUNICATING
				</h2>
				<p>
					The SIGNALING phase is the most important one, because it's
					here that the peers start to establish an handshake and
					confirm that they want to start a communication, this is
					done through the exchange of two objects called the offer
					and the answer . Again, I won't dig into the nature of these
					objects or their representation (you can find everything in
					the official documentation ) what's enough we know, is this:
					the <strong>INITIALIZER</strong> of the connection creates
					an offer and saves it locally as a sort of a
					<strong>LOCAL TOKEN</strong>. it sends it to the remote
					peer. the remote peer saves the offer as a
					<strong>REMOTE TOKEN</strong>. the remote peer itself in
					this very same moment proceeds to create a new token, which
					is the answer and saves it locally as its
					<strong>LOCAL TOKEN</strong>. it sends it to the
					<strong>initializer</strong> peer. the
					<strong>initializer</strong> peer saves it as its
					<strong>REMOTE TOKEN</strong> as soon as it receives it. Now
					that both the peers own the offer/answer pair they can pass
					to the next phase. The <strong>WebRTC</strong> specs do not
					force you to use a specific technology for the negotiation
					phase, you can use whatever you want, you could even find
					yourself sending the offer/answer via e-mail or through a
					REST API, or by a phone call and the other peer would have
					to give his answer the same way, or another way, it doesn't
					matter, what matters is that both the peers would have to
					save them locally and remotely on the RTCPeerConnection
					instance, and it would work.
					<em>
						I will discuss the CONNECTING phase mixed to the
						SIGNALING phase, because they actually happen
						simultaneously.
					</em>
					Let's see some client side code: Imagine that you have a
					custom React hook that is responsible to manage what happens
					to the client of the <strong>initializer</strong> peer and
					on that of the remote, so we will need to control the flow
					of our negotiation, so that all the phases are respected.
					<em>
						This hook is receiving the socket object, and the DOM
						references of two video elements that we are going to
						use to display the origin and the remote stream source:
					</em>
				</p>
				<h2>
					PEER CONNECTION OF THE <strong>INITIALIZER</strong> PEER:
				</h2>
				<p>
					Okay, that's a lot of code, let's try to split it to analyze
					what's really important: These are basically two effects
					which are responsible to initialize the instance of
					RTCPeerConnection constructor respectively in the client of
					the <strong>INITIALIZER</strong> and in that of the RECEIVER
					peer. You could be tempted to use the same effect for both
					and trying to make slight changes to the listeners
					conditionally ( I tried that ), but I think it's not a good
					idea, because those events are triggered at different times
					in the client of the <strong>INITIALIZER</strong> and on
					that of the RECEIVER, e.g ( the <strong>INITIALIZER</strong>
					sets initiPeerConnectionSender to true, and creates an
					instance of RTCPeerConnection as soon as it decides to start
					a call , while the RECEIVER initializes its one, only if the
					remote user accepts to establish a peer connection ), plus,
					in this way we may keep the code inside the effect cleaner,
					without conditional or if..else statements which lower the
					readability. We just know that those two RTCPeerConnections
					are initialized when we decide to set respectively
					initPeerConnectionSender and initPeerConnectionReceiver to
					true. So, what happens inside these effects, let's split the
					code and analyze it: First of all, we create our
					RTCPeerConnection instance and save it in a ref for further
					use:
				</p>
				<p>
					The configuration object is optional, I am using a basic
					config here, with google free STUN servers domains. For more
					info about why a STUN server is preferable to negotiate you
					can go here:
					<br />
					<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols#stun">
						https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols#stun
					</a>
				</p>
				<p>
					Basically since WebRTC let us connect directly from client
					to client, a lot of network issues may arise, like router
					NAT, firewalls, etc... STUN and TURN server help bypassing
					these incompatibility issues. STUN are often free or
					inexpensive, while TURN are not.
				</p>
				<p>
					Here we are setting all the event listeners, with their
					callback explicitly declared (no anonymous functions since
					we need to clean the listeners once the call receives a
					terminate signal ).
				</p>
				<h3>
					There are only three required event listeners in order to
					perform the connection, they are:
				</h3>
				<ul>
					<li>onnegotiationneeded</li>
					<li>onicecandidate</li>
					<li>ontrack</li>
				</ul>
				<p>
					The other listeners are quite important though to debug and
					to check the status of the connection, since it's dynamic
					and we may want to do &quot;stuff&quot; while the state
					changes.
				</p>
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
					<code class="language-javascript">{`
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
		startReading,
		stopReading,
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
				onClick={
					isReading
						? stopReading
						: () => {
								if (!isVisible) showTextReader();
								startReading();
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
					so.me.text.text so:me:text:text so;me;text;text
					so,me,text,text.
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
				<span>10 100 1000 1.000 1,000.</span>
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
				</h4> */}
			</div>
		</div>
	);
}

export default App;
