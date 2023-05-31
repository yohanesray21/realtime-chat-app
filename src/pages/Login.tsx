import { Inter } from 'next/font/google';
import React from 'react';
import Github from '/public/Github.svg';
import Google from '/public/Google.svg';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const LoginPage = () => {
  return (
    <div
      className={`flex min-h-screen min-w-full items-center justify-center ${inter.className}  bg-gray-900 text-white`}
    >
      <div className="flex w-96 flex-col gap-6 rounded-lg bg-gray-800 p-8 md:w-[576px] ">
        <div>
          <span className="text-xl font-bold">Welcome back</span>
          <p className="pt-2.5 text-sm">
            Start your website in seconds. Don’t have an account?{' '}
            <Link href="" className="text-blue-500">
              Register
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
            <label className="flex flex-col gap-2 md:w-full">
              <span>Password</span>
              <input
                className="rounded-lg bg-gray-700 px-4 py-3"
                placeholder="••••••••••"
                type="password"
              />
            </label>
          </div>

          <button className="rounded-lg bg-blue-600 py-3">Login</button>

          <div className="relative">
            <div className="h-[1px] bg-gray-700"></div>
            <span className="absolute -top-3 left-[45%] bg-gray-800 px-6 ">
              or
            </span>
          </div>

          <div className="flex flex-col  gap-4">
            <button className="px-auto flex items-center justify-center gap-2 rounded-lg border border-gray-600 py-2.5">
              <Image src={Google} alt="Google" />
              Login with Google
            </button>
            <button className="px-auto flex items-center justify-center gap-2 rounded-lg border border-gray-600 py-2.5">
              <Image src={Github} alt="github" />
              Login with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
