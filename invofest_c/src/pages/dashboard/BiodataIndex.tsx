import { useState } from "react";
import gueh from "../../assets/gueh.jpeg";
import {
  Mail,
  GraduationCap,
  User,
  BadgeCheck,
} from "lucide-react";

type Biodata = {
  id: number;
  nim: string;
  name: string;
  role: string;
  email: string;
  kelas: string;
  image: string;
};

export default function BiodataIndex() {
  const [biodata] = useState<Biodata[]>([
    {
      id: 1,
      nim: "24090095",
      name: "Rafa Intinanzah Wibisono",
      role: "Fullstack Developer",
      kelas: "4C",
      email: "rafaintinanzahwibisono@gmail.com",
      image: gueh,
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-red-100 p-6 flex items-center justify-center">
      {biodata.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 border border-white"
        >
          {/* IMAGE */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl font-bold">
                {item.name}
              </h1>

              <p className="text-lg text-gray-200 mt-1">
                {item.role}
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-4xl font-extrabold text-gray-800">
                Biodata
              </h2>

              <div className="w-24 h-1 bg-red-500 rounded-full mt-3"></div>
            </div>

            <div className="space-y-5">
              {/* NIM */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl hover:shadow-md transition">
                <div className="bg-red-100 p-3 rounded-xl">
                  <BadgeCheck className="text-red-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    NIM
                  </p>

                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.nim}
                  </h3>
                </div>
              </div>

              {/* KELAS */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <GraduationCap className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Kelas
                  </p>

                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.kelas}
                  </h3>
                </div>
              </div>

              {/* ROLE */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl hover:shadow-md transition">
                <div className="bg-green-100 p-3 rounded-xl">
                  <User className="text-green-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Role
                  </p>

                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.role}
                  </h3>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl hover:shadow-md transition">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Mail className="text-purple-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <h3 className="font-semibold text-gray-800 break-all">
                    {item.email}
                  </h3>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}