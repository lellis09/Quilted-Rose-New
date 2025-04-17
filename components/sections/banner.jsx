import react from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { pages } from "/content/content.js";

const Banner = ({phone, email}) => {
    return(
        <section className="banner w-full bg-olive h-10 flex gap-x-4 justify-end px-6 items-center overflow-hidden">
            <div className="text-creamy flex gap-x-2">
                <FaEnvelope />
                <p className="text-creamy text-[10px] sm:text-sm">{email}</p>
            </div>
            <div className="text-creamy flex gap-x-2">
                <FaPhoneAlt />
                <p className="text-creamy text-[10px] sm:text-sm">{phone}</p>
            </div>
        </section>
    )
}

export default Banner