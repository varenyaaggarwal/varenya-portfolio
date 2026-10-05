export type Project = {
    slug: string
    number: string
    title: string
    category: string
    shortDescription: string
    overview: string
    challenge: string
    approach: string
    result: string
    tech: string[]
    visualText: string
    github?: string
    demo?: string
  }
  
  export const projects: Project[] = [
    {
      slug: 'clubs-societies-finder',
      number: '01',
      title: 'Clubs & Societies Finder',
      category: 'Python / Recommendation System',
      shortDescription:
        'A recommendation system that matches university students with clubs and societies using interests, hobbies and preference scores.',
      overview:
        'The project explores how structured user information can be transformed into meaningful recommendations through validation, scoring and deterministic ranking.',
      challenge:
        'The core challenge was designing matching logic that remained understandable while combining different signals such as interests, hobbies, social preferences and skill-development goals.',
      approach:
        'I structured the application around validated user profiles, file-based club data, weighted matching rules and predictable sorting with explicit tie-breaking.',
      result:
        'The final application can process a student profile, evaluate available clubs and return ranked recommendations while handling invalid input and file errors.',
      tech: ['Python', 'File I/O', 'Validation', 'Sorting', 'Recommendation Logic'],
      visualText: 'PYTHON',
      github: '#',
    },
  
    {
      slug: 'autonomous-robot',
      number: '02',
      title: 'Autonomous Robot',
      category: 'Embedded Systems / Robotics',
      shortDescription:
        'A sensor-driven robot using Arduino and continuous servos to react to walls, turns and dead ends.',
      overview:
        'This project combines sensing, calibration and embedded control logic to produce autonomous physical behaviour.',
      challenge:
        'Real-world servo behaviour and sensor readings were imperfect, meaning movement logic required calibration rather than relying purely on theoretical values.',
      approach:
        'I calibrated servo neutral points, interpreted sensor states and developed navigation conditions for forward movement, correction, turns and dead ends.',
      result:
        'The robot became capable of responding to multiple navigation scenarios using one integrated control program.',
      tech: ['Arduino', 'C++', 'Sensors', 'Servo Control', 'Embedded Systems'],
      visualText: 'ROBOTICS',
      github: '#',
    },
  
    {
      slug: 'network-analysis',
      number: '03',
      title: 'Network Analysis',
      category: 'Networking / Wireshark',
      shortDescription:
        'Protocol-level analysis covering TCP/IP behaviour, ICMP, fragmentation and packet inspection.',
      overview:
        'This project focuses on observing how networking concepts appear in real packet captures rather than treating protocols only as theory.',
      challenge:
        'The challenge was connecting packet-level evidence with concepts including addressing, fragmentation, routing and protocol behaviour.',
      approach:
        'I inspected packet captures using Wireshark, compared headers and fields, traced requests and responses and analysed fragmentation behaviour.',
      result:
        'The work strengthened my understanding of how network protocols behave in practice and how packet analysis supports troubleshooting.',
      tech: ['Wireshark', 'TCP/IP', 'ICMP', 'IPv4', 'Packet Analysis'],
      visualText: 'NETWORK',
      github: '#',
    },
  ]
  
  export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug)
  }