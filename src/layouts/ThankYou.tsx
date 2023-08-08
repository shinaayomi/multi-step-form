import Image from "next/image";
import React from "react";

export default function ThankYou() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center py-16">

      <Image
        src="/assets/images/icon-thank-you.svg"
        className="w-16 h-16 md:w-20 md:h-20"
        alt="Thank you!"
        width={80}
        height={80}
        priority
      />
      <p className="text-marine-blue text-xl md:text-3xl font-ubuntu-bold my-4 md:my-6">Thank you!</p>
      <p className="text-cool-gray text-sm md:text-md">
        Thank you! Thanks for confirming your subscription! We hope you have
        fun using our platform. If you ever need support, please feel free to
        email us at support@loremgaming.com.
      </p>

    </div>
  );
}
