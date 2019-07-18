import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { RouterModule, Routes} from '@angular/router';  
import { MyServiceService } from './my-service.service';    
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';   
import { FormsModule } from '@angular/forms';    
import { AnotherServiceService } from './another-service.service';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipePipe } from './sqrt-pipe.pipe';
import { HomeComponentComponent } from './home-component/home-component.component';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },  
  { path: 'new-cmp', component: NewCmpComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SqrtPipePipe,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(
      appRoutes 
      // {enableTracing: true} 
    ), 
    BrowserAnimationsModule, 
    HttpClientModule, 
    FormsModule, 
    Ng2SearchPipeModule
  ],
  providers: [MyServiceService, AnotherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



