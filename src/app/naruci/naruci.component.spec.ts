import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaruciComponent } from './naruci.component';

describe('NaruciComponent', () => {
  let component: NaruciComponent;
  let fixture: ComponentFixture<NaruciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaruciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaruciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
