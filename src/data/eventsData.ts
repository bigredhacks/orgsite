import { EventsPageProps } from "../components/EventsBlock";
import { BorderSpec } from "../components/InfoCard";

const eventsData: EventsPageProps[] = [
  {
    sx: { backgroundColor: "purple.main" },
    imgSrc: "/org-2019.jpg",
    eventName: "2017",
    date: "Saturday March 9th",
    description:
      "Deals with day-of logistics to ensure that the event runs smoothly through coordination with university staff, sponsors, and students as well as nearly every team on BigRed//Hacks. Logistics provides the facilities and all operational requirements for BigRed//Hacks events, including the marketing of the event.",
    borderSpecList: [BorderSpec.TopLeft],
  },
  {
    sx: { backgroundColor: "blue.main" },
    imgSrc: "/org-2018.jpeg",
    eventName: "2019",
    date: "Saturday March 9th",
    description:
      "Forms the software and technology supporting the team to allow our hackathon to operate smoothly. Provides functional and reliable API routes, organization and event websites, and a registration system for hackers to utilize. ",
    placeImgRight: true,
    borderSpecList: [BorderSpec.TopRight],
  },
  {
    sx: { backgroundColor: "pink.main" },
    imgSrc: "/org-2019.jpg",
    eventName: "2021",
    date: "Saturday March 9th",
    description:
      "Strengthens, reinforces, and reinvents the BigRed//Hacks brand image: this includes branding all documents, designing the event T-shirt, creating marketing graphics, creating website UI/UX designs, and working to ensure that the brand is cohesive across our work.",
    borderSpecList: [BorderSpec.TopLeft],
  },
  {
    sx: { backgroundColor: "yellow.main" },
    imgSrc: "/placeholder.png",
    eventName: "Sponsorship",
    date: "Saturday March 9th",
    description:
      "Handles negotiating with companies to get monetary support, use of APIs/tools, and prizes. Negotiate with companies interested in sponsoring BigRed//Hacks, help with handle day-of logistics for sponsor companies who are performing demos or manning booths, and represent sponsors on PR initiatives.",
    placeImgRight: true,
    borderSpecList: [BorderSpec.TopRight],
  }
];

export default eventsData;
