import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from 'scrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
// import WOW from 'wowjs';

export const App = () => {
  // useEffect(() => {
  //   new WOW.WOW({
  //     live: false,
  //   }).init();
  // }, []);

  return (
    <>
      <ScrollToTop />
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
};
