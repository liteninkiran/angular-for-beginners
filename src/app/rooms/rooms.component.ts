import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {

    public hotelName = 'Hilton Hotel';
    public numberOfRooms = 10;
    public hideRooms = true;
    public rooms: Room = {
        availableRooms: 10,
        bookedRooms: 5,
        totalRooms: 20,
    };
    public roomList: RoomList[] = [
        {
            roomNumber: 1,
            roomType: 'Deluxe Room',
            amenities: 'Air Conditioning, Wi-Fi, TV, Bathroom, Kitchen',
            price: 500,
            photos: 'https://unsplash.com/photos/oxeCZrodz78',
            checkinTime: new Date('11-NOV-2021'),
            checkoutTime: new Date('12-NOV-2021'),
            rating: 4.5,
        },
        {
            roomNumber: 2,
            roomType: 'Standard Room',
            amenities: 'Air Conditioning, Wi-Fi, TV, Bathroom, Kitchen',
            price: 200,
            photos: 'https://unsplash.com/photos/PJNO2sLlbB8',
            checkinTime: new Date('11-NOV-2021'),
            checkoutTime: new Date('12-NOV-2021'),
            rating: 2.8,
        },
        {
            roomNumber: 3,
            roomType: 'Double Room',
            amenities: 'Air Conditioning, Wi-Fi, TV, Bathroom, Kitchen',
            price: 300,
            photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
            checkinTime: new Date('11-NOV-2021'),
            checkoutTime: new Date('12-NOV-2021'),
            rating: 3.7,
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    public toggle() {
        this.hideRooms = !this.hideRooms;
    }

}
