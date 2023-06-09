import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>말랑말랑 포트폴리오</title>
        <meta name="description" content="말랑말랑 포트폴리오 사이트" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
