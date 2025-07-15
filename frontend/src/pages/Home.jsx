import React from 'react';
import { useTranslation } from 'react-i18next';
import VoiceImg from '../assets/Voice.png';
import MedScannerImg from '../assets/medScanner.png';
import DashboardImg from '../assets/dashboard.png';
import SehatSathiLogo from '../assets/sehatsathi.png';
import frontImg from '../assets/front.png';
import { Link } from "react-router-dom";
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';

const Home = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* HERO */}
      <section className="h-screen text-center bg-white-100 pt-24 px-4 pb-4">
        <img
          src={frontImg}
          alt="Elderly woman talking to SehatSathi"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />
        <div className="relative flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl md:text-6xl font-bold text-center max-w-2xl z-10">
            {t('heroTitle')}
          </h2>
          <p className="mt-3 text-gray-600 text-xl max-w-2xl mx-auto pb-10 z-10">
            {t('heroSubtitle')}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 z-10">
            <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
              {t('talkButton')}
            </button>
            <button className="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-100">
              {t('offlineButton')}
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-8 text-center">
        <h2 className="text-5xl font-bold mb-15">{t('featuresTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {[
            {
              title: t('feature1.title'),
              desc: t('feature1.desc'),
              img: VoiceImg,
              btn: t('feature1.btn'),
              link: '/assistant'
            },
            {
              title: t('feature2.title'),
              desc: t('feature2.desc'),
              img: MedScannerImg,
              btn: t('feature2.btn'),
              link: '/scanner'
            },
            {
              title: t('feature3.title'),
              desc: t('feature3.desc'),
              img: DashboardImg,
              btn: t('feature3.btn'),
              link: '/dashboard'
            }
          ].map((feature, i) => (
            <div key={i} className="border p-6 rounded-lg text-left">
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
              <img src={feature.img} alt={feature.title} className="my-4 rounded-md w-full" />
              <Link to={feature.link}>
                <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">{feature.btn}</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO + LANGUAGE */}
      <section className="bg-white-50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex-1 text-center">
            <h4 className="text-2xl font-semibold">{t('demoTitle')}</h4>
            <img src={SehatSathiLogo} alt="Demo" className="rounded mx-auto w-110" />
            <p className="mt-4 text-sm text-gray-600">
              {t('demoDesc')}
            </p>
          </div>

          <div className="flex-1 text-center">
            <h4 className="text-2xl font-semibold mb-4">{t('chooseLang')}</h4>

            <select
              className="border px-8 py-2 mb-4 rounded"
              onChange={handleLanguageChange}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="gu">Gujrati</option>
              <option value="mr">Marathi</option>
              <option value="bn">Bengali</option>
            </select>

            <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
              {t('langDesc')}
            </p>

            <div className="bg-gray-100 p-4 rounded-lg text-left max-w-sm mx-auto">
              <h5 className="font-medium mb-2 text-teal-700">{t('whyLang.title')}</h5>
              <ul className="list-disc text-sm text-gray-600 ml-4 space-y-1">
                <li>{t('whyLang.point1')}</li>
                <li>{t('whyLang.point2')}</li>
                <li>{t('whyLang.point3')}</li>
              </ul>
            </div>

            <button className="mt-6 bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 text-sm">
              {t('talkButton')}
            </button>
          </div>
        </div>
      </section>

      {/* UPCOMING FEATURE */}
      <section className="text-center py-10 bg-white">
        <h4 className="text-3xl text-red-500 font-semibold">{t('upcomingFeature.title')}</h4>
        <p className="text-gray-500 mt-2">
          {t('upcomingFeature.desc')}
        </p>
        <p className="text-sm text-gray-800 mt-2">
          {t('poweredBy')}
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white-50 py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">{t('testimonialsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            t('testimonials.t1'),
            t('testimonials.t2'),
            t('testimonials.t3')
          ].map((tItem, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow text-left">
              <blockquote className="italic">"{t(`testimonials.t${i + 1}.quote`)}"</blockquote>
              <p className="mt-2 text-sm font-semibold text-teal-700">
                {t(`testimonials.t${i + 1}.name`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white text-center py-10">
        <h3 className="text-3xl font-bold mb-6">{t('partners')}</h3>
        <div className="flex justify-center flex-wrap gap-6">
          <img src={p1} alt="P1" className="w-20" />
          <img src={p2} alt="P2" className="w-20" />
          <img src={p3} alt="P3" className="w-20" />
          <img src={p4} alt="P4" className="w-20" />
          <img src={p5} alt="P5" className="w-20" />
        </div>
      </section>
    </div>
  );
};

export default Home;
