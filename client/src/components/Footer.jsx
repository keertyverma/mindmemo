function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Made with 💖 by Keerty</p>
      <p className="copyright">Copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
