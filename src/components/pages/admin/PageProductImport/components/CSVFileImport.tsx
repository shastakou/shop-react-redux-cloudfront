import React, { useCallback } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File | null>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const uploadFile = useCallback(async () => {
    if (!file) {
      return;
    }

    let authorizationToken = "";
    try {
      authorizationToken = localStorage.getItem("authorization_token") ?? "";
    } catch (error) {
      console.error(error);
      return;
    }

    console.log("uploadFile to", url);

    // Get the presigned URL
    const response = await axios({
      method: "GET",
      url,
      headers: {
        Authorization: `Basic ${authorizationToken}`,
      },
      params: {
        name: encodeURIComponent(file.name),
      },
    });
    console.log("File to upload: ", file.name);
    console.log("Uploading to: ", response.data.url);
    const result = await fetch(response.data.url, {
      method: "PUT",
      body: file,
    });
    console.log("Result: ", result);
    setFile(null);
  }, [file]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}
