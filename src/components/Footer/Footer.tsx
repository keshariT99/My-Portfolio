
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const footerSections = [
    {
      title: 'Explore',
      links: [
        { label: 'About Me', href: '#about' },
        { label: 'Skills', href: '#skills' },
      ],
    },
    {
      title: 'Trusted',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        
      ],
    },
    {
      title: 'Others',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms and Conditions', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t-[3px] border-[#1a1a1a] pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <FooterLogo />
            <SocialLinks />
          </div>
          <FooterLinks sections={footerSections} />
        </div>
        
        <div className="text-center pt-8 border-t border-[#1a1a1a]">
          <p className="text-gray-400 mb-2">
            Copyright © All right reserved | {new Date().getFullYear()}
          </p>
          <p className="text-gray-500">
            Built with love by Keshari Thennakoon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;