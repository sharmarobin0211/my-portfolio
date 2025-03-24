import dockerIcon from "@/assets/images/docker-icon.png";
import k8sIcon from "@/assets/images/k8s-icon.png";
import awsIcon from "@/assets/images/aws-icon.png";
import networkingIcon from "@/assets/images/networking-icon.png";
import mernIcon from "@/assets/images/mern-icon.png";
import azureIcon from "@/assets/images/azure-icon.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import { Fragment } from "react";


const skills = [
  {
    name: "Docker",
    purpose: "Containerization Tool",
    experience: "I have extensive experience in containerizing applications using Docker, crafting secure and optimized Dockerfiles for microservices, React applications, and backend services. My expertise includes multi-stage builds, Docker Compose, and integrating Docker with CI/CD pipelines for seamless deployments.",
    icon: dockerIcon,
  },
  {
    name: "Networking & Cloud Infrastructure",
    purpose: "VPC, Security Groups & Traffic Management",
    experience: "I have hands-on experience in setting up secure and scalable network architectures using AWS VPC, subnets, security groups, and load balancers. I have also worked extensively with Kubernetes networking, Docker bridge networks, and cloud monitoring tools like Prometheus and Grafana to ensure high availability and security.",
    icon: networkingIcon,
  },
  {
    name: "Kubernetes",
    purpose: "Container Orchestration Tool",
    experience: "I have deployed and managed containerized applications on Kubernetes clusters, implementing auto-scaling, rolling updates, and efficient resource allocation. My hands-on experience includes managing Helm charts, configuring Ingress controllers, and setting up observability with Prometheus and Grafana.",
    icon: k8sIcon,
  },
  {
    name: "AWS",
    purpose: "Cloud Computing & DevOps Services",
    experience: "I have extensive experience working with AWS services, including EC2, S3, Lambda, RDS, and IAM. I have designed scalable cloud architectures using Terraform, managed Kubernetes workloads with EKS, and implemented security best practices for cloud infrastructure.",
    icon: awsIcon,
  },
  {
    name: "Azure DevOps",
    purpose: "CI/CD & Cloud Services",
    experience: "I have set up and managed Azure DevOps pipelines for microservices-based applications, automating build and deployment processes. I have experience working with self-hosted Azure agents and integrating Docker with Azure Kubernetes Service (AKS).",
    icon: azureIcon,
  },
  {
    name: "MERN Stack with TypeScript",
    purpose: "Backend-heavy Web Development",
    experience: "I specialize in building scalable backend services using Node.js, Express, and MongoDB with TypeScript. I have implemented RESTful APIs, JWT-based authentication, optimized database queries and caching strategies with Redis. I have also developed reusable React components, and manage state efficiently using Redux Toolkit.",
    icon: mernIcon,
  },
];


export const ExpertiseSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Expertise"
          title="As DevOps & Full-Stack Engineer"
          description="It's not just about knowing the tools — it's about leveraging them to build reliable, high-performance applications."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {skills.map(skill => (
                  <Card key={skill.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 hover:scale-[1.02] transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{skill.name}</div>
                        <div className="text-sm text-white/40">{skill.purpose}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{skill.experience}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
