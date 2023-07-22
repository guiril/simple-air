'use client';

import { useState } from 'react';
import Image from 'next/image';

const airlines = [
  { iata: 'br', title: '長榮航空' },
  { iata: 'ci', title: '中華航空' },
  { iata: 'jl', title: '日本航空' },
  { iata: 'jx', title: '星宇航空' },
  { iata: '7c', title: '濟州航空' },
  { iata: 'mm', title: '樂桃航空' },
  { iata: '3k', title: '捷星航空' },
  { iata: '5j', title: '宿霧太平洋航空' },
  { iata: 'tg', title: '泰國航空' },
  { iata: 'ae', title: '華信航空' }
];

export default function AirlinesTab() {
  let [activeTab, setActiveTab] = useState(airlines[0].iata);

  return airlines.map((airline) => {
    return (
      <li className="shrink-0 mr-4 last:mr-0" key={airline.iata}>
        <button
          type="button"
          className={`flex items-center py-[9px] px-[15px] rounded-lg ease-linear ${
            activeTab === airline.iata
              ? 'text-p-sm-btn-sb text-neutral-0 bg-neutral-700 border-neutral-700'
              : 'text-p-sm-btn text-neutral-600 border border-neutral-700/[.12] hover:bg-neutral-100 hover:border-neutral-700/[.04]'
          }`}
          onClick={() => setActiveTab(airline.iata)}
        >
          <div className="mr-2 shrink-0 bg-neutral-0 rounded-full">
            <Image
              src={`/images/airlines/${airline.iata}.svg`}
              alt={airline.title}
              width={18}
              height={18}
            />
          </div>
          <span>{airline.title}</span>
        </button>
      </li>
    );
  });
}
