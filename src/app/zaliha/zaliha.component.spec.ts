import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalihaComponent } from './zaliha.component';

describe('ZalihaComponent', () => {
  let component: ZalihaComponent;
  let fixture: ComponentFixture<ZalihaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalihaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalihaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
