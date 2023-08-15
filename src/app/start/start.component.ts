import {Component} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@Component({
    selector: "app-start",
    templateUrl: "./start.component.html",
    styleUrls: ["./start.component.scss"],
    standalone: true,
    imports: [RouterModule, MatButtonModule],
})
export class StartComponent {}
