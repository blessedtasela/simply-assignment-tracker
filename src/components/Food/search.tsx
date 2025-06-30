import { useId } from "react";
import { Food } from "../../store/use-store";

export type TSearch = {
    setSearch: React.Dispatch<React.SetStateAction<Food[]>>;
    myFoods: Food[];
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ setSearch, myFoods, input, setInput }: TSearch) => {

    const inputId = useId();

    const handleSearch = (val: string) => {
        if (val.startsWith(" ")) {
            console.log("i am trimmed")
            val = val.trimStart();
        }

        setInput(val);
        const filteredFoods = myFoods.filter(food => food.name.toLowerCase().includes(val.toLowerCase()));
        setSearch(filteredFoods);
    }

    return (

        <div className="mt-4 flex justify-start">
            <input
                className="p-4 rounded-md min-w-48 w-full bg-gray-600 text-gray-100"
                placeholder="Find foods"
                type="text"
                id={inputId}
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
            />
        </div>

    )
}

export default Search;