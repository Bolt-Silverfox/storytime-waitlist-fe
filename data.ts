const privacyPolicyData: {
  heading: string;
  paragraph: string;
  index: string;
}[] = [
  {
    heading: "Information We Collect",
    paragraph:
      "We collect only the information needed to improve your child’s experience in StoryTime. We do not collect personal data from children without parental consent. Information collected may include reading progress, app usage, and interaction patterns.",
    index: "I",
  },
  {
    heading: "How We Use the Information",
    paragraph:
      "We use the collected information to personalize reading content, track achievements, remember story preferences, and make the app more engaging and educational for children.",
    index: "II",
  },
  {
    heading: "How We Protect Your Data",
    paragraph:
      "We use secure storage systems, encrypted data handling, and safe parental login features. We do not use third-party trackers that collect personal information from children.",
    index: "III",
  },
  {
    heading: "Parents' Rights",
    paragraph:
      "Parents can request to view, update, or delete any information stored about their child at any time. We comply with children safety laws including COPPA and general data protection standards.",
    index: "IV",
  },
  {
    heading: "Third-Party Services",
    paragraph:
      "If we use external services such as Firebase or analytics tools, they may only access non-personal usage data. They cannot collect names, photos, addresses, or personal details of any child.",
    index: "V",
  },
  {
    heading: "Updates to This Policy",
    paragraph:
      "We may update this policy occasionally. Parents will be notified of important changes through the app or email.",
    index: "VI",
  },
  {
    heading: "Contact US",
    paragraph: "mail: team@storytimeapp.me",
    index: "VII",
  },
];

const howItWorksData = [
  {
    src: "./how-it-works/choose-a-story.png",
    title: "Choose a Story",
    description: "Browse bedtime tales, fairy tales, and fun adventures.",
  },
  {
    src: "./how-it-works/pick-how-it-works.png",
    title: "Pick How to Read",
    description:
      "Read yourself, let the app narrate, or explore interactively.",
  },
  {
    src: "./how-it-works/enjoy-the-magic.png",
    title: "Enjoy the Magic",
    description: "Kids learn, imagine, and have fun.",
  },
];

const resourcesData: {
  title: string;
  imageSrc: string;
  id: number;
  description: string[];
}[] = [
  {
    title: "Why Kids Learn Better Through Stories",
    imageSrc: "./resources/dummy-img1.png",
    id: 1,
    description: [
      "Stories are one of the easiest ways to help children learn without pressure. When kids listen to or read stories, they naturally pick up new words, understand emotions, and build problem-solving skills. This makes story time a powerful tool for early learning. With today’s busy schedules, a kids story app like Story Time for Kids makes storytelling easier to keep consistent. .",
      "Children get daily access to fun, simple, educational stories crafted just for their age. This boosts comprehension naturally without making learning feel like “school.”Stories also help kids make sense of the world. Characters face challenges, make decisions, and learn lessons, and children follow along, building emotional intelligence along the way.If you want a simple way to support your child’s growth, storytelling is the perfect start and Story Time for Kids brings that magic right into your home.",
    ],
  },
  {
    title: "Bedtime Stories: The Secret to Calmer Nights",
    imageSrc: "./resources/dummy-img2.png",
    id: 2,
    description: [
      "Every parent knows that bedtime can either be peaceful… or a battle. Bedtime stories help kids wind down, relax, and transition smoothly into sleep. The rhythm of storytelling signals the brain that it’s time to rest.The Story Time for Kids app offers a calming collection of bedtime stories designed to settle your child’s mind. Soft language, gentle pacing, and warm themes create the perfect wind-down routine after a busy day.",
      "Bedtime stories also strengthen parent-child bonding. Even if you are tired, a simple 3-minute story brings closeness and calm to end the day. If you struggle with bedtime, adding a bedtime story as a nightly ritual can make the entire evening smoother for both you and your child.",
    ],
  },
  {
    title: "How Interactive Stories Boost Imagination",
    imageSrc: "./resources/dummy-img3.png",
    id: 3,
    description: [
      "Interactive stories aren’t just fun, they make kids think. When children choose what happens next in a story, they practice creativity, decision-making, and critical thinking in a natural way. In the Story Time for Kids interactive mode, children tap through choices that shape each adventure. Should the hero take the hidden path? Should they climb the tree or help a friend? Each choice leads to a new outcome.",
      "These simple decisions build confidence. Kids see that their choices matter, and that they have the power to shape stories just like they shape their world. Interactive storytelling is a playful way to raise imaginative, curious, confident children.",
    ],
  },
  {
    title: "Healthy Screen Time Starts With Stories, Not Cartoons",
    imageSrc: "./resources/dummy-img4.png",
    id: 4,
    description: [
      "Most parents worry about screen time and for good reason. Fast-paced videos can overstimulate kids, shorten attention spans, and leave them wanting “more more more.”A children’s storytelling app creates the opposite effect. Story Time for Kids encourages slower thinking, deeper focus, and imagination, giving you healthy screen time that feels purposeful rather than passive.",
      "Instead of bright, overwhelming videos, your child gets calm stories, gentle visuals, and meaningful moments shaped around reading and creativity. If you are seeking a healthier digital habit, swapping cartoons for storytelling is one of the best choices you can make.",
    ],
  },
  {
    title: "Why Personalized Stories Make Reading Easier for Kids",
    imageSrc: "./resources/dummy-img5.png",
    id: 5,
    description: [
      "Every child is different so their stories should be too. Personalized stories match a child’s interests, reading level, and imagination, making reading instantly more enjoyable.The Story Time for Kids app uses AI to generate stories based on what your child loves (animals, space, princesses, superheroes, adventures, or bedtime tales). ",
      "This makes reading feel exciting rather than forced.When kids see themselves in the story, reading becomes a daily habit. They are more curious, more focused, and more motivated to finish a story.Personalized storytelling removes pressure and brings joy back to reading.",
    ],
  },
  {
    title: "5 Benefits of Reading Aloud With Your Child",
    imageSrc: "./resources/dummy-img6.png",
    id: 6,
    description: [
      "Reading aloud is simple but powerful. It strengthens your child’s vocabulary, listening skills, and imagination, all without any complicated teaching. 1. Using a kids story app like Story Time for Kids makes reading aloud even easier. 2. You can read together, or switch to audio mode when your voice needs a break. 3. Reading aloud also helps children develop empathy. 4. When they hear how characters feel, they begin to understand emotions and relationships in real life. 5. Just 5 minutes of reading aloud a day makes a big difference and creates memories your child will cherish.",
    ],
  },
  {
    title: "The Power of Safe Digital Storytelling",
    imageSrc: "./resources/dummy-img7.png",
    id: 7,
    description: [
      "Online content can be overwhelming for parents. Ads, pop-ups, and random videos make it hard to control what children see. That’s why safe digital storytelling matters.Story Time for Kids is a 100% ad-free storytelling app, built with safety in mind. Children explore stories not the internet. No distractions, no scary surprises.",
      "Safe storytelling helps parents relax knowing their child is learning, not just watching. Everything on the app is age-appropriate, gentle, and built to support healthy development.Safe content + storytelling = the perfect digital balance for modern families.",
    ],
  },
  {
    title: "Building Your Child’s Vocabulary Through Stories",
    imageSrc: "./resources/dummy-img8.png",
    id: 8,
    description: [
      "Kids learn new words faster through stories than through memorization. When they hear words in a fun, meaningful context, they naturally understand and remember them.The Story Time for Kids library includes stories with rich vocabulary presented in simple, child-friendly ways. ",
      "Words are repeated across stories and used in playful contexts that help kids connect meaning to meaning.This builds strong early language skills, which are crucial for school success especially reading and writing.Vocabulary grows naturally when kids enjoy the stories they read.",

    ],
  },
  {
    title: "Why Story Time Should Be Part of Every Day",
    imageSrc: "./resources/dummy-img9.png",
    id: 9,
    description: [
      "Daily storytelling creates consistency and comfort for children. It also improves reading skills, emotional processing, and imagination over time. With Story Time for Kids, daily storytelling becomes easy. Stories are quick, fun, and available anytime during breakfast, car rides, nap time, or bedtime.",
      "Daily stories also help kids build a routine they look forward to. It becomes their cozy moment: a break from noise, screens, and overstimulation.Small habits shape big minds and story time is one of the best habits to build.",
    ],
  },
  {
    title: "Raising Confident Kids Through Stories",
    imageSrc: "./resources/dummy-img10.png",
    id: 10,
    description: [
      "Stories help children see themselves as brave, smart, kind, and capable. When kids hear about heroes who overcome challenges, they learn they can too.The interactive stories in Story Time for Kids allow children to make choices that build confidence. Each decision, each outcome, and each little success strengthens their self-belief.",
      "Confidence isn’t taught, it’s experienced. Stories are one of the simplest ways to give children those experiences.A confident child reads, explores, imagines, and grows. And stories are the perfect place to begin.",
    ],
  },
];

const featureTitles = [
  "Voice options",
  "Personalized profiles",
  "Read story along AI",
  "Passive mode",
  "Complete daily challenge",
  "Interactive mode",
];

type Features = {
  title: string;
  description: string;
  imageUrl: string;
};
const featuresData = [
  {
    title: "Voice options",
    description: "Calming expressive voices tailored to their story",
    imageUrl: "/squeeze/features/voice-options.png",
  },
  {
    title: "Personalized Profiles",
    description: "Create multiple kids profiles and personalize them.",
    imageUrl: "/squeeze/features/personalized-features.png",
  },
  {
    title: "Read story along with AI",
    description: "Read story along with AI, get quick insight into words.",
    imageUrl: "/squeeze/features/read-along-with-ai.png",
  },
  {
    title: "Passive Mode",
    description: "Select between interactive and passive listening",
    imageUrl: "/squeeze/features/passive-mode.png",
  },
  {
    title: "Complete Daily Challenge",
    description: "Complete daily challenges and see how much you have learnt.",
    imageUrl: "/squeeze/features/daily-challenge.png",
  },
  {
    title: "Interactive mode",
    description: "Select between interactive and passive listening",
    imageUrl: "/squeeze/features/interactive-mode.png",
  },
];

export type { Features };
export {
  privacyPolicyData,
  howItWorksData,
  resourcesData,
  featuresData,
  featureTitles,
};
