import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Users } from "./pages/Users";
import { UserProfile } from "./pages/UserProfile";
import { NewUser } from "./pages/NewUser";
function App() {
  return (
    <>
      <BrowserRouter basename="/Admin">
        <div className="w-screen dark:bg-slate-900 min-h-screen">
          <div className="flex max-w-screen-2xl min-h-[100svh] m-auto dark:bg-slate-900 dark:text-white">
            <Sidebar />
            <div className="w-full lg:w-5/6">
              <Navbar />
              <div className="overflow-y-scroll h-[92vh] p-4">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/users/userProfile" element={<UserProfile />} />
                  <Route path="/newUser" element={<NewUser />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
