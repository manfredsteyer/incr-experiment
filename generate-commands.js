const count = 3; // 10, 20, 100, 200
const existing = 2; // there are already two features

for(let i = 0; i<count-existing; i++) {
    console.log(`call ng g @angular-architects/ddd:feature f${i} --entity entity${i} --domain luggage --app luggage`)
}
