import axios from 'axios';
import fs from 'fs';

async function Test() {
    var k = [];
    for (var i = 1; i<=57;i++) {
        var e = await axios.get("https://api.apiumadomain.com/list?sort=seeds&short=1&cb=&quality=720p,1080p,3d&page=58&genre=horror");
        k = [...k, ...e.data.MovieList];
        console.log(i)
    }

    fs.writeFileSync("d:\\aa\\horror.json", JSON.stringify(k));

    console.log(k.length)
}

Test().then(() => {});