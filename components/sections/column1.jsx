import react from "react";

const Column1 = ({title, text1, text2, text3, className = ""}) => {
    return(
        <main className={`flex flex-col justify-end items-center pt-6 pb-16 ${className}`}>
            <h2 className="text-darkGreen text-4xl text-center py-10">{title}</h2>
            <p className="text-darkGreen text-center md:w-1/2 text-xl pb-6">{text1}</p>
            <p className="text-darkGreen text-center md:w-1/2 text-xl">{text2}</p>
            <p className="text-darkGreen text-center md:w-1/2 text-xl">{text3}</p>
        </main>
    )
}

export default Column1