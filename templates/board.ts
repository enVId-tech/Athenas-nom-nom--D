import Amy from '@/public/Board/Amy.png';
import Athena from '@/public/Board/Athena.png';
import Diya from '@/public/Board/Diya.png';
import Erick from '@/public/Board/Erick.png';
import Ethan from '@/public/Board/Ethan.png';
import Kathy from '@/public/Board/Kathy.png';
import Sharise from '@/public/Board/Sharise.png';
import VTGemma from '@/public/Board/VTGemma.png';
import Yifan from '@/public/Board/Yifan.png';

interface BoardMember {
	"image": string;
	"position": string;
	"bio": string;
}

export const board: Record<string, BoardMember> = {
	"Athena": {
		"image": Athena.src,
		"position": "Chief Executive Officer",
		"bio": "Haiii!! I’m Athena who is a rising sophomore in SoCal. Passionate about the healthcare field, I help students with research. In my free time, I like to play volleyball with my friends, eat tiramisu cakes, and chase some other adrenaline rush :p"
	},
	"Gemma": {
		"image": VTGemma.src,
		"position": "Chief Operating Officer",
		"bio": "Hi! My name is Viet-Tran Do, and I go to Menlo-Atherton High School. In my community, I enjoy taking on various public health projects to spread awareness about a variety of issues. In my free time, though, I enjoy journaling and playing badminton."
	},
	"Ethan": {
		"image": Ethan.src,
		"position": "Chief Technology Officer",
		"bio": "hi i’m ethan and ill be your cto. i go to mountain view high school. my fav hobbies are cooking and playing basketball, both things that I’ve been doing since I could walk."
	},
	"Amy": {
		"image": Amy.src,
		"position": "Research Co-manager",
		"bio": "Hey! My name is Amy Nangia and I’m the co-manager researcher! I’m from Houston, Texas and I’m so excited to provide free research classes to many people! In my free time, I love to play volleyball, spend time with my family, and read!"
	},
	"Yifan": {
		"image": Yifan.src,
		"position": "Research Co-manager",
		"bio": "Hi I’m Yifan and I’m very excited to announce that I am the co-research manager for GYS. I love to play the piano and my food is an acai bowl. I can’t wait to work with the team and various students to help them have a clearer understanding of how research works."
	},
	"Diya": {
		"image": Diya.src,
		"position": "Research Co-manager & Human Resources",
		"bio": "I’m Diya Arun Kumar, and I’m honored to be one of the research co-managers and the HR for Global Youth Scholars! Right now, I’m one of the Piedmont Hills High School Science Olympiad captains and a member of the District 4 Youth Advisory Council. I’m also a classical dancer!"
	},
	"Kathy": {
		"image": Kathy.src,
		"position": "Activities Manager",
		"bio": "Hi I’m Kathy and I am a soccer player that loves dancing, and cooking. I have a lot of energy so sorry if I’m a bit much. Looking foward to it!"
	},
	"Sharise": {
		"image": Sharise.src,
		"position": "Publicity Manager",
		"bio": "hi my name is sharise i love sleeping and bedrotting! my hobbies include scrolling on my phone and watching movies so i can leave letterboxd review"
	},
	"Erick": {
		"image": Erick.src,
		"position": "Webmaster",
		"bio": "Hi everyone! My name is Erick and I’ll be the webmaster, managing the GYS website. I love computer science and engineering and spend my spare time doing them. As well, I enjoy music, history, and browsing random Wikipedia articles for interesting stuff to read."
	},
}