import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplsComponent } from './empls.component';

describe('EmplsComponent', () => {
  let component: EmplsComponent;
  let fixture: ComponentFixture<EmplsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
