const fs = require("fs");
const path = require("path");
fs.writeFileSync(path.join(__dirname, "badges", process.argv[2] + ".json"), JSON.stringify({
    name: process.argv[3],
    badge: parseInt(process.argv[4])
}, null, 2) + "\n");
const badges = require("./badges.json");
if (!badges.find(x => x.id == process.argv[2])) {
    badges.push({
        id: parseInt(process.argv[2]),
        name: process.argv[3],
        badge: parseInt(process.argv[4])
    });
}
fs.writeFileSync(path.join(__dirname, "badges.json"), JSON.stringify(badges.map(x => x.id == process.argv[2] ? {
    id: x.id,
    name: process.argv[3],
    badge: parseInt(process.argv[4])
} : x), null, 2) + "\n");
