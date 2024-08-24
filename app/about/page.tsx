import React from "react";
import styles from "@/styles/about.module.scss";
import Footer from "../_components/footer";
import { board } from "@/templates/board";

export default function AboutPage(): React.JSX.Element {
	return (
		<section className={styles.aboutMain}>
			<div className={styles.aboutSubMain}>
				<h1 className={styles.title}>About our organisation</h1>
				<div className={styles.aboutTitle}>
					<div className={styles.aboutContent}>
						<p>At Global Youth Scholars, we strive to support aspiring young researchers by providing opportunities to learn from experienced volunteer research teachers and work with other students to publish research papers.</p>
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
						{
							Object.entries(board).map(([name, member]) => (
								<div className={styles.teamMember} key={name}>
									<img src={member.image} alt="Team member" width={100} height={100} />
									<h3>{name}</h3>
									<p>{member.position}</p>
									<h2>{member.bio}</h2>
								</div>
							))
						}
					</div>
				</div>
			</div>
			
			<Footer />
		</section>
	);
}