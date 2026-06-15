export const businessInfo = {
  name: "Road House Café & Bar",
  phone: "+91 99583 87778",
  phoneHref: "tel:+919958387778",
  email: "hello@roadhousecafe.in",
  hours: "11:00 AM – 11:00 PM Daily",
  address: "First Floor, Shop No. 36 & 37, Suntwilight Mall, Block B, Jaypee Greens, Greater Noida, UP 201308",
  landmark: "Opposite Delta 1 Metro Station",
  website: "https://roadhousecafe.in",
  instagram: "https://instagram.com/roadhouse_greaternoida",
  city: "Greater Noida",
  region: "Delhi NCR",
};

export type SeoLandingPage = {
  slug: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  faqs: { question: string; answer: string }[];
  internalLinks: { label: string; href: string }[];
  cta: string;
  schemaTypes: string[];
};

const landingConfigs = [
  ["cafe-in-greater-noida", "cafe in Greater Noida", "Cafe in Greater Noida", "Cafe in Greater Noida | Road House Café & Bar", "Looking for a cafe in Greater Noida? Visit Road House Café & Bar opposite Delta 1 Metro Station for coffee, pizza, cocktails, rooftop seating and live music.", "Cafe in Greater Noida for Coffee, Food, Cocktails & Rooftop Evenings"],
  ["best-cafe-in-greater-noida", "best cafe in Greater Noida", "Best Cafe in Greater Noida", "Best Cafe in Greater Noida | Road House Café & Bar", "Discover one of the best cafes in Greater Noida for dates, friends, coffee, food, beer, cocktails and Thursday Indie & Sufi Nights.", "Best Cafe in Greater Noida for Relaxed Local Evenings"],
  ["cafe-near-pari-chowk", "cafe near Pari Chowk", "Cafe Near Pari Chowk", "Cafe Near Pari Chowk | Road House Café & Bar", "Road House Café & Bar is a short ride from Pari Chowk, serving coffee, farmhouse pizza, white sauce pasta, beer, cocktails and live music.", "Cafe Near Pari Chowk for Food, Coffee & Evening Plans"],
  ["cafe-near-delta-1-metro", "cafe near Delta 1 Metro", "Cafe Near Delta 1 Metro", "Cafe Near Delta 1 Metro | Road House Café & Bar", "Find a cafe near Delta 1 Metro Station at Road House Café & Bar, opposite the metro with rooftop seating, cocktails, coffee and comfort food.", "Cafe Near Delta 1 Metro Station, Greater Noida"],
  ["restaurant-in-greater-noida", "restaurant in Greater Noida", "Restaurant in Greater Noida", "Restaurant in Greater Noida | Road House Café & Bar", "Choose Road House Café & Bar as your restaurant in Greater Noida for North Indian, Asian, cafe favourites, pizza, pasta and drinks.", "Restaurant in Greater Noida for Casual Dining & Celebrations"],
  ["bar-in-greater-noida", "bar in Greater Noida", "Bar in Greater Noida", "Bar in Greater Noida | Road House Café & Bar", "Looking for a bar in Greater Noida? Enjoy beer, cocktails, rooftop seating, live music and shareable food at Road House Café & Bar.", "Bar in Greater Noida for Beer, Cocktails & Live Music"],
  ["live-music-cafe-greater-noida", "live music cafe Greater Noida", "Live Music Cafe Greater Noida", "Live Music Cafe in Greater Noida | Road House Café & Bar", "Experience Thursday Indie Night and Sufi vibes at a live music cafe in Greater Noida with food, cocktails and rooftop seating.", "Live Music Cafe in Greater Noida with Indie & Sufi Nights"],
  ["birthday-party-venue-greater-noida", "birthday party venue Greater Noida", "Birthday Party Venue Greater Noida", "Birthday Party Venue in Greater Noida | Road House Café & Bar", "Plan birthdays at Road House Café & Bar with rooftop ambience, pizza, pasta, beer, cocktails, music and easy access from Delta 1.", "Birthday Party Venue in Greater Noida for Memorable Celebrations"],
  ["coffee-shop-in-greater-noida", "coffee shop in Greater Noida", "Coffee Shop in Greater Noida", "Coffee Shop in Greater Noida | Road House Café & Bar", "Visit Road House Café & Bar for coffee, cold brew, snacks, pasta, pizza and unhurried conversations in Greater Noida.", "Coffee Shop in Greater Noida for Work Breaks & Catch-Ups"],
  ["cocktail-bar-greater-noida", "cocktail bar Greater Noida", "Cocktail Bar Greater Noida", "Best Cocktail Bar in Greater Noida | Road House Café & Bar", "Explore cocktails, beer, rooftop evenings and live music at Road House Café & Bar, a cocktail bar in Greater Noida opposite Delta 1 Metro.", "Cocktail Bar in Greater Noida for Handcrafted Drinks"],
  ["date-place-in-greater-noida", "date place in Greater Noida", "Date Place in Greater Noida", "Date Place in Greater Noida | Road House Café & Bar", "Plan a relaxed date in Greater Noida with rooftop seating, coffee, cocktails, farmhouse pizza, white sauce pasta and live music.", "Date Place in Greater Noida for Easy, Comfortable Evenings"],
  ["cafe-in-jaypee-greens", "cafe in Jaypee Greens", "Cafe in Jaypee Greens", "Cafe in Jaypee Greens | Road House Café & Bar", "Road House Café & Bar in Jaypee Greens, Greater Noida offers coffee, food, cocktails, rooftop seating and music near Delta 1 Metro.", "Cafe in Jaypee Greens, Greater Noida"],
  ["cafe-near-knowledge-park", "cafe near Knowledge Park", "Cafe Near Knowledge Park", "Cafe Near Knowledge Park | Road House Café & Bar", "Students, teams and friends near Knowledge Park can visit Road House Café & Bar for coffee, food, beer, cocktails and live music.", "Cafe Near Knowledge Park for Students, Teams & Friends"],
  ["weekend-party-place-greater-noida", "weekend party place Greater Noida", "Weekend Party Place Greater Noida", "Weekend Party Place in Greater Noida | Road House Café & Bar", "Make weekend plans at Road House Café & Bar with rooftop seating, beer, cocktails, live music, pizza and party-friendly hospitality.", "Weekend Party Place in Greater Noida for Friends & Groups"],
  ["corporate-party-venue-greater-noida", "corporate party venue Greater Noida", "Corporate Party Venue Greater Noida", "Corporate Party Venue in Greater Noida | Road House Café & Bar", "Host corporate parties in Greater Noida at Road House Café & Bar with rooftop ambience, food, drinks, music and relaxed team bonding.", "Corporate Party Venue in Greater Noida That Teams Remember"],
] as const;

const coreLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Location", href: "/#location" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
  { label: "Best Cocktail Bar in Greater Noida", href: "/cocktail-bar-greater-noida" },
  { label: "Live Music in Greater Noida", href: "/live-music-cafe-greater-noida" },
  { label: "Date Night in Greater Noida", href: "/date-place-in-greater-noida" },
];

const buildSections = (title: string, keyword: string): SeoLandingPage["sections"] => [
  {
    heading: `Why Road House works as your ${title.toLowerCase()}`,
    body: [
      `Road House Café & Bar is designed for people who want the ease of a neighbourhood cafe with the energy of a modern restaurant and bar. Located at Suntwilight Mall in Jaypee Greens, opposite Delta 1 Metro Station, it is simple to reach from Greater Noida, Pari Chowk, Knowledge Park, Noida and the wider Delhi NCR region. Guests visit for coffee in the afternoon, farmhouse pizza and white sauce pasta in the evening, beer after work, handcrafted cocktails at night and Indie Night or Sufi music when the week needs a little character.`,
      `The best local hospitality is not only about a long menu. It is about whether the place fits real life. A ${keyword} should be comfortable for a quick catch-up, a slow date, a birthday table, a team celebration and a spontaneous weekend plan. Road House keeps that flexibility at the centre of the experience, combining rooftop seating, warm service, shareable food and a bar programme that feels approachable rather than intimidating.`,
    ],
  },
  {
    heading: "A location built around Greater Noida routines",
    body: [
      `Greater Noida has changed. People no longer want to drive across Delhi NCR every time they need a good evening out. The area around Delta 1, Pari Chowk, Jaypee Greens and Knowledge Park now supports a growing food, cafe and nightlife culture. Road House is part of that shift because it gives locals a dependable place for conversations, casual meals, music-led evenings and celebrations close to home.`,
      `Being opposite Delta 1 Metro Station makes the venue useful for different groups. College friends from Knowledge Park can meet without complicated travel. Families from Jaypee Greens can drop in for dinner. Office teams can plan corporate parties that do not feel like formal banquets. Couples can choose a relaxed date place where coffee, cocktails and food all sit comfortably on the same table.`,
    ],
  },
  {
    heading: "Food, coffee, beer and cocktails that fit the occasion",
    body: [
      `The menu supports the way people actually order in groups. Farmhouse pizza is easy to share, white sauce pasta is familiar comfort food, starters keep conversations moving and coffee works for people who want something lighter. For evenings, cold beer and cocktails help create a social rhythm without making the experience feel overly formal. Whether someone searches for Cafe, Restaurant, Bar, Beer, Delta 1 or Greater Noida, the underlying need is usually the same: a place where the table feels taken care of.`,
      `Road House is also suited to guests who want choice. One person may want coffee, another may want beer, someone else may want a cocktail, and the group may still agree on pizza or pasta. That mix matters in a city where plans often involve friends, couples, colleagues and family members with different preferences.`,
    ],
  },
  {
    heading: "Atmosphere: the reason people stay longer",
    body: [
      `A good cafe or bar is remembered for atmosphere as much as for food. Road House leans into a relaxed rooftop mood, warm lighting, comfortable seating and music that supports the evening. Thursday Indie and Sufi Nights are especially important because live music gives Greater Noida a local ritual. People arrive expecting songs; they leave with memories, photos, conversations and reasons to come back.`,
      `This is why Road House is relevant for searches like live music cafe Greater Noida, cocktail bar Greater Noida, birthday party venue Greater Noida and weekend party place Greater Noida. Each search sounds different, but each one points to the same question: where can we go locally and still feel like the evening was worth planning?`,
    ],
  },
  {
    heading: "Local relevance without shortcuts",
    body: [
      `Every Road House landing page is written around real guest intent rather than spam. The goal is to answer useful local questions for Greater Noida, Noida and Delhi NCR guests: how close the venue is to Delta 1 Metro, whether the setting works for friends or couples, whether food and drinks can be ordered together, and whether the atmosphere is suitable for a birthday, Indie Night, dinner or quick coffee.`,
      `That white-hat approach matters for guests and search engines. Instead of doorway pages with thin copy, each page explains the same business from a specific local angle and connects visitors to the menu, location, gallery, reviews, contact options and related pages. The result is a clearer user journey and a stronger internal linking structure for long-term local SEO authority.`,
    ],
  },
  {
    heading: "Planning a visit",
    body: [
      `Road House Café & Bar is open daily from 11:00 AM to 11:00 PM. The venue is located on the first floor at Shop No. 36 & 37, Suntwilight Mall, Block B, Jaypee Greens, Greater Noida, UP 201308, opposite Delta 1 Metro Station. For table bookings, birthday enquiries, corporate parties or weekend plans, guests can call ${businessInfo.phone} or email ${businessInfo.email}.`,
      `If you are comparing options for a ${keyword}, look for the details that make an evening easier: accessible location, consistent service, a menu with both food and drinks, comfortable ambience, music programming and enough flexibility for different kinds of groups. Road House brings those pieces together for Greater Noida, Noida and Delhi NCR guests who prefer white-hat local hospitality over hype.`,
    ],
  },
];

const buildFaqs = (title: string, keyword: string): SeoLandingPage["faqs"] => [
  { question: `Where is Road House Café & Bar located?`, answer: `${businessInfo.name} is on the first floor, Shop No. 36 & 37, Suntwilight Mall, Block B, Jaypee Greens, Greater Noida, opposite Delta 1 Metro Station.` },
  { question: `Is Road House a good ${keyword}?`, answer: `Yes. Road House combines cafe seating, restaurant food, a bar, cocktails, beer, rooftop ambience and live music, making it a practical ${keyword} for friends, couples, birthdays and team outings.` },
  { question: `What are the opening hours?`, answer: `Road House Café & Bar is open from ${businessInfo.hours}.` },
  { question: `Can I plan a birthday or corporate party here?`, answer: `Yes. The venue is suitable for birthday celebrations, weekend parties and corporate gatherings with food, drinks, music and a relaxed rooftop atmosphere.` },
  { question: `Does Road House have live music?`, answer: `Road House hosts Thursday Indie and Sufi Nights, creating a live music experience for Greater Noida guests.` },
  { question: `How do I book a table?`, answer: `Call ${businessInfo.phone}, email ${businessInfo.email}, or use the contact section on the website to make an enquiry.` },
];

export const seoLandingPages: SeoLandingPage[] = landingConfigs.map(([slug, keyword, title, metaTitle, metaDescription, h1]) => ({
  slug,
  keyword,
  title,
  metaTitle,
  metaDescription,
  h1,
  intro: `${businessInfo.name} is a ${keyword} for people who want good food, coffee, beer, cocktails, rooftop seating and live music without leaving Greater Noida. Visit us at Jaypee Greens, opposite Delta 1 Metro Station.`,
  sections: buildSections(title, keyword),
  faqs: buildFaqs(title, keyword),
  internalLinks: coreLinks,
  cta: `Plan your next visit to ${businessInfo.name}. Call ${businessInfo.phone} for reservations, birthday tables, corporate parties and weekend group bookings.`,
  schemaTypes: ["LocalBusiness", "Restaurant", "CafeOrCoffeeShop", "BarOrPub", "FAQPage", "BreadcrumbList"],
}));

export const blogArticles = [
  { title: "Greater Noida After Dark Has Changed", slug: "greater-noida-after-dark-has-changed", metaTitle: "Greater Noida Nightlife Has Changed | A Local's View of Evenings in the City", metaDescription: "Greater Noida nightlife has evolved dramatically over the last decade. Discover how cafés, bars, live music and rooftop venues are changing the city's evening culture.", focusKeyword: "Greater Noida Nightlife", secondaryKeywords: ["Bar in Greater Noida", "Bar Near Me", "Rooftop Café in Greater Noida", "Best Cocktail Bar in Greater Noida", "Live Music in Greater Noida", "Pizza in Greater Noida", "Café in Greater Noida"], angle: "A local essay on how Greater Noida became a place where residents spend evenings instead of leaving for Delhi or Noida.", internalLinks: ["Best Cocktail Bar in Greater Noida", "Why Good Bars Feel Like Community Centres", "Rooftop Café in Greater Noida", "Live Music in Greater Noida", "Best Pizza in Greater Noida", "Date Night in Greater Noida"] },
  { title: "Nobody Remembers the Presentation at the Corporate Party", slug: "corporate-party-venues-greater-noida", metaTitle: "Corporate Party Venues in Greater Noida | Why Nobody Remembers the Presentation", metaDescription: "Looking for a corporate party venue in Greater Noida? Here's what teams actually remember long after the event is over.", focusKeyword: "Corporate Party Venue Greater Noida", angle: "Explain why relaxed venues, rooftop settings, beer, pizza, cocktails and music create better team memories than formal rooms.", internalLinks: ["Bar in Greater Noida", "Live Music in Greater Noida", "Rooftop Café in Greater Noida"] },
  { title: "The Cocktail Order Personality Test", slug: "cocktail-order-personality-test", metaTitle: "Best Cocktail Bar in Greater Noida | What Your Cocktail Says About You", metaDescription: "Ever wondered what your cocktail order says about you? A fun look at cocktail personalities and drinking culture.", focusKeyword: "Best Cocktail Bar in Greater Noida", angle: "Fun, shareable cocktail culture article connecting Margaritas, Mojitos, Whiskey Sours and Espresso Martinis to social choices.", internalLinks: ["Best Cocktail Bar in Greater Noida", "Rooftop Café", "Greater Noida Nightlife"] },
  { title: "How Beer Became India's Favourite Social Lubricant", slug: "beer-in-greater-noida", metaTitle: "Beer in Greater Noida | Why Beer Still Rules Social Gatherings", metaDescription: "Explore why beer remains the most popular social drink across bars, cafés and live music venues.", focusKeyword: "Beer in Greater Noida", angle: "Position beer as approachable, social and ideal with pizza, starters, cricket and live music nights.", internalLinks: ["Best Pizza in Greater Noida", "Live Music in Greater Noida", "Bar in Greater Noida"] },
  { title: "Thursday Nights Were Made for Indie Music", slug: "live-music-thursday-indie-night", metaTitle: "Live Music in Greater Noida | Why Thursday Nights Matter", metaDescription: "Discover why live Indie and Sufi nights have become a favourite ritual for music lovers in Greater Noida.", focusKeyword: "Live Music in Greater Noida", angle: "Build a recurring content asset around Thursday Indie and Sufi Nights and the emotional value of live performances.", internalLinks: ["Live Music in Greater Noida", "Date Night in Greater Noida", "Rooftop Café"] },
  { title: "A Local's Guide to Spending an Evening in Greater Noida", slug: "things-to-do-in-greater-noida-at-night", metaTitle: "Things To Do in Greater Noida at Night | A Local Guide", metaDescription: "A practical guide to spending a memorable evening in Greater Noida.", focusKeyword: "Things To Do in Greater Noida at Night", angle: "A simple itinerary: coffee, rooftop cafe, pizza, cocktails, live music and conversations close to home.", internalLinks: ["Best Pizza in Greater Noida", "Best Cocktail Bar in Greater Noida", "Greater Noida Nightlife"] },
  { title: "Why Good Bars Feel Like Community Centres", slug: "bar-community-centre-greater-noida", metaTitle: "Bar in Greater Noida | Why Great Bars Build Communities", metaDescription: "Great bars are more than places to drink. They become gathering spaces and social anchors.", focusKeyword: "Bar in Greater Noida", angle: "Explain how regulars, birthdays, reunions and familiar service turn a bar into a social anchor.", internalLinks: ["Bar Near Me", "Live Music in Greater Noida", "Greater Noida Nightlife"] },
  { title: "The RoadHouse Way of Hosting People", slug: "roadhouse-way-of-hosting", metaTitle: "RoadHouse Café & Bar Greater Noida | More Than Food and Drinks", metaDescription: "The story behind RoadHouse Café & Bar and its approach to hospitality.", focusKeyword: "RoadHouse Café & Bar Greater Noida", angle: "Brand story about hospitality, remembering details and creating a place where guests stay longer than planned.", internalLinks: ["Best Pizza in Greater Noida", "Best Cocktail Bar in Greater Noida", "Live Music in Greater Noida"] },
  { title: "Why Rooftops Make Ordinary Evenings Feel Special", slug: "rooftop-cafe-greater-noida", metaTitle: "Rooftop Café in Greater Noida | Why Rooftops Make Ordinary Evenings Feel Special", metaDescription: "Discover why rooftop cafés in Greater Noida have become the preferred choice for dates, friends, cocktails, beer and relaxed evenings under the open sky.", focusKeyword: "Rooftop Café in Greater Noida", angle: "Use the rooftop as a metaphor for escape, slower conversations and low-pressure evenings.", internalLinks: ["Date Night in Greater Noida", "Bar Near Me", "Live Music in Greater Noida"] },
  { title: "What People Really Mean When They Search 'Bar Near Me'", slug: "bar-near-me-greater-noida", metaTitle: "Bar Near Me | What People Really Mean When They Search for a Bar", metaDescription: "Searching for a bar near me? Here's what people are actually looking for when they search for the perfect evening in Greater Noida.", focusKeyword: "Bar Near Me", angle: "Decode search intent as a desire for convenience, comfort, routine, birthday moments, cricket and friendship.", internalLinks: ["Bar in Greater Noida", "Best Cocktail Bar in Greater Noida", "Greater Noida Nightlife"] },
  { title: "Why Recorded Music Never Quite Wins", slug: "why-live-music-wins", metaTitle: "Live Music in Greater Noida | Why Recorded Music Never Quite Wins", metaDescription: "Looking for live music in Greater Noida? Discover why live performances create memories that playlists never can.", focusKeyword: "Live Music in Greater Noida", angle: "Contrast playlists with the imperfect, memorable and communal power of live Indie and Sufi performances.", internalLinks: ["Live Music in Greater Noida", "Rooftop Café", "Thursday Indie Night"] },
  { title: "Date Nights Are Getting Less Fancy and More Fun", slug: "date-night-greater-noida", metaTitle: "Date Night in Greater Noida | Why Modern Dates Are Finally Relaxing", metaDescription: "Looking for the perfect date night in Greater Noida? Discover why today's best dates are less about impressing and more about enjoying the evening.", focusKeyword: "Date Night in Greater Noida", angle: "Promote relaxed dates built around pizza, cocktails, laughter, comfort and conversation instead of over-formality.", internalLinks: ["Date Place in Greater Noida", "Cocktail Bar Greater Noida", "Rooftop Café in Greater Noida"] },
];

export const citationDescriptions = ["Google Business Profile", "JustDial", "IndiaMart", "Sulekha", "Yellow Pages", "Yalwa", "Hotfrog", "NearMeTrade", "Restaurant Guru", "Zomato", "MagicPin", "Tripadvisor", "Facebook", "Instagram", "Bing Places", "Apple Maps", "MapQuest", "Foursquare"].map((platform) => ({
  platform,
  description: `${businessInfo.name} is a cafe, restaurant and bar in Greater Noida at Suntwilight Mall, Jaypee Greens, opposite Delta 1 Metro Station. Visit for coffee, beer, cocktails, farmhouse pizza, white sauce pasta, rooftop seating, birthday parties, corporate gatherings and Thursday Indie & Sufi Nights. Open ${businessInfo.hours}. Call ${businessInfo.phone}.`,
}));

const backlinkKeywords = ["Cafe", "Restaurant", "Bar", "Indie Night", "Beer", "Farmhouse Pizza", "White Sauce Pasta", "Delta 1", "Greater Noida"];
const makeBacklinks = (count: number, category: string) => Array.from({ length: count }, (_, index) => ({ category, prospect: `${category} prospect ${index + 1}`, suggestedAnchor: backlinkKeywords[index % backlinkKeywords.length], approach: `White-hat outreach: submit accurate NAP, request editorial inclusion only where Road House is relevant, and avoid paid link schemes or keyword-stuffed placements.` }));
export const backlinkPlan = [
  ...makeBacklinks(50, "Citation backlink"),
  ...makeBacklinks(30, "Food blog backlink"),
  ...makeBacklinks(20, "Guest posting opportunity"),
  ...makeBacklinks(20, "Event listing backlink"),
  ...makeBacklinks(10, "Local newspaper backlink"),
  ...makeBacklinks(10, "Delhi NCR lifestyle backlink"),
  ...makeBacklinks(10, "Hospitality backlink"),
];

export const anchorTextPlan = {
  branded: ["Road House Café & Bar", "RoadHouse Greater Noida", "Road House Cafe", "Road House Bar"],
  partialMatch: ["cafe and bar in Greater Noida", "live music cafe near Delta 1", "cocktail bar in Greater Noida", "birthday venue with rooftop seating"],
  location: ["Delta 1 Greater Noida", "Jaypee Greens cafe", "near Pari Chowk", "Delhi NCR cafe and bar"],
  generic: ["visit the website", "book a table", "view menu", "get directions", "learn more"],
  nakedUrl: ["https://roadhousecafe.in", "https://roadhousecafe.in/menu", "https://roadhousecafe.in/cocktail-bar-greater-noida"],
};

export const schemaCatalog = ["LocalBusiness", "Restaurant", "CafeOrCoffeeShop", "BarOrPub", "Review", "FAQ", "Breadcrumb", "Organization", "WebSite", "Menu"];

export const internalLinkStructure = [
  { page: "Home", linksTo: ["About", "Menu", "Gallery", "Reviews", "Location", "Contact", ...seoLandingPages.slice(0, 6).map((p) => p.title)] },
  { page: "About", linksTo: ["Home", "Menu", "Location", "Live Music Cafe Greater Noida", "Date Place in Greater Noida"] },
  { page: "Menu", linksTo: ["Restaurant in Greater Noida", "Coffee Shop in Greater Noida", "Cocktail Bar Greater Noida", "Bar in Greater Noida"] },
  { page: "Gallery", linksTo: ["Birthday Party Venue Greater Noida", "Weekend Party Place Greater Noida", "Live Music Cafe Greater Noida"] },
  { page: "Reviews", linksTo: ["Best Cafe in Greater Noida", "Cafe Near Delta 1 Metro", "Corporate Party Venue Greater Noida"] },
  { page: "Location", linksTo: ["Cafe Near Pari Chowk", "Cafe in Jaypee Greens", "Cafe Near Knowledge Park"] },
  { page: "Contact", linksTo: ["Birthday Party Venue Greater Noida", "Corporate Party Venue Greater Noida", "Weekend Party Place Greater Noida"] },
];

export const sitemapStructure = ["/sitemap.xml"];
export const gbpPosts = Array.from({ length: 30 }, (_, i) => `GBP Post ${i + 1}: Highlight ${backlinkKeywords[i % backlinkKeywords.length]} with a photo, a short local caption, and a call to book a table at Road House Café & Bar near Delta 1 Metro, Greater Noida.`);
export const reviewReplies = Array.from({ length: 30 }, (_, i) => `Thank you for visiting Road House Café & Bar in Greater Noida. We are glad you enjoyed the ${backlinkKeywords[i % backlinkKeywords.length]} experience and hope to host you again soon near Delta 1 Metro.`);
export const qnaSuggestions = Array.from({ length: 30 }, (_, i) => ({ question: `Q${i + 1}: Do you offer ${backlinkKeywords[i % backlinkKeywords.length]} at Road House Café & Bar?`, answer: `Yes. Road House Café & Bar offers a cafe, restaurant and bar experience in Greater Noida with food, drinks, rooftop seating and event-friendly hospitality. Call ${businessInfo.phone} for current details.` }));

export const getBaseSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Restaurant", "CafeOrCoffeeShop", "BarOrPub"],
  name: businessInfo.name,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  url: businessInfo.website,
  servesCuisine: ["Cafe", "North Indian", "Asian", "Pizza", "Pasta", "Cocktails"],
  priceRange: "₹₹",
  openingHours: "Mo-Su 11:00-23:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor, Shop No. 36 & 37, Suntwilight Mall, Block B, Jaypee Greens",
    addressLocality: "Greater Noida",
    addressRegion: "UP",
    postalCode: "201308",
    addressCountry: "IN",
  },
  areaServed: ["Greater Noida", "Pari Chowk", "Delta 1", "Jaypee Greens", "Knowledge Park", "Noida", "Sector 18 Noida", "Delhi NCR"],
});
