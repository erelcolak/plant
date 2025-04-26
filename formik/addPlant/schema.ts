import * as yup from "yup";

import { formValidationMessages } from "@/utils/formValidationMessages";

export const schemaAddPlant = () => {
  return yup.object().shape({
    name: yup.string().required(formValidationMessages.required),
    roomId: yup.string().required(formValidationMessages.required),
    plantType: yup.string().required(formValidationMessages.required),
    weeklyWaterNeeded: yup.number().min(1, formValidationMessages.min(1)).required(formValidationMessages.required),
    expectedRelativeHumidity: yup.number().min(1, formValidationMessages.min(1)).required(formValidationMessages.required),
  });
};
