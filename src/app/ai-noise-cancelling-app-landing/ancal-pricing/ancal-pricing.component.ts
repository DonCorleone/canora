import { Component } from '@angular/core';

@Component({
    selector: 'app-ancal-pricing',
    templateUrl: './ancal-pricing.component.html',
    styleUrls: ['./ancal-pricing.component.scss']
})
export class AncalPricingComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}