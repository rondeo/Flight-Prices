<h1>Flight Prices</h1>
<h2> Zde odevzdávám zadání které jsem dostal v rámci výběrového řízení. </h2>

Pro sestavení projektu se držte následujících kroků:

**Naklonovat repository**

> <code> git clone https://github.com/onenKokos/Ukazka.git </code> 

**V adresáři kde je soubor package.json spusťte z příkazové řádky pro instalaci potřebných modulů**
> <code> npm install </code>

**Spusťte skript pro vytvoření dist adresáře**

> <code> npm run build </code>

**Pro spuštení webpack dev serveru zadejte** 

> <code> npm run start:dev </code>

<h2>Největší nedostatky</h2>
<ul> 
<li>NeGETuje to</li>
<li>Když vyberu jedno letiště odkud, neubere se to z výběru kam a vice versa</li>
<li>Když prohodím odkud a kam tak se neaktualizuje querystring a nepošle nový request</li>
</ul>