import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IflseComponent } from './iflse.component';

describe('IflseComponent', () => {
  let component: IflseComponent;
  let fixture: ComponentFixture<IflseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IflseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IflseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
