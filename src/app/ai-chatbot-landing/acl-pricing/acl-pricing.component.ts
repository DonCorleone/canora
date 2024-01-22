import { Component } from '@angular/core';

@Component({
    selector: 'app-acl-pricing',
    templateUrl: './acl-pricing.component.html',
    styleUrls: ['./acl-pricing.component.scss']
})
export class AclPricingComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}