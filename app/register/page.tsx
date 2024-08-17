import React from "react";
import styles from "@/styles/register.module.scss";
import Socials from "../_components/socials";
import Footer from "../_components/footer";

export default async function RegisterPage(): Promise<React.JSX.Element> {
	return (
		<section className={styles.registerMain}>
			<div className={styles.registerTitle}>
			</div>

			<div className={styles.registerBody}>
				
			</div>

			<Socials />
			<Footer />
		</section>
	);
}