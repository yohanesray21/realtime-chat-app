import Image from 'next/image';
import { Inter } from 'next/font/google';
import RegisterPage from './RegisterPage';
import LoginPage from './Login';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}  bg-gray-900`}
    >
      <LoginPage />
    </main>
  );
}
