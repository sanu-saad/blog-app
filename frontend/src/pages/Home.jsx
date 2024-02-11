import LayOut from "../components/LayOut/LayOut";
import { useAuth } from "../context/auth.jsx";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <LayOut>
      <h1>Home</h1>
      <pre>{JSON.stringify(auth)}</pre>
    </LayOut>
  );
};

export default Home;
