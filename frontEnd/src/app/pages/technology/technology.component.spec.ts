import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyComponent } from './technology.component';
import { HttpService } from '../../services/http.service';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TechnologyComponent', () => {
  let component: TechnologyComponent;
  let fixture: ComponentFixture<TechnologyComponent>;
  let title: HTMLElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ TechnologyComponent ],
      providers: [
        HttpService
      ],
      imports:[
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();



  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyComponent);
   
    component = fixture.componentInstance;
    title = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('Should create a component TechnolgyComponent', () => {
    expect(component).toBeDefined();
  });

  it('Should have h1 page technology', () => {
    const h1 = title.querySelector('h1');
    expect(h1).toBeTruthy(); 
  });


});
