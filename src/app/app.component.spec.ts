import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { blueRgb, greenRgb, redRgb, yellowRgb } from "./utils.mock";

describe("AppComponent", (): void => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	beforeEach(async (): Promise<void> => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
		}).compileComponents();
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create the app", (): void => {
		expect(component).toBeTruthy();
	});

	describe("should set default colors", (): void => {
		it("alerts with class .my-alert", (): void => {
			const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css(".my-alert"));
			alerts.forEach(al => {
				const computedStyle = getComputedStyle(al.nativeElement);
				expect(computedStyle.backgroundColor).toBe(blueRgb);
			});
		});
		it("alert with class .ng-styles", (): void => {
			const alert: DebugElement = fixture.debugElement.query(By.css(".ng-styles"));
			const computedStyle = getComputedStyle(alert.nativeElement);
			expect(computedStyle.backgroundColor).toBe(yellowRgb);
		});
	});
	describe("should set default text", (): void => {
		it("alerts with class .my-alert", (): void => {
			const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css(".my-alert"));
			alerts.forEach(al => {
				const textContent = al.nativeElement.textContent.trim();
				expect(textContent).toContain("default message");
			});
		});
		it("alert with class .ng-styles", (): void => {
			const alert: DebugElement = fixture.debugElement.query(By.css(".ng-styles"));
			const textContent = alert.nativeElement.textContent.trim();
			expect(textContent).toContain("Hello Styles");
		});
	});

	it("should set primary alert", (done: DoneFn): void => {
		dispatchButtonEvent(0, fixture).then((): void => {
			const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css(".my-alert"));
			alerts.forEach(al => {
				const computedStyle = getComputedStyle(al.nativeElement);
				expect(computedStyle.backgroundColor).toBe(blueRgb);
				const textContent = al.nativeElement.textContent.trim();
				expect(textContent).toContain("Hello!");
			});
			done();
		});
	});
	it("should set danger alert", (done: DoneFn): void => {
		dispatchButtonEvent(1, fixture).then((): void => {
			const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css(".my-alert"));
			alerts.forEach(al => {
				const computedStyle = getComputedStyle(al.nativeElement);
				expect(computedStyle.backgroundColor).toBe(redRgb);
				const textContent = al.nativeElement.textContent.trim();
				expect(textContent).toContain("Oh, no!");
			});
			done();
		});
	});
	it("should set success alert", (done: DoneFn): void => {
		dispatchButtonEvent(2, fixture).then((): void => {
			const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css(".my-alert"));
			alerts.forEach(al => {
				const computedStyle = getComputedStyle(al.nativeElement);
				expect(computedStyle.backgroundColor).toBe(greenRgb);
				const textContent = al.nativeElement.textContent.trim();
				expect(textContent).toContain("Oh, yeah!");
			});
			done();
		});
	});
});

function dispatchButtonEvent(index: number, fixture: ComponentFixture<unknown>): Promise<any> {
	const buttons: DebugElement[] = fixture.debugElement.queryAll(By.css("button"));
	const button: HTMLInputElement = buttons[index].nativeElement;
	button.dispatchEvent(new Event("click"));
	fixture.detectChanges();
	return fixture.whenStable();
}
