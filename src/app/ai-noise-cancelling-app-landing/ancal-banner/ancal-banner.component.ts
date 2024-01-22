import { Component } from '@angular/core';

@Component({
    selector: 'app-ancal-banner',
    templateUrl: './ancal-banner.component.html',
    styleUrls: ['./ancal-banner.component.scss']
})
export class AncalBannerComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}