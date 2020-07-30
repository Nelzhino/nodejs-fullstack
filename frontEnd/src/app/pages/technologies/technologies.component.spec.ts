import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesComponent } from './technologies.component';
import { HttpService } from 'src/app/services/http.service';
import { of } from 'rxjs';
import { Technology } from 'src/app/models/technology.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<TechnologiesComponent>;
  let _httpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesComponent ],
      providers: [
        HttpService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
    _httpService = TestBed.get(HttpService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('Should create component Technologies', () => {
    expect(component).toBeTruthy();
  });


  it('Should get list of technologies', () => {
    //Mock =Objeto simulando respuesta 
    let mockTechnology:Technology[] = [
      {
        _id:"5f1219b6ae951a1ea01c9d01",
        tags:["javascript","vue","frontend"],
        name:"Vue",
        description:"Vue.js is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.",
        logo:"vue.svg",
        createdAt:new Date(),
        updateAt: new Date()
      },
      {
        _id:"5f1219b6ae951a1ea01c9cf7",
        tags:["node","javascript","backend"],
        name:"Node.js",
        description:"Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        logo:"node.svg",
        createdAt:new Date(),
        updateAt: new Date()
      }
    ]
    const technologies = spyOn(_httpService, 'getTechnologies').and.callFake(technologies => {
      return of(mockTechnology);
    })

    component.ngOnInit();
    expect(technologies).toHaveBeenCalled();
  });
});