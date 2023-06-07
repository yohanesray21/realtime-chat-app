import { Inter } from 'next/font/google';
import RegisterPage from './RegisterPage';
import Sidebar from '@/components/Sidebar';
import Chat from '@/components/Chat';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center  justify-between p-24 text-white ${inter.className}  bg-gray-900`}
    >
      <div className="container flex min-h-[75vh] overflow-hidden rounded-md border border-white">
        <Sidebar />
        <Chat />
      </div>
    </main>
  );
}
