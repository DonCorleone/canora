import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from "aos";

@Component({
    selector: 'app-ai-noise-cancelling-app-landing',
    templateUrl: './ai-noise-cancelling-app-landing.component.html',
    styleUrls: ['./ai-noise-cancelling-app-landing.component.scss']
})
export class AiNoiseCancellingAppLandingComponent {

    title = 'AI Noise Cancelling App Landing - Canora';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}