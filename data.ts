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
    paragraph: "mail: support@storytimekids.com",
    index: "VII",
  },
];

const termsAndConditionsData: {
  heading: string;
  paragraph: string | string[];
  index: string;
}[] = [
  {
    heading: "Introduction and Acceptance",
    paragraph:
      'This document ("Terms") constitutes a legally binding agreement between you (the "User," "Parent," or "Guardian") and StoryTime4Kids ("Company," "We," or "Us") regarding your access and use of our digital library and app service (the "Service"). By accessing, using, or subscribing to the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.',
    index: "I",
  },
  {
    heading: "The Service & Age Restrictions",
    paragraph:
      "StoryTime4Kids provides access to a curated digital library of audio and video Content designed to enhance children's literacy and imagination. The Service is intended for use by adults for children under 18. Users must be 18 years of age or older to create an account, make payments, and agree to these Terms.",
    index: "II",
  },
  {
    heading: "Subscription, Payments, and Free Trials",
    index: "III",
    paragraph: [
      "Subscription: We offer various subscription models (e.g., Monthly, Annual, Family Legacy).",
      "Automatic Renewal: All paid subscriptions automatically renew at the then-current rate unless you cancel the subscription prior to the end of the current billing period.",
      "Free Trial: We may offer a Free Trial (e.g., 7 or 14 days). CRITICAL NOTICE: Your payment method will be charged automatically immediately following the end of your free trial period unless you cancel before the trial expires.",
    ],
  },
  {
    heading: "Intellectual Property (IP)",
    paragraph:
      "All content, including stories, narration, illustrations, trademarks, and software, is the property of StoryTime4Kids or its licensors and is protected by copyright and intellectual property laws. Content is licensed to you for personal, non-commercial use only. You may not copy, modify, transmit, or publicly display any Content without express written permission.",
    index: "IV",
  },
  {
    heading: "User Conduct & Security",
    paragraph:
      "You are responsible for safeguarding your account login information and for all activity under your account. You agree not to use the Service for any unlawful purpose, including sharing your account credentials with non-subscribers beyond the limits of your plan.",
    index: "V",
  },
  {
    heading: "Termination",
    paragraph:
      "We reserve the right to immediately terminate or suspend your access to the Service, without prior notice or liability, if you breach any part of these Terms, including but not limited to non-payment or unauthorized sharing of Content.",
    index: "VI",
  },
  {
    heading: "Governing Law and Disputes",
    paragraph:
      "These Terms shall be governed by the laws of [Your Jurisdiction, e.g., the State of California], without regard to its conflict of law provisions. Any disputes must first be attempted to be resolved through good faith negotiation or binding arbitration as set forth in the full policy document.",
    index: "VII",
  },
];

const howItWorksData = [
  {
    name: "children",
    description:
      "From learning new words to calming bedtime moments, Storytime makes it easy for your child to enjoy safe, delightful stories designed to spark imagination and help them grow.",
    images: [
      {
        src: "./how-it-works/choose-a-story.png",
        title: "Choose a Story",
        description: "Browse bedtime tales, fairy tales, and fun adventures",
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
    ],
  },
  {
    name: "parents",
    description:
      "From learning new words to calming bedtime moments, Storytime makes it easy for your child to enjoy safe, delightful stories designed to spark imagination and help them grow.",
    images: [
      {
        src: "./how-it-works/signup-login.png",
        title: "Sign-up login",
        description: "Access the app",
      },
      {
        src: "./how-it-works/manage-experience.png",
        title: "Manage experience",
        description: "Recommend stories, trackprogress, set control.",
      },
      {
        src: "./how-it-works/monitor-progress.png",
        title: "Monitor progress",
        description: "Monitor their daily challenges check reports.",
      },
    ],
  },
];

const resourcesData: {
  title: string;
  imageSrc: string;
  id: number;
  description: string[];
}[] = [
  {
    title: "The real reasons my kids are asking to turn off YouTube now.",
    imageSrc: "./resources/dummy-image.png",
    id: 1,
    description: [
      "You know that time when you see that your kid has been watching YouTube for two hours and you do not even know what they have seen? Yeah, I was there last month. My daughter Emma knows all the lines of some unboxing YouTube show of some random toys, yet cannot recall what we were talking about at dinner. That is when I realized that something needed to be different.",
      "It was not the screen time per se - and we can be honest, we are not in 1985, where we have children playing outside till it goes dark. The thing was that she was simply lapping up. She was not thinking or making decisions; she was just eating whatever the algorithm offered her next. I began to seek something other than that. Anything that she would have to think about, you know? That is when I discovered interactive stories and I tell you it completely changed everything in our house.",
      "And this is the crazy part; now Emma demands to make her own story and not watch videos. She selects her character, decides the further development of the story, and becomes genuinely enthusiastic when her choices turn the story. Last week, she had her character decide to rescue a lost dragon, rather than to run away and she was so proud of herself. She kept saying, 'I picked that! I helped him!' It is a similar number of screen time, only she is occupied. She's thinking and she's making choices now.",
      "The best part is that I installed some parental controls which automatically block her time so it is not I who is telling her, 'Okay, stop.' The app just says story time is over for today and the story time is completed, and she is okay with it. She doesn’t throw tantrums, and there are no negotiations. As a parent, when you get tired of the feeling of being guilty about screen time, you can find something to be interactive. Your kids might surprise you by actually preferring it.",
    ],
  },
  {
    title: "The bedtime routine that works (Finally).",
    imageSrc: "./resources/dummy-image.png",
    id: 2,
    description: [
      "I am going to simply tell you that bedtime was a nightmare in our house. Each and every night was a fight. 'One more story! Five more minutes! I'm not tired!' My son would pull it an hour, and at the close of it, I was more fatigued than himself. I did everything, I used reward charts, went to bed earlier and completely eliminated sugar. Nothing worked. After that, my sister said that she had been trying AI storytelling apps with her children, and I thought, why not.",
      "This is what was different: where at least in my time we used to read the same three books on rotation (actually it was all we ever did), but this time around, my son gets to choose a new adventure each night. He decides what kind of space story he would like or what kind of dinosaur story he would like, whether his character would be a brave one or a stupid one and then the app would give him something unique. On some nights he reads simultaneously on the screen, other nights he simply listens to the audio when lying down. The diversity is what keeps him coming back, and frankly, it keeps me sane as well.",
      "The actual magic occurred some two weeks later. He began to anticipate going to bed, because he would be wondering what story he would write the next time. It is time to stop stalling, it is time to stop crying. He now brushes his teeth quickly in order to get to the story time. I never imagined I could see the day but here we are. And on the evenings when I am totally exhausted, I can play him an audio book edition as I simply sit there and tune out. He is happy, I do not tear my hair, and the time spent on bed is 20 minutes, not an hour.",
      "When your sleep schedule is a nightmare, then it is time to change it to something entertaining. Children enjoy control, and when they have an opportunity to make decisions in their own tale, they are much more serious about actually settling down. On top of that, you do not have to read Goodnight Moon 847 times. Believe me, you will be glad to have been sane.",
    ],
  },
  {
    title: "What i wish someone would tell me about educational screen time.",
    imageSrc: "./resources/dummy-image.png",
    id: 3,
    description: [
      "This is what happened to me when my first kid was born. You know the one - no screens until age two, wooden toys only, we're doing Montessori at home. Three years and a second born later, my toddler is able to unlock my iPad quicker than I can. Life happens, right? But I was being gnashed at by the guilt. I felt that I was failing every time I gave the tablet so I could have some time to relax.",
      "I actually did do some research then rather than panicking. It turns out that screen time is not the devil that everyone is making it to be - it is what they are actually doing on the screen that is the problem. My children were watching some random cartoons and toy videos which taught them nothing. However, when I replaced them with educational applications, in which they were required to think and make decisions, it was the opposite. They were learning to solve problems, to develop vocabulary and to actually utilize their brains rather than to simply tune out.",
      "The contrast is between night and day. My four-year-old would simply sit and stare at the screen as a zombie. She is also active now, selecting a theme to the story, deciding what her character should do next, and even asking me some questions about the stories after the reading. She is not merely a spectator; she is involved. This time around, she is still on a screen and is learning. She is thinking critically regarding options and outcomes, which cartoons never taught her.",
      "Then this is what I would like someone to tell me: quit worrying about screen time. Instead, make it a quality screen time. Discover applications that can make your children think, decide and interact. Install parental controls such that you do not have to worry about them viewing what. And then let go of the guilt. There is nothing wrong with you being a parent who uses technology; you are only a smart parent who uses technology intelligently. The difference between learning screen time and simply letting them sit before YouTube is enormous. Determine which of these you are doing, and make changes.",
    ],
  },
  {
    title: "My kid hates reading but here's what finally worked.",
    imageSrc: "./resources/dummy-image.png",
    id: 4,
    description: [
      "My eight-year-old son has been telling me that reading is boring in the past three years. I would just take a chapter book out every night and he would groan as though I was torturing him. School reading assignments were a battle. Summer reading list? Forget it. I offered him gifts, read to him, even comic books but nothing stuck. He prefers video games, TV and frankly speaking I was beginning to be concerned that he may never start loving reading.",
      "What it eventually dawned on him is that it could be that traditional books were not exactly his thing at this point in time. He enjoys playing the games in which he has to make decisions and in which he sees various results, and I began to seek something nearby, with reading being taken into the course. And that is when we discovered the interactive storytime app during which he chooses what will happen next. Suddenly, reading wasn't something being done to him, but he was in control of. He had the choice whether his character would struggle against the monster or be his friend. He had a decision on whether to enter the mysterious cave or return to the village.",
      "The transformation was near instantaneous. He began to ask whether he could play the story game, when he was unaware of the fact that he was reading. Every decision he made meant reading out the options to know what would occur. Soon enough he was reading 20 minutes at a time without making a single complaint. Even his teacher at school was seeing the improvement of his reading comprehension since he was finally interested in the material.",
      "This is what I would recommend in case your child does not like reading: just go where they are. In case they are game lovers, discover interactive stories. And in case they love the art, then read graphic novels. Quit trying to make them love what you think that they should love and begin discovering what actually catches them. Reading does not necessarily have to appear as it was when we were kids. As soon as my boy saw that he could send stories off aimlessly by reading attentively and correcting his choice, he was caught. You just want another door to the same room.",
    ],
  },
  {
    title: "How i learned to stop being guilty of being on my phone.",
    imageSrc: "./resources/dummy-image.png",
    id: 5,
    description: [
      "The elephant in the room is how about the fact that we are all on our phones too much, especially when we are around our kids. I cannot remember the number of times I heard my daughter say, Mommy, can you turn your phone off? During the time I answer work-related emails at 6 PM. The snags of explaining to her that she is on screens too much as I stare at mine is lost on me. However, I also work at home and have a business, and my phone is a virtual office. Then what is a working mom to do now?",
      "I also understood that I had to lead by example and exercise more control over our device use, which required being more conscious of the times and manner in which we used our screens in our home. I put parental restrictions on all the tablets of the children - time restrictions, content blocks, the stuff. However, at that point I did what seemed radical to me and I established the same boundaries myself. My phone is placed in a drawer during family time (5-7 PM), without any real emergency. My children can watch their screens between 4-5 PM when I am completing my job and no more. The building was in fact less worrying to me than restricting.",
      "The game-changer was switching their screen time, where they consistently show whatever keeps them quiet, to something I actually felt good about. They do not watch random YouTube clips that they have not vetted but now they use safer and available apps that are educative. I can identify precisely what they are watching, length of stay and I know they are not getting any creepy videos creeping by. It is the best peace of mind I’ve had as a mom. I do not hover over them at all times and they are not viewing images of things that will create nightmares and cause them to pose awkward questions.",
      "When my children are at their computers now, I do not experience that biting mom-guilt. They are learning, I can see their progress, and I know that they are safe. And when I check my phone during work time, I am not a hypocrite; we all have allotted time to the screens and I am not an exception. Not only did establishing such barriers and applying parental restrictions benefit the children, it also worked the same with me. Now I feel like I am not the worst parent in the world when I would check my mail. The secret is structure and intentionality, which was made possible with the storytime for kids. It’s a family app that offers better options everywhere.",
    ],
  },
  {
    title: "The road trip miracle",
    imageSrc: "./resources/dummy-image.png",
    id: 6,
    description: [
      "Road trips with kids are either a bonding experience or a descent into madness (there is no middle ground). Last summer, we had an 8-hour drive with the family and I was afraid of it. My children are 5 and 7 years of age and their attention capacity runs out at around 15 minutes before the Are we there yet? chorus begins. I brought snacks, movies, coloring books and prayed to all the deities I could imagine.",
      "Two hours in, the iPad died. Of course it did. The charger was faulty and we were in no where land with no service. I am sitting there thinking, this is going to be the longest six hours of my life and my daughter asks me whether we can play the story game. Thank goodness I had downloaded a whole lot of interactive stories prior to us disconnecting that work offline. I gave her my phone which was already downloaded, so there was no need to get any data. She and her brother spent the following three hours in turns making story choices and listening to various adventures.",
      "This is what surprised me: they were not merely quiet, they had issues to do as they were engaged. They were debating on the choices to make, on whether the character should move to the right or left and laughing at the funny moments. My son, who tends to get carsick reading, was okay since he was allowed to listen and look at pictures when he wanted to. They read through, perhaps, half a dozen stories and when one was over they were ready to read another one. There were no fighting, no complaining, simply pure entertainment.",
      "I am informing you because you need offline materials when travelling with kids. It does not matter whether it can be road trips, flights, or even waiting in the doctor's office - something that is operating with no WiFi is a saviour. Download some stories, audio books and whatever your children are fond of, before you depart. The road trip became what could have been a nightmare but turned out to be a good one and that is attributed to the fact that they had something to enjoy that did not involve internet. Take it as a lesson of what happened to me, always have offline backup entertainment. Your sanity as a parent travelling with kids depends on it.",
    ],
  },
  {
    title: "Why i quit freaking out about AI and startd using it.",
    imageSrc: "./resources/dummy-image.png",
    id: 7,
    description: [
      "Honestly speaking, the first thought that crossed my mind when I heard about AI generating stories for children was that this could not be so. It was awkward and unnatural, as I was giving parenting to a robot. I believe a lot in the real books, in the human interaction, and the real imagination. The thought of a computer writing stories to my children was wrong on a variety of levels. However, this time I tried it, and I had to take my words back.",
      "The point is, AI story telling is not taking the place of me reading to my children, it is just providing the kids with the means to be creative in ways that I will not have a chance to do myself. I can not simply reach that book off the shelf when my daughter desires to hear about a purple elephant who lives in the planet of Mars and who finds the answer to mysteries with her robot best friend. But in a couple of minutes she can make that very story, and it is even good. Neither generic nor weird but really involving and very personalized to what she desires. It is as though any kind of book you need at this moment is in the library, and your kid is interested in it",
      "What really convinced me was when I saw her face illuminate when she realized that she was the one directing the story. She had not followed someone's imagination but she had created her own world and watched it being created. The AI is merely the means, just as a pencil can assist you in writing but not in the thinking part. The choice of what, choices about characters, and consequences have to be worked out. The technology just makes it possible without me having to be a creative writing genius at 8 PM when I am tired.",
      "That is why my personal opinion is to quit being afraid of AI and to begin to see it as it is a tool. It is not killing human creativity; it enhances it. My children are now more inventive since they can afford to make their ideas come true at the very moment. And honestly, It has helped me to value the use of technology in education much more than I anticipated. I continue to read them the old-fashioned books, we still make our own stories, but now they can also have this terrific power to make their own adventures any time they choose. It's not either/or, it's both/and. That's pretty cool.",
    ],
  },
  {
    title: "What the teacher of my kid told me that made me change my mind.",
    imageSrc: "./resources/dummy-image.png",
    id: 8,
    description: [
      "I have always felt nervous when I had to attend parent-teacher conferences but I was excited this year. My son had already been using interactive story apps at home a few months and I wondered whether his teacher could tell a difference. I was shocked by what she said to me sincerely. She claimed that his critical thinking had become much better and she wanted to know what we were doing differently at home.",
      "Seemingly, he had been using problem-solving strategies on his school work which he had not been previously doing. When he is presented with a difficult math challenge, he would not just give up immediately, but would experiment with the solution in order to find what works just as he does with choosing story options. His reading comprehension testing scores had improved as he was indeed thinking of character motives and outcomes, rather than reciting plot items. Whatever we were doing or whatever we were continuing to do as she said, it was working.",
      "I understood that the interactive stories were not entertainment only, but they were training him to think differently. Whenever he decides what a character ought to do he is taking decisions and making predictions. When those choices lead to different story paths, he's learning that decisions matter and there are several ways of solving problems. He is training the ability to think critically when he is not even aware that he is doing it since he is enjoying. This is the best part of educational apps, where children are studying yet they think they are playing.",
      "The evaluation of the teacher caused me to look at screen time in a new perspective. It is not that it should be abolished, but it should be ensured that whatever they are engaging in is productive. When children play with material where decisions have to be made and critical thinking is involved, they are developing skills that are applicable in all other things. It was not the fact that I prohibited tablets and made my son read more books that he did not like, which is the reason why he improved at school. It was due to the fact that I discovered something that can interact with him and make him think. Sometimes the best education doesn't feel like education at all.",
    ],
  },
  {
    title: "How we fixed sibling screen time wars",
    imageSrc: "./resources/dummy-image.png",
    id: 9,
    description: [
      "If you have more than one kid, you know the drill. One gets screen time and the other immediately has a meltdown about fairness. 'She got to watch her show! Why does he get the iPad first? She's been on longer than me!' Honestly, the screen time arguments in our house were worse than any other sibling conflict I had ever witnessed. I tried timers, rotation schedules, two separate devices and nothing worked. Someone was always convinced they were getting the short end of the stick.",
      "What finally saved us was setting up individual profiles for each kid with their own screen time limits and content. My daughter gets her time, my son gets his time, and the app tracks it automatically so that there is no debate. She likes princess stories, he likes dinosaur adventures, and they each have their own library that reflects their interests. There is no more fighting over whose turn it is or whose show to watch because they're not sharing anymore; they each have their own space.",
      "The best part is that the controls let me set different rules for different ages. My seven-year-old gets an hour on school days, my ten-year-old gets 90 minutes because his homework's done earlier. The app enforces it automatically, so I'm not being the referee anymore. When their time is up, it's just up. No negotiations with me, no tears, no 'but she got more!' The system is the system, and they've actually accepted it way better than when I was manually policing everything.",
      "Honestly, this setup has cut sibling fighting over the devices by at least 50% in our house. They are no longer fighting over the same device or the same content. They both have their own experiences that cater to their interests and their ages, and I am not constantly playing judge and jury over who gets what and for how long. If you're drowning in screen time battles, consider setting up separate profiles with individual limits on the Storytime app for kids. The peace and quiet alone is worth it, and your kids might actually learn to share better when they're not fighting over the same device constantly.",
    ],
  },
  {
    title: "The conversation i never expected to have",
    imageSrc: "./resources/dummy-image.png",
    id: 10,
    description: [
      "On Tuesday of this past week, my daughter  who is six, asked me a really powerful question: 'If you could go back in time and change any decisions you've made, what would you change?' When I probed her about where that thought came from, she told me she had been considering this while she played her story type of game. She explained that, in the game her character faced two options - to help a friend or to continue on with the quest alone and that she chose to help the friend but thought about what might have happened if she chose to go it alone.",
      "We ended up having some wonderful discussion about choices and consequences, and how we all become who we are based on the choices we have made in our lives. She also mentioned that she always tries to choose the kind path for her character in her fantasy games because she wants her character to be a person other people will trust. Then she asked whether that is how real life works too! How can a parent not want to cry thinking about that? This wasn't from me teaching her about decisions; this is all from her experiencing a more in-depth look into the choice process through an interactive story.",
      "What really stood out to me was the fact that this child said she enjoys interactive stories because it gives her the feeling of being present in the story and that she is having an impact on how the story unfolds. Giving her that sense of agency and helping her realize that her choices have some weight and significance is something I have been trying to instill in her since she was a young child. But now she gets to actually experience what this means through the stories. Through these stories, she is beginning to develop empathy because she thinks through the character choices. She is developing problem-solving skills by figuring out how to find a solution to the problem and figuring out how to deal with her choices. Through these stories, she has learned that her choices shape who she is - both literally and figuratively.",
      "I never imagined an app would facilitate such an in-depth conversation about this with my daughter. I assumed that we had discovered a new way to keep her entertained that was superior to watching YouTube. Instead, we have found a means for our daughter to develop critical thinking, empathy and self-awareness through storytelling with interactive elements. As she plays, she is developing connections between her story choices and real-life choices and she does not realise she is developing these skills.",
    ],
  },
];

export {
  privacyPolicyData,
  termsAndConditionsData,
  howItWorksData,
  resourcesData,
};
