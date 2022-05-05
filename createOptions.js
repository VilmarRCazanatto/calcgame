const data = () => {
    let operations = ['+', '-', '*', '/']

    let results = []

    mathRes = exp => {
        switch (exp.op) {
            case operations[0]:
                return exp.n1 + exp.n2

            case operations[1]:
                return exp.n1 - exp.n2

            case operations[2]:
                return exp.n1 * exp.n2

            case operations[3]:
                return exp.n1 / exp.n2
        }
    }

    verify = v => {
        if (v < 0) return false
        if (Math.round(v) != v) return false
        if (v == Infinity) return false

        return true
    }


    for (let d1 = 1; d1 <= 6; d1++) { //dado 1
        for (let d2 = 1; d2 <= 6; d2++) { // dado 2
            for (let d3 = 1; d3 <= 6; d3++) { // dado 3
                for (let o1 = 0; o1 < 4; o1++) { // operação 1
                    for (let o2 = 0; o2 < 4; o2++) { // operação 2
                        let m1 = mathRes({ n1: d1, n2: d2, op: operations[o1] })
                        let d = Number([d1, d2, d3].sort((a, b) => {
                            if (a < b) return -1
                            if (a > b) return 1
                            return 0
                        }).join(''))


                        results.push({
                            dados: d,
                            calc: "(" + d1 + operations[o1] + d2 + ")" + operations[o2] + d3,
                            res: mathRes({ n1: m1, n2: d3, op: operations[o2] })
                        })

                        if (!verify(results[results.length - 1].res)) results.pop()

                        if (o2 == 1 || o2 == 3) {
                            results.push({
                                dados: d,
                                calc: "" + d3 + operations[o2] + "(" + d1 + operations[o1] + d2 + ")",
                                res: mathRes({ n1: d3, n2: m1, op: operations[o2] })
                            })

                            if (!verify(results[results.length - 1].res)) results.pop()
                        }


                    }
                }
            }
        }
    }


    return results
}