import Footer from "./Footer";
import Haeder from "./Haeder";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Haeder />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
