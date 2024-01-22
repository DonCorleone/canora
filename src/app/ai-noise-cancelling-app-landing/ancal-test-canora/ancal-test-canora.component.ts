import { Component } from '@angular/core';

@Component({
    selector: 'app-ancal-test-canora',
    templateUrl: './ancal-test-canora.component.html',
    styleUrls: ['./ancal-test-canora.component.scss']
})
export class AncalTestCanoraComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

    // Tabs 2
    currentInnerTab = 'innerTab1';
    switchInnerTab(event: MouseEvent, innerTab: string) {
        event.preventDefault();
        this.currentInnerTab = innerTab;
    }

}