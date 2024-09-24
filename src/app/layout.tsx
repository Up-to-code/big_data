import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/common/Navbar";
 
// Importing custom local fonts

// Setting metadata for the page
export const metadata: Metadata = {
  title: "Big Data",
  description: "Big Data proprietary data analytics",
};

// Main Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
         {/* ThemeProvider to manage light/dark mode, using system preferences */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={` antialiased`}>
            {/* Navbar component */}
            <Navbar />

            {/* Main content */}
            {children}
          </div>
        </ThemeProvider> 
      </body>
    </html>
  );
}
