import { AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
    const openBlessedTasela = () => {
        window.open('https://www.linkedin.com/in/blessed-tasela-b9071920a/', '_blank');
    }

    return (
        <section className="w-full bottom-0 rounded-t-lg text-md md:text:md font-sans text-white">
            <div className="bg-gray-950 flex items-center justify-center h-48 md:h-24 lg:h-16">
                <div className="grid grid-cols md:grid-cols-2 mx-auto gap-2 lg:gap-0">
                    <div className="flex justify-center items-center">
                        <h3 className="text-white pl-5">
                            &copy;
                            <span className="ml-4 text-purple-500 font-bold">
                                Blessed Tasela.</span> All right reserved
                        </h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="flex">
                            Developed by
                            <span
                                className="flex ml-2 font-bold cursor-pointer hover:text-purple-600 hover:scale-105
                                 transition-transform transition-colors duration-800"
                                onClick={openBlessedTasela}   >
                                Blessed Tasela
                                <AiOutlineLinkedin
                                    size={20}
                                    className="flex items-center justify-center text-purple-500 ml-2" />
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </section >
    )
}