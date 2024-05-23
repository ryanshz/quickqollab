export const socketConfig = {
	socket: 'http://backend:5000/',
};

export const api = {
	api: 'http://backend:5000',
};

const HeroGridItem = [
	{
		title: 'Real-Time Collaboration',
		description:
			'Engage with your team in real-time, brainstorm ideas, and bring your projects to life with instant updates and live interactions.',
		icon: 'Podcast',
	},
	{
		title: 'Integrated Chat Feature',
		description:
			'Keep the conversation flowing without switching tabs. Our integrated chat feature ensures your ideas and discussions are always synced with your creative process.',
		icon: 'MessageCircleMore',
	},
	{
		title: 'Intuitive Whiteboard',
		description:
			'Sketch, draw, and annotate with ease. Our user-friendly whiteboard is designed for professionals and creatives alike, making every session productive.',
		icon: 'PenLine',
	},
	{
		title: 'Seamless Sharing',
		description:
			'Share your whiteboard sessions with a click. Invite team members to view or collaborate, ensuring everyone is on the same page, no matter where they are.',
		icon: 'ScreenShare',
	},
	{
		title: 'Innovative Tools',
		description:
			'Access a wide range of drawing tools and features that encourage creativity. From shapes to custom colors, everything you need is at your fingertips.',
		icon: 'Paintbrush',
	},
	{
		title: 'Secure and Private',
		description:
			'Your ideas are important. That’s why we ensure end-to-end encryption for all your sessions, giving you peace of mind that your work is secure and private.',
		icon: 'ShieldCheck',
	},
];

export const HeroConfig = {
	title: '👽Meeting just got easier.',
	description:
		'Build, sketch, and communicate with your team at the tip of a mouse. Introducing an easy way to collaborate.',
	item: HeroGridItem,
};

const TeamInfoGridItem = [
	{
		name: 'Brandon Hach',
		role: 'Developer & Scrum Manager',
		description:
			'Brandon leads our team with a focus on clear communication and project milestones, ensuring that our development efforts are aligned and on track. His strategic planning and coding expertise drive our project forward.',
		picture: '/team/Brandon.png',
	},
	{
		name: 'Carlos Garcia Alavez',
		role: 'Developer',
		description:
			'Carlos excels in the backend, where he architects robust solutions and ensures our systems are scalable and efficient. His commitment to code quality and performance makes him an invaluable asset to our backend development.',
		picture: '/team/Carlos.jpg',
	},
	{
		name: 'Damon Nitsavong',
		role: 'Developer',
		description:
			"Damon is a steadfast developer who contributes significantly to our project's progress. His attention to detail and ability to tackle development challenges head-on make him a reliable force in our coding endeavors.",
		picture: '/team/Damon.jpg',
	},
	{
		name: 'Phillip Chang',
		role: 'Developer',
		description:
			'Phillip has played a crucial role in developing our whiteboard and canvas functionalities, turning complex requirements into intuitive features. His innovative approach to problem-solving enhances our application’s interactive capabilities.',
		picture: '/team/Phillip.png',
	},
	{
		name: 'Ryan Shultz',
		role: 'Developer & Project Manager',
		description:
			'Ryan combines his development skills with project management to keep our team focused and efficient. His work on the whiteboard and canvas features has been instrumental in providing a seamless user experience.',
		picture: '/team/Ryan.gif',
	},
];

export const TeamConfig = {
	title: '🔥What Makes Us Special',
	description:
		'Meet the brilliant minds behind our collaborative platform. Our team’s diverse expertise and shared commitment to excellence drive the innovation that powers our solutions.',
	item: TeamInfoGridItem,
};

const TimeLineItem = [
	{
		time: 'January 29th, 2024',
		title: 'The Inception',
		description:
			'Under the visionary leadership of Brandon, a band of ingenious creators congregated with a singular vision: to revolutionize collaboration in the digital age. Thus began our audacious journey.',
	},
	{
		time: 'February 5th, 2024',
		title: 'The Prototype Revelation',
		description:
			'Mere days into our venture, the team, fueled by boundless innovation and countless cups of coffee, unveiled a prototype that promised to disrupt digital collaboration forever.',
	},
	{
		time: 'February 20th, 2024',
		title: 'The First Pitch',
		description:
			'With a compelling narrative and a groundbreaking prototype in hand, Brandon led us into the lion’s den, presenting our vision to the discerning eyes of potential investors. The room buzzed with the electricity of potential.',
	},
	{
		time: 'March 5th, 2024',
		title: 'Sealing the Deal',
		description:
			'After arduous negotiations and sleepless nights, our perseverance paid off. A handshake in a boardroom flooded with morning light marked the beginning of a new era, as we secured our first round of VC funding.',
	},
	{
		time: 'March 23rd, 2024',
		title: 'The Road Ahead',
		description:
			'With the wind of financial backing at our sails, we stand on the precipice of greatness, ready to chart a course through unexplored territories of digital collaboration. The journey has only just begun.',
	},
];

export const TimeLineConfig = {
	item: TimeLineItem,
};

export const CallToActionConfig = {
	title: 'Well? What are you waiting for!',
	description:
		'Join the forefront of innovation and bring your collaborative visions to life. With our cutting-edge platform, seamless integration, and intuitive interface, you’re just a click away from transforming how you work, create, and share. Dive in now and start making magic happen!',
	video: '/video/quickqollab.mp4',
};
