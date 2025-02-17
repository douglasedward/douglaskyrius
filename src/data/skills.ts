import { FaAws, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiRabbitmq,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiNestjs,
  SiExpress,
  SiElasticstack,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiGraphql,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import { DiRedis } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { GoogleCloud } from "@/assets/svg/GoogleCloud";
import { Bull } from "@/assets/svg/Bull";

const logosRight = [
  {
    id: "node",
    logo: SiNodedotjs,
    name: "Node.js",
    color: "#339933",
  },
  {
    id: "typescript",
    logo: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    id: "javascript",
    logo: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    id: "git",
    logo: FaGitAlt,
    name: "Git",
    color: "#F05033",
  },
  {
    id: "nestjs",
    logo: SiNestjs,
    name: "NestJS",
    color: "#E0234E",
  },
  {
    id: "express",
    logo: SiExpress,
    name: "Express",
    color: "#6b7280",
  },
  {
    id: "react",
    logo: SiReact,
    name: "React",
    color: "#61DAFB",
  },
  {
    id: "reactNative",
    logo: TbBrandReactNative,
    name: "React Native",
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    logo: SiNextdotjs,
    name: "Next.js",
    color: "#6b7280",
  },
  {
    id: "tailwindcss",
    logo: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  {
    id: "graphql",
    logo: SiGraphql,
    name: "GraphQL",
    color: "#E10098",
  },
];

const logosLeft = [
  {
    id: "postgresql",
    logo: SiPostgresql,
    name: "PostgreSQL",
    color: "#336791",
  },
  {
    id: "mongodb",
    logo: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
  },
  {
    id: "rabbitmq",
    logo: SiRabbitmq,
    name: "RabbitMQ",
    color: "#F26722",
  },
  {
    id: "bullmq",
    logo: Bull,
    name: "BullMQ",
    color: "#475569",
  },
  {
    id: "redis",
    logo: DiRedis,
    name: "Redis",
    color: "#DC382D",
  },
  {
    id: "elk",
    logo: SiElasticstack,
    name: "ELK Stack",
    color: "#005571",
  },
  {
    id: "aws",
    logo: FaAws,
    name: "AWS",
    color: "#FF9900",
  },
  {
    id: "docker",
    logo: FaDocker,
    name: "Docker",
    color: "#2496ED",
  },
  {
    id: "kubernetes",
    logo: SiKubernetes,
    name: "Kubernetes",
    color: "#326CE5",
  },
  {
    id: "gcp",
    logo: GoogleCloud,
    name: "Google Cloud Platform",
    color: "#4285F4",
  },
  {
    id: "prometheus",
    logo: SiPrometheus,
    name: "Prometheus",
    color: "#E6522C",
  },
  {
    id: "grafana",
    logo: SiGrafana,
    name: "Grafana",
    color: "#F4F8FB",
  },
];

export { logosLeft, logosRight };
