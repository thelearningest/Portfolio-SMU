export interface Project {
  id: number;
  title: string;
  category: string;
  type: 'Content' | 'Coding Project' | 'Community';
  description: string;
  fullDescription: string;
  challenge: string;
  role: string;
  year: string;
  techStack: string[];
  liveUrl?: string;
  image: string;
  gallery: string[];
  className: string;
  imageConfig?: {
    fit?: 'cover' | 'contain';
    position?: string;
    scale?: number;
    overlayStrength?: 'light' | 'normal' | 'strong';
  };
}

const litmatchPlaceholder =
  "data:image/svg+xml,%3Csvg width='1200' height='900' viewBox='0 0 1200 900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1200' height='900' fill='%23100B12'/%3E%3Crect x='70' y='70' width='1060' height='760' rx='44' fill='%231A101D' stroke='%23F6D365' stroke-opacity='.18'/%3E%3Ccircle cx='930' cy='180' r='210' fill='%23F97316' fill-opacity='.14'/%3E%3Ccircle cx='250' cy='690' r='260' fill='%23E11D48' fill-opacity='.16'/%3E%3Crect x='380' y='170' width='360' height='520' rx='32' fill='%23FFF7ED' transform='rotate(-8 380 170)'/%3E%3Crect x='455' y='145' width='360' height='520' rx='32' fill='%23FDE68A' transform='rotate(8 455 145)'/%3E%3Crect x='450' y='190' width='300' height='430' rx='28' fill='%23100B12'/%3E%3Cpath d='M510 485C576 425 624 425 690 485' stroke='%23FDE68A' stroke-width='20' stroke-linecap='round'/%3E%3Cpath d='M520 300C520 277 539 258 562 258H638C661 258 680 277 680 300V405C680 428 661 447 638 447H562C539 447 520 428 520 405V300Z' stroke='%23FFF7ED' stroke-width='18'/%3E%3Cpath d='M594 339H606' stroke='%23FFF7ED' stroke-width='18' stroke-linecap='round'/%3E%3Cpath d='M348 298L314 264L280 298C247 331 302 393 314 404C326 393 381 331 348 298Z' fill='%23FB7185'/%3E%3Cpath d='M903 576L864 537L825 576C787 614 851 686 864 699C877 686 941 614 903 576Z' fill='%23FDE68A'/%3E%3Ctext x='600' y='770' fill='%23FFF7ED' font-family='Arial, sans-serif' font-size='64' font-weight='700' text-anchor='middle'%3ELitmatch%3C/text%3E%3Ctext x='600' y='816' fill='%23FDE68A' font-family='Arial, sans-serif' font-size='24' font-weight='700' letter-spacing='8' text-anchor='middle'%3EPLACEHOLDER IMAGE%3C/text%3E%3C/svg%3E";

export const projects: Project[] = [
  {
    id: 1,
    title: 'ChronicAI',
    category: 'Full-stack app prototype',
    type: 'Coding Project',
    description: 'Context-aware patient record and care management platform for doctors and chronic disease patients.',
    fullDescription: 'ChronicAI is a comprehensive healthcare dashboard designed to bridge the gap between clinical data and patient care. Developed as an entry for a Kaggle Competition, it focuses on context-aware AI to synthesize patient history and provide actionable insights for chronic disease management.',
    challenge: "Vietnam faces a rapidly growing burden of chronic diseases, including cardiovascular disease, diabetes, and chronic respiratory conditions, which account for approximately 77% of all deaths nationwide.\n\nChronic diseases require continuous monitoring, repeated diagnostics, medication adjustments, and regular follow-ups. Yet Vietnam’s healthcare system struggles with fragmented medical data infrastructure, where patient information is scattered across disconnected sources such as hospital systems, laboratory reports, PDF documents, etc.\n\nClinicians thus lack a complete, longitudinal view of a patient’s medical history at the point of care, leading to overlooked contextual details, missed early signs of disease progression, and wasted consultation time on manual record reviews rather than treatment decisions.\n\nThis fragmentation contributes to poor disease control: for instance, only 38% of hypertensive patients and 28% of diabetics achieve target blood pressure or glycemic levels, heightening risks of complications and long-term costs. Delayed interventions, redundant testing, and inefficient follow-ups further burden providers and patients.\n\nAt its core, the issue is not a lack of data but the absence of contextual continuity. An integrated system to centralize and structure patient records into a coherent longitudinal narrative is essential for efficient, proactive chronic care.",
    role: 'Product Owner & Software Engineer',
    year: '2024',
    techStack: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'Radix UI', 'FastAPI', 'LangGraph', 'SSE', 'PostgreSQL', 'pgvector', 'Supabase', 'RAG'],
    liveUrl: 'https://www.kaggle.com/competitions/med-gemma-impact-challenge/writeups/chronicai-context-aware-patient-records-and-care', // Example link
    image: '/assets/projects/ChronicAI.png',
    gallery: [
      '/assets/projects/ChronicAI - Patient chat.png',
      '/assets/projects/ChronicAI-Doctor chat.png',
      '/assets/projects/ChronicAI-Booking.png',
      '/assets/projects/ChronicAI-1 (2).png',
      '/assets/projects/highlevel_chronic.png',
    ],
    className: 'md:col-span-2 md:row-span-2',
    imageConfig: {
      fit: 'cover',
      position: 'left',
      scale: 1
    }
  },
  {
    id: 2,
    title: 'SafeFormAI',
    category: 'Web App',
    type: 'Coding Project',
    description: 'An AI personal trainer that can provide feedback on your workout form.',
    fullDescription: 'SafeFormAI is a webapp that utilize vision capability of Gemini to analyze user workout form and provide visual feedback, with detailed timestamp of where you did wrong, and specific steps to improve.',
    challenge: "I’ve noticed that many people prefer working out at home—maybe because they’re too busy to go to the gym, gym memberships are expensive, or simply because the gym music is terrible.\n\n Training at home is private and convenient, but the downside is that no one corrects your form.\n\n I once had to stop training for nearly a year and a half due to a back injury. There were many reasons for it, and one of them was consistently using improper form over a long period of time.\n\nYou’re afraid of training with bad form, but you don’t have the time or money to hire a personal trainer.\n\nThat pain point is why I built SafeFormAI.",
    role: 'Frontend Developer, Product Owner',
    year: '2025',
    techStack: ['Reactjs', 'typescript', 'FastAPI', 'Vercel', 'CloudfareR2', 'Gemini API'],
    liveUrl: 'https://www.facebook.com/reel/26177407271877746',
    image: '/assets/projects/SafeFormAI.png',
    gallery: [
      '/assets/projects/SafeFormAI.png',
      '/assets/projects/exerciseselction.png',
      '/assets/projects/app.png',
      '/assets/projects/project_architecture.png',
    ],
    className: 'md:col-span-1 md:row-span-2',
    imageConfig: {
      fit: 'cover',
      position: '80% 70%',
      scale: 1
    }
  },
  {
    id: 8,
    title: 'Litmatch',
    category: 'Hackathon Winner',
    type: 'Coding Project',
    description: 'Tinder for book characters, awarded third prize at the first Codex Community Hackathon in Vietnam.',
    fullDescription: 'a gamified Vietnamese literature learning app that lets students discover literary characters through swipe cards, chat with them using source grounded AI, complete character challenges, and compete on a leaderboard. I was the one who came up with the idea, designed the product, and built the frontend of the app.',
    challenge: 'The challenge was to turn a familiar swipe-based interaction into something literary, funny, and immediately understandable. We needed the product to feel like a real app while still keeping the concept focused: helping people discover characters through personality, taste, and narrative tension instead of ordinary dating profiles.',
    role: 'Product Designer & Frontend Developer',
    year: '2026',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Codex'],
    liveUrl: 'https://github.com/longle325/LitMatch',
    image: '/assets/projects/Litmatch3.png',
    gallery: [
      '/assets/projects/Litmatch1.png',
      '/assets/projects/Litmatch2.png',
      '/assets/projects/Litmatch3.png',
      '/assets/projects/Litmatch4.png',
      '/assets/projects/Litmatch5.png',
      '/assets/projects/Litmatch6.JPG',
      '/assets/projects/Litmatch7.png',

    ],
    className: 'md:col-span-2 md:row-span-2',
    imageConfig: {
      fit: 'cover',
      position: 'center',
      overlayStrength: 'normal',
    }
  },
  {
    id: 3,
    title: 'A comprehensive guide to Large Language Models for non-technical people',
    category: 'Highly-researched content',
    type: 'Content',
    description: 'All you need to know about how Large Language Models work.',
    fullDescription: 'I write this post to educate vietnamese on the fundamentals of Large Language Model, including its definition, the training process, and how to apply it in our own life. Up until now, it is the most-viewed video in Vietnamese (300k+ views) on this topic.',
    challenge: 'Large Language Models was still a new concept for Vietnamese people, and there were not many resources available to help them understand it. People still called them "AI" in a generic way. So I decided to write a comprehensive guide to Large Language Models for non-technical people, with intuitive examples and highly-researched content explained in a simple way.',
    role: 'Content Writer',
    year: '2025',
    techStack: ['Nothing besides Notion, my brain, Google, and Youtube'],
    liveUrl: 'https://www.youtube.com/watch?v=ZRpgQ1vLWhI&t=245s',
    image: '/assets/projects/LLMthumb.png',
    gallery: [
      '/assets/projects/LLM.png',
      '/assets/projects/LLM2.png',
      '/assets/projects/LLM3.png',
    ],
    className: 'md:col-span-2 md:row-span-1',
    imageConfig: {
      fit: 'cover',
      position: 'center',
      overlayStrength: 'strong',
    }
  },
  {
    id: 4,
    title: 'Study with Triet',
    category: 'Web app',
    type: 'Coding Project',
    description: 'An aesthetic pomodoro website',
    fullDescription: 'Study with Triet is a pomodoro website designed with Users in mind. Users can listen to music, upload their own images, customize their focus time on the web. The app got a total of 4000 visits.',
    challenge: 'This is my first web app, and I wanted to create something that I would find useful.',
    role: 'I did it all',
    year: '2025',
    techStack: ['Vite', 'Typescript', 'React', 'Shadcn-ui', 'Tailwind CSS'],
    liveUrl: 'https://trietpomodoro.com/',
    image: '/assets/projects/StudyWithTriet.png',
    gallery: [
      '/assets/projects/StudyWithTriet.png',
      '/assets/projects/Learningresources.png',
      '/assets/projects/Lightmode.png',
      '/assets/projects/analytics.png',
      '/assets/projects/setting.png',
    ],
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 6,
    title: 'Vietnamese Voice Forge',
    category: 'Entry to NLP',
    type: 'Coding Project',
    description: 'Training model for Vietnamese style paraphrasing',
    fullDescription: 'This project, which I collaborated with my friends, focuses on Vietnamese style paraphrasing as an entry point into natural language processing (NLP). Specifically, we executed two tasks: paraphrasing modern Vietnamese sentences to ancient style (cổ trang) Vietnamese sentences, and paraphrasing modern Vietnamese sentences to Quang Binh Dialect.',
    challenge: 'The primary bottleneck was the lack of quality training data, and our limited knowledge of NLP at the time. We had to spend a lot of time researching and learning about NLP, and we also had to spend a lot of time collecting and cleaning data.',
    role: 'Data Engineer',
    year: '2024-2025',
    techStack: ['Langchain', 'Hugging Face', 'Deepseek API', 'Python', 'VastAI'],
    liveUrl: 'https://github.com/DiligentPenguinn/vietnamese-voice-forge',
    image: '/assets/projects/NLP.png',
    gallery: [
      '/assets/projects/NLP.png',
      '/assets/projects/NLP2.png',
      '/assets/projects/NLP3.png',
      '/assets/projects/dataset.png',
    ],
    className: 'md:col-span-1 md:row-span-1',
    imageConfig: {
      position: 'center bottom',
    }
  },
  {
    id: 7,
    title: 'XG-boost house-price predictor',
    category: 'ML project',
    type: 'Coding Project',
    description: 'end-to-end ML project on house-price prediction, VietAI final project',
    fullDescription: `This project aims to predict **house prices in Vietnam** using machine learning models, trained on a real estate dataset scraped from **batdongsan.com** and shared via **Kaggle**. The task is formulated as a **regression problem**.

**Dataset Overview**: Contains over [h]30,000 samples[/h] with features such as Area, Number of Floors, Bedrooms, Bathrooms, Frontage, Road Width, and Legal Status.

Some features have high missing rates (e.g., Balcony Direction: **82%**). Those with [h]> 50% missing[/h] were removed.

**Key preprocessing steps**:
- **Log transformation** for skewed numerical features (Area, Frontage, Access Road).
- Added **binary indicators** for missing values (e.g., Frontage_missing).
- Created new feature: **bathrooms_per_bedroom**.
- Applied **standard scaling** for numerical data and **one-hot encoding** for categorical ones.`,
    challenge: `The primary bottleneck was the **high rate of missing data** and **extreme skewness** in real estate pricing. I had to implement robust feature engineering and **XGBoost** parameter tuning to achieve reliable predictive accuracy. I was proud of the fact that I got 2nd place in the class.`,
    role: 'I did it all',
    year: '2025',
    techStack: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    image: '/assets/projects/HP.png',
    gallery: [
      '/assets/projects/HP.png',
      '/assets/projects/XGboost.png',
    ],
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    title: 'Facilitator for AI and DeepLearning meetup Danang',
    category: 'Community Initiative',
    type: 'Community',
    description: 'I was nominated to become the facilitator of this Meetup for 6 months',
    fullDescription: 'I curated weekly news on AI for coding, productivity, education and shared it with the groups. I also organized co-working events where we will work on our own projects, share our progress, and help each other out.',
    challenge: 'It was hard to lead the entire discussion in English, my second language, and on a topic that I am still learning. There are a lot of builders and technical people in the meetup, so that 2x the pressure. But I did it anyway, and glad that people actually praise me for my hosting ability.',
    role: 'facilitator',
    year: '2025 - 2026',
    techStack: ['Project Management', 'Event Planning', 'Public Speaking',],
    image: '/assets/projects/MeetUp.jpg',
    gallery: [
      '/assets/projects/MeetUp.jpg',
      '/assets/projects/feedback.png',
      '/assets/projects/MeetUp2.jpg',
      '/assets/projects/MeetUp3.jpg',
      '/assets/projects/MeetUp4.jpg',
      '/assets/projects/MeetUp5.jpg',
      '/assets/projects/Meetup6.png',
      '/assets/projects/Meetup7.png',
      '/assets/projects/Meetup8.png',
    ],
    className: 'md:col-span-1 md:row-span-1',
  }
];
