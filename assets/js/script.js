'use strict';

// Modal variable

const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// Modal Function
const modalCloseFunction = () =>{modal.classList.add('closed')}

// Modal eventLstener
modalCloseOverlay.addEventListener('click', modalCloseFunction);
modalCloseBtn.addEventListener('click', modalCloseFunction);


// Notification toast variables
const notificationToast = document.querySelector('[data-toast]')
const totalCloseBtn = document.querySelector('[data-toast-close]')

// Notification toast eventListener
totalCloseBtn.addEventListener('click', () =>{
    notificationToast.classList.add('closed')
});



// Mbile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]')
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]')

for(let i = 0; i < mobileMenuOpenBtn.length; i++){
    // Mobile menu function
    const mobileMenuCloseFunc = () =>{
        mobileMenu[i].classList.remove('active')
        overlay.classList.remove('active')
    }

    mobileMenuOpenBtn[i].addEventListener('click', () =>{
        mobileMenu[i].classList.add('active')
        overlay.classList.add('active')
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc)
    overlay.addEventListener('click', mobileMenuCloseFunc)

};



// Accordion function

const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for(let i = 0; i < accordionBtn.length; i++){
    accordionBtn[i].addEventListener('click', () =>{
        const clickedBtn = accordionBtn[i].nextElementSibling.classList.contains('active')
        for(let j = 0; j < accordion.length; j++){
            if(clickedBtn) break;
            if(accordion[j].classList.contains('active')){
                accordion[j].classList.remove('active');
                accordionBtn[j].classList.remove('active')
            }
        }

        accordionBtn[i].nextElementSibling.classList.toggle('active')
        accordionBtn[i].classList.toggle('active')
    })
}
