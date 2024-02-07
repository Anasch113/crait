import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./styles/Burger.css";
function Burger({ burgerOnOrOff, toSection }) {
  return (
    <div className="burger__container">
      <div className="burger__top__container">
        <p>PAGES</p>
        <div onClick={() => {burgerOnOrOff(false)}}>
          <IconX
            className="close-mobile"
            onClick={() => {burgerOnOrOff(false)}}
          />
        </div>
      </div>
      <div className="burger__grid">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {burgerOnOrOff(false)
          toSection("hero-section")}
        }
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198812328255295558/image.png?ex=65c043fb&is=65adcefb&hm=c4591cef391888513ce7ff1bf480232cd49cc2c2567cee4d9a0a9b65990b0f91&"
            alt="YouCoin Home"
          />
          <p>Home</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {burgerOnOrOff(false)
          toSection("text-section")}}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198812630249394226/image.png?ex=65c04443&is=65adcf43&hm=b26743e0982958c056ce8c5a2495a0257bf5b53915815b87dafabd84aa1886e4&"
            alt="YouCoin Market"
          />
          <p>Market</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {burgerOnOrOff(false)
          toSection("join-section")}
        }
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198812858683756584/image.png?ex=65c0447a&is=65adcf7a&hm=9b07d6b18c2cf260680c7440be103b42cccacba58a4b7deeedecd4f6cb460924&"
            alt="YouCoin Contact"
          />
          <p>Join</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198813087059431504/image.png?ex=65c044b0&is=65adcfb0&hm=5eafc3df9587b1d199cac79db777e772823ea4a6af68b5cc713fc17a2e7a4785&"
            alt="YouCoin Book Demo"
          />
          <p>Book Demo</p>
        </Link>
      </div>
      <div className="burger__top__container">
        <p className="burger__title">RESOURCES</p>
      </div>
      <div className="burger__grid">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)
        }
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198808855073796249/image.png?ex=65c040bf&is=65adcbbf&hm=0623bd35cdf3952fd790831ed9f71b836b5a00cad7fe546f28e3a286fef1a766&"
            alt="YouCoin About"
          />
          <p>About</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/terms"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198809219068088421/image.png?ex=65c04116&is=65adcc16&hm=6f51b7702ec6b10f1c5f03c0e8cab395a61ec2b61a35ab3f3f6128aab41deb17&"
            alt="YouCoin TOS"
          />
          <p>Terms Of Service</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198809422072402020/image.png?ex=65c04147&is=65adcc47&hm=c36122c74bb630fcb066624887e914ce1adc82b15cbea7baccf74eaee2ae379b&"
            alt="YouCoin Guides"
          />
          <p>Guides</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198809077304803408/image.png?ex=65c040f4&is=65adcbf4&hm=e88963bfbad19de4462bc9918fae026bc0fde0f8803a3405026d126543116cb9&"
            alt="YouCoin Blog"
          />
          <p>Blog</p>
        </Link>
      </div>
      <div className="burger__top__container">
        <p className="burger__title">FAQ</p>
      </div>
      <div className="burger__grid">
        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198803051448901662/image.png?ex=65c03b58&is=65adc658&hm=82bfd0b5c83f8763c550d7aa9881081267cccef1ff167b60d6edf7968972bcf4&"
            alt="YouCoin Engine"
          />
          <p>YouCoin Engine</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198803876766285895/image.png?ex=65c03c1c&is=65adc71c&hm=969fe3af2cae26298952f350ca7a386d6f2d8731d42f9a6bf3bf5b64aedb5b4a&"
            alt="YouCoin Demo"
          />
          <p>Custom Demos</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fgenerative-ai.png&w=96&q=75"
            alt="YouCoin Contact"
          />
          <p>Contact & Enquire</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198805126224281701/image.png?ex=65c03d46&is=65adc846&hm=ae627978d95abf5b1dac4ec1acd0d16067a98d5395043da9b2b55b97bd9b10a5&"
            alt="YouCoin Test & Evalutation"
          />
          <p>Test & Evalutation</p>
        </Link>
      </div>

      <div className="burger__top__container buger__lower">
        <p className="burger__title">GOVERNMENT</p>
      </div>
      <div className="burger__grid buger__lower">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198816576946839613/image.png?ex=65c047f0&is=65add2f0&hm=540cedfc1bfaff615ee98a77136bb3f6bf7645fce35327e0b849e5f43cec4e02&"
            alt="USA Defence"
          />
          <p>Defense</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198816696820060211/image.png?ex=65c0480d&is=65add30d&hm=776c2bf6bb1f1ff0702d12659a82d8e8a4c5e16a03f05e805c06176f3889f15f&"
            alt="USA Federal"
          />
          <p>Federal</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198816793641365614/image.png?ex=65c04824&is=65add324&hm=ceb64874bdb30690c67f9583868386fb303115bbbd1989e0b1b9275f26613fc4&"
            alt="USA Public Sector"
          />
          <p>Public Sector</p>
        </Link>
      </div>
      <div className="burger__top__container buger__lower">
        <p className="burger__title">SOLUTIONS</p>
      </div>
      <div className="burger__grid buger__lower">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198817434807849010/image.png?ex=65c048bd&is=65add3bd&hm=c4bd523f88aad8fa01ea39de727979c635a1f7526f7d79b98619792021e2943c&"
            alt="Logistics"
          />
          <p>Logistics</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198817602156380301/image.png?ex=65c048e5&is=65add3e5&hm=8896cb029d8ec346045081052ecd19f4775f159a3eb08f2c2dedebd52b768f70&"
            alt="Robotics"
          />
          <p>Robotics</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198817827839295549/image.png?ex=65c0491b&is=65add41b&hm=b401371f827f0de1c9aa4501ab42b42123110b2835ecc38ea5c10615ce18df64&"
            alt="Retail & eCommerce"
          />
          <p>Retail & eCommerce</p>
        </Link>
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1198817952779223090/image.png?ex=65c04938&is=65add438&hm=0a3b7df8baec41faf6647b3e30f7890f9a38985cc7f207afa3fb99809d49177b&"
            alt="Content & Languages"
          />
          <p>Content & Languages</p>
        </Link>
      </div>
    </div>
  );
}
export default Burger;
