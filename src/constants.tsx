import { Github, Linkedin, Mail, Code2, Cloud, Terminal, GitBranch, Monitor, Network, Folder } from 'lucide-react';
import { CONFIG } from './config';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  category: 'AWS' | 'DevOps' | 'FullStack';
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AWS Three-Tier Architecture Deployment",
    description: "Designed a three-tier web application on AWS with public/private subnets, Nginx frontend, Flask backend with Multi-AZ, and RDS MySQL database.",
    tags: ["AWS", "VPC", "EC2", "RDS", "Nginx", "Flask"],
    githubUrl: CONFIG.GITHUB_PROFILE, // Replace with actual repo link if available
    category: "AWS"
  },
  {
    id: 2,
    title: "Static Web Application on AWS S3",
    description: "Built and hosted a static website using AWS S3 with public access, bucket policies, versioning, and static hosting features.",
    tags: ["AWS", "S3", "CloudFront", "IAM"],
    githubUrl: CONFIG.GITHUB_PROFILE,
    category: "AWS"
  },
  {
    id: 3,
    title: "Two-Tier Containerized App on K8s",
    description: "Built and deployed a two-tier containerized application using Docker Compose and Kubernetes (KIND) with Jenkins CI/CD pipelines.",
    tags: ["Docker", "Kubernetes", "Jenkins", "CI/CD"],
    githubUrl: CONFIG.GITHUB_PROFILE,
    category: "DevOps"
  },
  {
    id: 4,
    title: "AWS ECS Fargate Deployment",
    description: "Deployed a containerized web application using ECS Fargate and Amazon ECR with Application Load Balancer and IAM roles.",
    tags: ["AWS", "ECS", "Fargate", "ECR", "ALB"],
    githubUrl: CONFIG.GITHUB_PROFILE,
    category: "AWS"
  },
  {
    id: 5,
    title: "Full Stack React Django on EC2",
    description: "Containerized React frontend and Django REST backend using Docker multi-stage builds, orchestrated with Docker Compose on EC2.",
    tags: ["React", "Django", "Docker", "Terraform", "AWS"],
    githubUrl: CONFIG.GITHUB_PROFILE,
    category: "FullStack"
  },
  {
    id: 6,
    title: "DiscoverDollar MEAN Stack Deployment",
    description: "Containerized MEAN stack app with multi-stage Dockerfiles, orchestrated 4 services with Docker Compose on AWS EC2.",
    tags: ["MongoDB", "Express", "Angular", "Node.js", "GitHub Actions"],
    githubUrl: CONFIG.GITHUB_PROFILE,
    category: "FullStack"
  }
];

export const SKILLS = [
  {
    category: "Cloud Platforms",
    icon: <Cloud className="w-5 h-5" />,
    items: ["AWS (IAM, VPC, EC2, RDS, S3, CloudWatch)", "ECS Fargate", "ECR"]
  },
  {
    category: "DevOps Tools",
    icon: <Terminal className="w-5 h-5" />,
    items: ["Jenkins (CI/CD)", "Docker (Containerization)", "Kubernetes (Orchestration)", "Terraform"]
  },
  {
    category: "Scripting & Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: ["Bash Scripting", "YAML Manifests", "Python (Basics)"]
  },
  {
    category: "Version Control",
    icon: <GitBranch className="w-5 h-5" />,
    items: ["Git", "GitHub", "GitHub Actions"]
  },
  {
    category: "Operating Systems",
    icon: <Monitor className="w-5 h-5" />,
    items: ["Linux (Ubuntu)", "Windows"]
  },
  {
    category: "Networking",
    icon: <Network className="w-5 h-5" />,
    items: ["TCP/IP", "IP Addressing", "Ports", "Linux Commands (ip, ss, ping)"]
  }
];

export const SOCIAL_LINKS = {
  github: CONFIG.GITHUB_PROFILE,
  linkedin: CONFIG.LINKEDIN_URL,
  email: CONFIG.EMAIL,
  resume: CONFIG.RESUME_PATH
};
