import { Routes } from '@angular/router';
import { RoomsShowComponent } from './components/rooms-show/rooms-show.component';
import { RoomsCreateComponent } from './components/rooms-create/rooms-create.component';
import { RoomsUpdateComponent } from './components/rooms-update/rooms-update.component';
import { ClassesShowComponent } from './components/classes-show/classes-show.component';
import { ClassesCreateComponent } from './components/classes-create/classes-create.component';
import { ClassesUpdateComponent } from './components/classes-update/classes-update.component';


export const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomsShowComponent },
  { path: 'rooms-create', component: RoomsCreateComponent },
  { path: 'rooms-update/:id', component: RoomsUpdateComponent },
  { path: 'classes', component: ClassesShowComponent },
  { path: 'classes-create', component: ClassesCreateComponent },
  { path: 'classes-update/:id', component: ClassesUpdateComponent },

];
