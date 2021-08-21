/**
 * @author Louis Schirra <louissch.off@gmail.com>
 */

import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ParametricGeometries } from 'three/examples/jsm/geometries/ParametricGeometries.js';

export default class Kernel {
    private scene: Three.Scene;
    private camera: Three.PerspectiveCamera;
    private renderer: Three.WebGLRenderer;
    private controler: OrbitControls;

    private geometry: Three.ParametricGeometry;

    public constructor () {
        this.scene = new Three.Scene();
        this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new Three.WebGLRenderer({
            canvas: document.querySelector("#animation"),
            antialias: true
        });
        this.renderer.physicallyCorrectLights = true;
        this.controler = new OrbitControls(this.camera, this.renderer.domElement);
    }

    public start () {
        this.initMainAnimation();
    }

    public setSize () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
    }

    private initMainAnimation () {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        let meshFunc = function (u0: number, v0: number, target: Three.Vector3) {
            let x = 40 * u0;
            let z = 40 * v0;
            let y = 2.45 * Math.sin(10 * (x^2 + z^2)) / 10;
            target.set(x, y, z);
        }

        this.geometry = new Three.ParametricGeometry(meshFunc, 150, 150);
        this.geometry.center();
        let material = new Three.MeshBasicMaterial({ color: 0x2ce1c6, wireframe: true, side: Three.DoubleSide });
        let fig = new Three.Mesh(this.geometry, material);
        fig.rotateOnAxis(new Three.Vector3(1, 0, 0), -0.9);

        this.scene.add(fig);
        this.camera.position.set(0, 3, 0);
        this.controler.update();
        this.animate();
    }

    private animate () {
        requestAnimationFrame(() => {
            this.animate();
        });

        this.geometry.rotateY(0.0005);
        this.renderer.render(this.scene, this.camera);
    }  
}

let kernel = new Kernel();
kernel.start();

window.addEventListener('resize', () => {
    kernel.setSize();
});