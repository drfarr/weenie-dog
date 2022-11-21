import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const contextClass = {
  success: "alert alert-success shadow-lg",
  error: "alert alert-error shadow-lg",
  info: "alert alert-info shadow-lg",
  warning: "alert alert-warning shadow-lg",
  loading: "bg-neutral-100 text-neutral-900",
};
export default function Toaster() {
  return (
    <ToastContainer
      position="bottom-center"
      //@ts-ignore
      toastClassName={({ type }) =>
        //@ts-ignore
        contextClass[type || "default"] +
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer   lucky"
      }
      bodyClassName="text-xl"
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      hideProgressBar
      autoClose={3000}
      theme="colored"
    />
  );
}
