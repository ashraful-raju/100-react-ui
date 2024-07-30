import { RouteObject } from "react-router-dom";
import {
    UserInput,
    ProfileCard,
    ShoppingCard,
    HoverMe,
    ContactUs,
} from "./pages";
import CakeRecipe from "./pages/recipe-card";

type RouteItem = RouteObject & {
    name: string;
    path: string;
};

export const routes: RouteItem[] = [
    { name: "Profile card", path: "/profile-card", element: <ProfileCard /> },
    {
        name: "Shopping card",
        path: "/shopping-card",
        element: <ShoppingCard />,
    },
    {
        name: "Animated user input",
        path: "/user-input",
        element: <UserInput />,
    },
    {
        name: "Hover Me Card",
        path: "/hoverMe-card",
        element: <HoverMe />,
    },
    {
        name: "Contact Us",
        path: "/contact-form",
        element: <ContactUs />,
    },
    {
        name: "Cake Recipe",
        path: "/recipe-card",
        element: <CakeRecipe />,
    },
];
