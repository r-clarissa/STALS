import { useSession } from "next-auth/react";
import Image from "next/image";
import user from "public/images/def_user.png";
import { useState } from "react";

export default function Profile() {
  const { data: sessionData } = useSession();

  const fullName = `${sessionData?.profile.first_name ?? ""} ${
    sessionData?.profile?.middle_name ?? ""
  } ${sessionData?.profile.last_name ?? ""}
  ${sessionData?.profile.Suffix ?? ""}`;

  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <section className="sticky top-5 mr-5 flex h-min flex-col items-center space-y-2 whitespace-nowrap rounded-3xl bg-white p-14 font-medium shadow-xl">
        <div className="relative mb-2 ml-32 mr-32 mt-5 flex h-[10.5rem] w-[10.5rem]">
          <Image
            src={sessionData?.user.image ?? user.src}
            className="flex rounded-full object-contain"
            alt="User Photo"
            fill
          />
        </div>
        <div className="m-10 flex">
          <span className="text-3xl text-black">{fullName ?? "Guest"}</span>
        </div>
        <div className="m-10  flex ">
          <span className="text-xl text-black">
            {sessionData?.profile.type}
          </span>
        </div>

        <div className="flex grid h-48 grid-cols-2 place-content-center gap-3">
          <span className="text-xl text-black">Contact no:</span>
          <span className="text-xl text-black">
            {sessionData?.profile.contact_number}
          </span>
          <span className="text-xl text-black">Email Address:</span>
          <span className="text-xl text-black">{sessionData?.user.email}</span>
        </div>
        <div className="w-full">
          <button
            className="formConfirm bg-p-dviolet"
            onClick={() => setShowEdit(true)}
          >
            Edit Account
          </button>
        </div>
      </section>
    </>
  );
}