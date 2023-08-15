import {Component, Input} from "@angular/core";
import {MatCardModule} from "@angular/material/card";

@Component({
    selector: "app-bee-card",
    templateUrl: "./bee-card.component.html",
    styleUrls: ["./bee-card.component.scss"],
    standalone: true,
    imports: [MatCardModule],
})
export class BeeCardComponent {
    @Input() name = "Noname";
    @Input() amount = 0;
}
