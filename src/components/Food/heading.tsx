import { useState } from "react";

const Headings = () => {

    const imgs = [
        { img: "https://th.bing.com/th/id/OIP.LjVBYFCToUWTCy1hrZBs3QHaFC?w=275&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { img: "https://th.bing.com/th/id/OIP.AthOpTqi68zfVhjirrnQlQHaFG?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { img: "https://th.bing.com/th/id/OIP.p_9OqVnBvEvjrkiFsWzQLwHaFj?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { img: "https://th.bing.com/th/id/OIP.QRlnlD0sHv_Ii_ExO3QwhwHaEo?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    ];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [images, setImages] = useState(imgs);

    return (
        <div className="mt-20 flex flex-wrap gap-4 w-full h-20 p-4 justify-center overflow-x-auto" style={{overflow: "overlay"}}>
            {
                images.map(img => (
                    <img
                        key={img.img}
                        src={img.img}
                        alt="food image"
                        className="rounded-md max-w-[10rem] max-h-[5rem] object-cover"
                    />
                ))
            }
        </div>
    );
}

export default Headings;