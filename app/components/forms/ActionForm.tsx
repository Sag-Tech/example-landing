/* eslint-disable security/detect-unsafe-regex */
/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useMemo, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Form } from "@remix-run/react";
import InputField from "~/components/form/InputField";
import TextareaField from "~/components/form/TextareaField";
import FileUpload from "~/components/form/FileUpload/FileUpload";
import Checkbox from "~/components/form/Checkbox";
import Button from "~/components/Button";
import { ModalContext } from "~/root";
import { FormRequestData } from "~/services/api/form/types";
import apiForm from "~/services/api/form";
import Typo from "../Typo";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

type Props = {
  id: string;
  animated?: boolean;
};

function ActionForm({ id, animated }: Props) {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [isSubmitError, setSubmitError] = useState<null | string>(null);
  const { openModal } = useContext(ModalContext);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormRequestData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      files: null,
      policy: false,
    },
    shouldUseNativeValidation: false,
  });

  const { control, reset, handleSubmit, setValue } = form;

  const onSubmit = (data: FormRequestData) => {
    setSubmitError(null);
    const fd = new FormData();

    fd.append("name", data.name);
    fd.append("email", data.email);
    fd.append("message", data.message);

    if (data.files) {
      Array.from(data.files).forEach(file => {
        fd.append("file[]", file);
      });
    }

    setSubmitting(true);

    apiForm
      .sendForm(fd)
      .then(res => {
        setSubmitting(false);

        if (res.status === "ok") {
          openModal("action-success");
          reset();
        } else if (res.status === "error") {
          setSubmitError(JSON.stringify(res));
        }
      })
      .catch(error => {
        setSubmitError(JSON.stringify(error));
        setSubmitting(false);
      });
  };

  const animationAttr = useMemo(
    () =>
      animated
        ? {
            "data-aos": "fade-up",
            "data-aos-delay": 150,
          }
        : {},
    [animated]
  );

  return (
    <Form
      datatype="multipart/form-data"
      noValidate
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-5" {...animationAttr}>
        <Controller
          control={control}
          name="name"
          rules={{
            required: true,
            maxLength: 100,
          }}
          render={({ field, fieldState }) => (
            <InputField
              id="i-name"
              label="Name"
              value={field.value}
              name={field.name}
              isError={fieldState.invalid}
              type="text"
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          rules={{
            required: true,
            validate: {
              isEmail: value => validateEmail(value) || "Not a valid email 📧",
            },
          }}
          name="email"
          render={({ field, fieldState }) => (
            <InputField
              id="i-email"
              label="E-mail"
              value={field.value}
              name={field.name}
              isError={fieldState.invalid}
              type="email"
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="message"
          rules={{
            required: true,
            maxLength: 3000,
          }}
          render={({ field, fieldState }) => (
            <TextareaField
              id="i-message"
              value={field.value}
              name={field.name}
              label="Message"
              type="text"
              isError={fieldState.invalid}
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="files"
          rules={{
            validate: {
              isAccept: files => {
                let isError = false;
                let isErrorMessage = "";

                if (files) {
                  files.forEach((file: File) => {
                    if (
                      "image/jpeg,image/png,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet".indexOf(
                        file.type
                      ) < 0
                    ) {
                      isError = true;
                      isErrorMessage = "invalid file type";
                    } else if (file.size > 10 * 1024 * 1024) {
                      isError = true;
                      isErrorMessage = "file is too big";
                    }
                  });
                }

                return isError ? isErrorMessage : true;
              },
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <FileUpload
                multiple
                id="i-file"
                isError={fieldState.invalid}
                // value={String(field.value}
                onUpload={files => setValue("files", files)}
                name={field.name}
                accept=".jpg,.png,.pdf,.docx,.xlsx"
              />
              {fieldState.invalid && (
                <Typo className="text-red">{fieldState.error?.message}</Typo>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name="policy"
          rules={{
            required: true,
          }}
          render={({ field, fieldState }) => (
            <Checkbox
              id={`${id}-policy`}
              onChange={field.onChange}
              name={field.name}
              type="checkbox"
              isError={fieldState.invalid}
              checked={Boolean(field.value)}
            />
          )}
        />
        {isSubmitError && (
          <Typo className="text-red mt-2">{isSubmitError}</Typo>
        )}
        <Button
          type="submit"
          isFetching={isSubmitting}
          className="w-full lp:w-[160px] lp:self-center lp:mt-5"
        >
          Send
        </Button>
      </div>
    </Form>
  );
}

export default ActionForm;
