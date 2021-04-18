import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import TextField from "../../../app-shared/components/TextField/TextField";
import { landingFormSchema } from "../../constants/form-schema";
import "./LandingForm.scss";

export const LandingForm = () => {
    const { handleSubmit, control } = useForm({
        resolver: yupResolver(landingFormSchema),
        mode: "onChange",
    });
    const onSubmit = useCallback((val) => {
        console.log(val);
    }, []);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="documentNumber"
                control={control}
                defaultValue=""
                render={({ field, fieldState, formState }) => (
                    <TextField {...field} error={fieldState.error?.message} />
                )}
            />
        </form>
    );
};

export default LandingForm;
