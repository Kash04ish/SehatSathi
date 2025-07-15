import { useTranslation } from "react-i18next";
import scan from '../assets/medsc.png';

const Scanner = () => {
  const { t } = useTranslation();

  return (
    <div className="font-sans text-gray-800">

      <main className="max-w-7xl mx-auto p-4 md:flex gap-6">

        {/* LEFT: Upload + Audio Cards */}
        <div className="flex-1 space-y-6">

          {/* Upload Area */}
          <section className="border rounded-md p-4 bg-white">
            <h3 className="text-lg font-semibold">{t("scanner.uploadTitle")}</h3>
            <p className="text-sm text-gray-500 mb-4">{t("scanner.uploadSubtitle")}</p>
            <div className="border border-dashed rounded-md h-60 flex items-center justify-center text-gray-400 text-sm bg-gray-50">
              <span>📷 {t("scanner.uploadPlaceholder")}</span>
            </div>
            <button className="bg-orange-500 text-white mt-4 px-6 py-2 rounded hover:bg-orange-600">
              {t("scanner.scanButton")}
            </button>
          </section>

          {/* AI Voice Cards */}
          <section className="flex gap-4 overflow-x-auto pb-4">

            <div className="min-w-[250px] bg-purple-50 rounded-lg p-4 shadow-sm">
              <div className="text-center font-bold italic text-2xl text-pink-700 mb-4 leading-tight">
                {t("scanner.voiceCardTitle")}
              </div>
              <h4 className="font-semibold text-sm mb-2 text-left">{t("scanner.voiceCardSubtitle")}</h4>
              <img
                src={scan}
                alt="Altrocin Strip"
                className="rounded shadow w-full h-32 object-contain"
              />
              <p className="text-xs text-gray-700 mt-2">
                {t("scanner.voiceCardText")}
              </p>
            </div>

            <div className="min-w-[250px] bg-purple-50 rounded-lg p-4 shadow-sm text-center flex flex-col justify-between">
              <h4 className="font-semibold text-sm mb-2 text-purple-700">{t("scanner.motivationTitle")}</h4>
              <p className="text-xs text-gray-700 mb-2">
                {t("scanner.motivationQuote")}
              </p>
              <button className="border rounded px-4 py-1 text-sm hover:bg-purple-100 transition">
                ▶️ {t("scanner.playVoice")}
              </button>
            </div>

          </section>

        </div>

        {/* RIGHT PANEL */}
        <aside className="w-full md:w-80 space-y-6 mt-6 md:mt-0">

          <section className="border rounded-md p-4 bg-white">
            <h4 className="text-md font-semibold">{t("scanner.scannedDetails")}</h4>
            <p className="text-sm mt-2"><strong>OCR:</strong> {t("scanner.ocrText")}</p>
            <p className="text-sm mt-2"><strong>AI:</strong> {t("scanner.aiExplain")}</p>
            <button className="bg-red-100 text-red-600 px-3 py-1 mt-3 rounded hover:bg-red-200 text-sm">
              🔊 {t("scanner.playExplanation")}
            </button>
          </section>

          <section className="border rounded-md p-4 bg-white">
            <h4 className="text-md font-semibold">{t("scanner.dietaryIntake")}</h4>
            <p className="text-sm mt-2">{t("scanner.dietaryExample")}</p>
            <p className="text-sm mt-2 text-gray-600">{t("scanner.dietaryVoice")}</p>
            <button className="bg-red-100 text-red-600 px-3 py-1 mt-3 rounded hover:bg-red-200 text-sm">
              🔊 {t("scanner.playExplanation")}
            </button>
          </section>
          <section className="border rounded-md p-4 bg-white">
            <h4 className="text-md font-semibold mb-2">{t("scanner.historyTitle")}</h4>
            <ul className="text-sm space-y-3">
              <li>
                <strong>Amoxicillin 250mg</strong><br />
                <span className="text-xs text-gray-500">{t("scanner.amoxInfo")}</span>
              </li>
              <li>
                <strong>Multivitamin Daily</strong><br />
                <span className="text-xs text-gray-500">{t("scanner.multiInfo")}</span>
              </li>
              <li>
                <strong>Digene Gel</strong><br />
                <span className="text-xs text-gray-500">{t("scanner.digeneInfo")}</span>
              </li>
            </ul>
            <button className="mt-4 text-sm text-orange-600 hover:underline">{t("scanner.viewAll")}</button>
          </section>
        </aside>
      </main>

    </div>
  );
};

export default Scanner;

