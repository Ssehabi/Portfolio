import "./content.css";
import imag from "../../images/image.png";
function Contenu() {
  return (
    <div className="content">
      <div className="image">
        <img src={imag} width={300} />
      </div>
      <div className="me">
        <p className="hello">Hello !</p>
        <p className="name">
          My name is <span>S</span>irine <span>S</span>ehabi .
        </p>
        <p className="student">
          I am a Computer Science Student, I code beautifully simple things
        </p>
        <p> and I love What I do Just Simple Like That .</p>
      </div>
    </div>
  );
}
export default Contenu;
