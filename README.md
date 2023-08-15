# <img src="https://angular.io/assets/images/logos/angular/angular.png" style="height: 38px; float:left; margin-right:8px;"> Billbee Frontend-Aufgabe


##   🐝💚 Der BeeHive braucht deine Hilfe!

Die BeeHive-App wird genutzt um im Auge zu behalten, welche Biene wieviel Honig zurück in den Bienenstock gebracht hat.
Die Erzfeinde des Bienenstocks, die 4 Gebrüder Bug 🐛🐛🐛🐛, haben sich in das System gehackt und die wichtigsten Funktionen aus dem Code entfernt, damit die Bienen abgelenkt sind und sie sich den ganzen Honig für sich selber schnappen können!
Hilf den Bienen die App schnellstmöglich wieder ans Laufen zu bringen, damit der Honig sicher ist!

<a href="./loesung.mp4">Hier</a> findest du eine Aufnahme der App wie sie vorher funktioniert hat und idealerweise wieder funktionieren sollte.
Bienen die Honig in den Bienenstock gebracht haben wurden automatisch erkannt und der Honig der Biene gutgeschrieben. Manchmal ist es vorgekommen, dass manuelle Korrekturen vorgenommen werden mussten.

#### Anforderungen:
- Initiales Laden der Startwerte (Service: getAllBees())
- Automatisches Hinzufügen der Honigmengen (Service: incomingHoney())
- Manuelles Hinzufügen der Honigmengen (über AddDialog)

#### Du solltest darauf achten, dass:
- alles nach Möglichkeit lazy loaded wird
- die Change-Detection möglichst selten läuft
- auf Immutability geachtet wird
- keine Memory Leaks entstehen können

#### Bonuspunkte für:
- den Einsatz von @ngrx/signal-store
- die Implementierung einer Schichtstart & Feierabend-Funktion
    - Füge der Liste einen Button hinzu, mit der du der Liste eine neue Biene hinzufügen kannst.
    - Füge der Bee-Card Komponente einen Button hinzu mit der du die Biene in den Feierabend kannst.
    - Passe den HiveService so an, dass das Hinzufügen und Entfernen von Bienen beim automatischen Honig-Tracking berücksichtigt wird.
    - Diese Aktionen sollten sich dann natürlich in der Liste widerspiegeln.


## How To
Erstelle eine lokale Kopie dieser Repository auf deinem Rechner.
Bearbeite alle Dateien bis du zu einem Ergebnis kommst mit dem du zufrieden bist (sollte nicht länger als 120 Minuten dauern).
Hinweis: es gibt Änderungsbedarf in vielen Dateien, beschränke dich **nicht** auf die Dateien in denen die Gebrüder Bug auftauchen 🐛🐛🐛🐛. Es gibt keine Vorgabe welche Dateien du ändern darfst, bearbeite das gesamte Projekt so, dass du am Ende damit zufrieden bist.

Wenn du fertig bist kannst du uns dein Ergebnis auf zwei verschiedenen Wegen zukommen lassen:
- Pushe dein Projekt als public repository auf GitHub und sende den Link dazu an deinen Kontakt bei Billbee
oder
- Bundle dein Projekt lokal mit Git (`git bundle create billbee.bundle --all`) und schicke das Bundle per Mail-Anhang an deinen Kontakt bei Billbee 

Bei Fragen melde dich gerne jederzeit bei deinem Billbee-Ansprechpartner!

<br>
