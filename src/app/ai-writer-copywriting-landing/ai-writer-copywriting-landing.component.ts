import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-ai-writer-copywriting-landing',
    templateUrl: './ai-writer-copywriting-landing.component.html',
    styleUrls: ['./ai-writer-copywriting-landing.component.scss']
})
export class AiWriterCopywritingLandingComponent {

    title = 'AI Writer & Copywriting Landing - Canora';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}