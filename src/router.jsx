import {createBrowserRouter} from "react-router-dom";
import { MissionaryWork } from "./pages/MissionaryWork";
import { App } from "./App";
import { Calendars } from "./pages/Calendars";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/calendars',
        element: <Calendars />
    },
    {
        path: '/missionarywork',
        element: <MissionaryWork />
    },
])

export default router;