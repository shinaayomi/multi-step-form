import React from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";
import PagesLayout from "../components/PagesLayout";
import Headings from "../components/Headings";

export default function PiickAddOns() {
  const [isSelected, setIsSelected] = React.useState(false);

  const cardList = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      amount: "1",
    },
    {
      title: "Large storage",
      subtitle: "Extra 1TB of cloud save",
      amount: "2",
    },
    {
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      amount: "2",
    },
  ]

  const user = {
    name: "Junior Garcia",
    avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
    username: "jrgarciadev",
    url: "https://twitter.com/jrgarciadev",
    role: "Software Developer",
    status: "Active",
  }

  return (
    <PagesLayout>
      <section className="h-full flex flex-col">
        <Headings
          title="Pick add-ons"
          subtitle="Add-ons help enhance your gaming experience"
        />
        {/* 
      <Checkbox
        aria-label={user.name}
        classNames={{
          base: cn(
            "inline-flex w-full max-w-md bg-content1",
            "hover:bg-content2 items-center justify-start",
            "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
            "data-[selected=true]:border-purplish-blue",
          ),
          label: "w-full",
        }}
        isSelected={isSelected}
        onValueChange={setIsSelected}
      >
        <div className="w-full flex justify-between gap-2">
          <User
            avatarProps={{ size: "md", src: user.avatar }}
            description={
              <Link isExternal href={user.url} size="sm">
                @{user.username}
              </Link>
            }
            name={user.name}
          />
          <div className="flex flex-col items-end gap-1">
            <span className="text-tiny text-default-500">{user.role}</span>
            <Chip color="success" size="sm" variant="flat">
              {user.status}
            </Chip>
          </div>
        </div>
      </Checkbox> */}
        <div className="grid gap-4">
          {cardList.map((picks, index) => (
            <label key={index} className="flex items-center gap-4 border border-light-gray hover:border-purplish-blue rounded-lg md:p-4 p-3 cursor-pointer">
              <input type="checkbox" name="" id="" className="h-4 w-4" style={{ accentColor: "var(--purplish-blue)" }} />
              <div className="flex-1">
                <p className="text-marine-blue font-ubuntu-bold">{picks.title}</p>
                <p className="text-cool-gray text-xs font-ubuntu-medium">{picks.subtitle}</p>
              </div>
              <div className="text-purplish-blue text-xs font-ubuntu-medium">
                +${picks.amount}/mo
              </div>
            </label>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto">
          <button className="text-cool-gray hover:text-marine-blue font-ubuntu-medium">
            Go Back
          </button>
          <button className="h-12 w-[120px] text-white text-sm bg-marine-blue font-ubuntu-medium rounded-xl">
            Next Step
          </button>
        </div>
      </section>
    </PagesLayout>
  );
}
