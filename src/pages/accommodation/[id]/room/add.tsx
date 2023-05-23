import NavBar from "~/components/navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type RouterInputs, api } from "~/utils/api";
import { roomAddSchema } from "~/utils/apitypes";
import { useRouter } from "next/router";
import { dynamicRouteID } from "~/utils/helpers";
import { useEffect } from "react";
import Link from "next/link";
import bgpic from "public/images/bg-05.png";

export default function AddRoom() {
  const { shouldReturn, id } = dynamicRouteID(useRouter());

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RouterInputs["room"]["add"]>({
    resolver: zodResolver(roomAddSchema),
    defaultValues: {
      accommodationId: "",
    },
  });

  useEffect(() => {
    setValue("accommodationId", id);
  }, [id, setValue]);

  const addRoom = api.room.add.useMutation();

  return (
    <div className="">
      <img
        className="absolute bg-cover bg-fixed bg-center"
        src={bgpic.src}
        alt="background"
      />

      <div className="absolute inset-x-0 flex h-screen items-center justify-center">
        <div className="w-1/3 rounded-xl bg-white px-10 py-10">
          <div className="item-center flex justify-center px-2 pb-0 pt-0 drop-shadow-md">
            <h1 className="text-3xl font-bold text-blue-700">Add Room</h1>
          </div>

          <div className="flex justify-center pb-6 drop-shadow-md">
            <p className="text-sm italic text-gray-400"></p>
          </div>

          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(
              (d) => {
                addRoom.mutate(d);
                window.location.replace(`/accommodation/${id}`);
              },
              (error) => {
                console.log(error);
              },
            )}
          >
            <div className="flex flex-col space-y-2.5">
              <div>
                <input
                  className="w-full rounded-xl px-2 py-2 shadow shadow-gray-400/100"
                  placeholder="Price"
                  pattern="[0-9]+"
                  type="number"
                  {...register("price", { valueAsNumber: true })}
                  required
                ></input>
              </div>
              <div>
                <input
                  className="w-full rounded-xl px-2 py-2 shadow shadow-gray-400/100"
                  placeholder="Number of Beds"
                  pattern="[0-9]+"
                  type="number"
                  {...register("num_of_beds", { valueAsNumber: true })}
                  required
                ></input>
              </div>
              {/* yung tatlong dropdown */}
              <div>
                <h2 className="form-h2">Availability</h2>
                <select
                  className="form-dropdown peer"
                  placeholder="Type"
                  {...register("occupied", {
                    setValueAs: (value) => {
                      return value == "yes";
                    },
                  })}
                >
                  <option value="yes">Occupied</option>
                  <option value="no">Unoccupied</option>
                </select>
              </div>
              <div>
                <h2 className="form-h2">Airconditioning</h2>
                <select
                  className="form-dropdown peer"
                  placeholder="Type"
                  {...register("with_aircon", {
                    setValueAs: (value) => {
                      return value == "yes";
                    },
                  })}
                >
                  <option value="yes">With</option>
                  <option value="no">Without</option>
                </select>
              </div>
              <div>
                <h2 className="form-h2">Utilities</h2>
                <select
                  className="form-dropdown peer"
                  placeholder="Type"
                  {...register("with_utilities", {
                    setValueAs: (value) => {
                      return value == "yes";
                    },
                  })}
                >
                  <option value="yes">With</option>
                  <option value="no">Without</option>
                </select>
              </div>
            </div>
            <br />
            <div>
              <div className="py-2">
                <button className="group relative flex w-full justify-center rounded-full bg-p-dblue px-4 py-2 font-bold text-white shadow shadow-gray-400/100">
                  Confirm
                </button>
              </div>

              <div>
                <Link href={`/accommodation/${id}`}>
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
}