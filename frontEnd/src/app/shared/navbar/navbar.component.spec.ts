import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';


class MockRouter {
    navigate( url: string ) { return url; }
}

describe('NavComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NavbarComponent ],
            providers: [
                { provide: Router, useClass: MockRouter }
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
    it('Should have title Navbar', () => {
        const bannerElement: HTMLElement = fixture.nativeElement;
        const navTitle = bannerElement.querySelector('.navbar-brand');
        expect(navTitle.textContent).toContain('Coding App');
    });
    it('Should call Router.navigate(/search/:name) with the NAME of the form', inject([Router], (router: Router) => {
        const spy = spyOn(router, 'navigate');
        component.searchTechnology('do');
        const url = spy.calls.first().args[0];
        expect(url).toMatch('search');
    }));
})
