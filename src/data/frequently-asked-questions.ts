export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Is Replyke free to use?",
    answer:
      "Yes, Replyke is completely free for personal and commercial use. Basic usage as it is now is free, and premium features will be added later.",
  },
  {
    question: "How do I add Replyke to my React project?",
    answer:
      "You can add Replyke to your React project by following the comprehensive documentation, which covers implementation from start to finish, including backend setup.",
  },
  {
    question: "Where is the data saved?",
    answer:
      "Replyke guides developers on how to host the data in their own database by providing detailed instructions on API implementation in the documentation.",
  },
  {
    question: "Is Replyke customizable?",
    answer:
      "Yes, Replyke is highly customizable. We encourage you to visit the Replyke Studio to explore the extensive customization options available.",
  },
  {
    question: "What are the future plans for Replyke?",
    answer:
      "Future plans for Replyke include hosting data on Replyke servers and managing comments, providing an all-in-one solution for comment sections.",
  },
  {
    question: "How does Replyke handle data privacy?",
    answer:
      "Developers keep the data on their own servers and use the user data they pass to the component. Data safety is up to the developer. Other than styling configuration, Replyke doesn't keep any data.",
  },
  {
    question: "Can Replyke be integrated with any backend?",
    answer:
      "Yes, Replyke can be integrated with any backend. This is thoroughly covered in the documentation.",
  },
];
