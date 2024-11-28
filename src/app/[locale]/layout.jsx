import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata = {
  title: "Seniora",
  description:
    "Discover luxury and elegance at Seniora Salon. We offer personalized beauty services, including haircuts, styling, facials, and more. Book your appointment today to look and feel your best!",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  console.log(locale)
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html dir={locale === "ar"? "rtl" : "ltr"} lang={locale}>
      <body className="relative">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
