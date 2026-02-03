import { Routes } from '@angular/router';

<<<<<<< HEAD
import { Layout } from './pages/citizen/layout/layout';
import { CitizenDashboardComponent } from './pages/citizen/dashboard/dashboard';
import { CitizenProfileComponent } from './pages/citizen/profile/profile';
import { ProfileEditComponent } from './pages/citizen/profile-edit/profile-edit';
import { ServicesComponent } from './pages/citizen/services/services';
import { MyRequestsComponent } from './pages/citizen/my-requests/my-requests';
import { BookingComponent } from './pages/citizen/booking/booking';
import { NotificationsComponent } from './pages/citizen/notifications/notifications';
import { ComplaintsComponent } from './pages/citizen/complaints/complaints';

export const routes: Routes = [
  // 🔹 redirect من الصفحة الرئيسية
  {
    path: '',
    redirectTo: 'citizen',
    pathMatch: 'full'
  },

  // 🔹 citizen layout
  {
    path: 'citizen',
    component: Layout,
    children: [
      // 🔹 redirect افتراضي داخل citizen
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: CitizenDashboardComponent
      },
      {
        path: 'profile',
        component: CitizenProfileComponent
      },
      {
        path: 'profile-edit',
        component: ProfileEditComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'my-requests',
        component: MyRequestsComponent
      },
      {
        path: 'booking',
        component: BookingComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'complaints',
        component: ComplaintsComponent
      }
    ]
  },

  // 🔹 أي مسار غير معروف
  {
    path: '**',
    redirectTo: 'citizen'
  }
];
=======
export const routes: Routes = [];
>>>>>>> be4b7da094c94fa358f5d0808f72674ff4380d5e
