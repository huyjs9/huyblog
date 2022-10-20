import * as React from 'react'
import { Text, Link, Box } from 'theme-ui'

const About = () => (
  <Box sx={{ display: ['block', 'block', 'flex'], marginBottom: '50px' }}>
    {/* <img
			src="./avatar.jpg"
			alt="huybt"
			style={{
				marginRight: '0.875rem',
				marginTop: '0.5rem',
				width: '8rem',
				height: '8rem',
				borderRadius: '50%',
				objectFit: 'cover',
			}}
		/> */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20px',
      }}
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
)

export default About
