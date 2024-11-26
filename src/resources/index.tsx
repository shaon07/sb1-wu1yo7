import { Code2, Globe2, Server, Shield } from "lucide-react";

export const navbarLinks = [
    {
        name: "Services",
        href: "#",
    },
    {
        name: "Reviews",
        href: "#",
    },
    {
        name: "Blog",
        href: "#",
    },
    {
        name: "Jobs",
        href: "#",
    },
];

export const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Development",
      features: [
        "UI/UX",
        "DevOps",
        "Web design",
        "Frontend dev",
        "Backend dev",
      ],
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "MSP",
      features: [
        "Infrastructure management",
        "Managed Monitoring",
        "Business Continuity",
        "Managed Cyber",
      ],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Cloud",
      features: [
        "AWS",
        "AZURE",
        "Multi-Cloud",
        "SRE Strategy",
        "Server less",
        "Hybrid Strategy",
        "Containerisation",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cyber",
      features: [
        "Cyber Audit",
        "Cyber governance",
        "Security as a service",
        "Penetration Testing",
      ],
    },
  ];

export const partnerLogos = [
  {
    src: "https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg",
    alt: "DigitalOcean",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
    alt: "Azure",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
    alt: "Google Cloud",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/cloudflare.svg",
    alt: "Cloudflare",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
    alt: "Google Cloud",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg",
    alt: "DigitalOcean",
  },
];

export const companySizes = [
  { value: "", label: "Company Size" },
  { value: "1-20", label: "1-20" },
  { value: "21-50", label: "21-50" },
  { value: "51-200", label: "51-200" },
  { value: "201+", label: "201+" }
];

export const logoSrcs = [
  "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg",
  "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
  "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  "https://cdn.worldvectorlogo.com/logos/remix.svg",
  "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg"
];
