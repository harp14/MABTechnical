import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeRowTextboxComponent } from './three-row-textbox.component';

describe('ThreeRowTextboxComponent', () => {
  let component: ThreeRowTextboxComponent;
  let fixture: ComponentFixture<ThreeRowTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeRowTextboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeRowTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
