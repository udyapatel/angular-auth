import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt-interceptor';
import { ErrorInterceptor } from './_helpers/error-interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend-interceptor';
import { appRoutingModule } from './app-routing.module';
import { AuthGuard } from './_helpers/auth.guard';

@NgModule({
  imports:      [ BrowserModule,    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule
],
declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent
],
providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
