import Navbar from "@/app/_components/navbar.tsx"
import styles from '@/styles/layout.module.scss';
import { Montserrat } from "next/font/google";
import '@/styles/globals.scss';
import GYS from "@/public/GYSLogo.png";

const Montserrat400 = Montserrat({
  weight: '300',
  display: 'swap',
  subsets: ['latin']
})

export const metadata = {
  title: 'Global Youth Scholars',
  // description: 'Developed by Erick Tran (enVIdTech) for the Global Youth Scholars program.',
  description: "An organization dedicated to teaching students about research and and providing them with the tools to succeed.",
  icons: {
    icon: GYS.src,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={Montserrat400.className}>
      <body>
        <div className={styles.container}>
          <Navbar />
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
