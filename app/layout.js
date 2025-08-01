import ClientLayout from './component/clientLayout';
import './globals.css';
export const metadata = {
  title: 'Dashboard',
  description: '...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
