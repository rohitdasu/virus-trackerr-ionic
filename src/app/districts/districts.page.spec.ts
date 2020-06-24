import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistrictsPage } from './districts.page';

describe('DistrictsPage', () => {
  let component: DistrictsPage;
  let fixture: ComponentFixture<DistrictsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
