import React from "react";
import styles from "@/styles/classes.module.scss";
import Footer from "../_components/footer";

export default async function ClassesPage(): Promise<React.JSX.Element> {
	return (
		<section className={styles.classesMain}>
			<div className={styles.classesTitle}>
			</div>

			<div className={styles.classesBody}>
				<h1 className={styles.classesHeader}>Classes</h1>

				<div className={styles.classesContent}>
					<div className={styles.class}>
						<img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="Class" width={300} height={200} />
						<div className={styles.classContent}>
							<h2 className={styles.name}>Class 1</h2>
							<p className={styles.description}>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</p>
							<p className={styles.instructor}>Instructor: Instructor 1</p>
							<p className={styles.schedule}>Schedule: Schedule 1</p>
							{/* <a className={styles.registerButton}>Register</a> */}
						</div>
					</div>
					<div className={styles.class}>
						<img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="Class" width={300} height={200} />
						<div className={styles.classContent}>
							<h2 className={styles.name}>Class 1</h2>
							<p className={styles.description}>Ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</p>
							<p className={styles.instructor}>Instructor: Instructor 1</p>
							<p className={styles.schedule}>Schedule: Schedule 1</p>
							{/* <a className={styles.registerButton} href="/register">Register</a> */}
						</div>
					</div>
				</div>

				<div className={styles.register}>
					<h1 className={styles.wantToRegister}>Want to register for classes?</h1>
					<p className={styles.wantToRegisterText}>Interested in our program or our classes? Click on the register button to go to register for classes.</p>
					<a className={styles.registerButton} href="/register">Register</a>
				</div>

				<Footer />
			</div>
		</section>
	);
}