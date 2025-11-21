export type HostName =
  | "Banquet Host"
  | "Logistics Host"
  | "Night Guard"
  | "Info Desk Host"
  | "Company Host"
  | "Electricity/Internet Host"
  | "Photographer"
  | "Food and Wardrobe Host";

export interface Host {
  title: HostName,
  subtitle: string,
  body: string
}

// unused?
export const hosts: Host[] = [
  {
    title: "Logistics Host",
    subtitle: "Do you think it is fun to build stuff or put together puzzles? Consider applying to a logistics host?",
    body: "As a logistics host, you will be able to set the premises ready for the fair. Your work ensures that the space looks professional, welcoming, and well-organized for both companies and visitors. You will be able to take part in laying down carpets, setting up company stations and making sure each company’s area is clearly marked and tidy."
  },
  {
    title: "Company Host",
    subtitle:
      "Do you enjoy engaging in conversation and networking with industry professionals? If so, the Company Host position might be perfect for you! ",
    body: "As a Company Host at Teknikfokus 2026, you will be assigned to assist one or two participating companies. Key responsibilities include ensuring that company representatives have all necessary information leading up to the event, assisting with booth setup, and providing support during the fair. Your role is essential in helping companies feel welcome and supported throughout the event, and before the event contact them and answer their questions.",
  },
  {
    title: "Banquet Host",
    subtitle:
      "Are you an organized, cheerful individual with a flair for decorating? Consider applying for the role of Banquet Host!",
    body: "As a Banquet Host, you will play a key role in making the first evening of the fair, truly remarkable. Your team will be responsible for transforming Gasque into a beautiful and welcoming environment, setting the perfect ambiance for the evening. While you'll miss part of the fair's opening day during setup, you'll have the opportunity to change and join the banquet festivities before the guests arrive. Your efforts will help create an unforgettable experience for all.",
  },
  {
    title: "Night Guard",
    subtitle:
      "Are you a night owl who appreciates the perks of free snacks? Consider applying for the Night Guard position!",
    body: "As a Night Guard, you'll be entrusted with overseeing the security of companies' belongings and other items stored in the E-house between exhibition days. Your presence will ensure that companies feel comfortable leaving their equipment on-site overnight. While this role may coincide with the Banquet, you'll be able to order pizza, snacks, and soft drinks for your shift, with Teknikfokus covering the cost. You'll also have flexibility in how you spend the night, as long as you're keeping a watchful eye on the items in your care.",
  },
  {
    title: "Food and Wardrobe Host",
    subtitle:
      "Do you have a passion for service and seek a diverse role at Teknikfokus 2026? Apply to be the Food and Wardrobe Host!",
    body: "In this role, you'll oversee the fair's food service, lounge areas, and wardrobe. Responsibilities include managing breakfast and lunch service, organizing the lounge, and maintaining a welcoming space with amenities like coffee. You'll also assist attendees with coat check services upon their arrival, ensuring a positive and seamless experience. This role offers a great opportunity to interact with company representatives in a relaxed setting, while making sure that they have everything they need for a productive day.",
  },
  {
    title: "Info Desk Host",
    subtitle:
      "Are you a sociable, service-oriented individual who enjoys answering questions and representing an organization? Then apply for the Info Desk Host role!",
    body: "This position is one of the most interactive at the fair. Throughout the event, companies, fellow hosts, and visitors will rely on you for answers and support. You'll be the go-to person for questions related to the fair, while also managing any items companies may need to borrow for their booths. Your role as an Info Desk Host is critical in helping make Teknikfokus a smooth and successful experience for everyone involved.",
  },
  {
    title: "Photographer",
    subtitle:
      "Do you have a passion for capturing special moments and showcasing the energy of Teknikfokus 2026? Apply to be a Photographer!",
    body: "As the event's Photographer, you'll document key moments, from the exhibitions to the Banquet and other fair highlights. Your photos will be featured in Teknikfokus 2026's promotional materials and may also be used in future events. Prior experience in photography is a plus, though not required. This role is a wonderful opportunity to creatively contribute to the event and capture memories that last! ",
  },
  {
    title: "Electricity/Internet Host",
    subtitle:
      "Do you have an interest in preparing and setting up electricity and internet? Apply to join our team as an electricity and internet host!",
    body: "In this role you will sett up branch outlets and Ethernet ports before the affair begins, and work closely with the logistic manager. Under the affair you will be assisting companies and hosts that need help with ethernet and electricity. Most of your work will take place on the prep day. ",
  },
];

export interface QuestionData {
  question: string;
  answers: {
    yes: HostName[];
    no: HostName[];
  };
}

export type Tally = Partial<Record<HostName, number>>;

export const questions: QuestionData[] = [
  {
    question: "I prefer working in a large team.",
    answers: {
      yes: ["Banquet Host", "Logistics Host", "Food and Wardrobe Host"],
      no: ["Night Guard", "Info Desk Host", "Company Host", "Electricity/Internet Host", "Photographer"],
    },
  },
  {
    question: "I want to interact with company representatives.",
    answers: {
      yes: ["Company Host", "Food and Wardrobe Host", "Info Desk Host", "Logistics Host"],
      no: ["Night Guard", "Banquet Host", "Electricity/Internet Host"],
    },
  },
  {
    question: "I enjoy being in a service-oriented role.",
    answers: {
      yes: ["Banquet Host", "Company Host", "Info Desk Host", "Food and Wardrobe Host"],
      no: ["Night Guard", "Logistics Host", "Electricity/Internet Host"],
    },
  },
  {
    question: "I prefer a role with varied and flexible tasks.",
    answers: {
      yes: ["Food and Wardrobe Host", "Banquet Host", "Logistics Host"],
      no: ["Info Desk Host", "Company Host", "Night Guard"],
    },
  },
  {
    question: "I enjoy physical work and don't mind a bit of heavy lifting",
    answers: {
      yes: ["Logistics Host", "Electricity/Internet Host", "Banquet Host"],
      no: ["Info Desk Host", "Photographer", "Company Host"],
    },
  },
  {
    question:
      "I have a knack for technology and enjoy solving practical problems.",
    answers: {
      yes: ["Electricity/Internet Host", "Logistics Host", "Photographer"],
      no: ["Banquet Host", "Company Host", "Info Desk Host", "Food and Wardrobe Host"],
    },
  },
  {
    question: "I am creative and have a good eye for detail.",
    answers: {
      yes: ["Photographer", "Banquet Host"],
      no: ["Logistics Host", "Electricity/Internet Host", "Night Guard"],
    },
  },
  {
    question: "I enjoy meeting and talking to new people.",
    answers: {
      yes: ["Info Desk Host", "Company Host", "Food and Wardrobe Host"],
      no: ["Night Guard", "Electricity/Internet Host"],
    },
  },
];

export const applicationLink = "https://forms.gle/N3sYozRTNp3X1UZp9";
