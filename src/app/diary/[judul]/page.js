'use client'

import '@styles/diarypost.css'
import axios from 'axios';



export default function DiaryPosts() {
    console.log('function',params)
    return (
    <div className="diary-post-container">
        <h1>{params.judul}</h1>
        <p>{params.isi_diary}</p>
    
    </div>
    )
  }