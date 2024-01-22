import { Component } from '@angular/core';

@Component({
    selector: 'app-awcl-pricing',
    templateUrl: './awcl-pricing.component.html',
    styleUrls: ['./awcl-pricing.component.scss']
})
export class AwclPricingComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}