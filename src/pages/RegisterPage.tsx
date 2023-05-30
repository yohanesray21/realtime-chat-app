import { Inter } from 'next/font/google';
import React from 'react';
import Github from '/public/Github.svg';
import Google from '/public/Google.svg';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const RegisterPage = () => {
  return (
    <div
      className={`flex min-h-screen min-w-full items-center justify-center ${inter.className}  bg-gray-900 text-white`}
    >
      <div className="flex w-96 flex-col gap-6 rounded-lg bg-gray-800 p-8 md:w-[576px] ">
        <div>
          <span className="text-xl font-bold">Create your account</span>
          <p className="pt-2.5 text-sm">
            Start your website in seconds. Already have an account?{' '}
            <Link href="" className="text-blue-500">
              Login here
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="s md:flex md:justify-between md:gap-5 ">
            <label className="flex flex-col gap-2 md:w-full">
              <span>Email</span>
              <input
                className="rounded-lg bg-gray-700 px-4 py-3"
                placeholder="name@example.com"
                type="email"
                autoFocus
              />
            </label>
            <label className="mt-5 flex flex-col gap-2 md:mt-0 md:w-full">
              <span>Full Name</span>
              <input
                className="rounded-lg bg-gray-700 px-4 py-3"
                placeholder="name@example.com"
                type="email"
                autoFocus
              />
            </label>
          </div>
          <div className="md: gap-5 md:flex md:justify-between">
            <label className="flex flex-col gap-2 md:w-full">
              <span>Password</span>
              <input
                className="rounded-lg bg-gray-700 px-4 py-3"
                placeholder="••••••••••"
                type="password"
              />
            </label>

            {/*  */}
            <label className="mt-5 flex flex-col gap-2 md:mt-0 md:w-full">
              <span> Profile Picture</span>
              <div className="rounded-lg border border-gray-700">
                <input
                  id="file"
                  type="file"
                  className="file: 
              w-full pr-2 file:mr-4
              file:rounded-l-lg file:border-none file:bg-gray-700 file:px-4
              file:py-2 file:text-white md:file:py-3 md:file:text-sm
              "
                />
              </div>
              <p
                className="mt-1 text-xs text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </label>
          </div>

          <button className="rounded-lg bg-blue-600 py-3">
            Create Account
          </button>

          <div className="relative">
            <div className="h-[1px] bg-gray-700"></div>
            <span className="absolute -top-3 left-[40%] bg-gray-800 px-6 ">
              or
            </span>
          </div>

          <div className="flex flex-col  gap-4">
            <button className="px-auto flex items-center justify-center gap-2 rounded-lg border border-gray-600 py-2.5">
              <Image src={Google} alt="Google" />
              Sign up with Google
            </button>
            <button className="px-auto flex items-center justify-center gap-2 rounded-lg border border-gray-600 py-2.5">
              <Image src={Github} alt="github" />
              Sign up with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
