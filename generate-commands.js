const fs = require('fs');

const count = 30; // 10, 20, 100, 200
const existing = 0; // there are already two features

let content = '';
for(let i = 0; i<count-existing; i++) {
    
    console.log(`{ 
    path: 'feature${i}, 
    loadChildren: () => import('@flights/luggage/feature-f${i}').then(m => m.LuggageFeatureF${i}Module) 
},`)
    
    // console.log(`ng g @nrwl/workspace:rm --project luggage-feature-f${i}`);

    // for (let j=1; j<30; j++) {
    //     content += `<luggage-feature${i}-component${j}></luggage-feature${i}-component${j}>\n`;
    // }

    // const path = `libs/luggage/feature-f${i}/src/lib/f${i}.component.html`;
    // fs.writeFileSync(path, content);

    // content = '';
}