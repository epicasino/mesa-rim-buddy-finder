import RegisterFormSection from "../components/register/RegisterFormSection";


export default function Home() {

  return (
    <main className="flex flex-col">
      <section className="bg-homePage bg-cover h-[110vh] w-auto flex flex-col justify-evenly items-center">
        <header className="flex flex-col gap-5">
          <h1 className="font-bold text-8xl text-center">GO CLIMB.</h1>
          <h5 className="text-center">Find your next climbing partner!</h5>
        </header>
        <a href="#formSection">
          <img src="./assets/svg/arrow_down.svg" className="h-[10rem] w-[10rem] animate-bounce"/>
        </a>
      </section>
      <section className="bg-formPage bg-cover h-[110vh] w-auto flex justify-center items-center">
        <RegisterFormSection />
      </section>
    </main>
  );
}
