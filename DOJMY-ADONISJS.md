# AdonisJS – dojmy z práce

V projektu jsem založil aplikaci ze starter kitu hypermedia a přidal druhý, samostatný přihlašovací systém (/login1, /signup1, /dashboard1) s vlastní SQLite databází.

## Celkový dojem

AdonisJS je v podstatě Laravel pro TypeScript. Struktura i názvosloví jsou hodně podobné. Běžné věci jdou snadno, problémy se objevily až u méně obvyklých úloh, jako jsou dvě databáze.

## Výhody

Hned po instalaci je k dispozici hotové přihlášení, registrace, validace a databáze. Celý projekt je v TypeScriptu, takže překlepy v názvech route a podobné najde automaticky kontrola. Struktura projektu je přehledná. Validace sama vrací chyby zpět do formuláře.

## Nevýhody

Framework vyžaduje Node 24, takže bylo nutné nejdřív aktualizovat Node. Každá databáze potřebuje vlastní složku s migracemi a přejmenování této složky vyžaduje ruční úpravu databáze. Rollback migrace smaže tabulku i s daty. Ekosystém a komunita jsou mnohem menší než u Laravelu.

## Srovnání s Laravelem

Oba frameworky fungují velmi podobně: modely, blady, migrace, controllery, middleware. AdonisJS má navíc typovou kontrolu a jeden jazyk pro celý projekt. Laravel je starší a známější, má mnohem více balíčků a návodů a lépe řeší práci s více databázemi.

## Doporučení

AdonisJS je pro lidi co mají rádi laravel a píšou hodně typescript.
