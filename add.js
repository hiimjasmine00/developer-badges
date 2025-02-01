require("fs").writeFileSync(require("path").join(__dirname, "v2", process.argv[2] + ".json"), JSON.stringify({
    name: process.argv[3],
    badge: parseInt(process.argv[4])
}, null, 2));
