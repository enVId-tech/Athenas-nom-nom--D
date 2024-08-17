"use client";
import React from "react";
import styles from "@/styles/_components/socials.module.scss";

export default function Socials(): React.JSX.Element {
	return (
		<div className={styles.socials}>
			<h1 className={styles.socialsTitle}>Join Us On</h1>

			<div className={styles.socialsContent}>
				<a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">
					<img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
				</a>
				<a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener">
					<img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
				</a>
				<a href="https://www.twitter.com" target="_blank" rel="noreferrer noopener">
					<img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
				</a>
			</div>
		</div>
	)
}