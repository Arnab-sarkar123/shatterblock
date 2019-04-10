import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from '../material-module';
import { LoginComponent } from './login/login.component';
import { BrandmanagementComponent } from './brandmanagement/brandmanagement.component';
import { AdminmanagementComponent } from './adminmanagement/adminmanagement.component';
import { InfluencersmanagementComponent } from './influencersmanagement/influencersmanagement.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { BranddashbordComponent } from './branddashbord/branddashbord.component';
import { InfluencersdashbordComponent } from './influencersdashbord/influencersdashbord.component';
import { Resolveservice } from '../app/resolveservice';
import { ApiService } from '../app/api.service';
import { AuthGuard } from './auth.guard';
import { ForgatepasswordComponent } from './forgatepassword/forgatepassword.component';
//import {ChangepasswordComponent, Dialogtest} from './changepassword/changepassword.component';
import {ChangepasswordComponent, Updatetest1} from './changepassword/changepassword.component';

import { AdminlistComponent } from './adminlist/adminlist.component';

// import { AmingridlistComponent } from './amingridlist/amingridlist.component';

import { AdminleftpanelComponent } from './adminleftpanel/adminleftpanel.component';
import { ManagedashboardComponent, Updatetest } from './managedashboard/managedashboard.component';
//import { ResolvecomponentComponent } from './resolvecomponent/resolvecomponent.component';
import { CKEditorModule } from 'ngx-ckeditor';

//MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminformComponent } from './adminform/adminform.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminmodalformComponent } from './adminmodalform/adminmodalform.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ListingModule} from 'listing-angular7';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule, MatListModule } from '@angular/material';
import {ListingComponent} from "./listing/listing.component";

import { ContractComponent } from './contract/contract.component';
import {AgreementComponent} from "./agreement/agreement.component";
import {ModalComponent} from "./modal/modal.component";
import { AudiodeadlinesgreementComponent } from './audiodeadlinesgreement/audiodeadlinesgreement.component';
import { ModalaudiodeadlineComponent } from './modalaudiodeadline/modalaudiodeadline.component';
import { ModeldashboardComponent } from './modeldashboard/modeldashboard.component';
import {AffilitemarketingComponent} from "./affilitemarketing/affilitemarketing.component";


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    ModalComponent,
    BrandmanagementComponent,
    AdminmanagementComponent,
    InfluencersmanagementComponent,
    AdmindashbordComponent,
    BranddashbordComponent,
    InfluencersdashbordComponent,
    ForgatepasswordComponent,
    ChangepasswordComponent,Updatetest1,
    AgreementComponent,
    ListingComponent,
    AdminlistComponent,
    AdminleftpanelComponent,
    AdminformComponent,
    AdminmodalformComponent,
    ResetpasswordComponent,
    // Dialogtest,
    MainNavComponent,
    ManagedashboardComponent,Updatetest,
    MainNavComponent, ContractComponent, AudiodeadlinesgreementComponent, ModalaudiodeadlineComponent, ModeldashboardComponent,AffilitemarketingComponent,




    //Resolveservice,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    CKEditorModule,

    //MATERIAL
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    ListingModule,
    LayoutModule,
    MatIconModule,
    MatListModule
  ],
  providers: [CookieService,Resolveservice,ApiService,AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    // Dialogtest,
    Updatetest,
    Updatetest1,
    // Dialogtest,
    ModalComponent,
  ],
})
export class AppModule { }
