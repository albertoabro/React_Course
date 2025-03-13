import { toast } from "react-toastify";
import { ZodIssue } from "zod";

export const showErrors = (errors: ZodIssue[] | undefined) => {
    errors!.forEach((issue) => {
                toast.error(issue.message);
            });
}
