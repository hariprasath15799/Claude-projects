import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Loan Against Mutual Funds Online | Get Up to ₹1 Crore | Shriram Credit",
  description:
    "Get a loan against mutual funds up to ₹1 crore from Shriram Credit, an RBI registered NBFC. Apply online, no need to sell your mutual funds, interest from 10.5% p.a., money in your bank in minutes.",
  keywords:
    "loan against mutual funds, LAMF, loan against securities, loan against shares, pledge mutual funds for loan, instant loan online, Shriram Credit, NBFC loan India",
  alternates: {
    canonical: "https://www.shriramcredit.in/",
  },
};

const financialServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Shriram Credit Company Limited",
  alternateName: "SCCL",
  url: "https://www.shriramcredit.in/",
  description:
    "Shriram Credit Company Limited is an RBI registered NBFC offering loan against mutual funds and loan against securities up to Rs 1 crore.",
  telephone: "+91-80-4367-6869",
  email: "info@shriramcredit.in",
  areaServed: "IN",
  address: [
    {
      "@type": "PostalAddress",
      name: "Registered Office",
      streetAddress: "Shriram House, No. 4, Burkit Road, T. Nagar",
      addressLocality: "Chennai",
      postalCode: "600017",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      name: "Corporate Office",
      streetAddress: "3/1, 4th Floor, Rukmini Towers, Platform Road, Seshadripuram",
      addressLocality: "Bengaluru",
      postalCode: "560020",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "LoanOrCredit",
        name: "Loan Against Mutual Funds",
        loanType: "Secured loan against pledged mutual fund units",
        currency: "INR",
        amount: { "@type": "MonetaryAmount", currency: "INR", maxValue: 10000000 },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "LoanOrCredit",
        name: "Loan Against Securities",
        loanType: "Secured loan against pledged shares and bonds",
        currency: "INR",
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a loan against mutual funds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A loan against mutual funds is a loan you take by pledging the mutual fund units you already own. Shriram Credit marks a lien on your units through CAMS or KFintech and gives you money against their value. Your units stay in your name, stay invested and keep earning returns.",
      },
    },
    {
      "@type": "Question",
      name: "How much loan can I get against my mutual funds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get up to 50% of the value of your equity funds and up to 75% of the value of your debt funds, with a maximum of Rs 1 crore against equity holdings. The final amount depends on which schemes you hold and our credit check.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to pay interest on the full loan amount?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You pay interest only on the money you actually use. Interest is calculated daily and billed once a month.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if the market goes down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the value of your pledged funds falls a lot, we will inform you and ask you to either pledge more units or repay part of the loan. This is called a margin call. We always give you notice and time before taking any action on your units.",
      },
    },
    {
      "@type": "Question",
      name: "Which mutual fund schemes can I pledge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most open-ended equity, hybrid and debt schemes from AMCs serviced by CAMS and KFintech can be pledged. Close-ended schemes, ELSS units still in the three year lock-in, and units already pledged elsewhere cannot be used.",
      },
    },
    {
      "@type": "Question",
      name: "What can I use the loan money for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use it for personal needs such as a medical bill, a wedding, education, home repairs or business working capital. RBI rules do not allow this money to be used for share trading or speculative activity.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get the loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The whole process is online. In most cases the loan is approved within minutes and the money reaches your bank account the same working day.",
      },
    },
    {
      "@type": "Question",
      name: "Can I close the loan early?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and it costs nothing extra. Repay the outstanding amount whenever you want and ask for a lien release. Your units become free again, usually within one or two working days.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a good CIBIL score for a loan against mutual funds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is a secured loan backed by your own investments, so the credit score requirement is much lower than for a personal loan. Checking your eligibility does not affect your credit score.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </body>
    </html>
  );
}
