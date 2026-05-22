import type { Path, UseFormRegister } from "react-hook-form";

interface InputTextProps<T extends Record<string, any>> {
    label: string;
    name: Path<T>;
    error?: string;
    register: UseFormRegister<T>;
}

export const InputText = <T extends Record<string, any>>({
    label,
    name,
    error,
    register,
}: InputTextProps<T>) => {
    return (
        <div className="flex flex-col gap-1 mb-4 ">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                className="border"
                type="text"
                {...register(name)}
                placeholder={label}
            />
            {error && <p>{error}</p>}
        </div>
    );
};