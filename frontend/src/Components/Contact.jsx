import { useState } from "react"
import githubLightLogo from "../assets/github-mark-white.png"
import githubDarkLogo from '../assets/github-mark.png'
import linkedinLogo from "../assets/LI-In-Bug.png"
import emailjs from '@emailjs/browser';

export default function Contact() {
    const blankInput = {name: '', email: '', message: ''}
    const [formInput, setFormInput] = useState(blankInput);
    const [submitted, setSubmitted] = useState(false);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormInput({...formInput, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formInput.email)) {
            alert("Please enter a valid email address");
            return;
        }

        emailjs.sendForm('service_kv4ko7l', 'template_pf9k59e', event.target, {publicKey: 'dg-WLFnbO8MZ6DGqU'})
        .then(() => {
            setSubmitted(true);
            setFormInput(blankInput);
        }).catch((err) => {
            console.log('FAILED...', err.text);
        })

    }
    return (
        <div className="bg-white dark:bg-slate-800 py-24" id="Contact">
            <div className="max-w-4xl mx-auto">
                <h5 className="text-5xl text-center font-bold">✉️Contact</h5>
                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 my-6">
                    <div className="lg:w-full">
                        <p className="text-xl">Feel free to contact me through this form:</p>
                        {submitted ? (<p>Thanks for reaching out, I'll get back to you shortly</p>) : (
                            <form onSubmit={handleSubmit}>
                                <div className="my-2">
                                    <label htmlFor="name" className="font-bold">Name</label>
                                    <br/>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formInput.name}
                                        onChange={handleInput}
                                        required
                                        className="p-1 text-black border-2 rounded-lg border-gray-300"
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="email" className="font-bold">Email</label>
                                    <br/>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formInput.email}
                                        onChange={handleInput}
                                        required
                                        className="p-1 text-black border-2 rounded-lg border-gray-300"
                                    />
                                </div>
                                <div className="my-2 h-full">
                                    <label htmlFor="message" className="font-bold">Message</label>
                                    <br/>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formInput.message}
                                        onChange={handleInput}
                                        placeholder="Type message here"
                                        required
                                        className="block p-1 text-black border-2 rounded-lg border-gray-300 w-full resize-none"
                                    />
                                </div>
                                <button type="submit" className="ml-auto my-3 px-3 py-2 rounded-lg bg-blue-500 text-white hover:scale-110">Submit</button>
                            </form>
                        )}
                    </div>
                    <div className="lg:w-full flex lg:justify-end">
                        <div className="flex lg:block max-sm:flex-col gap-5">
                            <div className="flex flex-col items-center my-2">
                                <h6 className="text-2xl">Email📧</h6>
                                <p>jeroldshin02@gmail.com</p>
                            </div>
                            <div className="flex flex-col items-center my-2">
                                <h6 className="text-2xl">Location📍</h6>
                                <p>Sydney, Australia</p>
                            </div>
                            <div className="flex flex-col items-center my-2">
                                <h6 className="text-2xl">Github<span className="lg:hidden">:</span></h6>
                                <a href='https://github.com/jss02' rel="noreferrer" target="_blank" className="mb-2">
                                <img src={githubLightLogo} className="h-12 hidden dark:block" alt="github logo light"></img>
                                <img src={githubDarkLogo} className="h-12 dark:hidden" alt="github logo"></img>
                                </a>
                            </div>
                            <div className="flex flex-col items-center my-2">
                                <h6 className="text-2xl">Linkedin (unused)<span className="lg:hidden">:</span></h6>
                                <a href='https://www.linkedin.com/in/jerold-shin' rel="noreferrer" target="_blank"><img src={linkedinLogo} className="h-12" alt="linkedin logo"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
