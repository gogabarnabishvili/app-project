import AddExpense from "./component/add-expense/AddExpense";
import Filter from "./component/filter/Filter";
import SignUp from "./component/sign-up/SignUp";
import SignIn from "./component/sign-in/SignIn";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Filter" element={<Filter />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/edit-expense/:id" element={<AddExpense />} />
        </>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
