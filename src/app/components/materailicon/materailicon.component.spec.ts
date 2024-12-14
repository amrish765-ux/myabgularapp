import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterailiconComponent } from './materailicon.component';

describe('MaterailiconComponent', () => {
  let component: MaterailiconComponent;
  let fixture: ComponentFixture<MaterailiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterailiconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterailiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
