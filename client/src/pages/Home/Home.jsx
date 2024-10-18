import Main from "../../components/Main";
import Main2 from "../../components/Main2";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover-image flex flex-col justify-center items-center  bg-transparent ">
      <Main className="z-20" />
      <Main2 className="z-20" />
    </div>
  );
};

export default Home;
