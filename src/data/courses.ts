export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'networking' | 'design' | 'formatting';
  thumbnail: string;
  videoUrl: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  notesUrl: string;
}

export const courses: Course[] = [
  // Networking Tutorials
  {
    id: '1',
    title: 'Network Fundamentals',
    description: 'Learn the basics of networking including OSI model, TCP/IP, and network protocols essential for cybersecurity professionals.',
    duration: '45:30',
    category: 'networking',
    thumbnail: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: 'Sarah Chen',
    level: 'Beginner',
    tags: ['networking', 'fundamentals', 'protocols'],
    notesUrl: '/notes/network-fundamentals.pdf'
  },
  {
    id: '2',
    title: 'Advanced Network Security',
    description: 'Deep dive into network security concepts, firewalls, intrusion detection systems, and security protocols.',
    duration: '62:15',
    category: 'networking',
    thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: 'Michael Rodriguez',
    level: 'Advanced',
    tags: ['security', 'firewall', 'intrusion detection'],
    notesUrl: '/notes/advanced-network-security.pdf'
  },
  {
    id: '3',
    title: 'Network Troubleshooting',
    description: 'Master network diagnostic tools and troubleshooting techniques to identify and resolve network issues efficiently.',
    duration: '38:45',
    category: 'networking',
    thumbnail: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: 'David Park',
    level: 'Intermediate',
    tags: ['troubleshooting', 'diagnostics', 'tools'],
    notesUrl: '/notes/network-troubleshooting.pdf'
  },
  
  // Designing Skills
  {
    id: '4',
    title: 'UI/UX Design Principles',
    description: 'Learn fundamental design principles, user experience concepts, and create intuitive interfaces for security applications.',
    duration: '55:20',
    category: 'design',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: 'Emma Thompson',
    level: 'Beginner',
    tags: ['ui', 'ux', 'design principles'],
    notesUrl: '/notes/ui-ux-design-principles.pdf'
  },
  {
    id: '5',
    title: 'Security Dashboard Design',
    description: 'Design effective security dashboards and data visualization for threat monitoring and incident response.',
    duration: '42:30',
    category: 'design',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: 'Alex Kumar',
    level: 'Intermediate',
    tags: ['dashboard', 'visualization', 'security'],
    notesUrl: '/notes/security-dashboard-design.pdf'
  },
  {
    id: '6',
    title: 'Responsive Web Design',
    description: 'Create responsive, mobile-first designs that work seamlessly across all devices and screen sizes.',
    duration: '48:15',
    category: 'design',
    thumbnail: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: 'Lisa Wang',
    level: 'Intermediate',
    tags: ['responsive', 'mobile', 'web design'],
    notesUrl: '/notes/responsive-web-design.pdf'
  },
  
  // Document Formatting
  {
    id: '7',
    title: 'Professional Report Writing',
    description: 'Master the art of writing clear, concise security reports and incident documentation for stakeholders.',
    duration: '35:45',
    category: 'formatting',
    thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: 'Robert Miller',
    level: 'Beginner',
    tags: ['writing', 'reports', 'documentation'],
    notesUrl: '/notes/professional-report-writing.pdf'
  },
  {
    id: '8',
    title: 'Technical Documentation Standards',
    description: 'Learn industry standards for technical documentation, formatting guidelines, and best practices.',
    duration: '41:20',
    category: 'formatting',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: 'Jennifer Adams',
    level: 'Intermediate',
    tags: ['documentation', 'standards', 'formatting'],
    notesUrl: '/notes/technical-documentation-standards.pdf'
  },
  {
    id: '9',
    title: 'Markdown & Wiki Formatting',
    description: 'Master Markdown syntax and wiki formatting for creating structured, professional documentation.',
    duration: '28:30',
    category: 'formatting',
    thumbnail: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    instructor: 'Tom Wilson',
    level: 'Beginner',
    tags: ['markdown', 'wiki', 'syntax'],
    notesUrl: '/notes/markdown-wiki-formatting.pdf'
  }
];

export const categories = {
  networking: 'Networking Tutorials',
  design: 'Designing Skills',
  formatting: 'Document Formatting'
};