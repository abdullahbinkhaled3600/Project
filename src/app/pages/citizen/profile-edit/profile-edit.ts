import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,     // ✅ ضروري لـ ngModel
    RouterModule     // ✅ ضروري لـ routerLink
  ],
  templateUrl: './profile-edit.html',
  styleUrls: ['./profile-edit.css']
})
export class ProfileEditComponent {

  governorates = ['أمانة العاصمة', 'عدن', 'تعز', 'الحديدة'];
  districts = ['مديرية 1', 'مديرية 2', 'مديرية 3'];

  profile = {
    name: 'محمد أحمد العلي',
    nationalId: '1029384756',
    phone: '0501234567',
    email: 'mohamed.ali@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    governorate: '',
    district: '',
    country: 'اليمن'
  };

  save(): void {
    console.log('Profile Updated:', this.profile);
    alert('تم حفظ التغييرات بنجاح');
  }

  cancel(): void {
    history.back();
  }
}
