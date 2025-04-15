import react from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";
import { pages } from "/content/content.js";

const CopyRight = ({title, text1}) => {
    return(
        <section className="banner w-full bg-sage h-10 flex gap-x-4 justify-center px-6 items-center">
            <div className="text-creamy flex gap-x-2">
                {/* <FaEnvelope /> */}
                <h2 className="text-creamy text-sm">{title}</h2>
            </div>
            <div className="text-creamy flex gap-x-2">
                {/* <FaPhoneAlt /> */}
                <h2 className="text-creamy text-sm">{text1}</h2>
            </div>
        </section>
    )
}

export default CopyRight