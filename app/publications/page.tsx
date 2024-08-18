import React from "react";
import styles from "@/styles/publications.module.scss";

export default async function PublicationsPage(): Promise<React.JSX.Element> {
	const hasResearch: boolean = false;

	return (

		!hasResearch ?
			<h1 className={styles.publicationsTitle}>No publications found</h1> : (
				<section className={styles.publicationsMain}>

					<div className={styles.publicationsSearchbar}>
						<input type="text" placeholder="Search for publications..." />
						<button>Search</button>
					</div>
					<div className={styles.publicationsBody}>
						<div className={styles.publicationsLeft}>
							<div className={styles.publication}>
								<img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="Publications" width={300} height={200} />
								<div className={styles.publicationContent}>
									<h2>Placeholder Publication</h2>
									<p>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</p>
								</div>
							</div>
						</div>
						<div className={styles.publicationsRight}>
							<div className={styles.publication}>
								<h2 className={styles.name}>Publication 1</h2>
								<p className={styles.authors}>Author 1, Author 2, Author 3</p>
								<p className={styles.location}>Published in Journal 1</p>
								<p className={styles.description}>Description of publication 1.</p>
							</div>
						</div>
					</div>
				</section>
			)
	);
}