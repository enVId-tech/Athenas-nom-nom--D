import React from "react";
import styles from "@/styles/about.module.scss";

export default function AboutPage(): React.JSX.Element {
	return (
		<section className={styles.aboutMain}>
			<h1>About</h1>
			<p>Welcome to the Global Youth Scholars program!</p>
		</section>
	);
}