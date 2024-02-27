"use client"
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Context from "@/Context";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";


export default function RootLayout({ children }) {
  const { pathname } = usePathname();

  var privateRoutes = pathname.startsWith("/dashboard");
  return (
    <html lang="en">
      <body className="bg-gray-100">
<Context>
<div>
      {privateRoutes ? (
        <div
          style={{ fontFamily: "Inter" }}
          className="max-h-screen flex flex-col h-screen"
        >
          <div className="w-full">
            <Navbar />
          </div>
          <div className="flex flex-1">
            <Sidebar />
            <div className="overflow-y-auto flex-1 bg-gray-50 shadow-[inset_0px_0px_10px_rgba(56,56,56,0.2)] p-4">
              
                 
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* <NavBar /> */}
          {children}
        </div>
      )}

      {/* {!privateRoutes && <Footer />} */}
    </div>
</Context>
       
        {/* <Footer/> */}
      </body>
    </html>
  );
}
