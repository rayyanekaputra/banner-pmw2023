"use client";
import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const [isData, setData] = useState([])

  const endpointAPI = "https://6555c0cc84b36e3a431e3e84.mockapi.io/diaryku";

  async function getDiary() {
    try {
      const res = await axios.get(endpointAPI);

      //ambil data
      const dataJSON = res.data;
      console.log('dalam', dataJSON);
      setData(dataJSON)


      //ambil judul
      const judul = dataJSON.map((item) => item.judul);
      setJudul(judul);

      //ambil isi_diary
      const isi_diary = dataJSON.map((item) => item.isi_diary);
      setIsiDiary(isi_diary);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  /*
  react strict mode khusus di dev selalu merender 2x
  untuk mengecek adanya unintended sideeffect
  https://www.youtube.com/shorts/BNaPTkadnao
  */
  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div>
      {isData ? (judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
            <Link href={`/diary/${encodeURIComponent(item)}/${encodeURIComponent(isiDiary[idx])}`}>
            <li key={idx}>           
              <div className={`diary-container ${idx === judul.length - 1? 'last-item' :''}`}>
                <h1>{judul[idx]}</h1>
                <p className="p-diary">{isiDiary[idx]}</p>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      ) : (
        "API is loading"
      )
      ) : 'API-nya empty'

      }

    </div>
  );
}
