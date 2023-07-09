import React from "react";

function SuccessModal() {
  return (
    <div
      className="text-center shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] rounded-[20px]
    p-5 sm:p-10 modalGradient text-white"
    >
      <h2 className="text-xl sm:text-4xl !leading-9 mb-5 sm:mb-10">
        Get in touch
      </h2>
      <p className="mb-4 mx-auto max-w-[320px]">
        Your message has been successfully sent, we will contact you soon!
      </p>
      <p>Thank you for choosing Nyoka!</p>
    </div>
  );
}

export default SuccessModal;
