import '../styles/globals.css';
import NavSection from '../components/NavSection';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Al Najah Al Mutqan</title>
        <meta
          name="description"
          content="From small to large projects, our goal is to increase the function of your home or business, making it a beautiful well-designed space. We strive to understand the needs of our clients and implement the most cost effective solutions. At Najah, we seek to provide quality services while providing attentive customer service. We work closely with the subcontractors and suppliers to make sure that services that you need is of your and our standards"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <NavSection />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
