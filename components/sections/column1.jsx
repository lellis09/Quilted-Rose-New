import react from "react";

const Column1 = ({title, text, textB}) => {
    return(
        <main className="flex flex-col justify-end items-center pt-6 pb-16">
            <h2 className="text-darkGreen text-4xl text-center py-10">{title}</h2>
            <p className="text-darkGreen text-center md:w-1/2 text-xl pb-6">{textB}</p>
            <p className="text-darkGreen text-center md:w-1/2 text-xl">{text}</p>
        </main>
    )
}

export default Column1