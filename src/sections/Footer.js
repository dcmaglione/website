const Footer = () => {
  return (
    <div class="relative my-10 flex flex-col text-center xs:flex-row xs:text-justify justify-between">
      <div class="text-xl">© 2022 Dominic Maglione</div>
      <a
        class="text-xl font-mono hover:text-accent"
        href="https://github.com/dcmaglione/website"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
      </a>
    </div>
  );
};

export default Footer;
