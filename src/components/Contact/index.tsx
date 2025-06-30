import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const contacts = [
    { id: 1, url: 'mailto:taselablessed@gmail.com?subject=Book an appointment', message: 'Email', icon: <FaEnvelope /> },
    { id: 2, url: 'https://www.facebook.com/tasela.berlizyo/', message: 'Facebook', icon: <FaFacebook /> },
    { id: 3, url: 'https://www.linkedin.com/in/blessed-tasela-b9071920a/', message: 'LinkedIn', icon: <FaLinkedin /> },
    { id: 4, url: 'https://github.com/blessedtasela', message: 'Github', icon: <FaGithub /> },
    { id: 5, url: 'https://www.instagram.com/tasela_berliz/', message: 'Instagram', icon: <FaInstagram /> },
    { id: 6, url: 'https://wa.me/+12369900823?text=Hi Blessed, I would like to...', message: 'WhatsApp', icon: <FaWhatsapp /> },
];

export default function Contact() {
    return (
        <div className="shadow-lg text-xl font-sans text-white bg-gray-950 h-screen w-full">
            <div className="p-8 py-48">
                <p className="text-2xl md:text-4xl font-sans text-center mb-4 font-bold">
                    Reach out to me
                </p>
                <div className="mt-4 w-12 mx-auto border-2 p-1 bg-purple-500 rounded-lg border-purple-500"></div>
                <div className="gap-2 p-4 grid grid-cols-2 md:grid-cols-3 mt-20 font-sans">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="w-auto flex flex-col items-center justify-center rounded-md hover:scale-105">
                            <div className="text-center p-2 text-sm md:text-xl">
                                <a href={contact.url} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center'>
                                    <div className="p-2 py-2 font-bold rounded-md cursor-pointer text-gray-400 hover:text-purple-500">
                                        {contact.message}
                                    </div>
                                    <div className="text-gray-700 hover:text-purple-500" style={{ width: '30px' }}>
                                        {contact.icon}
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
