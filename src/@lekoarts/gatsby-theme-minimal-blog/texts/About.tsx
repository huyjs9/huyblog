import * as React from 'react';
import { Text, Link, Box } from 'theme-ui';

const About = () => (
	<Box sx={{ display: ['block', 'block', 'flex'], marginBottom: '50px' }}>
		<img
			src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/296737361_1859130714290769_6951862618415401469_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bM8H9KpXVtgAX_QQN-X&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT8xkpN-7Hcn5l0ATRJ6V1JtyF05TvZksFtqwvEAOwn7jA&oe=630EBD5A"
			alt="TkDodo"
			style={{
				marginRight: '0.875rem',
				marginTop: '0.5rem',
				width: '8rem',
				height: '8rem',
				borderRadius: '50%',
				objectFit: 'cover',
			}}
		/>
		<div
			style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}
		>
			<p style={{ marginBottom: 0, marginTop: 0 }}>
				<Text sx={{ fontWeight: 'bold' }}>Hi 👋, I'm Huy Bui</Text>
			</p>
			<p style={{ marginBottom: 0 }}>
				<Text>I'm a Agile Web Developer with a passion for ReactJs.</Text>
			</p>
			<p style={{ marginBottom: 0 }}>
				<Text>Welcome to my personal blog 📚.</Text>
			</p>
		</div>
	</Box>
);

export default About;
