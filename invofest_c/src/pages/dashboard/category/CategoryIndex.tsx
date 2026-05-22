import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
}

export default function CategoryIndex() {
  const [categories, setCategories] =
    useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/categories"
      );

      const data = await response.json();

      setCategories(data);
    } catch (error) {
      console.log(error);

      alert("Gagal mengambil data category");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDelete = async (
    id: number
  ) => {
    const confirmDelete = confirm(
      "Yakin ingin menghapus category?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:3000/categories/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.message);

        return;
      }

      alert(result.message);

      getCategories();
    } catch (error) {
      console.log(error);

      alert("Gagal menghapus category");
    }
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Kategori
          </h1>

          <p>
            Daftar kategori event yang tersedia
          </p>
        </div>

        <Link
          to="/dashboard/category/create"
          className="bg-red-700 text-white px-5 py-3 rounded-xl"
        >
          + Tambah Kategori
        </Link>
      </div>

      <div className="grid gap-4">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border rounded-2xl p-5 flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {category.name}
                </h2>

                <p>
                  Category ID : {category.id}
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/dashboard/category/edit/${category.id}`}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    handleDelete(category.id)
                  }
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white border rounded-2xl p-10 text-center">
            <h2 className="text-lg font-semibold">
              Belum ada category
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}