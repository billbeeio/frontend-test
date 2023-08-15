import {NgForOf} from "@angular/common";
import {Component, inject} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {Bee} from "../hive.model";

@Component({
    selector: "app-add-dialog",
    templateUrl: "./add-dialog.component.html",
    styleUrls: ["./add-dialog.component.scss"],
    standalone: true,
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatButtonModule,
        NgForOf,
    ],
})
export class AddDialogComponent {
    readonly formGroup = new FormGroup({
        beeId: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
        amount: new FormControl(0, [Validators.required, Validators.min(1)]),
    });

    readonly bees: Bee[] = inject(MAT_DIALOG_DATA);
}
