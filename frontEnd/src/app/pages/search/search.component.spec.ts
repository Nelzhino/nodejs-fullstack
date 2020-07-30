import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HttpService } from '../../services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
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
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('Should create component SearchComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Should have h1 page Search', ()=>{
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h1 = bannerElement.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain('Searching');
    
  });

});
