import { FaUniregistry,FaGraduationCap,FaBookOpen } from "react-icons/fa";
export const education = [
  {
    id:crypto.randomUUID(),
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institute: "Gandhi Engineering College",
    duration: "2023 - 2027",
    score: "CGPA: 8.9/10",
    status: "Pursuing",
    icon: FaGraduationCap
  },
  {
    id:crypto.randomUUID(),
    degree: "Intermediate (12th)",
    field: "Science ( PCM )",
    institute: "Gaya College , Gaya",
    duration: "2021 - 2023",
    score: "Percentage: 78.4%",
    status:"Completed",
    icon:FaBookOpen
  },
  {
    id:crypto.randomUUID(),
    degree: "Matriculation (10th)",
    field: "BSEB",
    institute: "U.H.S Bitho",
    duration: "2020 - 2021",
    score: "Percentage: 88%",
    status:"Completed",
    icon:FaUniregistry
  }
];
