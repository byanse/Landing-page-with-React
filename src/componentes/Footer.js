import PropTypes from "prop-types";
const Footer = (props) => {
  return (
    <footer id="footer" className="bg-dark ">
      <p className="position-relative">
        {props.tituloFooter} &copy; {props.webSite}
      </p>
    </footer>
  );
};
Footer.propTypes = {
	tituloFooter: PropTypes.string,
    webSite: PropTypes.string,
}    

export default Footer;
