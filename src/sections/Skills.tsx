import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";


const skills = [
  {
    name: "Docker",
    purpose: "Containerization Tool",
    experience: "I have extensive experience in containerizing applications using Docker. I have built scalable and secure Dockerfiles for microservices, React applications, and backend services, ensuring efficient CI/CD workflows.",
    icon: memojiAvatar1,
  },
  {
    name: "Kubernetes",
    purpose: "Container Orchestration Tool",
    experience: "I have deployed and managed microservices on Kubernetes clusters, implementing auto-scaling, service discovery, and efficient resource allocation. I have hands-on experience with Helm charts, Ingress controllers, and monitoring using Prometheus and Grafana.",
    icon: memojiAvatar2,
  },
  {
    name: "Azure DevOps",
    purpose: "CI/CD & Cloud Services",
    experience: "I have set up and managed Azure DevOps pipelines for microservices-based applications, automating build and deployment processes. I have experience working with self-hosted Azure agents and integrating Docker with Azure Kubernetes Service (AKS).",
    icon: memojiAvatar3,
  },
  {
    name: "Spring Boot",
    purpose: "Java Framework for Microservices",
    experience: "I have developed scalable backend services using Spring Boot, focusing on clean architecture, RESTful APIs, and database integration with PostgreSQL. I have also implemented authentication and authorization using JWT and OAuth2.",
    icon: memojiAvatar4,
  },
  {
    name: "PostgreSQL",
    purpose: "Relational Database",
    experience: "I have designed and optimized database schemas for high-performance applications using PostgreSQL. I have worked on indexing strategies, query optimizations, and replication for ensuring data consistency and reliability.",
    icon: memojiAvatar5,
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
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
          {skills.map(skill => (
            <Card key={skill.name} className="max-w-xs md:max-w-md md:p-8">
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
          </div>
        </div>
      </div>
    </div>
  );
};
