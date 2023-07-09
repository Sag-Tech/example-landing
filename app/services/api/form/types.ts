export type FormRequestData = {
  name: string;
  email: string;
  message: string;
  policy: boolean;
  files: null | Array<File>;
};

export type FormResponseSuccess = {
  status: "ok";
};

export type FormResponseError = {
  status: "error";
  error_text: string;
};
