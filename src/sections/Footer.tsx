import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";


interface FooterLink {
  title: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/soumo-sarkar/',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/section_super',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/SuperSection',
  },
  {
    title: 'GitLab',
    href: 'https://gitlab.com/soumosarkar.official',
  },
];


export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/40">
            &copy; 2025 Soumo Sarkar. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
