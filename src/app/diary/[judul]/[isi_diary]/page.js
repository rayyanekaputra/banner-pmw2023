'use client'
import '@styles/diarypost.css'

import { useRouter } from 'next/navigation';


export default function DiaryPosts({params}) {
    const {judul, isi_diary} = params
    return (
    <div className="diary-post-container">
        <h1>{decodeURIComponent(judul)}</h1>
        <p>{decodeURIComponent(isi_diary)}</p>
    
    </div>
    )
  }