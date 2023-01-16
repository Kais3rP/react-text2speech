import styles from './styles.module.css';
import { useState } from 'react';
import TextReader, { useTextReaderStore } from 'react-text2speech';

function App() {
	const [node, setNode] = useState(null);

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
				<TextReader textContainer={node} options={{ language: 'en' }} />
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
			<div className={styles.text} ref={setNode}>
			<h1>213456789 1000</h1>
			<h1>/////</h1>
			
				<h1>Ut vero dolorem ea illum fugit.....  12/12/2112 test/test/test </h1>
				<a href="">
					https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
				</a>
				{/* 				<pre>
					<code>{`useEffect ( ( ) => {
/ / / / / / / / 

if ( ! socket || ! initPeerConnectionSender ) return ;

const configuration = {
offerToReceiveAudio : true ,
offerToReceiveVideo : true ,
} ;

peerConnectionRef . current = new RTCPeerConnection ( {
configuration : { } ,
iceServers : [
{
urls : [
"stun:stun.l.google.com:19302" ,
"stun:stun1.l.google.com:19302" ,
"stun:stun2.l.google.com:19302" ,
"stun:stun3.l.google.com:19302" ,
] ,
} ,
] ,
} ) ;`}</code>
				</pre> */}

				<p>
					Lorem dolor sit amet. Et animi debitis eos tenetur
					inventoreQui totam qui iure ratione ab distinctio deleniti
					ut modi inventore. Sed totam iste et dolorem autem{' '}
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
					veritatis officiisut error.{' '}
				</p>
				<ul>
					<li>
						Vel consequatur officia rem error facere est doloribus
						fugiat.{' '}
					</li>
					<li>
						Qui tempore cumque non inventore culpa non adipisci
						inventore.{' '}
					</li>
					<li>
						Et voluptatem voluptatem et recusandae eius At tenetur
						eaque.{' '}
					</li>
					<li>In voluptates velit hic facere reiciendis. </li>
					<li>Qui officiis atque a voluptate aperiam. </li>
					<li>
						Quo harum consequatur aut saepe consequuntur aut
						praesentium incidunt.{' '}
					</li>
				</ul>
				<blockquote cite="https://www.loremipzum.com">
					Est molestias assumenda non veritatis libero est voluptates
					corrupti sed quis Quis et consequatur dolores.{' '}
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
					fuga nesciunt{' '}
					<a
						href="https://www.loremipzum.com"
						target="_blank"
						rel="noreferrer"
					>
						Et assumenda sit doloremque dicta est beatae doloremque
					</a>{' '}
					33 ratione natus id voluptas quidem ut inventore
					consequatur.{' '}
				</p>
				<ol>
					<li>
						Et voluptatem dolor aut perspiciatis nesciunt id
						nesciunt ipsum.{' '}
					</li>
					<li>Ut unde odit et labore Quis. </li>
					<li>
						Non quia doloribus ut doloremque rerum in galisum
						exercitationem ut rerum ipsa.{' '}
					</li>
					<li>
						Ut quia voluptas qui perferendis earum aut
						exercitationem aspernatur.{' '}
					</li>
					<li>
						Sit eius aperiam ut tenetur asperiores est debitis
						doloremque qui quaerat quaerat.{' '}
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
					quos aut possimus maxime{' '}
					<strong>Ut quaerat qui ullam dolorem</strong> id ratione
					neque qui iste minima quo quia eius. Nam optio vitae ea
					cumque repudiandae{' '}
					<a
						href="https://www.loremipzum.com"
						target="_blank"
						rel="noreferrer"
					>
						Non molestias eos accusantium laboriosam
					</a>{' '}
					qui velit dolorem in sapiente voluptates At nihil totam. Non
					illum aspernatur sit similique odita iste est iure
					consequatur. Eos impedit adipisci ut recusandae rerumEum
					culpa qui excepturi sequi. Sed magni laudantium At odit
					quisNon fuga sit alias libero sit dolorem dolorem qui itaque
					doloremque qui optio excepturi. Vel aliquid voluptasEt quae
					cum soluta molestiae non saepe dolores eum voluptatibus
					asperiores et possimus enim. Et distinctio officia qui
					tempora fugaAut porro est recusandae repellat. Ea placeat
					commodi quo excepturi enimId iste?{' '}
				</p>
				<dl>
					<dt>
						<dfn>Sed eius placeat sed repellat dicta. </dfn>
					</dt>
					<dd>Aut omnis mollitia id dignissimos ipsum. </dd>
					<dt>
						<dfn>
							Aut perferendis tempore non dolore reiciendis.{' '}
						</dfn>
					</dt>
					<dd>Et expedita internos qui voluptatibus sint. </dd>
				</dl>
			</div>
		</div>
	);
}

export default App;
