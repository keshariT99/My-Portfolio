

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const FooterLinks = ({ sections }: { sections: FooterSection[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-[#00E7FF] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;