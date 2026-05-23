import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import { InputText } from "../../../components/ui/InputText";
import { API_BASE_URL } from "../../../service/Api";

type FormData = {
  name: string;
  categoryId: string;
  location: string;
  dateEvent: string;
  description: string;
};

type Category = {
  id: number;
  name: string;
};

export default function EventCreate() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // GET CATEGORIES
  useEffect(() => {
    fetch(`${API_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        name: data.name,
        categoryId: Number(data.categoryId),
        location: data.location,
        dateEvent: data.dateEvent,
        description: data.description,
      };

      const response = await fetch(`${API_BASE_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Gagal membuat event");
        return;
      }

      alert("Event berhasil dibuat!");
      navigate("/dashboard/event");
    } catch (error) {
      console.log(error);
      alert("Gagal menyimpan event");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 border">
        <h2 className="text-lg font-semibold mb-4">
          Add New Event
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <InputText<FormData>
            label="Nama Event"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          <div>
            <label className="block text-sm mb-1">
              Category
            </label>

            <select
              {...register("categoryId")}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">
                -- Pilih Category --
              </option>

              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <InputText<FormData>
            label="Lokasi"
            name="location"
            register={register}
            error={errors.location?.message}
          />

          <div>
            <label className="block text-sm mb-1">
              Tanggal Event
            </label>

            <input
              type="date"
              {...register("dateEvent")}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Deskripsi
            </label>

            <textarea
              {...register("description")}
              className="w-full border rounded px-3 py-2"
              rows={4}
              placeholder="Contoh: Pembicara Rafa, workshop React dasar"
            />
          </div>

          <Button
            label="+ Simpan"
            type="submit"
            variant="primary"
            className="w-full"
          />
        </form>
      </div>
    </div>
  );
}