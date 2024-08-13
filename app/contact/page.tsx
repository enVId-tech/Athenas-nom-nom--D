import React from "react";
import styles from "@/styles/contact.module.scss";

export default async function ContactPage(): Promise<React.JSX.Element> {
	return (
		<section className={styles.contactMain}>
			<h1>Contact</h1>
		</section>
	);
}