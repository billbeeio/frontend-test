import {Routes} from "@angular/router";
import {HiveListComponent} from "./hive/list/hive-list.component";
import {StartComponent} from "./start/start.component";

export const ROUTES: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: StartComponent,
    },
    {
        path: "hive",
        component: HiveListComponent,
    },
];
