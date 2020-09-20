import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaplatiComponent } from './naplati.component';

describe('NaplatiComponent', () => {
  let component: NaplatiComponent;
  let fixture: ComponentFixture<NaplatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaplatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaplatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
