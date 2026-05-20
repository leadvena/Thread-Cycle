import { Product, Testimonial, TeamMember, FAQItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: "Levi's 501 Classic Denim Jeans",
    category: 'Bottoms',
    condition: 'Like New',
    price: 35,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600',
    size: 'W32 / L30',
    brand: "Levi's",
    description: 'The absolute holy grail of vintage denim. Straight-leg cut, sturdy 100% cotton denim, and that beautiful broken-in blue that only fifty years of existence can master. Found in a sleepy estate sale in Northcote.'
  },
  {
    id: 'prod-2',
    name: 'Vintage Emerald Silk Blouse',
    category: 'Tops',
    condition: 'Excellent',
    price: 28,
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=600',
    size: 'M',
    brand: 'Calvin Klein (Retro Line)',
    description: 'Feels like absolute butter on the skin. Features a gorgeous high-collared neckline and delicate pearlescent buttons. Perfect for sipping lattes in a Fitzroy alleyway while pretending to read philosophy.'
  },
  {
    id: 'prod-3',
    name: 'Retro Mustard Canvas Tote',
    category: 'Bags',
    condition: 'Good',
    price: 18,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    size: 'One Size',
    brand: 'Handmade Local',
    description: 'Spacious, reliable, and stained with the spiritual essence of vintage paperbacks. Perfect size for your vinyl record hauls or a bunch of organic carrots from the Rose Street Artists Market.'
  },
  {
    id: 'prod-4',
    name: '90s Oversized Bomber Jacket',
    category: 'Outerwear',
    condition: 'Excellent',
    price: 65,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600',
    size: 'L',
    brand: 'Retro Athletics',
    description: 'Slightly faded canvas body with classic ribbed trim. The kind of jacket that makes you look like you own an analogue synthesizer and know how to use it. Extremely cozy for Melbourne winter mornings.'
  },
  {
    id: 'prod-5',
    name: 'Enamel Pin Set: Pop Culture Wonders',
    category: 'Accessories',
    condition: 'Like New',
    price: 12,
    image: 'https://images.unsplash.com/photo-1590548784585-643d2b9f292c?auto=format&fit=crop&q=80&w=600',
    size: 'Minis',
    brand: 'Melbourne Collective',
    description: 'Four tiny vintage badges of honor. Pins include a miniature cassette tape, an abstract 80s face, a cheeky typewriter, and a "Reuse or Die" smiley. Spice up your denim lapel instantly.'
  },
  {
    id: 'prod-6',
    name: 'Oversized Plaid Flannel Shirt',
    category: 'Tops',
    condition: 'Good',
    price: 22,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=600',
    size: 'XL',
    brand: 'Woolrich Vintage',
    description: 'Super thick, super soft. Ideal for layering over a graphic tee next time you catch a gig at the Tote. Features twin chest pockets and heavy-duty buttons.'
  },
  {
    id: 'prod-7',
    name: 'Seventies High-Waisted Corduroy Skirt',
    category: 'Bottoms',
    condition: 'Excellent',
    price: 32,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
    size: 'S',
    brand: 'Country Road Vintage',
    description: 'A gorgeous rust-colored heavy cord. Features a button-down front with real brass hardware. Looks spectacular paired with knee-high boots and a healthy appreciation for classic rock.'
  },
  {
    id: 'prod-8',
    name: 'Classic Leather Trench Coat',
    category: 'Outerwear',
    condition: 'Good',
    price: 89,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600',
    size: 'M',
    brand: 'Italian Imports (Classic)',
    description: 'Genuinely soft, beautifully aged espresso-brown leather. Gives instant detective-who-is-actually-just-looking-for-pastries-in-Carlton energy. Heavyweight and guaranteed to last another century.'
  },
  {
    id: 'prod-9',
    name: 'Vintage Merino Wool Knit Sweater',
    category: 'Tops',
    condition: 'Like New',
    price: 48,
    image: 'https://images.unsplash.com/photo-1574164904299-3a102b110380?auto=format&fit=crop&q=80&w=600',
    size: 'M',
    brand: 'Ansett Australia retro',
    description: 'Knitted right here in Melbourne back in the 80s. Gorgeous abstract geometric pattern featuring cream, sage, and terracotta. In absolutely flawless condition, zero pilling.'
  },
  {
    id: 'prod-10',
    name: 'Embroidered Retro Sling Bag',
    category: 'Bags',
    condition: 'Fair',
    price: 24,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600',
    size: 'Medium',
    brand: 'Artisanal',
    description: 'Features lovely hand-stitched floral emblems on distressed tan leather. There is a small ink stain on the interior lining (adds character, trust us) but all zippers and buckles are 100% sturdy.'
  },
  {
    id: 'prod-11',
    name: 'Tortoiseshell Retro Sunglasses',
    category: 'Accessories',
    condition: 'Excellent',
    price: 15,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600',
    size: 'Standard',
    brand: 'Vintage Optics',
    description: 'Thick oval frames with deep dark lenses. Perfect for hiding your morning eyes after staying up late at a Fitzroy warehouse show. Provides 100% UV protection and 200% mystery vibes.'
  },
  {
    id: 'prod-12',
    name: 'Heavyweight Utility Cargo Pants',
    category: 'Bottoms',
    condition: 'Like New',
    price: 42,
    image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&q=80&w=600',
    size: 'W34 / L32',
    brand: 'Carhartt (Retro Line)',
    description: 'Ultra-tough duck canvas, triple-stitched seams, and pockets deep enough to store a whole sandwich. Bought by someone who worked in an office and never once saw a hammer. Their loss, your gain.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mia R.',
    location: 'Fitzroy',
    stars: 5,
    quote: "I found the most perfect 70s corduroy jacket here. My whole wardrobe is ThreadCycle now. Genuinely wonderful customer service in their Smith St boutique!"
  },
  {
    id: 'test-2',
    name: 'Jake T.',
    location: 'Brunswick',
    stars: 5,
    quote: "Best thrift shop in Melbourne, hands down. Absolute bangers get added every week. Staff actually know vintage garments and describe the fits honestly instead of hyping them."
  },
  {
    id: 'test-3',
    name: 'Priya S.',
    location: 'Collingwood',
    stars: 5,
    quote: "Affordable, sustainable, and honestly? Way more fun than regular high-street shopping. Plus, their no-plastic packaging and community swap days are absolute gold."
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Clara Jenkins',
    role: 'Co-Founder & Head Curator',
    bio: 'Clara spends 70% of her waking hours rummaging through dusty trunks, estate sales, and country town op shops across Victoria. Rumored to be able to detect genuine vintage silk through touch alone.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-2',
    name: 'Marcus Vance',
    role: 'Co-Founder & Operations Guy',
    bio: 'The engine that runs the ship. Marcus makes sure the web drops are slick, the espresso machine in-store is always humming, and the vinyl playlist on Saturdays keeps the bargain-hunters motivated.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'team-3',
    name: 'Ziggy the Shop Hound',
    role: 'Chief Greeter & Nap Expert',
    bio: 'A sweet rescue greyhound who lives for head scratches, sunny patches on the shop floor, and ensuring that no stray threads go un-sniffed. Will work for dried liver treats.',
    image: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&q=80&w=400'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you source your inventory?',
    answer: 'Every single piece is hand-curated by Clara and Marcus. We source from estate sales, country-town charity shops, local garage sales, and community trade-ins. No industrial bulk rags here — just genuine gems chosen with care.'
  },
  {
    id: 'faq-2',
    question: 'Can I sell my clothes to ThreadCycle?',
    answer: 'Absolutely! Our "Sell Your Threads" program runs every Saturday morning from 9am to 12pm. Bring in clean, gently-loved vintage or unique contemporary pieces (no fast fashion, please). We offer either 35% in direct cash transfer or 50% in-store credit.'
  },
  {
    id: 'faq-3',
    question: 'What is your return policy?',
    answer: "Because we deal in unique, one-off vintage pieces, all sales are final. However, we provide detailed measurements, material details, and honest condition reports on every listing. If something arrives far off from our description, we'll absolutely make it right."
  },
  {
    id: 'faq-4',
    question: 'Do you ship outside of Melbourne or internationally?',
    answer: 'Yes! We ship Australia-wide with fully compostable mailers for a flat rate of $10 (free for orders over $100). International postage to NZ, US, UK, and Europe can be calculated at the checkout.'
  }
];
