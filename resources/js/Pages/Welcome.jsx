import Button from "@/Components/Button";
import Dropdown from "@/Components/Dropdown";
import ShowHide from "@/Components/ShowHide";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };
    const [isShow, setIsShow] = useState(null);
    const data = [
        {
            title: "Why choose us?",
            desr: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis iusto eum odit voluptatum odio ut. Esse, inventore
                    obcaecati sequi eaque consequatur, quo alias distinctio
                    dolor, aut repudiandae aliquid rerum consequuntur? Ex
                    aliquid non minus corrupti, dignissimos sequi molestiae
                    omnis dolorem fugit dolores assumenda accusantium delectus
                    iure fugiat odit commodi quia, deserunt accusamus aliquam
                    eveniet ad!`,
        },
        {
            title: "How we work?",
            desr: `Exaliquid non minus corrupti, dignissimos sequi molestiae
                    omnis dolorem fugit dolores assumenda accusantium delectus
                    iure fugiat odit commodi quia, deserunt accusamus aliquam
                    eveniet ad!`,
        },
    ];
    return (
        <>
            <Head title="Welcome" />
            <div className="mx-auto max-w-xl">
                <h1 className="text-center text-5xl font-bold my-6">Digital Home It</h1>
                {data.map((item, index) => {
                    return (
                        <ShowHide key={index} index={index} isShow={isShow} setIsShow={setIsShow} title={item.title}>
                            {item.desr}
                        </ShowHide>
                    );
                })}
            </div>
        </>
    );
}
