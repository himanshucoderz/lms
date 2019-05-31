import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LibraryComponent } from './library/library.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { MapComponent } from './map/map.component';
import { CompanyDocComponent } from './company-doc/company-doc.component';
import { OjtComponent } from './ojt/ojt.component';
import { ClassComponent } from './class/class.component';
import { CompRegisterComponent } from './comp-register/comp-register.component';
import { LearningPathComponent } from './learning-path/learning-path.component';
const routes: Routes = [
	{ path: '',component: LandingComponent },
	{ path: 'register',component: CompRegisterComponent },
	{ path: 'class',component: ClassComponent },
	{ path: 'course',component: LibraryComponent },
	{ path: 'transcript',component: TranscriptComponent },
	{ path: 'map',component: MapComponent },
	{ path: 'company-docs',component: CompanyDocComponent },
	{ path: 'ojt',component: OjtComponent },
	{ path: 'paths',component: LearningPathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
