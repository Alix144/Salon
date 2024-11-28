import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import HamburgerBtn from "@/components/HamburgerBtn";

export default function HomePage() {
  const navbar = useTranslations("navbar");
  const heroSection = useTranslations("heroSection");
  const aboutSection = useTranslations("aboutSection");
  const servicesSection = useTranslations("servicesSection");
  const teamSection = useTranslations("teamSection");
  const contactSection = useTranslations("contactSection");
  const footer = useTranslations("footer");

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">SENIORA</h1>
          <ul className="hidden md:flex gap-5">
            <li>
              <Link href="#about" className="text-gray-600 hover:text-black">
                {navbar("about")}
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-600 hover:text-black">
                {navbar("services")}
              </Link>
            </li>
            <li>
              <Link href="#team" className="text-gray-600 hover:text-black">
                {navbar("team")}
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-600 hover:text-black">
                {navbar("contact")}
              </Link>
            </li>
          </ul>
          <div className="space-x-4 hidden md:flex items-center">
            <Link
              href={navbar("navigateTo")}
              className="text-gray-600 hover:text-black flex items-center gap-2"
            >
              <Image
                src="/images/world.png"
                alt="World"
                width={20}
                height={20}
              />
              {navbar("language")}
            </Link>
          </div>
          {/* <!-- Mobile menu toggle --> */}
          <HamburgerBtn />
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section
        className="bg-gradient-to-r from-pink-200 via-gray-100 to-blue-200"
        id="hero"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-20 space-y-8 md:space-y-0">
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-gray-600">{heroSection("address")}</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
              {heroSection("h1")}{" "}
              <span className="text-pink-500">{heroSection("span")}</span>
            </h1>
            <div className="mt-8 space-x-4">
              <Link
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 duration-200"
              >
                {heroSection("btn")}
              </Link>
            </div>
          </div>
          {/* <!-- Placeholder for image --> */}
          <div className=" md:w-1/2 h-96 rounded-md relative flex justify-center">
            <Image
              src="/images/hero-img.png"
              alt="Salon"
              width={600}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* <!-- About Us Section --> */}
      <section className="bg-white" id="about">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{aboutSection("h2")}</h2>
            <p className="mt-4 text-gray-600">{aboutSection("p")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* <!-- Placeholder for images --> */}
            <div className="h-48 bg-gray-300 rounded-md relative overflow-hidden">
              <Image
                src="/images/salon.jpg"
                alt="Salon"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="h-48 bg-gray-300 rounded-md relative overflow-hidden">
              <Image
                src="/images/salon2.jpg"
                alt="Salon"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex justify-between mt-12">
            <div className="text-center">
              <p className="text-3xl font-bold">+105k</p>
              <p className="text-gray-600">{aboutSection("clients")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">+10</p>
              <p className="text-gray-600">{aboutSection("experience")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services Section --> */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            {servicesSection("h2")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Service 1 --> */}
            <div className="p-6 rounded-lg shadow-lg bg-blue-200">
              <div className="bg-gray-300 h-32 w-full rounded-md mb-6 relative overflow-hidden">
                <Image
                  src="/images/hair-styling.jpg"
                  alt="Hair Styling"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {servicesSection("h3Service1")}
              </h3>
              <p className="text-gray-600 mt-2">
                {servicesSection("pService1")}
              </p>
            </div>
            {/* <!-- Service 2 --> */}
            <div className="bg-pink-200 p-6 rounded-lg shadow-lg">
              <div className="bg-gray-300 h-32 w-full rounded-md mb-6 relative overflow-hidden">
                <Image
                  src="/images/facial-treatments.jpg"
                  alt="Facial Treatments"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {servicesSection("h3Service2")}
              </h3>
              <p className="text-gray-600 mt-2">
                {servicesSection("pService2")}
              </p>
            </div>
            {/* <!-- Service 3 --> */}
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
              <div className="bg-gray-300 h-32 w-full rounded-md mb-6 relative overflow-hidden">
                <Image
                  src="/images/nail-polish.jpg"
                  alt="Nail Polish"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {servicesSection("h3Service3")}
              </h3>
              <p className="text-gray-600 mt-2">
                {servicesSection("pService3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Team Section --> */}
      <section id="team" className="py-16 bg-pink-200">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            {teamSection("h2")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Team Member 1 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-gray-300 h-32 w-32 rounded-full mx-auto mb-6 relative overflow-hidden">
                <Image
                  src="/images/employee1.jpg"
                  alt="Jessica Smith"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Jessica Smith
              </h3>
              <p className="text-gray-600">{teamSection("p1")}</p>
            </div>
            {/* <!-- Team Member 2 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-gray-300 h-32 w-32 rounded-full mx-auto mb-6 overflow-hidden relative">
                <Image
                  src="/images/employee2.jpg"
                  alt="Sara Ahmad"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Sara Ahmad
              </h3>
              <p className="text-gray-600">{teamSection("p2")}</p>
            </div>
            {/* <!-- Team Member 3 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-gray-300 h-32 w-32 rounded-full mx-auto mb-6 relative overflow-hidden">
                <Image
                  src="/images/employee3.jpg"
                  alt="Laura Lee"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Laura Lee</h3>
              <p className="text-gray-600">{teamSection("p3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            {contactSection("h2")}
          </h2>
          <div className="flex-col md:flex-row flex gap-5 justify-between">
            <form className="md:w-1/2 max-w-2xl mx-auto space-y-6">
              <input
                type="text"
                placeholder={contactSection("input1")}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder={contactSection("input2")}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none"
              />
              <textarea
                placeholder={contactSection("input3")}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none"
              ></textarea>
              <button className="w-full bg-blue-200  px-6 py-3 rounded-lg shadow hover:bg-blue-300 duration-200">
                {contactSection("btn")}
              </button>
            </form>
            <div className="p-5 md:w-1/2 flex flex-col items-center justify-between rounded-lg bg-blue-200">
              <div dir="ltr" className="flex gap-3 justify-between">
                <Image
                  src="/images/phone-icon.png"
                  alt="Phone Icon"
                  width={25}
                  height={25}
                />
                <p>+965 0000 0000</p>
              </div>
              <div>
                <p className="mb-3 text-center">{contactSection("address")}</p>
                <iframe
                  className="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5628.947497786823!2d48.0727458364322!3d29.33998892607675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d8ea3103d29%3A0x3e5a59e8bdc93cef!2zU2FibMOo!5e1!3m2!1sen!2skw!4v1732820869774!5m2!1sen!2skw"
                  width="400"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-blue-200 text-black py-8">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
          {footer("p")}
          </p>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Link href="#" className=" hover:text-zinc-900">
              Facebook
            </Link>
            <Link href="#" className="hover:text-zinc-900">
              Instagram
            </Link>
            <Link href="#" className="hover:text-zinc-900">
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
