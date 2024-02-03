import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "75vh" }}>{children}</main>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default LayOut;
