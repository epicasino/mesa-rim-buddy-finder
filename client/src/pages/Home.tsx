import RegisterFormSection from '../components/register/RegisterFormSection';

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="bg-homePage bg-cover h-[110vh] w-auto flex flex-col justify-evenly items-center">
        <header className="flex flex-col gap-5 justify-center items-center">
          <h1 className="font-bold xs:text-7xl xs:text-center xs:tracking-normal md:text-8xl md:text-left md:tracking-[.75rem]">
            {`GO CLIMB.`}
          </h1>
          <h5 className="text-left tracking-widest font-semibold">
            Find your next climbing partner!
          </h5>
        </header>
        <a href="#register">
          <img
            src="./assets/svg/arrow_down.svg"
            className="h-[10rem] w-[10rem] motion-reduce:animate-none hover:transition-transform hover:translate-y-5 hover:duration-100 hover:scale-110"
          />
        </a>
      </section>
      <section
        className="bg-formPage bg-cover h-[110vh] w-auto flex justify-center items-center"
        id="register"
      >
        <RegisterFormSection />
      </section>
    </main>
  );
}
