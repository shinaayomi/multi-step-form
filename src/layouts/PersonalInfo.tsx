import React from "react";
import PagesLayout from "../components/PagesLayout";
import Headings from "../components/Headings";

export default function PersonalInfo() {
  return (
    <PagesLayout>
      <Headings
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <label htmlFor="" className="block">
        Name
      </label>
      <input
        type="text"
        placeholder="Input your name"
        className="w-full border border-light-gray focus-visible:border-marine-blue rounded-lg py-3 px-3"
      />
    </PagesLayout>
  );
}
