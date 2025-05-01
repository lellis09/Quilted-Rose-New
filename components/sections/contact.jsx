"use client"
import react from "react";
import Image from "next/image";
import { pages } from "/content/content.jsx"
import Button from "../Button.js";



const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        setStatus('pending');
        setError(null);
        const myForm = event.target;
        const formData = new FormData(myForm);
        const res = await fetch('/__forms.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        });
        if (res.status === 200) {
            setStatus('ok');
        } else {
            setStatus('error');
            setError(`${res.status} ${res.statusText}`);
        }
    } catch (e) {
        setStatus('error');
        setError(`${e}`);
    }
};

const Contact = ({title}) => {
    return(
        <main className="flex flex-col md:flex-row bg-olive w-full md:h-[500px] h-full">
            <div className="relative w-full md:w-[40%] h-80 md:h-full  bg-darkGreen border-2 border-olive">
                <Image 
                    src={"/contact-pic.webp"}
                    alt="picture"
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={75}
                    // placeholder="blur"
                    className="absolute w-full h-full opacity-50 top-0 left-0"
                
                />
            </div>

    return (
        <div className="w-full md:max-w-md">
            <Card title="Leave Feedback">
                <form name="feedback" onSubmit={handleFormSubmit} className="flex flex-col gap-3 align-center">
                    <input type="hidden" name="form-name" value="feedback" />
                    <input name="name" type="text" placeholder="Name" required className="input" />
                    <input name="email" type="email" placeholder="Email (optional)" className="input" />
                    <input name="message" type="text" placeholder="Message" required className="input" />
                    <button className="btn" type="submit" disabled={status === 'pending'}>
                        Submit
                    </button>
                    {status === 'ok' && <Alert type="success">Submitted!</Alert>}
                    {status === 'error' && <Alert type="error">{error}</Alert>}
                </form>
            </Card>
        </div>
    );
            {/* <section className="flex flex-col bg-olive items-center px-10 gap-y-6 w-full h-[500px] md:w-[60%] justify-center">
                <h2 className="text-creamy text-5xl pt-6">{title}</h2>

                <form
                    name="contact"
                    method="POST"
                    action="/public/thank-you.html"
                    netlify-honeypot="bot-field"
                    className="w-full flex flex-col gap-y-4"
                    >
                    <input type="hidden" name="form-name" value="contact" />

                    <p className="hidden">
                        <label>
                        Don't fill this out: <input name="bot-field" />
                        </label>
                    </p>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="bg-creamy w-full h-12 rounded-md px-4"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="bg-creamy w-full h-12 rounded-md px-4"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="bg-creamy w-full h-40 rounded-md px-4 py-2 resize-none"
                        required
                    />
                    <Button type="submit" className="bg-blush w-48 self-center mt-2">
                        Get In Touch
                    </Button>
                </form>
        </section> */}
            
        </main>
    )
}

export default Contact