import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component ({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    constructor(
        private regiserService: RegisterService
    ) { }

    ngOnInit() {
    }

    check() {
        return this.regiserService.getStatus() ? true : false;
    }
}
