import { Injectable } from '@angular/core';
import 'rxjs/Rx'; 
import { Observable } from 'rxjs/Observable';

export class Guest {
  constructor(public id: number, public name: string, public contactNumber:string) { }
}

let GUESTS = [
    new Guest(101,"Karthik","9986173092"),
    new Guest(102,"Ganesh","9986173093"),
    new Guest(103,"Anil","9986173094"),
    new Guest(104,"Mukesh","9986173095")

];
@Injectable()
export class GuestService {
    getAllGuests():Guest[]{
        return GUESTS;
    }
    getGuestById(id:number){
        return GUESTS.find(guest=>guest.id === id);
    }
}
