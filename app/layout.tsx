import { Container } from "@chakra-ui/react";
import Header from "./sections/header";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxW="150ch" paddingBlock="4" position="relative">
            <Header />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
