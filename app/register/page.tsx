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
				<h1 className={styles.registerHeader}>Register for classes</h1>

				<div className={styles.registerForm}>
					<div className={styles.signUp}>
						<h1 className={styles.signUpHeader}>Sign Up</h1>
						<p className={styles.signUpText}>Want to sign up for classes? Fill out the form below to get started.</p>
						<a className={styles.signUpButton} href="/register">Sign Up</a>
					</div>

					<div className={styles.volunteerSign}>
						<h1 className={styles.volunteerSignHeader}>Volunteer</h1>
						<p className={styles.volunteerSignText}>Our organization relies on volunteers to teach our classes. If you are interested, fill out the form below to get started.</p>
						<a className={styles.volunteerSignButton} href="/register">Volunteer</a>
					</div>
				</div>

				<div className={styles.redirect}>
					<h1 className={styles.redirectHeader}>Already registered?</h1>
					<p className={styles.redirectText}>Check out some of the research and publications of our students.</p>
					<a className={styles.redirectButton} href="/publications">View Research</a>
				</div>

				<div className={styles.moreInfo}>
					<h1 className={styles.moreInfoHeader}>More Information</h1>
					<p className={styles.moreInfoText}>Want to learn more about our program? Check out our About page for more information.</p>
					<a className={styles.moreInfoButton} href="/about">Learn More</a>
				</div>

				<div className={styles.contact}>
					<h1 className={styles.contactHeader}>Contact Us</h1>
					<p className={styles.contactText}>Have any questions or concerns? Feel free to contact us at the email below.</p>
					<a className={styles.contactButton} href="mailto:" target="_blank">Contact Us</a>
				</div>
			</div>

			<Socials />
			<Footer />
		</section>
	);
}