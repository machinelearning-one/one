import { useState } from "react";
import { styleCat } from "../../utils/styleUtils";
import Section from "../core/Section";

interface SubscriptionProps {
  tag: string;
  description: string;
}

const SubscriptionForm = (props: SubscriptionProps) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(":)");
  const [messageStyle, setMessageStyle] = useState("text-gray-900");
  const handleSubmit = async () => {
    // send POST request to /api/subscribe with email
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    const response = await fetch("/api/subscribe", requestOptions);
    const data = await response.json();
    if (data.success) {
      setMessageStyle("text-green-500");
      setMessage(data.message);
      // After 2 seconds, clear success message
      setTimeout(() => {
        setMessageStyle("text-gray-900");
        setMessage(":)");
      }, 3000);
    } else {
      setMessageStyle("text-red-500");
      setMessage(data.message);
      // After 2 seconds, clear error message
      setTimeout(() => {
        setMessageStyle("text-gray-900");
        setMessage(":)");
      }, 3000);
    }
  };
  return (
    <Section className="mt-8 rounded-t-xl bg-gray-900 py-12 sm:py-16">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase text-gray-200">
          {props.tag}
        </p>

        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
          {props.description}
        </p>

        <form className="mt-8 sm:flex">
          <div className="sm:flex-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-2 border-gray-700 bg-gray-800 p-3 text-white"
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="mt-4 flex w-full items-center justify-between rounded-lg bg-blue-600 py-3 px-5 font-medium text-white hover:bg-blue-500 sm:mt-0 sm:ml-4 sm:w-auto"
          >
            Subscribe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-3 h-4 w-4 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
        <p className={styleCat(["mt-2 text-sm", messageStyle])}>{message}</p>
      </div>
    </Section>
  );
};

export default SubscriptionForm;
export type { SubscriptionProps };
