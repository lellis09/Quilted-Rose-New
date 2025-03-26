import react from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { pages } from "/content/content.js";

const Banner = ({title}) => {
    return(
        <section className="banner w-full bg-olive h-10 flex">
            <div className="text-creamy flex">
                <FaInbox />
                <h2 className="text-creamy text-md">{title}</h2>
            </div>
            <div className="text-creamy flex">
                <FaPhoneAlt />
                <h2 className="text-creamy text-md">{title}</h2>
            </div>
        </section>
    )
}

export default Banner