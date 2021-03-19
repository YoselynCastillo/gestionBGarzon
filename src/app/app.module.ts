import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestore} from  '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BankAccountFormComponent } from './shared/components/bank-account-form/bank-account-form.component';
import { BankAccountFormModule } from './shared/components/bank-account-form/bank-account-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    //BankAccountFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NoopAnimationsModule,
    BankAccountFormModule,// <---------------
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
