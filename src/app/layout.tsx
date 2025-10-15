import React from 'react';
import '../index.css';
export const metadata = {
  title: 'EduContent Generator',
  description: 'Create high-quality educational materials in seconds'
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">
      <body>{children}</body>
    </html>;
}