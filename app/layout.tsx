import './globals.css';
import Navbar from '@/components/Navbar';


export const metadata = {
  title: 'Oda Guzmán | Software Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
