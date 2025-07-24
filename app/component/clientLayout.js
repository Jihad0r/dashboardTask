'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Sidebar from './sidebar';
import { Provider } from "react-redux";
import { store } from "./store";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideNavbarOn = ['/login'];
  const showNavbar = !hideNavbarOn.includes(pathname);

  return (
    <Provider store={store}>
      <div>
        {showNavbar  && (
            <Sidebar />
        )}
        <main className="flex flex-col w-full">
          {showNavbar  && (
            <header>
              <Navbar />
            </header>
          )}
          <section className="flex-grow p-2 md:p-6 bg-gray-50 mt-15">{children}</section>
        </main>
      </div>
    </Provider>
  );
}
