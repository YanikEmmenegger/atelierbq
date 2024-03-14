import type {Metadata} from "next";
import "./globals.css";

// Importieren der Schriftart in Ihrer Seitenkomponente
import {Roboto_Condensed} from 'next/font/google';
import Navigation from "@/components/navigation/Navigation";
import {twMerge} from "tailwind-merge";
import Footer from "@/components/footer/Footer";

// Konfigurieren der Schriftart mit spezifischen Gewichten
const robotoCondensed = Roboto_Condensed({
    weight: ['100', '300', '400'], // Thin 100, Light 300, Regular 400
    subsets: ['latin'], // Definieren Sie die gewünschten Schriftschnitte
    display: 'swap', // Verbessert das Rendering von Textinhalten, indem das unmittelbare Anzeigen in einem Standardstil ermöglicht wird, bis die Schriftart geladen ist
});

export const metadata: Metadata = {
    title: "Atelier B²",
    description: "Atelier B²",
    keywords: ["Atelier B²"],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={twMerge(robotoCondensed.className, "bg-AtelierBQ-Light")}>
        <main className={"container pt-32 mx-auto text-left w-4/5 flex flex-col min-h-screen"}>
            <div className={"flex grow"}>
                {children}
            </div>
        </main>
        <Navigation/>
        <Footer/>
        </body>
        </html>
    );
}
