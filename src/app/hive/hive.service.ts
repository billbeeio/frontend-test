import {Injectable} from "@angular/core";
import {Observable, concatMap, delay, map, of, range} from "rxjs";
import {Bee, BeeAmount} from "./hive.model";

@Injectable()
export class HiveService {
    getAllBees(): Observable<Bee[]> {
      return of(
        [
          "Howard",
          "Louis",
          "Kavon",
          "Jon",
          "Kirstyn",
          "Karissa",
          "Enzo",
          "Yosef",
          "Selah",
          "Brisa",
          "Nathanial",
          "Darrien",
          "Caylee",
          "Brittani",
          "Nathan",
          "Ezequiel",
          "Ivanna",
          "Aniyah",
          "Sydney",
          "Jesse",
          "Jovan",
          "Braden",
          "Sara",
          "Mackenna",
          "Shelbi",
          "Emanuel",
          "Moshe",
          "Carlie",
          "Kurt",
          "Alexis",
          "Aileen",
          "Keshaun",
          "Danyelle",
          "Niko",
          "Isaias",
          "Briana",
          "Rayna",
          "Maddison",
          "Domenic",
          "Tanisha",
        ].map((name, index) => ({id: index, name, amount: Math.floor(Math.random() * 100)})),
      ).pipe(delay(2000));
    }

  incomingHoney(): Observable<BeeAmount> {
    return range(1, 1000).pipe(
      concatMap((i) => of(i).pipe(delay(1000 + Math.random() * 2000))),
      map(() => ({beeId: this.randomIntFromInterval(0, 40), amount: this.randomIntFromInterval(5, 20)})),
    );
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
