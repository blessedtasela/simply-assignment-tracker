export default function About() {
    return (
        <div className="shadow-lg text-xl font-sans text-white bg-gray-950 h-screen h-full w-full">
            <div className="p-8 py-48">
                <p className="text-2xl md:text-4xl font-sans text-center mb-4 font-bold">
                    About the App
                </p>
                <div className="mt-4 w-12 mx-auto border-2 p-1 bg-purple-500 rounded-lg border-purple-500"></div>
                <div className="text-center mt-8 text-gray-400 text-sm md:text-lg">
                    <p className="text-md">
                        Simple Assignment Tracker is a handy tool to help you organize and track your assignments and tasks efficiently.
                        Built with ease of use in mind, this app provides a straightforward way to keep on top of deadlines and track your progress.
                    </p>
                    <div className="flex-col justify-start">
                        <p className="mt-4 flex justify-start">
                            Key features include:
                        </p>
                        <ul className="list-disc mt-4 text-left mx-auto">
                            <li className="mt-4">Quickly add and organize assignments with details like due dates and completion status</li>
                            <li className="mt-4">Mark tasks as completed and easily track your progress</li>
                            <li className="mt-4">Automatically save assignments to your browsers local storage, so your data is there when you return</li>
                            <li className="mt-4">Clear all assignments in one step if you need a fresh start</li>
                        </ul>
                        <p className="mt-4 text-justify">
                            The app is powered by modern technologies:
                            <span className="text-purple-500 font-semibold"> Zustand</span> manages assignment data,
                            <span className="text-purple-500 font-semibold"> TanStack Router</span> for smooth navigation,
                            <span className="text-purple-500 font-semibold"> React-Day-Picker</span> for user-friendly date selection,
                            <span className="text-purple-500 font-semibold"> Vite & React</span> ensures a fast and smooth experience, and
                            <span className="text-purple-500 font-semibold"> Tailwind CSS</span> provides a clean, responsive design.
                            The app's state management with Zustand allows for fast updates, and local storage means your assignments are automatically saved for the next time you open the app.
                        </p>
                        <p className="mt-4">
                            Simple Assignment Tracker is designed to keep you organized and make managing your tasks easy, so you can focus on what matters most.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
