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
			<div className={styles.meetTheTeam}>
				<h2>Meet the team</h2>
				<div className={styles.teamMembers}>
					<div className={styles.teamMember}>
						<img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="Team member" width={100} height={100} />
						<h3>John Doe</h3>
						<p>Director</p>
						<h2>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</h2>
					</div>
					<div className={styles.teamMember}>
						<img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="Team member" width={100} height={100} />
						<h3>Jane Doe</h3>
						<p>Researcher</p>
						<h2>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</h2>
					</div>
					<div className={styles.teamMember}>
						<img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="Team member" width={100} height={100} />
						<h3>John Doe</h3>
						<p>Director</p>
						<h2>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</h2>
					</div>
					<div className={styles.teamMember}>
						<img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="Team member" width={100} height={100} />
						<h3>Jane Doe</h3>
						<p>Researcher</p>
						<h2>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</h2>
					</div>
				</div>
			</div>
		</section>
	);
}