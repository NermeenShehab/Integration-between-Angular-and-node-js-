import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  declarations: [
    AboutUsComponent,ContactUsComponent,HomeComponent,NotfoundComponent,NavbarComponent,FooterComponent
  ],
  exports:[

    AboutUsComponent,ContactUsComponent,HomeComponent,NotfoundComponent,NavbarComponent,FooterComponent
  ],



})
export class CoreModule { }
