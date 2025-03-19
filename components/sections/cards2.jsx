import react from "react";

const Cards2 = ({ title, text }) => {
    return(
        <main className="">
            <div className="border-2 border-olive w-full md:w-3/4 lg:w-82 bg-creamy h-40 flex flex-col justify-center px-8">
                <div></div>
                <h3 className="text-darkGreen text-xl text-left">{title}</h3>
                <p className="text-darkGreen text-md text-left">{text}</p>
            </div>
        </main>
    )
}

export default Cards2