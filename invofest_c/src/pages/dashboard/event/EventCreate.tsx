import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import { InputText } from "../../../components/ui/InputText";
import  {API_BASE_URL}  from "../../../service/Api";

type FormData = {
  eventName: string;
  speaker: string;
  category: string;
  date: string;
  time: string;
};

type Speaker = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
};

export default function EventCreate() {
  const navigate = useNavigate();

  const [speakers, setSpeakers] = useState<
    Speaker[]
  >([]);

  const [categories, setCategories] =
    useState<Category[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // GET SPEAKERS
  useEffect(() => {
    fetch(`${API_BASE_URL}/pembicara`)
      .then((res) => res.json())
      .then((data) => {
        setSpeakers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      const response = await fetch(
        `${API_BASE_URL}/events`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.message);

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
          {/* EVENT NAME */}
          <InputText
            label="Nama Event"
            name="eventName"
            register={register}
            error={errors.eventName?.message}
          />

          {/* CATEGORY DROPDOWN */}
          <div>
            <label className="block text-sm mb-1">
              Category
            </label>

            <select
              {...register("category")}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">
                -- Pilih Category --
              </option>

              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.name}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* SPEAKER DROPDOWN */}
          <div>
            <label className="block text-sm mb-1">
              Pembicara
            </label>

            <select
              {...register("speaker")}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">
                -- Pilih Pembicara --
              </option>

              {speakers.map((speaker) => (
                <option
                  key={speaker.id}
                  value={speaker.name}
                >
                  {speaker.name}
                </option>
              ))}
            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="block text-sm mb-1">
              Tanggal
            </label>

            <input
              type="date"
              {...register("date")}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* TIME */}
          <div>
            <label className="block text-sm mb-1">
              Jam
            </label>

            <input
              type="time"
              {...register("time")}
              className="w-full border rounded px-3 py-2"
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