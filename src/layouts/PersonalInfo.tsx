import React, { useState } from "react";
import PagesLayout from "../components/PagesLayout";
import Headings from "../components/Headings";

export default function PersonalInfo() {
  const [inputValues, setInputValues] = useState(
    {
      userName: "",
      email: "",
      phoneNumber: "",
    }
  );

  const handleUserName = (e: any) => {
    setInputValues({ ...inputValues, userName: e.target.value })
  }

  const handleEmail = (e: any) => {
    setInputValues({ ...inputValues, email: e.target.value })
  }

  const handlePhoneNumber = (e: any) => {

    setInputValues({ ...inputValues, phoneNumber: e.target.value.replace(/[^0-9]/g, '') })
  }

  const handleSubmit = () => {

  }

  return (
    <PagesLayout>
      <form onSubmitCapture={handleSubmit} className="h-full flex flex-col">
        <Headings
          title="Personal info"
          subtitle="Please provide your name, email address, and phone number."
        />

        <div className="flex justify-between mb-1">
          <label htmlFor="" className="text-sm text-marine-blue font-ubuntu-medium">
            Name
          </label>
          <label className="text-sm text-strawberry-red font-ubuntu-medium" >This field is required</label>
        </div>
        <input
          type="text"
          value={inputValues.userName}
          onChange={handleUserName}
          placeholder="e.g  Stephen King"
          className="w-full text-marine-blue font-ubuntu-medium border border-light-gray focus-visible:border-purplish-blue rounded-lg py-3 px-3 mb-6"
        />

        <div className="flex justify-between mb-1">
          <label htmlFor="" className="text-sm text-marine-blue font-ubuntu-medium">
            Email Address
          </label>
          <label className="text-sm text-strawberry-red font-ubuntu-medium" >This field is required</label>
        </div>
        <input
          type="email"
          value={inputValues.email}
          onChange={handleEmail}
          placeholder="e.g  stephenking@lorem.com"
          className="w-full text-marine-blue font-ubuntu-medium border border-light-gray focus-visible:border-purplish-blue rounded-lg py-3 px-3 mb-6"
        />
        <div className="flex justify-between mb-1">
          <label htmlFor="" className="block text-sm text-marine-blue font-ubuntu-medium mb-1">
            Phone Number
          </label>
          <label className="text-sm text-strawberry-red font-ubuntu-medium" >This field is required</label>
        </div>
        <input
          type="text"
          value={inputValues.phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="e.g  +1 234 567 890"
          className="w-full text-marine-blue font-ubuntu-medium border border-light-gray focus-visible:border-purplish-blue rounded-lg py-3 px-3 mb-6"
        />
        <div className="text-end mt-auto">
          <button className="h-12 w-[120px] text-white text-sm bg-marine-blue font-ubuntu-medium rounded-xl">
            Next Step
          </button>
        </div>
      </form>
    </PagesLayout>
  );
}
