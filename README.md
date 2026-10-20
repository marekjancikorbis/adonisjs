
## První spuštění

Otevřete terminál ve složce projektu a nainstalujte závislosti příkazem npm install.

Pokud ve složce chybí soubor .env, zkopírujte soubor .env.example a přejmenujte kopii na .env. Potom vygenerujte tajný klíč aplikace příkazem node ace generate:key.

Vytvořte obě databáze spuštěním migrací. Pro původní systém použijte příkaz node ace migration:run a pro druhý systém příkaz node ace migration:run --connection=sqlite1.

## Spuštění aplikace

Aplikaci spustíte příkazem npm run dev. Po spuštění ji otevřete v prohlížeči na adrese http://localhost:3333. Zastavíte ho klávesovou zkratkou Ctrl+C.
