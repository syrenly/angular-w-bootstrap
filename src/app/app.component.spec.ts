import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BLACK, BLUE, GREEN, RED, WHITE, YELLOW } from "./consts";
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
	it("should set default colors to alerts with class .my-alert", (): void => {
		const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css(".my-alert"));
		alerts.forEach(al => {
			const computedStyle = getComputedStyle(al.nativeElement);
			if (al.classes["ng-styles"]) {
				const computedStyle = getComputedStyle(al.nativeElement);
				expect(computedStyle.backgroundColor).toBe(yellowRgb);
				return;
			}
			expect(computedStyle.backgroundColor).toBe(blueRgb);
		});
	});
	it("should set default text to alerts with class .my-alert", (): void => {
		const alerts: DebugElement[] = fixture.debugElement.queryAll(By.css(".my-alert"));
		alerts.forEach(al => {
			const textContent = al.nativeElement.textContent.trim();
			expect(textContent).toContain("default message");
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
	describe("should test #getClass", (): void => {
		let classes = "";

		beforeEach((): void => {
			classes = "";
			component.alert = {
				message: "Hello!",
				type: "unknown",
				width: 100,
				backgroundColor: BLUE,
				color: WHITE,
			};
		});
		it("case default", (): void => {
			classes = component.getClass();
			expect(classes).toBe("my-alert primary");
		});
		it("case primary", (): void => {
			component.alert.type = "primary";
			classes = component.getClass();
			expect(classes).toBe("my-alert primary");
		});
		it("case danger", (): void => {
			component.alert.type = "danger";
			classes = component.getClass();
			expect(classes).toBe("my-alert danger");
		});
		it("case success", (): void => {
			component.alert.type = "success";
			classes = component.getClass();
			expect(classes).toBe("my-alert success");
		});
	});
	describe("should test #onChangeAlertType", (): void => {
		it("case default", (): void => {
			component["onChangeAlertType"]("unknown");
			expect(component.alert).toEqual({
				message: "Unknown status",
				type: "unknown",
				width: 200,
				backgroundColor: "violet",
				color: WHITE,
			});
		});
		it("case primary", (): void => {
			component["onChangeAlertType"]("primary");
			expect(component.alert).toEqual({
				type: "primary",
				message: "Hello!",
				width: 100,
				backgroundColor: BLUE,
				color: WHITE,
			});
		});
		it("case danger", (): void => {
			component["onChangeAlertType"]("danger");
			expect(component.alert).toEqual({
				type: "danger",
				message: "Oh, no!",
				width: 150,
				backgroundColor: RED,
				color: WHITE,
			});
		});
		it("case success", (): void => {
			component["onChangeAlertType"]("success");
			expect(component.alert).toEqual({
				type: "success",
				message: "Oh, yeah!",
				width: 200,
				backgroundColor: GREEN,
				color: BLACK,
			});
		});
	});
	describe("should test #onChangeStyles", (): void => {
		it("case default", (): void => {
			component["onChangeStyles"]("unknown");
			expect(component.styles).toEqual({
				backgroundColor: YELLOW,
				color: WHITE,
				fontSize: "100px",
			});
		});
		it("case primary", (): void => {
			component["onChangeStyles"]("primary");
			expect(component.styles).toEqual({
				backgroundColor: BLUE,
				color: WHITE,
				fontSize: "10px",
			});
		});
		it("case danger", (): void => {
			component["onChangeStyles"]("danger");
			expect(component.styles).toEqual({
				backgroundColor: RED,
				color: WHITE,
				fontSize: "10px",
			});
		});
		it("case success", (): void => {
			component["onChangeStyles"]("success");
			expect(component.styles).toEqual({
				backgroundColor: GREEN,
				color: BLACK,
				fontSize: "10px",
			});
		});
	});
});

function dispatchButtonEvent(index: number, fixture: ComponentFixture<unknown>): Promise<unknown> {
	const buttons: DebugElement[] = fixture.debugElement.queryAll(By.css("button"));
	const button: HTMLInputElement = buttons[index].nativeElement;
	button.dispatchEvent(new Event("click"));
	fixture.detectChanges();
	return fixture.whenStable();
}
