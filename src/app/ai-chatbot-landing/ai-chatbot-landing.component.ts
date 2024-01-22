import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-ai-chatbot-landing',
    templateUrl: './ai-chatbot-landing.component.html',
    styleUrls: ['./ai-chatbot-landing.component.scss']
})
export class AiChatbotLandingComponent {

    title = 'AI Chatbot Landing - Canora';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}