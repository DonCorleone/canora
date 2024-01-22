import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-ai-profile-picture-maker-landing',
    templateUrl: './ai-profile-picture-maker-landing.component.html',
    styleUrls: ['./ai-profile-picture-maker-landing.component.scss']
})
export class AiProfilePictureMakerLandingComponent {

    title = 'AI Profile Picture Maker Landing - Canora';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}