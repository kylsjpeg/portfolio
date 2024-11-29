import * as FaIcons from "react-icons/fa"; // Import all icons

const ContactsSidebar = () => {
  const contacts = [
    {
      iconName: "FaTwitter",
      title: "@_kaimissions",
      link: "https://x.com/_kaimissions",
    },
    // {
    //   iconName: "FaGithub",
    //   title: "Kyla Santos",
    //   link: "https://facebook.com/kylarozette",
    // },
    {
      iconName: "FaLinkedin",
      title: "Kyla Rozette Santos",
      link: "https://www.linkedin.com/in/kyla-rozette-santos-3445a4260/",
    },
    {
      iconName: "FaEnvelope",
      link: "mailto:kylarozettes@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20about...",
      title: "kylarozettes",
    },
    {
      iconName: "FaEnvelope",
      link: "mailto:kylarozette.designs@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20about...",
      title: "kylarozette.designs",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-none  border-[#0f0d0e] border-4">
      <h2 className="font-krona text-lg font-bold mb-2 p-2 bg-yellow-200">
        📱 Contact Info
      </h2>
      <ul>
        {contacts.map((contact, index) => {
          const Icon = FaIcons[contact.iconName];
          return (
            <li key={index} className="mb-3">
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:text-gray-700"
              >
                <Icon className="text-lg" style={{ color: contact.color }} />
                <span className="ml-3">{contact.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsSidebar;
