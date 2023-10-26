import {createBrowserRouter} from "react-router-dom";
import { MissionaryWork } from "./pages/MissionaryWork";
import { App } from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/missionarywork',
        element: <MissionaryWork />
    },
])

export default router;