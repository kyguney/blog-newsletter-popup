"use client";

import { useState } from "react";
import Image from "next/image";
import CloseIcon from "../public/close.svg";

interface NewsletterPopupProps {
  onClose?: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if email is filled out
    if (email.trim() === "") {
      setErrorMessage("Email is required.");
      return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
      setErrorMessage(
        "Please write your email in this format: example@email.com.",
      );
      return;
    }
    // Store email in local storage (replace with your actual data storage logic)
    localStorage.setItem("newsletterEmail", email);
    localStorage.setItem("newsletterSubmitted", "true");
    setShowSuccess(true);
    setErrorMessage("");
  };

  const validateEmail = (email: string) => {
    // Basic email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="relative m-4 max-w-[484px] rounded-lg bg-white p-6 shadow-lg">
        {showSuccess ? (
          <div className="flex w-full flex-col items-center gap-4">
            <Image
              src="/thank-you.png"
              alt="Thank you for subscribing!"
              width={200}
              height={137}
            />
            <div className="w-full">
              <h2 className="mb-2 text-lg font-bold">Perfect, it worked!</h2>
              <p className="text-gray-700">
                Thank you for signing up for our newsletter. Be excited, many
                exciting strategies and tips await you soon from the world of
                psychology and psychotherapy!
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full flex-col gap-4 text-left sm:flex-row">
              <Image
                className="hidden h-[100px] w-[100px] sm:block"
                src="/newsletter-desktop.png"
                alt="Newsletter Desktop"
                width={100}
                height={100}
              />
              <Image
                className="block w-full sm:hidden"
                src="/newsletter-mobile.png"
                alt="Newsletter Mobile"
                width={300}
                height={80}
              />
              <div className="w-full">
                <h2 className="mb-2 text-lg font-bold">Are you stressed?</h2>
                <p className="text-gray-700">
                  Sign up now and we&apos;ll send you supportive information on
                  stress management.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage("");
                }}
                placeholder="beispiel@email.de"
                className={`mb-2 w-full rounded-lg border px-3 py-2 focus:border-blue-700 ${errorMessage !== "" ? "border-red-300" : "border-pebble"}`}
              />
              {errorMessage && (
                <p className="mb-2 text-left text-sm text-red-500">
                  {errorMessage}
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-lg bg-moss-green px-4 py-2 font-medium text-white hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </>
        )}
        <button
          onClick={onClose}
          className="flex w-full justify-center px-4 py-2 font-medium sm:hidden"
        >
          Close
        </button>
        <button
          onClick={onClose}
          className="absolute right-6 top-6 hidden sm:flex"
        >
          <Image priority src={CloseIcon} alt="Close Popup" />
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
