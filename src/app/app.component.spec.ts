import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BLUE, YELLOW } from "./consts";
import { hexToRGB } from "./utils.mock";

describe("AppComponent", (): void => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
		}).compileComponents();
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	});

	it("should create the app", (): void => {
		expect(component).toBeTruthy();
	});

	it("should set defaults colors for alerts", (): void => {
		fixture.detectChanges();
		const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css(".my-alert"));
		alerts.forEach(al => {
			const computedStyle = getComputedStyle(al.nativeElement);
			if (al.classes["ng-styles"]) {
				const yellowRgb = hexToRGB(YELLOW);
				expect(computedStyle.backgroundColor).toBe(yellowRgb);
			} else if (al.classes["primary"] || al.classes["inline-styles"]) {
				const blueRgb = hexToRGB(BLUE);
				expect(computedStyle.backgroundColor).toBe(blueRgb);
			} else {
				throw new Error("Unexpected default styles");
			}
		});
	});

	it("should set defaults text for alerts", (): void => {
		fixture.detectChanges();
		const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css(".my-alert"));
		alerts.forEach(al => {
			const textContent = al.nativeElement.textContent.trim();
			if (al.classes["ng-styles"]) {
				expect(textContent).toContain("Hello Styles");
			} else {
				expect(textContent).toContain("default message");
			}
		});
	});
});
