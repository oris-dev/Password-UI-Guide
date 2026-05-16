import '../src/styles/globals.css';
import StoreProvider from '../src/components/StoreProvider';

export const metadata = {
  title: 'Password Coach',
  description: 'An informative Password Coach interface for non-technical users.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
