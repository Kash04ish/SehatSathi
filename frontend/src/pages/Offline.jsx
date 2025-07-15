import { useTranslation } from "react-i18next";
import { FaWifi, FaSms, FaDownload } from 'react-icons/fa';

const Offline = () => {
  const { t } = useTranslation();

  const sendEmergencySMS = async () => {
    try {
      await fetch('http://localhost:4000/api/send-sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: '+919876543210',
          body: '🚨 Emergency Alert from SehatSathi!',
        }),
      });
      alert(t("offline.smsSuccess"));
    } catch (err) {
      console.error(err);
      alert(t("offline.smsFail"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">

      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* Offline Mode Header */}
        <div className="flex items-start gap-3 bg-white rounded-lg shadow-md p-6">
          <FaWifi className="text-teal-600 text-3xl mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-teal-700">{t("offline.headerTitle")}</h2>
            <p className="text-gray-600 mt-1">{t("offline.headerDesc")}</p>
          </div>
        </div>

        {/* Assistant Widget */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-lg font-semibold">{t("offline.assistantTitle")}</h3>
          <div className="bg-gray-50 border rounded-lg p-4 space-y-2">
            <p className="text-right text-sm text-gray-700">{t("offline.sampleQuestion")}</p>
            <p className="text-gray-800">{t("offline.sampleAnswer")}</p>
          </div>
          <input
            type="text"
            placeholder={t("offline.inputPlaceholder")}
            className="w-full border rounded p-2"
          />
          <p className="text-green-600 text-sm">🧠 {t("offline.emotionDetected")} <strong>{t("offline.emotionValue")}</strong></p>
        </div>

        {/* Emergency SMS Trigger */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-lg font-semibold">{t("offline.smsTitle")}</h3>
          <p className="text-gray-600 text-sm">{t("offline.smsDesc")}</p>
          <button
            onClick={sendEmergencySMS}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
          >
            <FaSms /> {t("offline.smsButton")}
          </button>
          <div className="text-gray-700 text-sm space-y-1">
            <p>👤 {t("offline.contact1")}</p>
            <p>👤 {t("offline.contact2")}</p>
            <p>👤 {t("offline.contact3")}</p>
          </div>
        </div>

        {/* Health Resources */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-3">
          <h3 className="text-lg font-semibold">{t("offline.resourcesTitle")}</h3>
          {t("offline.resourcesList", { returnObjects: true }).map((title, i) => (
            <details key={i} className="bg-gray-50 rounded-lg p-3">
              <summary className="font-medium text-teal-700 cursor-pointer">{title}</summary>
              <p className="mt-1 text-gray-600 text-sm">{t("offline.resourceDesc")}</p>
            </details>
          ))}
        </div>

        {/* PWA Installation */}
        <div className="flex items-start gap-3 bg-white rounded-lg shadow-md p-6">
          <FaDownload className="text-teal-600 text-2xl mt-1" />
          <div>
            <h4 className="font-semibold">{t("offline.pwaTitle")}</h4>
            <p className="text-gray-600 text-sm mt-1">{t("offline.pwaDesc")}</p>
            <button className="mt-3 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded">
              {t("offline.pwaButton")}
            </button>
          </div>
        </div>

      </main>

    </div>
  );
};

export default Offline;

