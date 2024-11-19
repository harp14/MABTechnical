import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderParagraphComponent } from './header-paragraph.component';

describe('HeaderParagraphComponent', () => {
  let component: HeaderParagraphComponent;
  let fixture: ComponentFixture<HeaderParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
