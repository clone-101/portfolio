import aafcLogo from "@/assets/logos/canadian-flag.png";
import umLogo from "@/assets/logos/UM-logo.png";
import epicLogo from "@/assets/logos/EpicOpportunities-logo.png";
import G3Logo from "@/assets/logos/G3-logo.png";

export const jobs = [
  {
    employer: "G3 Canada Limited",
    title: "Business Analyst (Co-op)",
    date: "05/2026 - 08/2026",
    logo: G3Logo,
    bullets: [
      "Architected a relational database schema supporting dynamic form fields, allowing for future expansion.",
      "Digitized Food Safety and Quality Management System (FSQMS) forms, reducing completion time and centralizing records for better visibility & future reporting.",
      "Drove a change to a live production application through the full release pipeline.",
    ],
  },
  {
    employer: "Agriculture and Agri-Food Canada (AAFC)",
    title: "Student Web Developer (Co-op)",
    date: "01/2026 - 04/2026",
    logo: aafcLogo,
    bullets: [
      "Collaborated on development of full stack web applications using JSF and Spring.",
      "Refactored 20+ page layouts to fluid, responsive containers to achieve WCAG reflow compliance.",
      "Created technical documentation to support on-boarding and tool adoption for future Co-op students.",
    ],
  },
  {
    employer: "SQM Lab - University of Manitoba",
    title: "Undergraduate Researcher",
    date: "05/2025 - 08/2025",
    logo: umLogo,
    bullets: [
      "Co-authored a research paper on the identification, characteristics, and predictability of abnormally bug-prone Java code at the method level of granularity.",
      "Collected/parsed data from 50+ open source Java projects using Github's APIs.",
      "Leveraged Git to track changes in data collection scripts and maintain a clear history of adjustments.",
    ],
  },
  {
    employer: "Epic Opportunities",
    title: "Junior Web Design & Digital Content Creator",
    date: "06/2024 - 11/2024",
    logo: epicLogo,
    bullets: [
      "Updated online communications and website to meet provincial accessibility standards (AMA).",
      "Redesigned the Epic Opportunities Website to increase the public profile of the overall organization.",
    ],
  },
];
