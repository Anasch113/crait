import "./styles/BookRight.css";
import chat from '../images/chat.png'
import micro from '../images/mircro.png'
import meta from '../images/meta.png'
import coh from '../images/coh.png'
import car from '../images/car.png'
function BookRight() {
  return (
    <div className="book__right">
      <img
        src={chat}
        alt="Open AI Logo"
      />
      <p className="book__des">
        OpenAI presented YouCoin's AI with tasks featuring challenging
        characteristics, including significant ambiguity in correct answers. In
        response, YouCoin worked closely with OpenAI to adapt their systems to meet
        the client's needs.
      </p>

      <p>Breat Chen</p>
      <span>Member of Technical Staff</span>

      <div className="book__logo__container">
        <p>Trusted by the world's most ambitious AI teams</p>
        <div className="book__logo__grid">
          <img
            src={micro}
            alt="Microsoft Logo"
          />
          <img
            src={car}
            alt="CarperAI Logo"
          />
          <img
            src={meta}
            alt="Meta Logo"
          />
          <img
            src={coh}
            alt="Coher Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default BookRight;
