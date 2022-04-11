const { text } = require('input');

const getArgs = async () => {
    let m = await text('Введіть перше число', { default: 0 });
    let n = await text('Введіть друге число', { default: 0 });
    return { m, n };
}

async function main() {
    var { m, n } = await getArgs();
    if(isNaN(m) || isNaN(n)) return { error: true, message: 'Будь ласка, введіть число.' }
    if(m <= 0 || n <= 0) return { error: true, message: 'Число має бути більше 0.' };
    if(m < n) m = [n, n=m][0];
    var c = m/n;
    if(Number.isInteger(c)) return n;
    var r = m-((Math.trunc(c))*n);
    while(r != 0) {
        m = [n, n=r][0];
        c = m/n;
        if(Number.isInteger(c)) return n;
        else r = m-((Math.trunc(c))*n);
        continue;
    }
}

main().then(result => {
    if(result.error) return console.error(`ERROR: ${result.message}`);
    console.log(`Найбільший спільний дільник - ${result}`);
})