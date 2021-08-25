/**
 * @author Louis Schirra <louissch.off@gmail.com>
 */

import BackAnimation from "./BackAnimation";
import WelcomeAnimation from "./WelcomeAnimation";

export default class Kernel {
    public backAnimation: BackAnimation;
    public welcomeAnimation: WelcomeAnimation;

    public constructor () {
        this.backAnimation = new BackAnimation();
        this.welcomeAnimation = new WelcomeAnimation();
    }
    
    public startAnimations (): void {
        this.backAnimation.start();
        this.welcomeAnimation.start();
    }
}

let kernel = new Kernel();
kernel.startAnimations();

window.addEventListener('resize', () => {
    kernel.backAnimation.setSize();
});