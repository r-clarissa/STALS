import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>STALS</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen bg-gradient-to-b from-[#174A79] to-[#8FB0DB]">
        {/* landing page whole screen content */}
        <div className="container flex flex-col gap-8 px-16 py-4">
          {/* header nav bar [logo name home about contact]*/}
          <div className="flex justify-between">
            {/* logo name */}
            <div className="flex p-5">
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                className="flex h-20 w-20 flex-col items-start rounded-full object-scale-down object-scale-down object-left p-4"
                alt="STALS Logo"
              />
              <h1 className="p-3 font-extrabold text-white sm:text-[2rem]">
                STALS
              </h1>
            </div>

            {/* home about contact */}
            <div className="flex justify-end text-white sm:text-[1rem]">
              <h4 className="p-10">Home</h4>
              <h4 className="p-10">About Us</h4>
              <h4 className="p-10">Contact</h4>
            </div>
          </div>

          {/* nagsslide yung description [description -> full name] */}

          {/* main content after header navbar [title subtitle get started button] */}
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Comfort At Its Best!
            </h1>

            <p className="container p-5 font-sans text-xl leading-normal tracking-wider text-white">
              You can search, get information, review, and <br />
              rate apartments, bed spaces, hotels, dormitories,
              <br /> and transient spaces in Los Baños.
            </p>

            {/* get started button */}
            <div className="flex flex-col items-center gap-2">
              <AuthShowcase />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <p className="text-start text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Get Started"}
      </button>
    </div>
  );
};
