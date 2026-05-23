import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import { InputText } from "../../../components/ui/InputText";

type FormDataType = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export default function PembicaraCreate() {
  const navigate = useNavigate();

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const onSubmit = async (data: FormDataType) => {
    try {
      const response = await fetch(
        "https://uts-backend-2jf0nithe-rafainan31s-projects.vercel.app/pembicara",
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

      alert("Pembicara berhasil dibuat!");

      navigate("/dashboard/pembicara");
    } catch (error) {
      console.log(error);

      alert("Gagal menyimpan pembicara");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 border">
        <h2 className="text-2xl font-semibold mb-4">
          Add New Pembicara
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

          <InputText
            label="Role"
            name="role"
            register={register}
            error={errors.role?.message}
          />

          <InputText
            label="Image URL"
            name="image"
            register={register}
            error={errors.image?.message}
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