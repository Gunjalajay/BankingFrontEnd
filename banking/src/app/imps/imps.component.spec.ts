import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpsComponent } from './imps.component';

describe('ImpsComponent', () => {
  let component: ImpsComponent;
  let fixture: ComponentFixture<ImpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
