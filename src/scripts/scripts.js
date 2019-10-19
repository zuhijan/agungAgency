const headerLink = document.querySelector(".header__link");
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
const representSubtitleHide = "represent__subtitle_hide";
const invisibleEnabled = "invisible_enabled"

headerLink.addEventListener("click", () => { 
    modal.classList.add("modal_open");
    modal.classList.remove("modal_close");   
})

modalButton.addEventListener("click", () => { 
    modal.classList.remove("modal_open");
    modal.classList.add("modal_close");    
})
representSubtitleFirst.addEventListener("click", () => {
    invisibleFirst.classList.add(invisibleEnabled);
    representSubtitleFirst.classList.add(representSubtitleHide);
    representSubtitleFirstHidden.classList.remove(representSubtitleHide);
})
representButtonFirst.addEventListener("click", () => { 
    invisibleFirst.classList.remove(invisibleEnabled);
    representSubtitleFirst.classList.remove(representSubtitleHide);
    representSubtitleFirstHidden.classList.add(representSubtitleHide);    
})

representSubtitleSecond.addEventListener("click", () => {
    invisibleSecond.classList.add(invisibleEnabled);
    representSubtitleSecond.classList.add(representSubtitleHide);
    representSubtitleSecondHidden.classList.remove(representSubtitleHide);
})
representButtonSecond.addEventListener("click", () => { 
    invisibleSecond.classList.remove(invisibleEnabled);
    representSubtitleSecond.classList.remove(representSubtitleHide);
    representSubtitleSecondHidden.classList.add(representSubtitleHide);
    
})

representSubtitleThird.addEventListener("click", () => {
    invisibleThird.classList.add(invisibleEnabled);
    representSubtitleThird.classList.add(representSubtitleHide);
    representSubtitleThirdHidden.classList.remove(representSubtitleHide);
})
representButtonThird.addEventListener("click", () => { 
    invisibleThird.classList.remove(invisibleEnabled);
    representSubtitleThird.classList.remove(representSubtitleHide);
    representSubtitleThirdHidden.classList.add(representSubtitleHide);
    
})