import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { stringify } from "superjson";

export default function Backend() {
  // const createduser = api.user.createUser.useQuery();
  // const createUser = api.user.createUser.useQuery();

  // const { data: firstData, isLoading: queryLoading } =
  //   api.user.getFirst.useQuery();
  // if (queryLoading) {
  //   return <div>Loading</div>;
  // }

  // return (
  //   <div>
  //     <div>BACKEND STUFF</div>
  //     {stringify(firstData)}
  //   </div>
  // );

  // const { data: fileData, isLoading: fileLoading } = api.file.fileUploadExample.useQuery();
  // if (fileLoading){
  //     return(
  //         <div>Uploading File...</div>
  //     );
  // }

  // return (
  //     <div>
  //         <div>BACKEND STUFF</div>
  //         {stringify(fileData)}
  //     </div>
  // );
}
