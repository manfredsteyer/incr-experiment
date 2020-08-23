const count = 100; // 10, 20, 100, 200
const existing = 0; // there are already two features

for(let i = 0; i<count-existing; i++) {
    for (let j=0; j<30; j++) {
        console.log(`call ng g component feature${i}-component${j} --project luggage-feature-f${i}`);
    }
}
