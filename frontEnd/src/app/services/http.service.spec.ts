import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Technology } from '../models/technology.model';
import { environment } from 'src/environments/environment';

describe('HttpService', () => {
  let injector: TestBed;
  //Simular solicitudes
  let httpMock: HttpTestingController;
  let baseUrl: string = environment.BASE_URI_API;
  let service: HttpService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    // Tener acceso a la variables limpias antes de cada it
    injector = getTestBed()
    httpMock = injector.get(HttpTestingController)
    service = TestBed.get(HttpService);
  });

  afterEach(() => {
    //Verificarque exista solicitudes pendientes.
    httpMock.verify();
  });

  it('Should create a service ', () => {
    expect(service).toBeTruthy();
  });

  it('Should be return to <observableTechnology[]>', ()=>{
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

    service.getTechnologies().subscribe((technologies)=> {
      expect(technologies.length).toBe(2);
      expect(technologies).toEqual(mockTechnology);
      expect(technologies[0].name).toBeDefined()
    })

    //Validamos la url de nuestra API
    const req = httpMock.expectOne(baseUrl +'/technologies')
    expect(req.request.method).toBe('GET')
    req.flush(mockTechnology); // Facilitar valores ficticios

  })


  it('Should be return to  <observableTechnology> por Id ', () => {
    const id:string = "5f1219b6ae951a1ea01c9d01";
    //Mock =Objeto simulando respuesta 
    let mockTechnology:Technology = 
      {
        _id:"5f1219b6ae951a1ea01c9d01",
        tags:["javascript","vue","frontend"],
        name:"Vue",
        description:"Vue.js is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.",
        logo:"vue.svg",
        createdAt:new Date(),
        updateAt: new Date()
      };

      service.getTechnology(id).subscribe((technology) => {
        expect(technology.name).toBeDefined();
      });

      //Validamos la url de nuestra API
      const req = httpMock.expectOne(baseUrl + `/technology/${id}`);
      expect(req.request.method).toBe('GET')
      req.flush(mockTechnology);  
  });


  it('Should be return to   <observableTechnology> by name', () => {
    const name:string = "do";

    let mockTechnologies: Technology[] = [
      {
        _id:"5f1219b6ae951a1ea01c9cf9",
        tags:["docker","devops","cli"],
        name:"Docker",
        description:"Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.",
        logo:"docker.svg",
        createdAt:new Date(),
        updateAt:new Date()
      },
      {
        _id:"5f1219b6ae951a1ea01c9cfa",
        tags:["dotnet","microsoft","csharp"],
        name:"Dotnet",
        description:".NET is a free, cross-platform, open source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, gaming, and IoT.",
        logo:"dotnet.svg",
        createdAt:new Date(),
        updateAt:new Date()
      }
    ]    


    service.searchTecnology(name).subscribe((technologies) => {
      expect(technologies[0].name).toBeDefined();
      expect(technologies.length).toBe(2);
    });

    //Validamos la url de nuestra API
    const req = httpMock.expectOne(baseUrl + `/technology/search/${name}`);
    expect(req.request.method).toBe('GET')
    req.flush(mockTechnologies);
     
  });


  
});
