import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { InputText } from "../../../components/ui/InputText";
import Button from "../../../components/Button";
import { API_BASE_URL } from "../../../service/Api";

type SpeakerForm = {
    name: string;
    role: string;
    image: string;
};

export default function PembicaraUpdate() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SpeakerForm>();

    useEffect(() => {
        fetch(`${API_BASE_URL}/pembicara/${id}`)
            .then((res) => res.json())
            .then((data) => {
                const speaker = data.data ?? data;

                reset({
                    name: speaker.name,
                    role: speaker.role,
                    image: speaker.image,
                });
            })
            .catch((error) => {
                console.error("Gagal mengambil detail pembicara:", error);
            });
    }, [id, reset]);

    const onSubmit = async (data: SpeakerForm) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pembicara/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: data.name,
        role: data.role,
        image: data.image,
      }),
    });

    const result = await response.json();

    console.log("STATUS UPDATE:", response.status);
    console.log("RESULT UPDATE:", result);

    if (!response.ok) {
      alert(result.message || "Gagal update pembicara");
      return;
    }

    alert(result.message || "Pembicara berhasil diupdate");
    navigate("/dashboard/pembicara");
  } catch (error) {
    console.error("UPDATE SPEAKER ERROR:", error);
    alert("Pembicara gagal diupdate");
  }
};

    return (
        <div className="py-10">
            <h1 className="text-center mb-10 font-bold text-3xl">
                Edit Pembicara
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-100 mx-auto"
            >
                <InputText<SpeakerForm>
                    label="Nama Pembicara"
                    name="name"
                    register={register}
                    error={errors.name?.message}
                />

                <InputText<SpeakerForm>
                    label="Role"
                    name="role"
                    register={register}
                    error={errors.role?.message}
                />

                <InputText<SpeakerForm>
                    label="Image"
                    name="image"
                    register={register}
                    error={errors.image?.message}
                />

                <Button label="Update Pembicara" type="submit"
                    variant="primary"
                    className="w-full" />
            </form>
        </div>
    );
}