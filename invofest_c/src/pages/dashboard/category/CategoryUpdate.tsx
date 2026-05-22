import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { InputText } from "../../../components/ui/InputText";
import Button from "../../../components/Button";

type CategoryForm = {
  name: string;
};

export default function CategoryUpdate() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryForm>();

  // GET DETAIL CATEGORY
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/categories/${id}`
        );

        const data = await response.json();

        reset({
          name: data.name,
        });
      } catch (error) {
        console.log(error);

        alert("Gagal mengambil data category");
      }
    };

    getCategory();
  }, [id, reset]);

  // UPDATE CATEGORY
  const onSubmit = async (data: CategoryForm) => {
    try {
      const response = await fetch(
        `http://localhost:3000/categories/${id}`,
        {
          method: "PUT",
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

      alert("Category berhasil diupdate");

      navigate("/dashboard/category");
    } catch (error) {
      console.log(error);

      alert("Category gagal diupdate");
    }
  };

  return (
    <div className="py-10">
      <h1 className="text-center mb-10 font-bold text-3xl">
        Edit Category
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-100 mx-auto"
      >
        <InputText<CategoryForm>
          label="Category"
          name="name"
          register={register}
          error={errors.name?.message}
        />

        <Button
          label="Update Category"
          type="submit"
          variant="primary"
          className="w-full"
        />
      </form>
    </div>
  );
}