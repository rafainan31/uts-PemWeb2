 import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import { InputText } from "../../../components/ui/InputText";

type FormData = {
  name: string;
};

export default function CategoryCreate() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        "https://uts-backend-197igdykg-rafainan31s-projects.vercel.app/categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.message);
        return;
      }

      alert("Kategori berhasil dibuat!");

      navigate("/dashboard/category");
    } catch (error) {
      console.log(error);

      alert("Gagal menyimpan category");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 border">
        <h2 className="text-2xl font-semibold mb-4">
          Add New Category
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <InputText
            label="Nama"
            name="name"
            register={register}
            error={errors.name?.message}
          />

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