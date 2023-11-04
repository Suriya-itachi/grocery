import "../components/style.css";
import { useNavigate } from "react-router-dom";
export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            fresh and <span>organic</span> products for your
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            libero nostrum veniam facere tempore nisi.
          </p>
          <button 
            onClick={() => {
              navigate("/product");
            }}
            className="btns"
          >
            shop now
          </button>
        </div>
      </section>
    </>
  );
}
