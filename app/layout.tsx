import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

// Importieren der Schriftart in Ihrer Seitenkomponente
import {Roboto_Condensed} from 'next/font/google';
import Navigation from "@/components/navigation/Navigation";

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
            <body className={robotoCondensed.className}>
                {children}
                <Navigation />
            </body>
        </html>
    );
}
