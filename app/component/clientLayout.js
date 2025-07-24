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
      <div className={`grid ${pathname==='/login'?"":"grid-cols-[70px_1fr] md:grid-cols-[150px_1fr]"} min-h-screen`}>
        {showNavbar  && (
          <aside className="sticky top-0 h-screen bg-gray-100 shadow-3xl">
            <Sidebar />
          </aside>
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
