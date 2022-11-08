import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {

    public hotelName = 'Hilton Hotel';
    public numberOfRooms = 10;
    public hideRooms = false;

    constructor() { }

    ngOnInit(): void {
    }

    public toggle() {
        this.hideRooms = !this.hideRooms;
    }

}
