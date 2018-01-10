describe("First test", () => {
  it("should run a passing test", () => {
    expect(true).toEqual(true, "should pass");
  });
});
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { By } from "@angular/platform-browser";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let headerElement: HTMLElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    headerElement = fixture.debugElement.query(By.css("h3")).nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have expected header", () => {
    expect(headerElement.innerText).toEqual("");
  });

  it("change title, does not update", () => {
    component.title = "Home";
    expect(headerElement.innerText).not.toEqual(component.title);
  });

  it("change title, does update after detectChanges called", () => {
    component.title = "Home";
    fixture.detectChanges();
    expect(headerElement.innerText).toEqual(component.title);
  });
});
