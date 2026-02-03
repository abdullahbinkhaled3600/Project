import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class BookingComponent {

  /** الأوقات المتاحة */
  times: string[] = [
    '08:00 ص',
    '08:30 ص',
    '09:00 ص',
    '09:30 ص',
    '10:00 ص',
    '10:30 ص',
    '11:00 ص',
    '11:30 ص'
  ];

  /** الوقت المختار */
  selectedTime: string | null = null;

  /** اختيار وقت */
  selectTime(time: string): void {
    this.selectedTime = time;
  }

}
