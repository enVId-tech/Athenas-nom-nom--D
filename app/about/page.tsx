import React from "react";
import styles from "@/styles/about.module.scss";

export default function AboutPage(): React.JSX.Element {
	return (
		<section className={styles.aboutMain}>
			<h1>About our organisation</h1>
			<div className={styles.aboutTitle}>
				<div className={styles.aboutContent}>
					<p>Created in 2024, our program is designed to help students do research in a variety of fields, including science, technology, engineering, and mathematics (STEM).</p>
				</div>
			</div>
			<div className={styles.whereWeWork}>
				<h2>Location</h2>
				<div className={styles.whereWeWorkMain}>
					<div className={styles.whereWeWorkText}>
						<p>Our program is based in</p>
						<h1>California, USA</h1>
						<p>However, we have students from all over the world</p>
					</div>
					<img alt="California" src="https://chimicles.com/wp-content/uploads/2016/05/California-state-large.png" />
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