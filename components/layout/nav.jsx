import react from "react";
import Link from "next/link";

const Nav = () => {
    return(
        <main className="flex gap-x-12 py-4">
            <Link href={"/#"} className="text-md text-darkGreen">Home</Link>
            <Link href={"/#"} className="text-md text-darkGreen">About</Link>
            <Link href={"/#"} className="text-md text-darkGreen">Services</Link>
            <Link href={"/#"} className="text-md text-darkGreen">Resources</Link>
            <Link href={"/#"} className="text-md text-darkGreen">FAQ</Link>
            <Link href={"/#"} className="text-md text-darkGreen">Contact</Link>
            
        </main>
    )
}

export default Nav