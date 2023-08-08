import React from "react";
import PagesLayout from "../components/PagesLayout";
import Headings from "../components/Headings";

export default function FinishingUp() {
  return (
    <PagesLayout>
      <section className="h-full flex flex-col">
        <Headings
          title="Finishing up"
          subtitle="Double-check everything looks OK before confirming."
        />
        <article>
          <div className="bg-alabaster rounded-xl md:p-4 p-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-marine-blue font-ubuntu-medium">Arcade</p>
                <button className="text-cool-gray text-xs hover:text-purplish-blue underline">Change</button>
              </div>
              <div className="text-marine-blue font-ubuntu-bold">$9/mo</div>
            </div>
            <hr className="my-3" />
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <p className="text-cool-gray text-sm font-ubuntu-medium">Online</p>
                <p className="text-marine-blue text-sm">233</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  md:px-4 px-3 mt-5">
            <p>Total</p>
            <p className="text-purplish-blue text-lg font-ubuntu-bold">+12/mo</p>
          </div>

        </article>

        <div className="flex justify-between items-center mt-auto">
          <button className="text-cool-gray hover:text-marine-blue font-ubuntu-medium">
            Go Back
          </button>
          <button className="h-12 w-[120px] text-white text-sm bg-purplish-blue hover:bg-pastel-blue font-ubuntu-medium rounded-xl">
            Confirm
          </button>
        </div>
      </section>
    </PagesLayout>
  );
}
