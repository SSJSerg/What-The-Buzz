import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputFormComponent } from './search-input-form.component';

describe('SearchInputFormComponent', () => {
  let component: SearchInputFormComponent;
  let fixture: ComponentFixture<SearchInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
