"use client";

import { useState } from "react";
import "./globals.css";

export default function HoroscopeApp() {
  const [birthDate, setBirthDate] = useState<string>(""); // 生年月日
  const [gifUrl, setGifUrl] = useState<string | null>(null); // 表示するGIFのURL

  // 占い結果に基づくGIFを取得する関数
  const getGifForDate = (date: string): string => {
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();

    // 簡易的な占い（星座ベースの例）
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"; // おひつじ座
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return "https://media.giphy.com/media/l41lOQOD28v9fT20c/giphy.gif"; // おうし座
    }
    // 他の星座も同様に追加...
    return "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"; // デフォルト
  };

  const handleSubmit = () => {
    if (birthDate) {
      const gif = getGifForDate(birthDate);
      setGifUrl(gif);
    } else {
      alert("生年月日を入力してください！");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">あなたの運勢を占おう！</h1>

      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="mb-4 px-4 py-2 text-black rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        占う！
      </button>

      {gifUrl && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">占い結果:</h2>
          <img src={gifUrl} alt="占い結果のGIF" className="w-64 h-64" />
        </div>
      )}
    </div>
  );
}
