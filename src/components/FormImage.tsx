import { UploadOutlined } from "@ant-design/icons";
import { Form, message, Upload } from "antd";

interface FormImageProps {
  handleImageChange: (info: UploadInfo) => void;
  imageUrl: string;
}

const FormImage = ({ handleImageChange, imageUrl }: FormImageProps) => {
  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return false;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
      return false;
    }

    return true;
  };

  return (
    <Form.Item label="Cocktail Image">
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" // Fake upload endpoint
        onChange={handleImageChange}
        beforeUpload={beforeUpload}
        customRequest={({ onSuccess }) => {
          setTimeout(() => {
            onSuccess?.("ok", undefined as any);
          }, 0);
        }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="cocktail" style={{ width: "100%" }} />
        ) : (
          <div>
            <UploadOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        )}
      </Upload>
    </Form.Item>
  );
};
export default FormImage;
