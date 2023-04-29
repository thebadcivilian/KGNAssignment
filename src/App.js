import AdminBar from "./modules/AdminBar/AdminBar";
import MiddleSection from "./modules/MiddleSection/MiddleSection";
import Sidebar from "./modules/sideBar/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fbf4f3",
          display: "grid",
          gridTemplateColumns: "4fr 15fr 3fr",
        }}
      >
        <Sidebar />
        <MiddleSection />
        <AdminBar />
      </div>
    </>
  );
}

export default App;
