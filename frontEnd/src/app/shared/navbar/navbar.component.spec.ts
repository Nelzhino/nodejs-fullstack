import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { HttpService } from '../../services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, Router } from '@angular/router';

describe('NavComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NavbarComponent ],
            providers: [
                HttpService
            ],
            imports: [
                RouterModule.forRoot([]),
                HttpClientTestingModule
            ]
        })
        .compileComponents();
    }));


    beforeEach(() =>{
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('Should create component NavComponent', () => {
        expect(component).toBeTruthy();
    });
    it('Should have title Navbar', ()=>{
        const bannerElement: HTMLElement = fixture.nativeElement;
        const navTitle = bannerElement.querySelector('.navbar-brand');
        expect(navTitle.textContent).toContain('Coding App');
    });
});
