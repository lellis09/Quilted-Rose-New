import react from "react";

const Column1 = ({title, text1, text2, text3, className = "", children}) => {
    return(
        <main className={`flex flex-col justify-end items-center pt-6 pb-16 ${className}`}>
            <h2 className="text-darkGreen text-5xl text-center py-10 header">{title}</h2>
            <p className="text-center w-[85%] xl:w-1/2 text-lg pb-6">{text1}</p>
            <p className="text-center w-[85%] xl:w-1/2 text-lg pb-6">{text2}</p>
            <p className="text-center w-[85%] xl:w-1/2 text-lg">{text3}</p>
            {children} {/* This allows you to pass in other components, like Bullet */}
        </main>
    )
}

export default Column1