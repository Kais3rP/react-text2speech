import React, { FC, useRef, useState } from 'react';
import styles from './styles.module.css';
import { ImInfo } from '@react-icons/all-files/im/ImInfo';
import { FaNpm } from '@react-icons/all-files/fa/FaNpm';
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
import { FaReadme } from '@react-icons/all-files/fa/FaReadme';
import { useOnClickOutside } from 'hooks';
import { IInfoProps } from './types';
import {
	name,
	// description,
	version,
	license,
	author,
	repository,
} from '../../../package.json';

const Info: FC<IInfoProps> = () => {
	const [isInfoVisible, setIsInfoVisible] = useState(false);
	const ref = useRef(null);

	const showInfo = () => {
		setIsInfoVisible(true);
	};

	const hideInfo = () => {
		setIsInfoVisible(false);
	};

	useOnClickOutside(ref, hideInfo);

	const [_author, _website] = author.split(' - ');

	return (
		<div className={styles.container} ref={ref}>
			<ImInfo className={styles.icon} onPointerDown={showInfo} />
			<div
				className={`${styles.overlayContainer} ${
					isInfoVisible && styles.visible
				}`}
				onPointerDown={hideInfo}
			>
				<div className={styles.name}>
					<i>🗣️</i>
					<h4>{name}</h4>
				</div>
				<div className={styles.infoWrapper}>
					<div className={styles.info}>
						<h5>
							Author:
							<a
								href={_website}
								target="_blank"
								rel="noreferrer"
								onPointerDown={(e) => e.stopPropagation()}
							>
								{_author}
							</a>
						</h5>
						<h5>Version: {version}</h5>
						<h5>
							License: {license} © {name}
						</h5>
					</div>
					<div className={styles.buttonsContainer}>
						<a
							href={repository.url}
							target="_blank"
							rel="noreferrer"
							onPointerDown={(e) => e.stopPropagation()}
						>
							<FaGithubAlt />
						</a>
						<a
							href="https://www.npmjs.com/package/react-text2speech"
							target="_blank"
							rel="noreferrer"
							onPointerDown={(e) => e.stopPropagation()}
						>
							<FaNpm />
						</a>
						<a
							href={`${repository.url}#readme`}
							target="_blank"
							rel="noreferrer"
							onPointerDown={(e) => e.stopPropagation()}
						>
							<FaReadme />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
