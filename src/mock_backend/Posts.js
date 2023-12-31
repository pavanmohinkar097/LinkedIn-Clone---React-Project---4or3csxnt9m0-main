const posts = [
  {
    id: 1,
    initial: "A",
    name: "Pavan Mohinkar",
    description: "Project Owner",
    post: `Linkedin Clone is a web application built using React and
        Redux that replicates the functionality of the popular
        professional networking site, Linkedin. It allows users to
        create profiles, create posts, like them, and comment on them.
        The user interface is designed to be intuitive and easy to
        use. The application is built with scalability in mind so that
        it can easily be extended to add more features in the future.`,
    likes: new Set([
      "Abhideep Ghosh",
      "Swati Sharma",
      "Shabnoor Ashrafi Parveen",
      "Bivek Kumar Shaw",
    ]),
    comments: [
      {
        name: "Swati Sharma",
        comment: "LinkedIn Clone uses Redux For Logging In!",
      },
      {
        name: "Bivek Kumar Shaw",
        comment: "It uses Mock Backend!",
      },
    ],
  },
  {
    id: 2,
    initial: "S",
    name: "Swati Sharma",
    description: "User",
    post: `This clone can be scaled to connect backend. Processes like checking whether user exists or not while logging in can be pushed to backend in that case.`,
    likes: new Set([
      "Abhideep Ghosh",
      "Swati Sharma",
      "Shabnoor Ashrafi Parveen",
      "Bivek Kumar Shaw",
    ]),
    comments: [
      {
        name: "Abhideep Ghosh",
        comment: "Agreed! +1",
      },
      {
        name: "Shabnoor Ashrafi Parveen",
        comment: "You've got that right!",
      },
    ],
  },
];

export default posts;
