import Header from "./Header";
import Footer from "./Footer";
const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "75vh" }}>{children}</main>

      <Footer />
    </div>
  );
};

export default LayOut;
