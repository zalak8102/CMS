import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { IndexComponent } from './components/site/index/index.component';
import { LoginComponent } from './components/site/login/login.component';
import { RegisterComponent } from './components/site/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AddCourierComponent } from './components/site/add-courier/add-courier.component';
import { AdminBranchComponent } from './components/site/admin-branch/admin-branch.component';
import { AdminProfileComponent } from './components/site/admin-profile/admin-profile.component';
import { BranchCourierComponent } from './components/site/branch-courier/branch-courier.component';
import { ContectusComponent } from './components/site/contectus/contectus.component';
import { CourierComponent } from './components/site/courier/courier.component';
import { HowComponent } from './components/site/how/how.component';
import { ManageBranchComponent } from './components/site/manage-branch/manage-branch.component';
import { ManageStaffComponent } from './components/site/manage-staff/manage-staff.component';
import { OffersComponent } from './components/site/offers/offers.component';
import { PricingComponent } from './components/site/pricing/pricing.component';
import { ProfileComponent } from './components/site/profile/profile.component';
import { StaffBranchComponent } from './components/site/staff-branch/staff-branch.component';
import { StaffCourierComponent } from './components/site/staff-courier/staff-courier.component';
import { StaffProfileComponent } from './components/site/staff-profile/staff-profile.component';
import { TrackComponent } from './components/site/track/track.component';
import { TransportComponent } from './components/site/transport/transport.component';
import { UserBranchComponent } from './components/site/user-branch/user-branch.component';
import { UserCourierComponent } from './components/site/user-courier/user-courier.component';
import { UserOffersComponent } from './components/site/user-offers/user-offers.component';
import { UserProfileComponent } from './components/site/user-profile/user-profile.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { BranchService } from './branch.service';
import { CourierService } from './courier.service';
import { OfferService} from './offer.service';
import { TransportService } from "./transport.service";
import { ProfileService} from './profile.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationGuard} from "./authentication.guard";
import {AuthenticateAdminGuard} from "./authenticate-admin.guard";
import {AuthenticateClientGuard} from "./authenticate-client.guard";
import {AuthenticateTrasportGuard} from "./authenticate-trasport.guard";

const appRoutes: Routes = [

  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component : RegisterComponent},
  { path: 'add_courier', component : AddCourierComponent,canActivate:[AuthenticateClientGuard]},
  { path: 'admin_branch', component : AdminBranchComponent,canActivate:[AuthenticateAdminGuard] },
  { path: 'admin_profile', component : AdminProfileComponent,canActivate:[AuthenticateAdminGuard] },
  { path: 'branch_courier', component :BranchCourierComponent,canActivate:[AuthenticateAdminGuard] },
  { path: 'contectus', component : ContectusComponent},
  { path: 'courier', component : CourierComponent,canActivate:[AuthenticationGuard]},
  { path: 'how', component : HowComponent},
  { path: 'manage_branch', component : ManageBranchComponent,canActivate:[AuthenticationGuard]},
  { path: 'manage_staff', component : ManageStaffComponent,canActivate:[AuthenticationGuard]},
  { path: 'offers', component : OffersComponent,canActivate:[AuthenticationGuard]},
  { path: 'pricing', component : PricingComponent},
  { path: 'profile', component : ProfileComponent,canActivate:[AuthenticationGuard]},
  { path: 'staff_branch', component :StaffBranchComponent ,canActivate:[AuthenticateTrasportGuard]},
  { path: 'staff_courier', component : StaffCourierComponent,canActivate:[AuthenticateTrasportGuard]},
  { path: 'staff_profile', component : StaffProfileComponent,canActivate:[AuthenticateTrasportGuard]},
  { path: 'track', component : TrackComponent,canActivate:[AuthenticateClientGuard]},
  { path: 'transport', component : TransportComponent,canActivate:[AuthenticateAdminGuard]},
  { path: 'user_branch', component :UserBranchComponent,canActivate:[AuthenticateClientGuard] },
  { path: 'user_courier', component :UserCourierComponent ,canActivate:[AuthenticateClientGuard]},
  { path: 'user_offers', component : UserOffersComponent,canActivate:[AuthenticateClientGuard]},
  { path: 'user_profile', component : UserProfileComponent,canActivate:[AuthenticateClientGuard]},


  { path: '',

  redirectTo:'/index',

  pathMatch:'full'

  }

  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    AddCourierComponent,
    AdminBranchComponent,
    AdminProfileComponent,
    BranchCourierComponent,
    ContectusComponent,
    CourierComponent,
    HowComponent,
    ManageBranchComponent,
    ManageStaffComponent,
    OffersComponent,
    PricingComponent,
    ProfileComponent,
    StaffBranchComponent,
    StaffCourierComponent,
    StaffProfileComponent,
    TrackComponent,
    TransportComponent,
    UserBranchComponent,
    UserCourierComponent,
    UserOffersComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService,BranchService,CourierService,OfferService,TransportService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
