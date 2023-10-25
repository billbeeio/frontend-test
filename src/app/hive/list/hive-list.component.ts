import {Component, Signal, inject, signal} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AddDialogComponent} from "../add-dialog/add-dialog.component";
import {BeeCardComponent} from "../bee-card/bee-card.component";
import {Bee, BeeAmount} from "../hive.model";
import {HiveService} from "../hive.service";

@Component({
    selector: "app-hive-list",
    templateUrl: "./hive-list.component.html",
    styleUrls: ["./hive-list.component.scss"],
    standalone: true,
    imports: [MatButtonModule, BeeCardComponent, MatProgressSpinnerModule, MatDialogModule],
    providers: [HiveService],
})
export class HiveListComponent {
  private readonly matDialog = inject(MatDialog);

  readonly bees: Signal<Bee[]> = signal([]); //.....deleted 🐛🐛🐛🐛

  //.....deleted 🐛🐛🐛🐛

  add(bees: Bee[]) {
    this.matDialog
        .open<AddDialogComponent, Bee[], BeeAmount>(AddDialogComponent, {data: bees})
    //.....deleted 🐛🐛🐛🐛
  }
}
