import { Alert } from "antd";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Alert
    message={message}
    description="There was a problem fetching data."
    type="error"
    showIcon
  />
);
export default ErrorMessage;
