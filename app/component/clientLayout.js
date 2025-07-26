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
      <div className={`block ${pathname ==='/login'?"":"lg:grid grid-cols-[150px_1fr]"} min-h-screen`}>
        {showNavbar  && (
            <Sidebar />
        )}
        <div></div>
        <main className=" md:mb-2 mb-12">
          {showNavbar  && (
            <header>
              <Navbar />
            </header>
          )}
          <section className="flex-grow p-6 mt-15">{children}</section>
        </main>
      </div>
    </Provider>
  );
}
