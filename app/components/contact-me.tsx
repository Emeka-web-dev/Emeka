"use client";
import { PageInfo } from "@/typings";

import emailJs from "@emailjs/browser";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  pageInfo: PageInfo;
};
export const ContactMe = ({ pageInfo }: Props) => {
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateID = process.env.NEXT_PUBLIC_EMAIL_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormInput((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailJs
      .send(
        serviceID,
        templateID,
        {
          user_name: formInput.name,
          user_email: formInput.email,
          user_phone: formInput.phone,
          message: formInput.message,
        },
        publicKey
      )
      .then(() => {
        setFormInput({
          email: "",
          message: "",
          name: "",
          phone: "",
        });
        toast.success("Message sent");
      })
      .catch(() => {
        toast.error("An Error occur");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="h-screen flex flex-col overflow-hidden text-left max-w-6xl px-4 mx-auto items-center">
      <h3 className=" uppercase tracking-[10px] text-gray-500 text-xl pt-20">
        Contact
      </h3>
      <div className="flex flex-col items-center justify-center h-full overflow-y-auto py-3 space-y-2 scrollbar-track-gray-400/20 scrollbar-thumb-[#cc5223]/80 scrollbar-thin scroll-smooth">
        <h4 className="text-2xl font-semibold text-center py-2">
          I have got just what you need.{" "}
          <span className="underline decoration-[#cc5223]">Lets talk</span>
        </h4>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="w-6 h-6 animate-pulse text-[#cc5223]" />
            <p className="text-lg">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="w-6 h-6 animate-pulse text-[#cc5223]" />
            <p className="text-lg">{pageInfo.email}</p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-4 md:mx-auto py-2 md:py-5 w-full px-3"
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={formInput.name}
              onChange={onChange}
              className="contactInput"
            />
            <input
              type="phone"
              placeholder="Phone"
              name="phone"
              required
              value={formInput.name}
              onChange={onChange}
              className="contactInput"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={formInput.email}
            onChange={onChange}
            className="contactInput"
          />
          <textarea
            placeholder="Message"
            name="message"
            required
            value={formInput.message}
            onChange={onChange}
            className="contactInput"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="bg-[#cc5223] py-3 px-10 font-bold text-base rounded-md disabled:bg-[#300f02]"
          >
            {isLoading ? "Loading" : "Button"}
          </button>
        </form>
      </div>
    </div>
  );
};
