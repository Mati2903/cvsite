import {RiCopyrightLine} from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer"><RiCopyrightLine/>&nbsp;{year} Mateusz Mazurek</footer>
  )
}

export default Footer