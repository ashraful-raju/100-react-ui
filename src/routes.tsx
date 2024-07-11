import { RouteObject } from "react-router-dom";
import { UserInput, ProfileCard, ShoppingCard } from "./pages";

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
];