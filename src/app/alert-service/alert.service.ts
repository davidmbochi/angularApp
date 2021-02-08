import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertMe(message: string): any{
    alert(message);
  }

  constructor() { }
}
