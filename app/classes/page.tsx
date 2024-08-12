import React from "react";
import styles from "@/styles/classes.module.scss";

export default async function ClassesPage(): Promise<React.JSX.Element> {
	return (
		<section className={styles.classesMain}>
			<h1>Classes</h1>
			<p>Welcome to the Global Youth Scholars program!</p>
		</section>
	);
}