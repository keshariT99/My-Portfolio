
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/keshari-thennakoon-b2b91a1a5', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Github, href: 'https://github.com/keshariT99', label: 'GitHub' },
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="p-2 rounded-full bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;