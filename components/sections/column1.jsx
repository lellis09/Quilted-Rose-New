import react from "react";

const Column1 = ({title, text, textB}) => {
    return(
        <main className="flex flex-col justify-center items-center">
            <h2 className="text-darkGreen text-2xl text-center">{title}</h2>
            <p className="text-darkGreen text-center md:w-1/2">{textB}</p>
            <p className="text-darkGreen text-center md:w-1/2">{text}</p>
        </main>
    )
}

export default Column1