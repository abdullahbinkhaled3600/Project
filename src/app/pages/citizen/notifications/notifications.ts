import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'success' | 'warning' | 'info' | 'danger';
  unread: boolean;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})
export class NotificationsComponent {

  notifications: NotificationItem[] = [
    {
      id: 1,
      title: 'اكتمال طلب تجديد هوية',
      message: 'تم الانتهاء من معالجة طلب تجديد الهوية الوطنية الخاص بك بنجاح.',
      time: 'منذ ساعتين',
      type: 'success',
      unread: true
    },
    {
      id: 2,
      title: 'تحديث البيانات مطلوب',
      message: 'يرجى تحديث بيانات الاتصال الخاصة بك لضمان استلام الرسائل.',
      time: 'أمس',
      type: 'warning',
      unread: true
    },
    {
      id: 3,
      title: 'خدمة جديدة متاحة',
      message: 'تم إضافة خدمة تجديد الرخصة إلكترونياً.',
      time: '20/10/2023',
      type: 'info',
      unread: false
    },
    {
      id: 4,
      title: 'رفض طلب تصديق وثائق',
      message: 'تم رفض الطلب لعدم وضوح المرفقات.',
      time: '18/10/2023',
      type: 'danger',
      unread: false
    }
  ];

  /** تحديد إشعار كمقروء */
  markAsRead(notification: NotificationItem): void {
    notification.unread = false;
  }

  /** تحديد الكل كمقروء */
  markAllAsRead(): void {
    this.notifications.forEach(n => n.unread = false);
  }

  /** أيقونة حسب النوع */
  getIcon(type: NotificationItem['type']): string {
    switch (type) {
      case 'success': return 'fa-check-circle';
      case 'warning': return 'fa-user-edit';
      case 'danger': return 'fa-times-circle';
      default: return 'fa-info-circle';
    }
  }

  /** كلاس لون الأيقونة */
  getIconClass(type: NotificationItem['type']): string {
    return `text-${type} bg-${type}-subtle`;
  }

}
