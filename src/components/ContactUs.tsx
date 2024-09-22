
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { sendEmail } from "@/utils/sendMail";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';

const notify1 = () => toast.success('Message successfully sent!');


function ContactUs() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();

  useEffect(()=>{
    if(loading === false){
      notify1()
    }
  }, [loading])

  

  const handelSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log(email);

    await sendEmail({
      from: email,
      name: name,
      subject: `{Message-ED services:${name}}`,
      body: message,
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="md:text-4xl text-3xl text-center mt-[50px]">Contact Us</h1>
      <div className="flex md:flex-row flex-col w-full mt-10 gap-4">
        <div className="flex-1">
          <div className="md:mx-[30px]  bg-transparent rounded-xl shadow-md p-8 flex flex-col gap-10">
            <h1 className="text-3xl text-color2 md:text-left text-center">
              Talk to specialist
            </h1>
            <Image alt="image" src="/spec.svg" width={400} height={400} />
            <p className="text-color2 md:w-[80% w-full text-center md:text-left">
              Chat with our specialists for more information about features,
              sizing, support plans, and consulting.
            </p>

            <Link href="https://api.whatsapp.com/send?phone=201557080199">
              <button className="bg-color3 text-color2 p-4 px-5 rounded-md md:w-[30%] w-full hover:scale-105">
                Chat Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-md p-8 flex flex-col gap-10">
          <h1 className="text-3xl text-color2 md:text-left text-center">
            Get in touch
          </h1>
          <p className="md:text-left text-center">
            Please let us know how we can and we will get back to you as soon as
            possible.
          </p>
          <form className="flex flex-col gap-3" onSubmit={handelSubmission}>
            <div>
              <label>
                Name <span className="text-red-900 font-bold">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md border bg-color1 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
            </div>
            <div>
              <label>
                Email Address <span className="text-red-900 font-bold">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md border bg-color1 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </div>
            <div>
              <label>
                Message <span className="text-red-900 font-bold">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 rounded-md border bg-color1 h-40 outline-none"
                required={true}
              />
            </div>
            <button
              type="submit"
              className={`bg-color3 text-color2 p-4 px-5 rounded-md w-full flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
              
              
            >
              <p>Submit</p>{" "}
              {loading && (
                <AiOutlineLoading3Quarters size={20} className="animate-spin" />
              )}
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default ContactUs;
