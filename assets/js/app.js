"use strict";

document.addEventListener('DOMContentLoaded', ()=>{
    const audio = document.getElementById('audio')

    window.addEventListener('load', ()=>{
        audio.volume = 0.02
        audio.play()
    })
})