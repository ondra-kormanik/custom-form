import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterFormComponent } from './outer-form.component';

describe('OuterFormComponent', () => {
  let component: OuterFormComponent;
  let fixture: ComponentFixture<OuterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
