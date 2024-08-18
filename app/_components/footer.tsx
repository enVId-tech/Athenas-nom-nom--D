// "use client";
import React from "react";
import styles from "@/styles/_components/footer.module.scss";

export default function Footer(): React.JSX.Element {
	// const [isVisible, setIsVisible] = React.useState<boolean>(false);

	// const handleScroll = (): void => {
	// 	const scrollY: number = window.scrollY;
	// 	const windowHeight: number = window.innerHeight;
	// 	const element: HTMLElement | null = document.getElementsByClassName(styles.footerMain)[0] as HTMLElement;

	// 	if (element && scrollY + windowHeight >= element.offsetTop) {
	// 		setIsVisible(true);
	// 	}
	// }

	// React.useEffect((): (() => void) => {
	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	}
	// }, []);

	return (
		<p className={`${styles.footerMain}`}> {/*${isVisible ? styles.footerVisible : ""}*/}
			Developed by Erick Tran (
			<a href="https://github.com/envid-tech" target='_blank' rel="noreferrer noopener">enVIdTech</a>
			) for the <a href="/" target='_blank' rel="noreferrer noopener">Global Youth Scholars</a> program.
		</p>
	)
}