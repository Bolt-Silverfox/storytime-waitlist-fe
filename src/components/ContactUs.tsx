import React from "react";
import postimage from "../assets/postImg.png";
import envelop from "../assets/Envelop.png";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10 px-4">

      <div className="relative flex flex-col lg:flex-row items-start justify-center gap-10 w-full max-w-5xl">

        <div className="hidden lg:block w-[200px] absolute left-0 top-40">
        
          <img src={postimage} alt="Mailbox" className="w-full h-auto" />
        </div>

        <form className="w-full max-w-md mx-auto flex flex-col gap-4 z-10">
          <input
            type="text"
            placeholder="Enter your full name"
            className="px-5 py-3 rounded-full border border-gray-300 text-sm focus:outline-orange-400"
          />

          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 rounded-full border border-gray-300 text-sm focus:outline-orange-400"
          />

          <textarea
            placeholder="Enter your message here...."
            className="px-5 py-3 h-36 rounded-xl border border-gray-300 text-sm resize-none focus:outline-orange-400"
          />

            <button
                className="mx-auto py-3 w-100 bg-[#EC4007] hover:bg-[#B53305] text-white rounded-full text-lg transition"
                >
                Submit
            </button>

        </form>

        <div className="hidden lg:block w-[280px] absolute right-0 top-0">
          <img src={envelop} alt="Envelope" className="w-full h-auto" />
        </div>
      </div>

      <div className="mt-24 flex flex-col lg:flex-row items-center justify-center gap-16 text-center">
        <div>
          <div className="text-lg font-medium mb-1">📧 Email</div>
          <div className="text-gray-700">Storytime@mail.org</div>
        </div>

        <div>
          <div className="text-lg font-medium mb-1">📞 Phone</div>
          <div className="text-gray-700">+1 (765) 765 7656</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
