import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AuthLayout() {
    return (
       <> 
        <Header/>
        <div className="grid grid-cols-2 items-center min-h-screen">
            {/* kiri */}
            <div className="bg-gray-50 h-screen flex flex-col items-center justify-center">
                <img
                    src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                    alt=""
                    className="w-96"
                />
                <h2>Informatika Vocational Festival</h2>
            </div>

                {/* kanan */}
             <div className="p-6">
                    <Outlet />
            </div>
        </div>
        </>
    )
}