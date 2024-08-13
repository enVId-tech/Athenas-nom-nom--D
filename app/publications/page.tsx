import React from "react";
import styles from "@/styles/publications.module.scss";

export default async function PublicationsPage(): Promise<React.JSX.Element> {
	return (
		<section className={styles.publicationsMain}>
			<h1>Publications</h1>
			<p>Welcome to the Global Youth Scholars program!</p>
			<div className={styles.publicationsContent}>
				<p>Here are some publications by our students:</p>
				<ul>
					<li>
						<a href="https://example.com/publication1" target="_blank" rel="noreferrer noopener">
							Publication 1
						</a>
					</li>
					<li>
						<a href="https://example.com/publication2" target="_blank" rel="noreferrer noopener">
							Publication 2
						</a>
					</li>
					<li>
						<a href="https://example.com/publication3" target="_blank" rel="noreferrer noopener">
							Publication 3
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}