export interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'events' | 'workshops' | 'competitions' | 'team';
  date: string;
  tags: string[];
}

export const photos: Photo[] = [
  {
    id: '1',
    title: 'Cyber Knight Founding Ceremony',
    description: 'The official launch event of Cyber Knight at TIPS with founding members and faculty.',
    imageUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    date: '2024-01-15',
    tags: ['founding', 'ceremony', 'launch', 'team']
  },
  {
    id: '2',
    title: 'Ethical Hacking Workshop',
    description: 'Hands-on ethical hacking workshop conducted by senior members for junior students.',
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'workshops',
    date: '2024-01-20',
    tags: ['ethical-hacking', 'workshop', 'training', 'security']
  },
  {
    id: '3',
    title: 'Network Security Competition',
    description: 'Inter-college cybersecurity competition hosted by Cyber Knight with participants from various institutions.',
    imageUrl: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'competitions',
    date: '2024-02-05',
    tags: ['competition', 'network-security', 'inter-college', 'ctf']
  },
  {
    id: '4',
    title: 'Team Building Session',
    description: 'Annual team building and strategy planning session with all department heads.',
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'team',
    date: '2024-01-30',
    tags: ['team-building', 'planning', 'strategy', 'leadership']
  },
  {
    id: '5',
    title: 'Cyber Awareness Campaign',
    description: 'Community outreach program at local NGO schools teaching basic cybersecurity awareness.',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    date: '2024-02-10',
    tags: ['awareness', 'outreach', 'community', 'education']
  },
  {
    id: '6',
    title: 'Advanced Penetration Testing Workshop',
    description: 'Advanced workshop on penetration testing techniques and tools for senior members.',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'workshops',
    date: '2024-02-15',
    tags: ['penetration-testing', 'advanced', 'tools', 'techniques']
  },
  {
    id: '7',
    title: 'Research Presentation Day',
    description: 'Annual research presentation where members showcase their threat intelligence and security research.',
    imageUrl: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    date: '2024-02-20',
    tags: ['research', 'presentation', 'threat-intelligence', 'showcase']
  },
  {
    id: '8',
    title: 'Capture The Flag Competition',
    description: 'Internal CTF competition to test and improve members\' practical cybersecurity skills.',
    imageUrl: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'competitions',
    date: '2024-02-25',
    tags: ['ctf', 'competition', 'skills', 'practical']
  },
  {
    id: '9',
    title: 'Industry Expert Guest Lecture',
    description: 'Special guest lecture by industry cybersecurity expert on emerging threats and defense strategies.',
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'events',
    date: '2024-03-01',
    tags: ['guest-lecture', 'industry-expert', 'threats', 'defense']
  },
  {
    id: '10',
    title: 'Club Leadership Team',
    description: 'Official photo of Cyber Knight leadership team including department heads and core members.',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'team',
    date: '2024-01-10',
    tags: ['leadership', 'team', 'official', 'core-members']
  }
];

export const photoCategories = {
  events: 'Events & Ceremonies',
  workshops: 'Workshops & Training',
  competitions: 'Competitions & CTFs',
  team: 'Team & Leadership'
};