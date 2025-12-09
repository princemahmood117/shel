const mediaData = [
  {
    id: 1,
    title: 'Sheltech Kanakchapa is Raising the Standard of City Living',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    month: 'August',
    year: '2025',
    category: 'News',
    slug: 'sheltech-kanakchapa-raising-standard'
  },
  {
    id: 2,
    title: 'Sheltech Honoured for Its Vision of a Sustainable Tomorrow',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    month: 'July',
    year: '2025',
    category: 'News',
    slug: 'sheltech-vision-sustainable-tomorrow'
  },
  {
    id: 3,
    title: 'The Tejgaon Transition: Forging the Future with Sheltech',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    month: 'June',
    year: '2025',
    category: 'News',
    slug: 'tejgaon-transition-forging-future'
  },
  {
    id: 4,
    title: 'Sheltech Introduces Smart Home Technology',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    month: 'May',
    year: '2025',
    category: 'News',
    slug: 'sheltech-smart-home-technology'
  },
  {
    id: 5,
    title: 'Green Building Initiative by Sheltech',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    month: 'April',
    year: '2025',
    category: 'News',
    slug: 'green-building-initiative'
  },
  {
    id: 6,
    title: 'Sheltech Wins Best Developer Award 2025',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80',
    month: 'March',
    year: '2025',
    category: 'News',
    slug: 'best-developer-award-2025'
  },
  {
    id: 7,
    title: 'Sheltech Launches Luxury Apartments in Dhaka',
    image: 'https://images.unsplash.com/photo-1602524201356-0f1f6f0434a0?w=800&q=80',
    month: 'February',
    year: '2025',
    category: 'News',
    slug: 'sheltech-luxury-apartments-dhaka'
  },
  {
    id: 8,
    title: 'Sheltech Expands to Sustainable Urban Projects',
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?w=800&q=80',
    month: 'January',
    year: '2025',
    category: 'News',
    slug: 'sheltech-sustainable-urban-projects'
  },
  {
    id: 9,
    title: 'Innovative Architecture: Sheltech’s Landmark Design',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    month: 'December',
    year: '2024',
    category: 'News',
    slug: 'innovative-architecture-sheltech'
  },
  {
    id: 10,
    title: 'Sheltech Brings Smart Living to Residential Areas',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9b639f8?w=800&q=80',
    month: 'November',
    year: '2024',
    category: 'News',
    slug: 'sheltech-smart-living-residential'
  },
  {
    id: 11,
    title: 'Sheltech Collaborates on Urban Green Spaces',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    month: 'October',
    year: '2024',
    category: 'News',
    slug: 'sheltech-collaborates-urban-green-spaces'
  },
  {
    id: 12,
    title: 'Sheltech Develops Affordable Housing Solutions',
    image: 'https://images.unsplash.com/photo-1581091215368-7d57f8cc4f80?w=800&q=80',
    month: 'September',
    year: '2024',
    category: 'News',
    slug: 'sheltech-affordable-housing'
  },
  {
    id: 13,
    title: 'Sheltech Pioneers Eco-Friendly Building Materials',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    month: 'August',
    year: '2024',
    category: 'News',
    slug: 'sheltech-eco-friendly-materials'
  },
  {
    id: 14,
    title: 'Sheltech Introduces Automated Building Management',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    month: 'July',
    year: '2024',
    category: 'News',
    slug: 'sheltech-automated-building-management'
  },
  {
    id: 15,
    title: 'Sheltech Wins National Real Estate Award',
    image: 'https://images.unsplash.com/photo-1518309637686-c6b1a24f5fd0?w=800&q=80',
    month: 'June',
    year: '2024',
    category: 'News',
    slug: 'sheltech-national-real-estate-award'
  },
  {
    id: 16,
    title: 'Sheltech Introduces AI-Powered Smart Homes',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&q=80',
    month: 'May',
    year: '2024',
    category: 'News',
    slug: 'sheltech-ai-smart-homes'
  },
  {
    id: 17,
    title: 'Sheltech Invests in Urban Infrastructure Projects',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80',
    month: 'April',
    year: '2024',
    category: 'News',
    slug: 'sheltech-urban-infrastructure'
  },
  {
    id: 18,
    title: 'Sheltech Launches Waterfront Residential Complex',
    image: 'https://images.unsplash.com/photo-1533106418987-1a2b6d0e6e3c?w=800&q=80',
    month: 'March',
    year: '2024',
    category: 'News',
    slug: 'sheltech-waterfront-residential'
  },
  {
    id: 19,
    title: 'Sheltech Creates Modern Office Spaces',
    image: 'https://images.unsplash.com/photo-1558081425-5922a56f57f2?w=800&q=80',
    month: 'February',
    year: '2024',
    category: 'News',
    slug: 'sheltech-modern-office-spaces'
  },
  {
    id: 20,
    title: 'Sheltech Expands Community Development Programs',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    month: 'January',
    year: '2024',
    category: 'News',
    slug: 'sheltech-community-development'
  },
  {
    id: 21,
    title: 'Sheltech Revamps City Skyline with New Projects',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    month: 'December',
    year: '2023',
    category: 'News',
    slug: 'sheltech-city-skyline-revamp'
  },
  {
    id: 22,
    title: 'Sheltech Implements Smart Parking Solutions',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    month: 'November',
    year: '2023',
    category: 'News',
    slug: 'sheltech-smart-parking-solutions'
  },
  {
    id: 23,
    title: 'Sheltech Invests in Renewable Energy Projects',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&q=80',
    month: 'October',
    year: '2023',
    category: 'News',
    slug: 'sheltech-renewable-energy-projects'
  },
  {
    id: 24,
    title: 'Sheltech Launches Innovative Community Spaces',
    image: 'https://images.unsplash.com/photo-1473445361088-0e0b1eafaf06?w=800&q=80',
    month: 'September',
    year: '2023',
    category: 'News',
    slug: 'sheltech-innovative-community-spaces'
  },
  {
    id: 25,
    title: 'Sheltech Introduces Smart Security Systems',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80',
    month: 'August',
    year: '2023',
    category: 'News',
    slug: 'sheltech-smart-security-systems'
  },
  {
    id: 26,
    title: 'Sheltech Develops Mixed-Use Urban Projects',
    image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=800&q=80',
    month: 'July',
    year: '2023',
    category: 'News',
    slug: 'sheltech-mixed-use-urban-projects'
  },
  {
    id: 27,
    title: 'Sheltech Partners with Architects for Sustainable Design',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80',
    month: 'June',
    year: '2023',
    category: 'News',
    slug: 'sheltech-sustainable-design-partnership'
  },
  {
    id: 28,
    title: 'Sheltech Brings Luxury Villas to City Outskirts',
    image: 'https://images.unsplash.com/photo-1528301884061-911be2a7ed3f?w=800&q=80',
    month: 'May',
    year: '2023',
    category: 'News',
    slug: 'sheltech-luxury-villas-outskirts'
  },
  {
    id: 29,
    title: 'Sheltech Introduces Smart Office Solutions',
    image: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&q=80',
    month: 'April',
    year: '2023',
    category: 'News',
    slug: 'sheltech-smart-office-solutions'
  },
  {
    id: 30,
    title: 'Sheltech Launches Green Roof Initiatives',
    image: 'https://images.unsplash.com/photo-1505842465776-3aa7a8ff5568?w=800&q=80',
    month: 'March',
    year: '2023',
    category: 'News',
    slug: 'sheltech-green-roof-initiatives'
  }
];

export default mediaData;
