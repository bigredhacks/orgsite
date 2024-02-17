import { TeamsDropdownProps } from "../components/TeamsDropdown";
import { BorderSpec } from "../components/InfoCard";

const teamsData: TeamsDropdownProps[] = [
  {
    sx: { backgroundColor: "#4361EE" },
    imgSrc: "/placeholder.png",
    teamName: "Logistics",
    description:
      "This team does logistics things, like providing words and images and handling stuff.",
    borderSpecList: [BorderSpec.TopLeft],
  },
  {
    sx: { backgroundColor: "#4CC9F0" },
    imgSrc: "/placeholder.png",
    teamName: "Software",
    description:
      "Our software developers make these website possible by implementing code.",
    placeImgRight: true,
    borderSpecList: [BorderSpec.TopRight],
  },
  {
    sx: { backgroundColor: "#FF77BB" },
    imgSrc: "/placeholder.png",
    teamName: "Design",
    description:
      "The design team provides assets, wireframes, and prototypes. We also make merchandise!",
    borderSpecList: [BorderSpec.TopLeft],
  },
  {
    sx: { backgroundColor: "#EEFE65" },
    imgSrc: "/placeholder.png",
    teamName: "Sponsorship",
    description:
      "This team reaches out to established companies, within and beyond the technology industry.",
    placeImgRight: true,
    borderSpecList: [BorderSpec.TopRight],
  },
];

export default teamsData;
