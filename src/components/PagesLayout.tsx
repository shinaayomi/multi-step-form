import React, { useEffect, useState } from "react";
import AppNavBar from "./AppNavBar";
import PersonalInfo from "../layouts/PersonalInfo";
import SelectYourPlan from "../layouts/SelectYourPlan";
import PickAddOns from "../layouts/PickAddOns";
import FinishingUp from "../layouts/FinishingUp";
import ThankYou from "../layouts/ThankYou";

export default function PagesLayout() {
  const [step, setStep] = useState(0);

  const [monthPlan, setMonthPlan] = useState(1);
  const [yearPlan, setYearPlan] = useState(0);
  const [monthlyData, setMonthlyData] = useState({});
  const [yearlyData, setYearlyData] = useState({});
  const [switchPlan, setSwitchPlan] = useState(false);

  const [checkedProduct, setCheckedProduct] = useState<any>([]);
  const [checkedList, setCheckedList] = useState<any>([]);

  return (
    <div className="min-h-screen md:grid md:place-items-center">
      <div className="max-w-screen-lg w-full grid md:grid-cols-3 md:bg-white md:p-5 md:rounded-3xl">
        <div className="md:col-span-1 md:min-h-[680px]">
          <AppNavBar
            step={step}
            setStep={setStep}
            monthPlan={monthPlan}
            yearPlan={yearPlan}
            checkedList={checkedList}
            checkedProduct={checkedProduct}
          />
        </div>
        <div className="md:col-span-2 px-4 md:px-0">
          <div className="h-full relative md:static top-[-70px] md:top-0 bg-white rounded-2xl px-4 xl:px-20 md:px-10 md:py-10 py-5">
            {step === 0 && <PersonalInfo nextStep={setStep} />}
            {step === 1 && (
              <SelectYourPlan
                prevStep={setStep}
                nextStep={setStep}
                monthPlan={monthPlan}
                setMonthPlan={setMonthPlan}
                yearPlan={yearPlan}
                setYearPlan={setYearPlan}
                monthlyData={monthlyData}
                setMonthlyData={setMonthlyData}
                yearlyData={yearlyData}
                setYearlyData={setYearlyData}
                switchPlan={switchPlan}
                setSwitchPlan={setSwitchPlan}
              />
            )}
            {step === 2 && (
              <PickAddOns
                prevStep={setStep}
                nextStep={setStep}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
                checkedProduct={checkedProduct}
                setCheckedProduct={setCheckedProduct}
                switchPlan={switchPlan}
              />
            )}
            {step === 3 && (
              <FinishingUp
                prevStep={setStep}
                nextStep={setStep}
                changeBtn={setStep}
                monthlyData={monthlyData}
                yearlyData={yearlyData}
                switchPlan={switchPlan}
                setGetMonthlyData={setMonthlyData}
                setGetYearlyData={setYearlyData}
                setGetSwitchPlan={setSwitchPlan}
                checkedProduct={checkedProduct}
                setCheckedProduct={setCheckedProduct}
                // setGetCheckedList={setCheckedList}
                // getCheckedProduct={checkedProduct}
                // setGetCheckedProduct={setCheckedProduct}
              />
            )}
            {step === 4 && <ThankYou setStep={setStep} />}
          </div>
        </div>
      </div>
    </div>
  );
}
