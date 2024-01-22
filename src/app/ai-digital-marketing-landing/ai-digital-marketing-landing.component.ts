import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-ai-digital-marketing-landing',
    templateUrl: './ai-digital-marketing-landing.component.html',
    styleUrls: ['./ai-digital-marketing-landing.component.scss']
})
export class AiDigitalMarketingLandingComponent {

    title = 'AI Digital Marketing Landing - Canora';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}