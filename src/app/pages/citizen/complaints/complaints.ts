import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complaints',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './complaints.html',
  styleUrls: ['./complaints.css']
})
export class ComplaintsComponent {

  /* المحافظات */
  governorates: string[] = [
    'أمانة العاصمة',
    'عدن',
    'تعز',
    'الحديدة'
  ];

  /* المديريات */
  districts: string[] = [
    'مديرية 1',
    'مديرية 2',
    'مديرية 3'
  ];

  /* نموذج الرسالة */
  form = {
    type: 'شكوى',
    governorate: '',
    district: '',
    branch: '',
    ref: '',
    subject: '',
    message: ''
  };

  /* السجل */
  history = [
    {
      id: 'CMP-1024',
      subject: 'تأخير استلام البطاقة',
      status: 'قيد المعالجة',
      date: '25/10/2023'
    },
    {
      id: 'CMP-1008',
      subject: 'اقتراح تحسين البوابة',
      status: 'مكتمل',
      date: '10/09/2023'
    }
  ];

  submit(): void {
    console.log('Submitted:', this.form);
    alert('تم إرسال الرسالة بنجاح');

    this.form = {
      type: 'شكوى',
      governorate: '',
      district: '',
      branch: '',
      ref: '',
      subject: '',
      message: ''
    };
  }

  statusClass(status: string): string {
    switch (status) {
      case 'مكتمل':
        return 'status-completed';
      case 'قيد المعالجة':
        return 'status-processing';
      default:
        return '';
    }
  }
}
