import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-white"
    >
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl  lg:mt-18">
          Contact Us
        </h1>

        <form>
          <div className="mb-4 mt-8">
            <label
              htmlFor="username"
              className="block text-gray-600 dark:text-white mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              // value={contact.username}
              // onChange={handleChange}
              required
              autoComplete="on"
              className="w-full p-2 border-grey border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 dark:text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              autoComplete="on"
              // value={contact.email}
              // onChange={handleChange}
              required
              placeholder="Email"
              className="w-full p-3 border-grey border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-3 text-gray-600 dark:text-white"
            >
              message
            </label>
            <textarea
              name="message"
              id="message"
              autoComplete="off"
              // value={contact.message}
              // onChange={handleChange}
              required
              cols="30"
              rows="6"
              className="w-full p-3 border-2 border-grey rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            // className="inline-flex items-center gap-2 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            className="w-full py-3 border mt-4 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
