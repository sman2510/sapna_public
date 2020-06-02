import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'subscriptionList', loadChildren: () => import('./subscriptionList/subscriptionList.module').then(m => m.SubscriptionListModule) },
            { path: 'studentList', loadChildren: () => import('./studentList/studentList.module').then(m => m.StudentListModule) },
            { path: 'studentAdd', loadChildren: () => import('./studentAdd/studentAdd.module').then(m => m.StudentAddModule) },
            { path: 'studentEdit', loadChildren: () => import('./studentEdit/studentEdit.module').then(m => m.StudentEditModule) },
            { path: 'studentView', loadChildren: () => import('./studentView/studentView.module').then(m => m.StudentViewModule) },
            { path: 'classList', loadChildren: () => import('./classList/classList.module').then(m => m.ClassListModule) },
            { path: 'teacherList', loadChildren: () => import('./teacherList/teacherList.module').then(m => m.TeacherListModule) },
            { path: 'subjectList', loadChildren: () => import('./subjectList/subjectList.module').then(m => m.SubjectListModule) },
            { path: 'chapterList', loadChildren: () => import('./chapterList/chapterList.module').then(m => m.ChapterListModule) },
            { path: 'topicList', loadChildren: () => import('./topicList/topicList.module').then(m => m.TopicListModule) },
            { path: 'videoList', loadChildren: () => import('./videoList/videoList.module').then(m => m.VideoListModule) },
            { path: 'assessment', loadChildren: () => import('./assessment/assessment.module').then(m => m.AssessmentModule) },
            { path: 'assessmentView', loadChildren: () => import('./assessmentView/assessmentView.module').then(m => m.AssessmentViewModule) },            
            { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
            { path: 'notificationList', loadChildren: () => import('./notificationList/notificationList.module').then(m => m.NotificationListModule) },
            { path: 'redeemAmountList', loadChildren: () => import('./redeemAmountList/redeemAmountList.module').then(m => m.RedeemAmountListModule) },
            { path: 'vendorList', loadChildren: () => import('./vendorList/vendorList.module').then(m => m.VendorListModule) },
            { path: 'reportList', loadChildren: () => import('./reportList/reportList.module').then(m => m.ReportListModule) },            
            { path: 'changePassword', loadChildren: () => import('./changePassword/changePassword.module').then(m => m.ChangePasswordModule) },
            { path: 'adminList', loadChildren: () => import('./adminList/adminList.module').then(m => m.AdminListModule) },
            { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },

            { path: 'vendorDashboard', loadChildren: () => import('./vendorDashboard/vendorDashboard.module').then(m => m.VendorDashboardModule) },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
