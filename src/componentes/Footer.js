const Footer = (props) => {
  return (
    <footer id="footer" className="bg-dark ">
      <p className="position-relative">
        {props.tituloFooter} &copy; {props.webSite}
      </p>
    </footer>
  );
};

export default Footer;
