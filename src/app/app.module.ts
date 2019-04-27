import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from './app.routing.module';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import {FormsModule} from '@angular/forms';
import {HttpModule } from '@angular/http';
import { CreateEmployeeComponent } from './employee/createemployee.component';
import {HttpClientModule} from '@angular/common/http';
import {EditEmployeeComponent} from './update/editemployee/editemployee.component';
import { AstronautComponent } from './communication/astronaut.component';
import { MissionService } from './communication/mission.service';
import { MissionControlComponent } from './communication/missioncontrol.component';
// ngrx imports
import {StoreModule} from '@ngrx/store';
import {Addreducer} from '../Reducers/crud.reducer';
import { ReadCrudComponent } from './ngrx/readcrud.component';
import { AddCrudComponent } from './ngrx/addcrud.component';
import { UpdateCrudComponent } from './ngrx/updatecrud.component';
import { StudenthomeComponent } from './student/studenthome/studenthome.component';
import { StudentreadComponent } from './student/studenthome/studentread/studentread.component';
import { studentreducer } from './student/store/studentreducer.reducer';
import { GetstudentComponent } from './student/getstudent/getstudent.component';
import { EffectsModule } from '@ngrx/effects';
import {Effects, GetStudenEffect} from './student/store/effectindex';
import {getstudentreducer} from './student/store/getstudentreducer.reducer';
import { reducers, metaReducers } from './student/store/index';
import * as effect from './student/store/getstudent.effects';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    AstronautComponent,
    MissionControlComponent,
    ReadCrudComponent,
    AddCrudComponent,
    UpdateCrudComponent,
    StudenthomeComponent,
    StudentreadComponent,
    GetstudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    /*  StoreModule.forRoot({
      Addcrud: Addreducer
    }), */
   /*  StoreModule.forRoot({
    varAddStudent: studentreducer
    }) */

// StoreModule.forRoot({
//   varGetStudent: fromreducer.getstudentreducer,
// }),
//  StoreModule.forFeature('istudentstate', reducers),
// StoreModule.forRoot(reducers, {metaReducers}),
StoreModule.forRoot(getstudentreducer),

EffectsModule.forRoot([])
  ],

  providers: [RouterModule, MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
