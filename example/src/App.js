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
				The <em>European General Data Protection Regulation (GDPR)</em>{' '}
				recently banned the usage of Google Analytics due to the <em>fact</em>.
				<em>fact</em>.
				<em>fact</em>.
				<em>fact</em>.
				<em>fact</em>.

				that Google keeps users' data in US servers and this led to a
				massive black hole for web developers, since GA was one of the
				most used technology to monitor the usage of websites and web.

				applications. After a brief search on web, it looked like there
				were a lot of alternatives to GA, which are GDRP compliant, but
				most of them do not offer FREE plans being served as cloud
				services. There are a few ones though, that offer both a paid
				Cloud based version and a free self-hosted version, I'll name
				just two of them, Matomo and Umami . I picked the latter one
				since it has a Github repo built with NextJS , which I'm
				familiar with, in this post I'll show you how to setup a fully
				working Analytics Dashboard and connect it to your website,
				using a self hosted, and totally FREE solution thanks to Umami .
				1. Fork the repo First of all you need to fork the github repo,
				if you don't already own a github account, open one in a few
				steps by going here . Fork this repo:
				https://github.com/mikecao/umami.git Navigate to the repo and
				click the fork button on the up-right section (it has 1.7 k
				forks at the time of writing) . As you can see it's a NextJS
				application, if you are not familiar with this technology it's
				not a problem, since you won't have to edit code. NextJS is a
				framework based on React , developed by Vercel , it uses a
				serverless approach and lets you set up a rest API without a
				dedicated web server, just by writing lambda functions. 2. Set
				up a PostgreSQL Database Umami uses MySQL or PostgreSQL
				Databases to keep the analytics data, hence you need to set up
				and host one of these two and connect them to your NextJS
				application, I'll show here how to easily set up a PostgreSQL DB
				on Heroku . If you don't already have an Heroku account, open
				one by going here . Heroku offers a free plan. Once you have
				created an account, navigate to
				https://dashboard.heroku.com/apps and click the New --> Create
				new App button. Choose a geographic location and an app name
				(Since this will only have to host your database, the app name
				is not important) and proceed to create the App. Now you will be
				redirected automatically to your newly created App dashboard,
				but you still need to add the PostgreSQL DB. In order to do so,
				you just need to go to the Resources Tab, type Postgres in the
				Add-ons search box, and select Heroku Postgres from the dropdown
				list. Choose the Hooby dev - free plan (or a paid version if you
				prefer), and you're done. Now you should see the PostgreSQL
				Addon in the Add-ons list. Just click on it to be redirected to
				the Database dashboard. Just click on the Settings Tab and by
				pressing on the View Credentials button you will be given the
				personal credentials to access your brand new DB.
			</div>
		</div>
	);
}

export default App;
