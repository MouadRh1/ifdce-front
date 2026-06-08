import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout";
import Home from "../page/home";
import About from "../page/about";
import Authentification from "../page/authentification";
import Login from "../page/Login";
import DiplomaDashboard from "../page/DiplomaDashboard";
import CreateDiploma from "../page/CreateDiploma";
import { ProtectedRoute, AdminRoute } from "../component/ProtectedRoute";
import FieldDashboard from "../page/FieldDashboard";
// import About from "../page/about.jsx";
import Notfound from "../page/notfound.jsx";
import AdminDashboard from "../component/AdminDashboard";
import Contact from "../page/contact";
import Technicien from '../page/Technicien'; // Add this import
import TechnicienSuperieur  from "../page/TechnicienSuperieur.jsx"; 
import Techaidecomptable from "../page/techaidecomptable.jsx"; // Add this import
import LicenceProfessionnelle from "../page/LicenceProfessionnelle.jsx"; // Add this import
import VAEPage from "../page/VAEPage.jsx"; // Add this import
import MasterProfessionnel from "../page/MasterProfessionnel.jsx"; // Add this import
import Profile from "../page/Profile.jsx"; // Add this import

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/login",
                element: <Login />,
            },
             {
                path: "/admin-dashboard",
                element: <AdminDashboard />,
            },
             {
                path: "/Technicien",
                element: <Technicien />,
            },
            {
                path: "/authentification",
                element: <Authentification />,
            },
             {
                path: "/techaidecomptable",
                element: <Techaidecomptable />,
            },
            {
                path: "/TechnicienSuperieur",
                element: <TechnicienSuperieur />,
            },
            {
                path: "/LicenceProfessionnelle",
                element: <LicenceProfessionnelle />,
            },
            {
                path: "/VAEPage",
                element: <VAEPage />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/MasterProfessionnel",
                element: <MasterProfessionnel />,
            },
            // Protected Admin Routes
            {
                path: "/diploma-dashboard",
                element: (
                    <AdminRoute>
                        <DiplomaDashboard />
                    </AdminRoute>
                ),
            },
            {
                path: "/field-dashboard",
                element: (
                    <AdminRoute>
                        <FieldDashboard/>
                    </AdminRoute>
                ),
            },
            {
                path: "/create-diploma",
                element: (
                    <AdminRoute>
                        <CreateDiploma />
                    </AdminRoute>
                ),
            },
            {
        path: '*',
       element: <Notfound/>,
       },
            // Protected User Routes
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);