import { uppercase } from "../../helpers/helper";
import { Food } from "../../store/use-store";

export type TFood = {
    myFoods: Food[];
}
const Foods = ({ myFoods }: TFood) => {

    return (
        <>
            <ul className="list-disc mt-8 text-left mx-auto">
                {myFoods.map(food => (
                    <li className="mt-4" key={food.id}>
                        <span className="text-purple-500">{uppercase(food.name)}</span>
                        <span className="text-white"> - {food.description} </span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Foods;