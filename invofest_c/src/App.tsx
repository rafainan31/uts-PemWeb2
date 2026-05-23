import { BrowserRouter, Route, Routes } from "react-router-dom";
import Competition from "./pages/Competition";
import Homepage from "./pages/Homepage";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardIndex from "./dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryIndex from "./pages/dashboard/category/CategoryIndex";
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";
import EventIndex from "./pages/dashboard/event/EventIndex";
import EventCreate from "./pages/dashboard/event/EventCreate";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import BiodataIndex from "./pages/dashboard/BiodataIndex";
import CategoryUpdate from "./pages/dashboard/category/CategoryUpdate";
import PembicaraUpdate from "./pages/dashboard/pembicara/PembicaraUpdate";
import EventUpdate from "./pages/dashboard/event/EventUpdate";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardIndex />} />
            <Route path="/dashboard/biodata" element={<BiodataIndex />} />
            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route
              path="/dashboard/category/create"
              element={<CategoryCreate />}
            />
            <Route
              path="/dashboard/category/edit/:id/"
              element={<CategoryUpdate />}
            />
            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route
              path="/dashboard/pembicara/create"
              element={<PembicaraCreate />}
            />
            <Route path="/dashboard/pembicara/edit/:id/" element={<PembicaraUpdate />}></Route>
            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route
              path="/dashboard/event/create"
              element={<EventCreate />}
            />
            <Route path="/dashboard/event/edit/:id/" element={<EventUpdate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
