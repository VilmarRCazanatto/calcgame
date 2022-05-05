const casas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 48, 50, 54, 55, 60, 64, 66, 72, 75, 80, 90, 100, 120, 150, 180, 216]

let results = data()

//test value
let ns = [0, 2, 3, 4, 1, 5, 6, 8, 12, 7, 9, 10, 15, 18, 11, 24, 14, 16, 20, 30, 13, 36, 21, 25, 40, 17, 19, 22, 27, 28, 32, 48, 35, 60, 23, 42, 26, 29, 31, 45, 50, 54, 72, 33, 34, 37, 38, 39, 41, 44, 55, 64, 66, 75, 80, 90, 96, 100, 108, 120, 125, 144, 150, 180, 216]

//recebe um array e reordena seguindo o ordem dos mesmos em 'ns'
reOrd = a => a.map((v,i) => {
    return [v, ns.indexOf(v)]
}).sort((a, b) => {
    if (a[1] > b[1]) return 1
    if (a[1] < b[1]) return -1
    return 0
}).map(v => v[0])

filterRes = (dados, res) => results.filter(r => (r.dados == dados && r.res == res) ? r : 0)



orderRes = []

results.forEach(v => {
    if (orderRes[v.res] == undefined) orderRes[v.res] = []

    if (orderRes[v.res].indexOf(v.dados) < 0) orderRes[v.res].push(v.dados)

})

opcRes = []

results.forEach(v => {
    if (opcRes[v.dados] == undefined) opcRes[v.dados] = []

    if (opcRes[v.dados].indexOf(v.res) < 0) opcRes[v.dados].push(v.res)
})

opcRes.forEach((v,i) => opcRes[i] = reOrd(v))