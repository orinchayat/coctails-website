interface UploadInfo {
  file: {
    uid: string;
    name: string;
    status: "uploading" | "done" | "error";
    originFileObj?: File;
    lastModified?: number;
    lastModifiedDate?: Date;
    size?: number;
    type?: string;
  };
  fileList: Array<{
    uid: string;
    name: string;
    status: "uploading" | "done" | "error";
    originFileObj?: File;
    [key: string]: any;
  }>;
}
