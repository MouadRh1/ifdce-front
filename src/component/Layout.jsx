import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footers from "./footers"; // Make sure this import exists

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col pt-12">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footers /> {/* Make sure this is here */}
        </div>
    );
}