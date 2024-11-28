import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function HomePage() {
  const text = useTranslations("HomePage");
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">SENIORA</h1>
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="#about" className="text-gray-600 hover:text-black">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-600 hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link href="#team" className="text-gray-600 hover:text-black">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-600 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
          <div className="space-x-4 hidden md:flex items-center">
            <Link href="#" className="text-gray-600 hover:text-black">
              العربية
            </Link>
          </div>
          {/* <!-- Mobile menu toggle --> */}
          <button className="md:hidden text-gray-600">☰</button>
        </div>
      </nav>

      {/* <!-- Hero Section --> */}
      <section className="bg-gradient-to-r from-pink-200 via-gray-100 to-blue-200">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-20 space-y-8 md:space-y-0">
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-gray-600">Salmiya, Kuwait</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
              All for the sake of your{" "}
              <span className="text-pink-500">beauty</span>
            </h1>
            <div className="mt-8 space-x-4">
              <Link
                href="#"
                className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
              >
                Book Now
              </Link>
            </div>
          </div>
          {/* <!-- Placeholder for image --> */}
          <div className="w-full md:w-1/2 h-96 rounded-md relative">
            <Image
              src="/images/hero-img.png"
              alt="Salon"
              layout="fill"
              objectFit="contain"
              className="absolute b-0 left-0"
            />
          </div>
        </div>
      </section>

      {/* <!-- About Us Section --> */}
      <section className="bg-white" id="about">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-gray-600">
              At Seniora, we believe beauty is an art. Our expert team is
              dedicated to enhancing your natural glow with personalized care
              and premium services. From stunning hairstyles to rejuvenating
              treatments, we ensure every visit leaves you feeling confident and
              radiant.
            </p>
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
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">+10</p>
              <p className="text-gray-600">Years Of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services Section --> */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Our Services
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
                Hair Styling
              </h3>
              <p className="text-gray-600 mt-2">
                Get a perfect hairstyle tailored just for you.
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
                Facial Treatments
              </h3>
              <p className="text-gray-600 mt-2">
                Refresh and rejuvenate your skin with our facials.
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
              <h3 className="text-xl font-semibold text-gray-800">Nail Care</h3>
              <p className="text-gray-600 mt-2">
                Stunning nail art and treatments for your hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Team Section --> */}
      <section id="team" className="py-16 bg-pink-200">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Meet Our Team
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
              <p className="text-gray-600">Senior Hair Stylist</p>
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
              <p className="text-gray-600">Nail Artist</p>
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
              <h3 className="text-xl font-semibold text-gray-800">
                Laura Lee
              </h3>
              <p className="text-gray-600">Skincare Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Contact Us
          </h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none"
            ></textarea>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-500">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-blue-200 text-black py-8">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2024 Seniora Salon. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
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
