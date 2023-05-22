import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import bgpic from "public/images/bg-01.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type RouterInputs, api } from "~/utils/api";
import { userEditSchema } from "~/utils/apitypes";

const EditProfile: NextPage = () => {
  const userSession = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userEditSchema),
  });

  const editUser = api.user.edit.useMutation({
    onSuccess: () => {
      window.location.replace("/profile");
    },
  });

  return (
    <div className="">
      {/* <img
        className="absolute bg-cover bg-fixed bg-center"
        src={bgpic.src}
        alt="background"
      /> */}
      <div className="absolute inset-x-0 flex h-screen items-center justify-center">
        <div className="w-fit rounded-xl bg-white px-10 py-10">
          <div className="item-center flex justify-center px-2 pb-0 pt-0 drop-shadow-md">
            <h1 className="text-3xl font-bold text-blue-700">Edit profile</h1>
          </div>

          <div className="flex justify-center pb-6 drop-shadow-md">
            <p className="text-sm italic text-gray-400"></p>
          </div>

          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit((d) => {
              console.log(d);
              editUser.mutate(d as RouterInputs["user"]["edit"]);
            })}
          >
            <div className="flex flex-col space-y-2.5">
              <div className="w-auto flex-row space-x-[2%]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-[70%] rounded-xl px-2 py-2 shadow shadow-gray-400/100"
                  {...register("first_name")}
                  defaultValue={userSession.data?.profile.first_name || ""}
                  required
                />
                <input
                  {...register("middle_name")}
                  type="text"
                  placeholder="M.I."
                  className="w-[28%] rounded-xl px-2 py-2 shadow shadow-gray-400/100"
                  defaultValue={userSession.data?.profile.middle_name || ""}
                />
              </div>
              <div className="w-auto flex-row space-x-[2%]">
                <input
                  {...register("last_name")}
                  type="text"
                  placeholder="Last Name"
                  className="w-[70%] rounded-xl px-2 py-2 shadow shadow-gray-400/100"
                  defaultValue={userSession.data?.profile.last_name || ""}
                  required
                />
                <input
                  {...register("Suffix")}
                  type="text"
                  placeholder="Suffix"
                  className="w-[28%] rounded-xl px-2 py-2 shadow shadow-gray-400/100"
                />
              </div>
              <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className="rounded-xl px-2 py-2 shadow shadow-gray-400/100"
                defaultValue={userSession.data?.profile.username || ""}
                required
              />
              {errors.username?.message && (
                <p>{errors.username?.message as string}</p>
              )}
              <input
                {...register("contact_number")}
                type="tel"
                placeholder="Contact Number"
                // minlength="8"
                // max="14"
                className="rounded-xl px-2 py-2 shadow shadow-gray-400/100"
                defaultValue={userSession.data?.profile.contact_number || ""}
                required
              />
              {errors.contact_number?.message && (
                <p>{errors.contact_number?.message as string}</p>
              )}

              <div className="flex justify-center rounded-xl px-2 py-2 shadow shadow-gray-400/100">
                <input
                  type="radio"
                  id="user"
                  value={"USER"}
                  {...register("type")}
                />
                <label className="px-2"> User </label>
                <input
                  type="radio"
                  id="landlord"
                  value={"LANDLORD"}
                  {...register("type")}
                />
                <label className="px-2"> Landlord </label>
                <br />
              </div>
            </div>
            <br />
            <div>
              <div className="py-2">
                <button className="group relative flex w-full justify-center rounded-full bg-p-dblue px-4 py-2 font-bold text-white shadow shadow-gray-400/100">
                  Save changes
                </button>
              </div>

              <div>
                <Link href="/profile">
                  <button className="group relative flex w-full justify-center rounded-full bg-slate-500 px-4 py-2 font-bold text-white shadow shadow-gray-400/100">
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;