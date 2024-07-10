'use client';

import { Editor } from "novel-lightweight";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  const hanldeOnUpdate = (editor) => {
    setData(editor?.storage.markdown.getMarkdown());
  };

  return (
    <Editor
      className="w-full h-[100dvh]"
      defaultValue={data}
      disableLocalStorage={true}
      onUpdate={hanldeOnUpdate}
      handleImageUpload={async (file) => {
        const uploads = await startUpload([file]);
        if (uploads && uploads.length > 0) {
          return uploads[0].url;
        }
        return "www.example.com/failed-upload.png";
      }}
    />
  );
}