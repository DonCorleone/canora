import { Component } from '@angular/core';

@Component({
    selector: 'app-adml-cta',
    templateUrl: './adml-cta.component.html',
    styleUrls: ['./adml-cta.component.scss']
})
export class AdmlCtaComponent {

    // Contact Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}