const count = 100; // 10, 20, 100, 200
const existing = 2; // there are already two features

for(let i = 0; i<count-existing; i++) {
    for (let j=0; j<30; j++) {
        console.log(`ng g component feature${i}-component${j} --entity entity${i} --domain luggage --app luggage`)
    }
}
