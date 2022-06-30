const About = () => {
  return (
    <div class="relative mb-16 flex flex-col">
      <div class="mb-8 text-5xl font-mono font-bold underline underline-offset-8 dark:text-primaryTextDark">
        About       
      </div>
      <div class="gap-10 flex flex-col md:flex-row items-center xs:items-start">
        <div>
          <div class="p-8 w-72 h-96 bg-secondaryBgDark dark:bg-secondaryBgLight shadow-md border-4 border-primaryBgDark dark:border-primaryBgLight"></div>
          {/* Image goes here */}
        </div>
        <div class="flex flex-col gap-4 text-xl text-secondaryTextLight dark:text-secondaryTextDark">
          <h2 class="text-3xl font-bold">Hi There!</h2>
          <p>
            I'm a Junior at Boston University pursuing a BA/MS in Computer
            Science with a passion for development and IT. In CS, I enjoy
            learning about software development, IT operations, and
            cybersecurity, focusing on management.
          </p>
          <p>
            Outside of programming, you'll find me spending time with friends
            😁, skateboarding around the city 🛹, reading a good book 📚, or
            enjoying a nice cup of coffee ☕.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
