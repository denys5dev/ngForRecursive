import { TestService } from "./test.service";
import { TestBed, inject, async } from "@angular/core/testing";

describe("Test service", () => {
    let service: TestService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [TestService]
        });    
    }));

    it('shoul return a list with 100 posts', async(() => {
        inject([TestService], (service: TestService) => {
            service.getTestData().map(res => res.json()).subscribe(res => {
                expect(res.length).toBe(100);
            });
        });
    }));
});