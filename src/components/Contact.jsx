const Contact = () => {
  return (
    <div
      id="contacts"
      className="flex min-w-full min-h-[70vh] items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <h1
          className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
            text-4xl md:text-5xl "
        >
          Get in Touch
        </h1>

        <p className="text-sm md:text-base text-pretty text-gray-400 px-10 text-center py-5">
          Want to chat? send me an e-mail through this button and ill respond
          whenever i can.
        </p>

        <a
          href=""
          className="text-nowrap rounded-lg bg-black border border-indigo-600 text-lg font-bold text-white shadow-lg shadow-indigo-700 px-5 py-3 transition-all duration-300
          hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        > Contact Me!</a>
      </div>
    </div>
  );
};

export default Contact;
