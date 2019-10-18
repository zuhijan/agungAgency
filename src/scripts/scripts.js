const headerButton = document.querySelector(".header__button");
const modalButton = document.querySelector(".modal__button");
const modal = document.querySelector(".modal");

const invisibleFirst= document.querySelector(".invisible_first");
const representSubtitleFirst = document.querySelector(".represent__subtitle_first");
const representButtonFirst = document.querySelector(".invisible__button_first");
const representSubtitleFirstHidden = document.querySelector(".represent_subtitle_first-hidden");

const invisibleSecond= document.querySelector(".invisible_second");
const representSubtitleSecond = document.querySelector(".represent__subtitle_second");
const representButtonSecond = document.querySelector(".invisible__button_second");
const representSubtitleSecondHidden = document.querySelector(".represent_subtitle_second-hidden");

const invisibleThird = document.querySelector(".invisible_third");
const representSubtitleThird = document.querySelector(".represent__subtitle_third");
const representButtonThird = document.querySelector(".invisible__button_third");
const representSubtitleThirdHidden = document.querySelector(".represent_subtitle_third-hidden");

headerButton.addEventListener("click", () => { 
    modal.classList.add("modal_open");
    modal.classList.remove("modal_close");   
})

modalButton.addEventListener("click", () => { 
    modal.classList.remove("modal_open");
    modal.classList.add("modal_close");    
})
representSubtitleFirst.addEventListener("click", () => {
    invisibleFirst.classList.add("invisible_enabled");
    representSubtitleFirst.classList.add("represent__subtitle_hide");
    representSubtitleFirstHidden.classList.remove("represent__subtitle_hide");
})
representButtonFirst.addEventListener("click", () => { 
    invisibleFirst.classList.remove("invisible_enabled");
    representSubtitleFirst.classList.remove("represent__subtitle_hide");
    representSubtitleFirstHidden.classList.add("represent__subtitle_hide");    
})

representSubtitleSecond.addEventListener("click", () => {
    invisibleSecond.classList.add("invisible_enabled");
    representSubtitleSecond.classList.add("represent__subtitle_hide");
    representSubtitleSecondHidden.classList.remove("represent__subtitle_hide");
})
representButtonSecond.addEventListener("click", () => { 
    invisibleSecond.classList.remove("invisible_enabled");
    representSubtitleSecond.classList.remove("represent__subtitle_hide");
    representSubtitleSecondHidden.classList.add("represent__subtitle_hide");
    
})

representSubtitleThird.addEventListener("click", () => {
    invisibleThird.classList.add("invisible_enabled");
    representSubtitleThird.classList.add("represent__subtitle_hide");
    representSubtitleThirdHidden.classList.remove("represent__subtitle_hide");
})
representButtonThird.addEventListener("click", () => { 
    invisibleThird.classList.remove("invisible_enabled");
    representSubtitleThird.classList.remove("represent__subtitle_hide");
    representSubtitleThirdHidden.classList.add("represent__subtitle_hide");
    
})