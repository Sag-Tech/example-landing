import ApiBase from "../base";
import { FormResponseError, FormResponseSuccess } from "./types";

class ApiForm extends ApiBase {
  public sendForm = (data: FormData) => {
    return this.post<FormData, FormResponseError | FormResponseSuccess>(
      "",
      data
    );
  };
}

const apiForm = new ApiForm("/send_form", {
  "Content-Type": "multipart/form-data",
});

export default apiForm;
