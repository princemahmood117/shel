


//   const projects = [
//   {
//     name: "Sheltech MH Heights",
//     type: "Commercial",
//     series: "Sapphire Series",
//     location: "Mohammadpur",
//     status: "Ongoing",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
//   },
//   {
//     name: "Sheltech Rebecca Mohiuddin",
//     type: "Residential",
//     series: "Ruby Series",
//     location: "Dhanmondi",
//     status: "Upcoming",
//     image:
//       "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
//   },
//   {
//     name: "Sheltech Crimson Palace",
//     type: "Residential",
//     series: "Condominium",
//     location: "Gulshan",
//     status: "Ongoing",
//     image:
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
//   },
//   {
//     name: "Sheltech Azure Heights",
//     type: "Commercial",
//     series: "Diamond Series",
//     location: "Banani",
//     status: "Completed",
//     image:
//       "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
//   },
//   {
//     name: "Sheltech Green Valley",
//     type: "Residential",
//     series: "Emerald Series",
//     location: "Uttara",
//     status: "Upcoming",
//     image:
//       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
//   },
//   {
//     name: "Sheltech Royal Grandeur",
//     type: "Residential",
//     series: "Premium Series",
//     location: "Bashundhara",
//     status: "Ongoing",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
//   },
// ];

// export default projects;







const projects = [
  {
    id: "sheltech-mh-heights",
    name: "Sheltech MH Heights",
    type: "Commercial",
    series: "Sapphire Series",
    location: "Mohammadpur",
    status: "Ongoing",
    image: "https://www.sheltech-bd.com/cms/admin/uploads/product/sheltech-cityscape-heights/1757330738sVOhI.jpg",
    details: {
      address: "Plot 47C & 48C, Asad Avenue, Mohammadpur, Dhaka",
      landArea: "11.95 Katha",
      levels: "21 Storied (B3+B2+B1+G+20)",
      unitSize: "929 - 1792 sft",
      units: "43",
      parkings: "43",
      elevator: "03",
      staircase: "02, with Fire Door",
      handover: "2028",
      consultant: "Ehsan Khan Architects Ltd. (EK Architects)"
    }
  },
  {
    id: "sheltech-rebecca-mohiuddin",
    name: "Sheltech Rebecca Mohiuddin",
    type: "Residential",
    series: "Ruby Series",
    location: "Dhanmondi",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    details: {
      address: "Plot 28, Road 11, Dhanmondi R/A, Dhaka",
      landArea: "8.5 Katha",
      levels: "15 Storied (B2+B1+G+12)",
      unitSize: "2391 sft",
      units: "24",
      parkings: "24",
      elevator: "02",
      staircase: "02, with Fire Door",
      handover: "2028",
      consultant: "Design Studio Ltd."
    }
  },
  {
    id: "sheltech-crimson-palace",
    name: "Sheltech Crimson Palace",
    type: "Residential",
    series: "Condominium",
    location: "Gulshan",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    details: {
      address: "Plot 646 & 652, Boro Maghbazar, Dhaka",
      landArea: "10.2 Katha",
      levels: "18 Storied (B2+G+16)",
      unitSize: "1322 - 1846 sft",
      units: "36",
      parkings: "36",
      elevator: "02",
      staircase: "02, with Fire Door",
      handover: "2029",
      consultant: "Urban Architects"
    }
  },
  {
    id: "sheltech-azure-heights",
    name: "Sheltech Azure Heights",
    type: "Commercial",
    series: "Diamond Series",
    location: "Banani",
    status: "Completed",
    mainImage : "",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    details: {
      address: "Plot 76, Road 11, Block D, Banani, Dhaka",
      landArea: "15.3 Katha",
      levels: "25 Storied (B3+B2+B1+G+22)",
      unitSize: "1344 - 2715 sft",
      units: "55",
      parkings: "55",
      elevator: "04",
      staircase: "03, with Fire Door",
      handover: "2024",
      consultant: "Modern Architects Ltd."
    }
  },
  {
    id: "sheltech-green-valley",
    name: "Sheltech Green Valley",
    type: "Residential",
    series: "Emerald Series",
    location: "Uttara",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    details: {
      address: "Plot 9, Road 17, Sector 7, Uttara, Dhaka",
      landArea: "12.8 Katha",
      levels: "16 Storied (B2+G+14)",
      unitSize: "2015 sft",
      units: "30",
      parkings: "30",
      elevator: "02",
      staircase: "02, with Fire Door",
      handover: "2029",
      consultant: "Green Architects"
    }
  },
  {
    id: "sheltech-royal-grandeur",
    name: "Sheltech Royal Grandeur",
    type: "Residential",
    series: "Premium Series",
    location: "Bashundhara",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    details: {
      address: "Plot 984, 7th Sarani, Block I, Bashundhara R/A, Dhaka",
      landArea: "14.5 Katha",
      levels: "20 Storied (B3+G+17)",
      unitSize: "2185 - 3200 sft",
      units: "40",
      parkings: "40",
      elevator: "03",
      staircase: "02, with Fire Door",
      handover: "2027",
      consultant: "Royal Design Studio"
    }
  },
];

export default projects;