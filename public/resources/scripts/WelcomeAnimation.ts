import { AnimeTimelineInstance } from 'animejs';
import anime from 'animejs/lib/anime.es.js';

export default class WelcomeAnimation implements AnimationInterface {
    constructor () {}
    
    start (): void {
        let domElements = document.querySelectorAll('.anime-welcome');
        
        domElements.forEach(element => {
            element.classList.remove('hidden');
        });

        let animation_1 = anime.timeline({
            duration: 800, 
            easing: 'easeInOutSine'
        })
        .add({
            targets: domElements,
            opacity: [0, 1],
            display: 'block',
            easing: 'easeOutSine'
        });

        let animation_2 = anime.timeline({
            duration: 1000,
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: true
        })
        .add({
            targets: domElements,
            scale: [1, 1.04]
        });

        let triggerImage = document.querySelector('.trigger-photo');
        triggerImage.addEventListener('click', () => {
            alert('Ok');
        })
    }

    disable (): void {

    }
}