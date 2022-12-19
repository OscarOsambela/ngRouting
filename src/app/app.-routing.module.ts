import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AsyncPipeComponent } from './pages/async-pipe/async-pipe.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetachComponent } from './pages/detach/detach.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgZoneComponent } from './pages/ng-zone/ng-zone.component';
LoginPageComponent;
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { OnPushComponent } from './pages/on-push/on-push.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { ReattachComponent } from './pages/reattach/reattach.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { AttrComponent } from './components/directivasAvanzadas/attr/attr.component';
import { LifeCycleComponent } from './components/directivasAvanzadas/life-cycle/life-cycle.component';
import { StructComponent } from './components/directivasAvanzadas/struct/struct.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomePageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'contacts/:id',
        component: ContactDetailPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'random',
        component: RandomContactPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'tasks',
        component: TasksPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'onpush',
        component: OnPushComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'detach',
        component: DetachComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'reattach',
        component: ReattachComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ngzone',
        component: NgZoneComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'asyncpipe',
        component: AsyncPipeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'attr',
        component: AttrComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'stract',
        component: StructComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'lifecycle',
        component: LifeCycleComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
