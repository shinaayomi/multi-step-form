import React, { useEffect, useState } from "react";
import Headings from "../components/Headings";

interface IProps {
  nextStep: (e: number) => void;
}

type IInputValues =
  | {
      userName: string;
      email: string;
      phoneNumber: string;
    }
  | null
  | any;

export default function PersonalInfo({ nextStep }: IProps) {
  const [inputValues, setInputValues] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues({ ...inputValues, [name]: e.target.value });
    };

  // console.log("inputValues", inputValues);
  // console.log("JSON", JSON.stringify(inputValues));

  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleValidation = (e: any) => {
    e.preventDefault();

    if (!inputValues.userName) {
      setMessage("This field is required");
      return;
    }
    if (!inputValues.email) {
      setMessage("This field is required");
      return;
    }
    if (!regex.test(inputValues.email)) {
      setMessage("Invalid email address format");
      return;
    }
    if (!inputValues.phoneNumber) {
      setMessage("This field is required");
      return;
    }
    if (inputValues.phoneNumber.length !== 11) {
      setMessage("Your number must be 11");
      return;
    }

    nextStep(1);
    localStorage.setItem("personalInfo", JSON.stringify(inputValues));
  };

  // const personalInfoData = localStorage.getItem("personalInfo");

  // console.log("personalInfoData", JSON.parse(personalInfoData));

  useEffect(() => {
    const personalInfoData: IInputValues = localStorage.getItem("personalInfo");
    const parsedData = JSON.parse(personalInfoData);

    setInputValues((prev) => ({
      ...prev,
      ...parsedData,
    }));
  }, []);

  // console.log("inputValues", inputValues);

  return (
    <form className="h-full flex flex-col">
      <Headings
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />

      <div className="flex justify-between mb-1">
        <label
          htmlFor=""
          className="text-sm text-marine-blue font-ubuntu-medium"
        >
          Name
        </label>
        {inputValues.userName.length > 0 ? (
          ""
        ) : (
          <label className="text-sm text-strawberry-red font-ubuntu-medium">
            {message}
          </label>
        )}
      </div>
      <input
        type="text"
        value={inputValues?.userName}
        onChange={handleInputChange("userName")}
        placeholder="e.g  Stephen King"
        className="w-full text-marine-blue font-ubuntu-medium border border-light-gray focus-visible:border-purplish-blue rounded-lg py-3 px-3 mb-6"
      />

      <div className="flex justify-between mb-1">
        <label
          htmlFor=""
          className="text-sm text-marine-blue font-ubuntu-medium"
        >
          Email Address
        </label>
        {/* <label className="text-sm text-strawberry-red font-ubuntu-medium" >This field is required</label> */}
        {inputValues.email.length > 0 ? (
          ""
        ) : (
          <label className="text-sm text-strawberry-red font-ubuntu-medium">
            {message}
          </label>
        )}
        {inputValues.email.length > 0 && !regex.test(inputValues.email) ? (
          <label className="text-sm text-strawberry-red font-ubuntu-medium">
            {"Invalid email address format"}
          </label>
        ) : (
          ""
        )}
      </div>
      <input
        type="email"
        value={inputValues.email}
        onChange={handleInputChange("email")}
        placeholder="e.g  stephenking@lorem.com"
        className="w-full text-marine-blue font-ubuntu-medium border border-light-gray focus-visible:border-purplish-blue rounded-lg py-3 px-3 mb-6"
      />
      <div className="flex justify-between mb-1">
        <label
          htmlFor=""
          className="block text-sm text-marine-blue font-ubuntu-medium mb-1"
        >
          Phone Number
        </label>
        {/* <label className="text-sm text-strawberry-red font-ubuntu-medium" >This field is required</label> */}
        {inputValues.phoneNumber.length > 0 ? (
          ""
        ) : (
          <label className="text-sm text-strawberry-red font-ubuntu-medium">
            {message}
          </label>
        )}
        {inputValues.phoneNumber.length > 1 &&
        inputValues.phoneNumber.length !== 11 ? (
          <label className="text-sm text-strawberry-red font-ubuntu-medium">
            Your number must be 11
          </label>
        ) : (
          ""
        )}
      </div>
      <input
        type="text"
        value={inputValues.phoneNumber.replace(/[^0-9]/g, "")}
        onChange={handleInputChange("phoneNumber")}
        placeholder="e.g  +1 234 567 890"
        className="w-full text-marine-blue font-ubuntu-medium border border-light-gray focus-visible:border-purplish-blue rounded-lg py-3 px-3 mb-6"
      />
      <div className="text-end mt-auto">
        <button
          onClick={handleValidation}
          className="h-12 w-[120px] text-white text-sm bg-marine-blue font-ubuntu-medium rounded-xl"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
