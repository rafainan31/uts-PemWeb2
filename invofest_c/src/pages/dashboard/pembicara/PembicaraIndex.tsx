import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Pembicara {
  id: number;
  name: string;
  role: string;
  image?: string;
}

export default function PembicaraIndex() {
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);

  const getPembicara = async () => {
    try {
      const response = await fetch("https://uts-backend-197igdykg-rafainan31s-projects.vercel.app/speakers");

      const data = await response.json();

      setPembicara(data);
    } catch (error) {
      console.log(error);
      alert("Gagal mengambil data pembicara");
    }
  };

  useEffect(() => {
    getPembicara();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus pembicara?");

    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/speakers/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message);
        return;
      }

      alert(result.message);
      getPembicara();
    } catch (error) {
      console.log(error);
      alert("Gagal menghapus pembicara");
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-8">
      <h1 className="text-5xl font-extrabold text-center mb-16">
        Narasumber Invofest
      </h1>

      <div className="flex justify-end mb-8">
        <Link
          to="/dashboard/pembicara/create"
          className="bg-red-800 hover:bg-red-900 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          + Tambah Pembicara
        </Link>
      </div>

      {pembicara.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {pembicara.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-full max-w-70 bg-white rounded-2xl shadow-lg overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-75 object-cover"
                  />
                ) : (
                  <div className="w-full h-75 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                <div className="text-center px-4 py-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Link
                  to={`/dashboard/pembicara/edit/${item.id}`}
                  className="px-6 py-3 border border-red-800 text-red-800 rounded-lg font-semibold hover:bg-red-50 transition"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-6 py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-800 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border rounded-2xl p-10 text-center">
          <h2 className="text-lg font-semibold">
            Belum ada pembicara
          </h2>
        </div>
      )}
    </div>
  );
}