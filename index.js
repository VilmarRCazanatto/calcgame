const app = {
    view: root,
    svgTable: svg_table,

    circle_dm: 100 / 9,

    constructor: function () {
        let circle = []
        let created_ord = [
                05,06,07,08,09,
               04,28,29,30,31,10,
              03,27,45,46,47,32,11,
             02,26,44,56,57,48,33,12,
            01,25,43,55,61,58,49,34,13,
             24,42,54,60,59,50,35,14,
              23,41,53,52,51,36,15,
               22,40,39,38,37,16,
                21,20,19,18,17,         
        ]

        

        let h = this.circle_dm * Math.sqrt(3) / 2
        for (let r = -4; r <= 4; r++) {
            for (let l = -4; l <= 4; l++) {
                if (r + l < -4) continue
                if (r + l > 4) continue
                circle.push(this.createCircle(
                    50 + (l + r * .5) * this.circle_dm, //x
                    50 + r * h //y
                ))
            }
        }

        



        circle.forEach(c => this.svgTable.innerHTML += c)


        
        
        
    },

    createCircle: function (cx, cy) {
        let p = 1
        return `<circle 
            cx="${cx}" cy="${cy}" r="${this.circle_dm / 2 - p}" 
            stroke="black" stroke-width="1" fill="gray" 
        />`
    }
}


window.onload = app.constructor.bind(app)