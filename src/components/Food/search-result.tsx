import { Food } from "../../store/use-store";

export type TSearch = {
    search: Food[];
    input: string;
}

const SearchResult = ({ search, input }: TSearch) => {

    const highlightText = (text: string, searchTerm: string) => {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.split(regex).map((part, index) =>
            part.toLowerCase() === searchTerm.toLowerCase() ? (
                <mark key={index}>{part}</mark> // Provide a unique key here
            ) : part
        );
    };

    return (
        <div>
            {input && (
                <>
                    {search.length > 0 ? (
                        search.map((food) => (
                            <div key={food.id}>
                                <li className="mt-4">
                                    <span className="text-purple-500" key={food.id}>
                                        {highlightText(food.name, input)}
                                    </span>
                                    <span className="text-white">
                                        {" "}
                                        - {highlightText(food.description, input)}{" "}
                                    </span>
                                </li>
                            </div>
                        ))
                    ) : (
                        <p className="text-red-700 p-4">Sorry, no search result found</p>
                    )}
                </>
            )}
        </div>
    );
}

export default SearchResult;
