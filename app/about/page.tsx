import React from "react";
import styles from "@/styles/about.module.scss";

export default function AboutPage(): React.JSX.Element {
	return (
		<section className={styles.aboutMain}>
			<h1>About our organisation</h1>
			<div className={styles.aboutTitle}>
				
			<div className={styles.aboutContent}>
				<p>Welcome to the Global Youth Scholars program!</p>
				<p>Our program offers students the opportunity to conduct research in various fields</p>
			</div>
			</div>
		</section>
	);
}