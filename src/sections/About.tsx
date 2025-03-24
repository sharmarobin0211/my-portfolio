"use client";

import blogCover from "@/assets/images/devsecops.png";
import AWSIcon from "@/assets/icons/aws.svg";
import LinuxIcon from "@/assets/icons/linux.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import GitLabIcon from "@/assets/icons/square-gitlab.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GolangIcon from "@/assets/icons/golang.svg";
import NodeIcon from "@/assets/icons/node-js.svg";
import JiraIcon from "@/assets/icons/jira.svg";
import JavaIcon from "@/assets/icons/java.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem, ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";


const toolboxItems: ToolboxItem[] = [
  {
    title: 'AWS',
    icon: AWSIcon,
  },
  {
    title: 'Linux',
    icon: LinuxIcon,
  },
  {
    title: 'GitHub',
    icon: GitHubIcon,
  },
  {
    title: 'GitLab',
    icon: GitLabIcon,
  },
  {
    title: 'Jira',
    icon: JiraIcon,
  },
  {
    title: 'React',
    icon: ReactIcon,
  },
  {
    title: 'Golang',
    icon: GolangIcon,
  },
  {
    title: 'Node.js',
    icon: NodeIcon,
  },
  {
    title: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    title: 'Java',
    icon: JavaIcon,
  },
];


const hobbies = [
  {
    title: 'Traveling',
    icon: '🌍',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Music',
    icon: '🎵',
    left: '45%',
    top: '70%',
  },
  {
    title: 'Gaming',
    icon: '🎮',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Reading',
    icon: '📚',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Movies',
    icon: '🎥',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Painting',
    icon: '🎨',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Photography',
    icon: '📷',
    left: '50%',
    top: '5%',
  }
];


export const AboutSection = () => {
  const hobbyConstrainRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspire me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Blogs"
                description="Explore articles packed with best practices, hands-on guides to solve real-world problems."
                className="md:px-6"
              />
              <div className="w-72 mx-auto md:w-56">
                <Image src={blogCover} className="rounded-xl" alt="Blog cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to develop robust solutions."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:20s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
              />
              <div className="relative flex-1" ref={hobbyConstrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={hobbyConstrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.icon}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image
                  src={smileMemoji}
                  alt="Smiling Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
