import react from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { pages } from "/content/content.js";

const Banner = ({phone, email}) => {
    return(
        <section className="banner w-full bg-olive h-10 flex gap-x-4 justify-end px-6 items-center">
            <div className="text-creamy flex gap-x-2">
                <FaInbox />
                <h2 className="text-creamy text-sm">{email}</h2>
            </div>
            <div className="text-creamy flex gap-x-2">
                <FaPhoneAlt />
                <h2 className="text-creamy text-sm">{phone}</h2>
            </div>
        </section>
    )
}

export default Banner