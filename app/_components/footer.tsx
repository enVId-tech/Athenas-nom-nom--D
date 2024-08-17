import React from "react";
import Link from "next/link";

export default async function Footer(): Promise<React.JSX.Element> {
	return (
		<p>Developed by Erick Tran (<a href="https://github.com/envid-tech" target='_blank' rel="noreferrer noopener">enVIdTech</a>) for the <Link href="/">Global Youth Scholars</Link> program.</p>
	)
}