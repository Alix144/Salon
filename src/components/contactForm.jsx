"use client";
import { useTranslations } from "next-intl";
import sendEmailAction from "@/app/serverActions/sendEmailAction";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const contactSection = useTranslations("contactSection");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (formData) => {
    setError("");
    setSuccess("");
    setLoading(true);
    if (name === "" || email === "" || message === "") {
      setError("Please fill all the fields!");
    } else {
      try {
        const response = await sendEmailAction(formData);
        setSuccess("Email sent successfuly!");
        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        setError(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (error !== "") {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }

    if (success !== "") {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }, [error, success]);

  return (
    <form action={sendEmail} className="md:w-1/2 max-w-2xl mx-auto space-y-6">
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={contactSection("input1")}
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={contactSection("input2")}
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none"
      />
      <textarea
        placeholder={contactSection("input3")}
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none"
      ></textarea>
      {loading ? (
        <button
          className="w-full bg-blue-100  px-6 py-3 rounded-lg shadow"
          disabled={loading}
        >
          Loading...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full bg-blue-200  px-6 py-3 rounded-lg shadow hover:bg-blue-300 duration-200"
          disabled={loading}
        >
          {contactSection("btn")}
        </button>
      )}

      {error && (
        <div className="px-5 py-3 w-56 fixed rounded-lg bottom-5 right-5 bg-red-400 text-white border border-red-600">
          <p>{error}</p>
        </div>
      )}

      {success && (
        <div className="px-5 py-3 w-56 fixed rounded-lg bottom-5 right-5 bg-green-300 text-black border border-green-600">
          <p>{success}</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
