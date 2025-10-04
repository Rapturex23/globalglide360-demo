<script type="text/plain" data-filename="itinerari/build-manifest.mjs">
if(dashSplit.length > 1){
luogo = dashSplit[0].trim();
} else {
const beforeNum = titolo.split(/\\s\\d+\\s*(giorni|giorno)/i)[0];
luogo = beforeNum.trim();
}


items.push({ slug, titolo, durata, luogo });
}


await fs.writeFile(OUT, JSON.stringify(items, null, 2));
console.log(`Manifest scritto: ${OUT} (${items.length} itinerari)`);
}


main().catch(err => {
console.error(err);
process.exit(1);
});
</script>
