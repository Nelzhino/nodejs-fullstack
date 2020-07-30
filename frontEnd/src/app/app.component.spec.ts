import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router, Routes} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from './services/http.service';


describe('AppComponent', ()=>{

    let location: Location;
    let router: Router;
    let fixture;

    const routes: Routes = [
        { path: 'home', component: HomeComponent},
        { path: 'about', component: AboutComponent},
        { path: 'technologies', component: TechnologiesComponent},
        { path: 'technology/:id', component: TechnologyComponent},
        { path: 'search/:query', component: SearchComponent},  
        { path: '**', pathMatch:'full', redirectTo:'home'}
    ]; 



    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [ 
                RouterTestingModule.withRoutes(routes),
                HttpClientTestingModule
            ],
            providers: [
                HttpService
            ],
            declarations: [
                HomeComponent,
                AboutComponent,
                TechnologiesComponent,
                TechnologyComponent,
                SearchComponent,
                NavbarComponent,
                AppComponent
            ]
        });
        
        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        fixture.ngZone.run(() => {
            router.initialNavigation();
        });
    });

    
    it('Should count routes configured', () => {
        expect(router.config.length).toEqual(6);
    });

    it('Should path  "Home" redirect to /home', fakeAsync(() => {
        router.navigate(['/home']);
        tick(50);
        expect(location.path()).toBe('/home');
    }));

    it('Should path "About" redirect to /about', fakeAsync(() => {
        router.navigate(['/about']);
        tick(50);
        expect(location.path()).toBe('/about');
    }));

    it('Should path "Technologies" redirect to /technologies', fakeAsync(() => {
        router.navigate(['/technologies']);
        tick(50);
        expect(location.path()).toBe('/technologies');
    }));
});