import react from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";
import { pages } from "/content/content.jsx";

const CopyRight = ({title, text1}) => {
    return(
        <section className="banner w-full bg-sage h-10 flex gap-x-4 justify-center px-6 items-center">
            <div className="text-creamy flex gap-x-2">
                {/* <FaEnvelope /> */}
                <p className="text-creamy text-[11px] md:text-sm">{title}</p>
            </div>
            <div className="text-creamy flex gap-x-2">
                {/* <FaPhoneAlt /> */}
                <p className="text-creamy text-[11px] md:text-sm">{text1}</p>
            </div>
        </section>
    )
}

export default CopyRight