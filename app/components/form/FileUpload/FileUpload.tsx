/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Typo from "~/components/Typo";
import type { InputProps } from "~/components/form/InputField/InputField";
import Attach from "~/components/icons/Attach";
import IconClose from "~/components/icons/IconClose";

function FileUpload({
  id,
  name,
  accept,
  value,
  multiple = true,
  onUpload,
}: InputProps & {
  accept?: string;
  multiple?: boolean;
  onUpload?: (files: Array<File> | null) => void;
}) {
  const [files, setFiles] = useState<Array<File> | null>(null);

  const handleFileChange = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;

    if (input.files) {
      const filesArr = Array.from(input.files);

      if (onUpload) {
        onUpload(filesArr);
      }

      setFiles(filesArr);
    }
  };

  const handleClear = (name: string) => {
    if (files) {
      setFiles(files.filter(f => f.name !== name));
    }
  };

  return (
    <div className="flex flex-col gap-2.5">
      <label
        className="flex gap-2.5 items-center cursor-pointer group"
        htmlFor={id}
      >
        <Attach
          styles="fill-green group-hover:fill-[#58d2b2] group-active:fill-[#29a080] transition-all
          duration-300"
        />
        <p
          className="text-sm lp:text-base text-green underline group-hover:text-[#58d2b2] group-active:text-[#29a080]
          transition-all duration-300"
        >
          Attach file
        </p>
        <input
          accept={accept}
          onChange={e => handleFileChange(e)}
          className="hidden"
          value={value}
          id={id}
          name={name}
          multiple={multiple}
          type="file"
        />
      </label>
      {files && files.length > 0 ? (
        files.map((file: File) => (
          <div key={file.name} className="flex items-center">
            <Typo
              tag="div"
              tagStyles="h6"
              className="text-sm lp:text-base font-light opacity-60 text-elipsed !max-w-[85%]"
            >
              {file.name || "JPG, PNG, PDF, DOCX, XLSX (Max 10 MB)"}
            </Typo>
            <IconClose
              onClick={() => handleClear(file.name)}
              className="ml-2"
            />
          </div>
        ))
      ) : (
        <Typo
          tag="div"
          tagStyles="h6"
          className="text-sm lp:text-base font-light opacity-60"
        >
          JPG, PNG, PDF, DOCX, XLSX (Max 10 MB)
        </Typo>
      )}
    </div>
  );
}

export default FileUpload;
