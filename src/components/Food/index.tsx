import { useState } from "react";
import { Food, foods } from "../../store/use-store";
import Headings from "./heading";
import Foods from "./foods";
import Search from "./search";
import SearchResult from "./search-result";

const FoodIndex = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [myFoods, setMyFoods] = useState<Food[]>(foods);
    const [search, setSearch] = useState<Food[]>([]);
    const [input, setInput] = useState<string>("");

    return (
        <div className="shadow-lg text-xl font-sans text-white bg-gray-950 h-screen h-full w-full">
            <div className="text-center p-8">
                <Headings />

                <div className="mt-4 w-12 mx-auto border-2 p-1 bg-purple-500 rounded-lg border-purple-500"></div>
                <div className="text-center mt-8 text-gray-400 text-sm md:text-lg">
                    <p className="text-md">
                        This app is a food discovery and search platform where users can easily browse and search through a list of
                        food items.
                    </p>
                    <div className="flex-col justify-start">
                        <Search setSearch={setSearch}
                            myFoods={myFoods}
                            input={input}
                            setInput={setInput} />

                        <SearchResult
                            search={search}
                            input={input} />

                        <Foods myFoods={myFoods} />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default FoodIndex;