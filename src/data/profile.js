export const profile = {
  name: 'Aradhya Ray',
  tagline: 'Computer Science & Engineering Student (AI & ML)',
  email: 'aradhyaray99@gmail.com',
  phone: '+91 9330902810',
  socials: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rayaradhya',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/AradhyaRay05',
    },
  ],
  summary:
    'Enthusiastic Computer Science student specializing in AI and ML with hands-on experience across cybersecurity, data analysis, and Linux systems. Skilled in Python, C, and Java alongside modern web technologies, and eager to apply analytical and problem-solving abilities to impactful technology projects.',
  skills: [
    {
      category: 'Core Technologies',
      items: ['Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript'],
    },
  ],
  projects: [
    {
      id: 'video-conferencing-application',
      title: 'Video Conferencing Application',
      timeframe: 'React.js, WebRTC, Socket.io, Tailwind CSS',
      description:
        'Built a real-time conferencing interface with video and audio calls, screen sharing, and live chat using WebRTC APIs while delivering responsive layouts and state management in React.',
      bulletPoints: [
        'Built a real-time conferencing interface with video and audio calls, screen sharing, and live chat using WebRTC APIs.',
        'Delivered a seamless user experience with responsive layouts and state management in React.',
      ],
      categories: ['Web Application', 'Frontend'],
      tech: ['React.js', 'WebRTC', 'Socket.io', 'Tailwind CSS'],
      repoUrl: 'https://github.com/AradhyaRay05',
      demoUrl: null,
    },
    {
      id: 'music-streaming-web-app',
      title: 'Music Streaming Web App',
      timeframe: 'React.js, Next.js, Tailwind CSS, HTML5 Audio API',
      description:
        'Designed a Spotify-style frontend featuring playlists, search, and audio controls backed by the HTML5 Audio API, optimized for cross-device usage with responsive design and reusable UI components.',
      bulletPoints: [
        'Designed a Spotify-style frontend featuring playlists, search, and audio controls backed by the HTML5 Audio API.',
        'Optimized for cross-device usage with responsive design and reusable UI components.',
      ],
      categories: ['Web Application', 'Frontend'],
      tech: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5 Audio API'],
      repoUrl: 'https://github.com/AradhyaRay05',
      demoUrl: null,
    },
  ],
  experience: [
    {
      role: 'Cyber Security Intern',
      company: 'Dataspace Academy',
      start: 'Jun 2024',
      end: 'Jul 2024',
      details: [
        'Conducted network and web application vulnerability assessments with Nmap, Burp Suite, Wireshark, and SQLmap.',
        'Documented findings through VAPT reports covering scanning, exploitation, and enumeration of sensitive information.',
      ],
    },
    {
      role: 'Data Analyst Intern',
      company: 'Edulyt India',
      start: 'Jun 2024',
      end: 'Sep 2024',
      details: [
        'Performed data cleaning, preprocessing, and visualization using Python, Pandas, NumPy, and Matplotlib.',
      ],
    },
    {
      role: 'Linux Intern',
      company: 'WEBEL',
      start: 'Jun 2025',
      end: 'Jul 2025',
      details: [
        'Gained practical experience in Linux administration including command-line operations, file management, and process control.',
        'Worked on user management, shell scripting, and networking tasks to build system-level problem-solving skills.',
      ],
    },
  ],
  education: [
    {
      program: 'Computer Science & Engineering (AI & ML)',
      institution: 'The Neotia University',
      start: 'Aug 2023',
      end: 'Aug 2027',
      detail: 'CGPA: 9.05',
    },
    {
      program: 'Class XII (WBBSE)',
      institution: 'Baruipur High School, West Bengal',
      start: '',
      end: '2023',
      detail: 'Percentage: 69.4%',
    },
    {
      program: 'Class X (WBBPE)',
      institution: 'Baruipur High School, West Bengal',
      start: '',
      end: '2021',
      detail: 'Percentage: 90.2%',
    },
  ],
  certifications: [
    {
      name: 'Digital Transformation with Google Cloud',
      issuer: 'Coursera',
      description: 'Completed coursework focused on cloud computing, cloud infrastructure, and cloud-based solutions.',
    },
  ],
  hobbies: [
    'Reading story books to explore diverse genres, boost creativity, and strengthen analytical thinking.',
  ],
  notes: [
    {
      title: 'Internship Learning Log: Dataspace Academy',
      summary:
        'Documented the tools and methodologies used during VAPT assignments, highlighting how Nmap, Burp Suite, Wireshark, and SQLmap were applied.',
    },
    {
      title: 'Efficient Frontend Patterns',
      summary:
        'Captured UI decisions from the Video Conferencing Application and Music Streaming Web App projects to reuse responsive React/Tailwind components.',
    },
  ],
  testimonials: [
    {
      quote:
        'Recommendations from mentors and teammates are being collected. Happy to share once they are available.',
      name: 'Testimonials coming soon',
    },
  ],
  gallery: [
    {
      id: 'vca-ui',
      title: 'Video Conferencing Interface Mock',
      caption:
        'Interface snapshot showcasing the WebRTC-powered conferencing layout.',
      relatedProject: 'video-conferencing-application',
    },
    {
      id: 'music-player-ui',
      title: 'Music Streaming Dashboard',
      caption:
        'Playlist and playback controls inspired by the Music Streaming Web App.',
      relatedProject: 'music-streaming-web-app',
    },
    {
      id: 'dataspace-workbench',
      title: 'Cybersecurity Toolkit',
      caption:
        'Tool stack used during the Dataspace Academy internship for VAPT reporting.',
      relatedProject: null,
    },
    {
      id: 'linux-lab',
      title: 'Linux Administration Workspace',
      caption:
        'Shell scripting and system management practice environment from the WEBEL internship.',
      relatedProject: null,
    },
  ],
}
