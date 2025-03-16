interface FormFileNameProps {
  fileName: string;
}

const FormFileName = ({ fileName }: FormFileNameProps) => {
  return (
    <div style={{ marginTop: 8 }}>
      {fileName ? (
        <span style={{ color: "#52c41a" }}>✓ File uploaded: {fileName}</span>
      ) : (
        <span style={{ color: "#888" }}>
          Upload an image of your cocktail (optional)
        </span>
      )}
    </div>
  );
};
export default FormFileName;
