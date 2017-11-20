import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { BrowserModule } from '@angular/platform-browser';
// import { DatePicker } from 'ionic-datepicker';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { BookPage } from '../pages/book/book';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { NewsPage } from '../pages/news/news';
import { BookadPage } from '../pages/bookad/bookad';
import { HelprequestPage } from '../pages/helprequest/helprequest';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FacilitiesService } from '../providers/facilities-service/facilities-service';
import { BookingsService } from '../providers/bookings-service/bookings-service';
import { TimeslotsService } from '../providers/timeslots-service/timeslots-service';
import { LocalNotifications } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { BuildingsService } from '../providers/buildings-service/buildings-service';
import { HrService } from '../providers/hr-service/hr-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    BookPage,
    FacilitiesPage,
    NewsPage,
    BookadPage,
    HelprequestPage,
    LoginPage,
  ],
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    BookPage,
    FacilitiesPage,
    NewsPage,
    BookadPage,
    HelprequestPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Angular2TokenService,
    FacilitiesService,
    BookingsService,
    TimeslotsService,
    LocalNotifications,
    AlertController,
    DatePicker,
    BuildingsService,
    HrService
    ]
})
export class AppModule {}


// import { BrowserModule } from '@angular/platform-browser';
// import { ErrorHandler, NgModule } from '@angular/core';
// import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar';
// import { HttpModule } from '@angular/http';
// import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ContactPage } from '../pages/contact/contact';
// import { BookPage } from '../pages/book/book';
// import { FacilitiesPage } from '../pages/facilities/facilities';
// import { NewsPage } from '../pages/news/news';
// import { BookadPage } from '../pages/bookad/bookad';
// import { HelprequestPage } from '../pages/helprequest/helprequest';
// import { TimelistsServiceProvider } from '../providers/timelists-service/timelists-service';
// import { LoginPage } from '../pages/login/login';
// import { Angular2TokenService } from 'angular2-token';
//
//
// @NgModule({
//   declarations: [
//     MyApp,
//     HomePage,
//     ContactPage,
//     BookPage,
//     FacilitiesPage,
//     NewsPage,
//     BookadPage,
//     HelprequestPage,
//     LoginPage
//   ],
//   imports: [
//     BrowserModule,
//     IonicModule.forRoot(MyApp),
//     HttpModule,
//   ],
//   bootstrap: [IonicApp],
//   entryComponents: [
//     MyApp,
//     HomePage,
//     ContactPage,
//     BookPage,
//     FacilitiesPage,
//     NewsPage,
//     BookadPage,
//     HelprequestPage,
//     LoginPage
//   ],
//   providers: [
//     StatusBar,
//     SplashScreen,
//     Angular2TokenService ,
//     {provide: ErrorHandler, useClass: IonicErrorHandler},
//   ]
// })
// export class AppModule {}
