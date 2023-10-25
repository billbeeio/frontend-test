import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Component, OnInit, inject} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {EMPTY, Observable} from "rxjs";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {BeeCardComponent} from "../bee-card/bee-card.component";
import {Bee, BeeAmount} from "../hive.model";
import {HiveService} from "../hive.service";

@Component({
    selector: "app-hive-list",
    templateUrl: "./hive-list.component.html",
    styleUrls: ["./hive-list.component.scss"],
    standalone: true,
    imports: [NgIf, AsyncPipe, MatButtonModule, BeeCardComponent, MatProgressSpinnerModule, NgForOf, MatDialogModule],
    providers: [HiveService],
})
export class HiveListComponent implements OnInit {
    bees$: Observable<Bee[]> = EMPTY;

    private readonly matDialog = inject(MatDialog);

    ngOnInit() {
        //.....deleted 🐛🐛🐛🐛
    }

    add(bees: Bee[]) {
        this.matDialog
            .open<AddDialogComponent, Bee[], BeeAmount>(AddDialogComponent, {data: bees})
        //.....deleted 🐛🐛🐛🐛
    }
}
