import React from "react";
import styles from "@/styles/publications.module.scss";

export default async function PublicationsPage(): Promise<React.JSX.Element> {
	return (
		<section className={styles.publicationsMain}>
			<h1>Publications</h1>
			<p>Welcome to the Global Youth Scholars program!</p>
		</section>
	);
}