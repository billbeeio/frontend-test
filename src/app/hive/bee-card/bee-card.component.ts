import {Component, input, Input} from "@angular/core";
import {MatCardModule} from "@angular/material/card";

@Component({
    selector: "app-bee-card",
    templateUrl: "./bee-card.component.html",
    styleUrls: ["./bee-card.component.scss"],
    standalone: true,
    imports: [MatCardModule],
})
export class BeeCardComponent {
    name = input("Noname");
    amount = input(0);
}
