# Bilder Slideshow Web-App

Diese App zeigt alle Bilder aus dem Ordner `public/images` als Slideshow mit einem Abstand von 5 Sekunden.

## Nutzung

1. Lege deine Bilder in den Ordner `public/images`.
2. Passe ggf. die Bildnamen in `src/App.js` an.
3. Installiere die Abhängigkeiten:
   ```fish
   npm install
   ```
4. Starte die App:
   ```fish
   npm start
   ```

## Hinweise
- Die Bildnamen in `src/App.js` sind Platzhalter und sollten an die tatsächlichen Dateien angepasst werden.
- Die App verwendet React und ein einfaches modernes Layout.

## Deployment auf GitHub Pages

1. Passe das `homepage`-Feld in der package.json an:
   ```json
   "homepage": "https://<USERNAME>.github.io/<REPO>"
   ```
   Ersetze `<USERNAME>` und `<REPO>` durch deinen GitHub-Nutzernamen und das Repository.
2. Führe das Deployment aus:
   ```fish
   npm run deploy
   ```
   Die App wird automatisch auf GitHub Pages veröffentlicht.
