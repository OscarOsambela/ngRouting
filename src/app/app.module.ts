import { AppComponent } from './app.component';
import { AppRountingModule } from './app.-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModule } from './modules/material/material.modules';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { OnPushComponent } from './pages/on-push/on-push.component';
import { DataListProvider, DetachComponent } from './pages/detach/detach.component';
import { ReattachComponent } from './pages/reattach/reattach.component';
import { NgZoneComponent } from './pages/ng-zone/ng-zone.component';
import { AsyncPipeComponent } from './pages/async-pipe/async-pipe.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactDetailPageComponent,
    ContactsPageComponent,
    HomePageComponent,
    LoginFormComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    NombreCompletoPipe,
    RandomUserComponent,
    RandomContactPageComponent,
    NavComponent,
    DashboardComponent,
    TasksPageComponent,
    TasksComponent,
    InputTaskComponent,
    OnPushComponent,
    DetachComponent,
    ReattachComponent,
    NgZoneComponent,
    AsyncPipeComponent,

  ],
  imports: [
    AppRountingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
  ],
  providers: [DataListProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
