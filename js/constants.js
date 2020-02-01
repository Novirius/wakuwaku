export const COLORS_ARRAY = ['BLUE','RED']

export const BLUE = {
    circleLight: (grd, alpha) =>  grd.addColorStop(1.000, 'rgba(78, 102, 150, '+alpha+')'),
    circleDark: (grd, alpha) =>  grd.addColorStop(0.000, 'rgba(24, 49, 73, '+alpha+')'),
    circleEdge: '#e9e9e9',
    timerLight: (grd) => grd.addColorStop(0, 'rgba(5, 160, 250, 0.5)'),
    timerDark: (grd) => grd.addColorStop(1, 'rgba(163, 247, 222, 0.5)'),

}
export const RED = {
    circleLight: (grd, alpha) =>  grd.addColorStop(1.000, 'rgba(252, 153, 185, '+alpha+')'),
    circleDark: (grd, alpha) =>  grd.addColorStop(0.000, 'rgba(252, 50, 121, '+alpha+')'),
    circleEdge: '#e9e9e9',
    timerLight: (grd) => grd.addColorStop(0, 'rgba(250, 242, 170, 0.9)'),
    timerDark: (grd) => grd.addColorStop(1, 'rgba(250, 170, 246, 0.9)'),
}

export const PURPLE = {
    circleLight: (grd, alpha) =>  grd.addColorStop(1.000, 'rgba(164, 154, 166, '+alpha+')'),
    circleDark: (grd, alpha) =>  grd.addColorStop(0.000, 'rgba(52, 31, 53, '+alpha+')'),
    circleEdge: '#e9e9e9',
    timerLight: (grd) => grd.addColorStop(0, 'rgba(5, 160, 250, 0.5)'),
    timerDark: (grd) => grd.addColorStop(1, 'rgba(163, 247, 222, 0.5)'),
}

export const GREEN = {
    circleLight: (grd, alpha) =>  grd.addColorStop(0.000, 'rgba(204, 255, 204, '+alpha+')'),
    circleDark: (grd, alpha) =>  grd.addColorStop(0.000, 'rgba(52, 31, 53, '+alpha+')'),
    circleEdge: '#e9e9e9',
    timerLight: (grd) => grd.addColorStop(0, 'rgba(5, 160, 250, 0.5)'),
    timerDark: (grd) => grd.addColorStop(1, 'rgba(163, 247, 222, 0.5)'),
}

export const ORANGE = {
    circleLight: '#4a370e',
    circleDark: '#e2723b',
    circleEdge: '#e9e9e9',
    timerLight: (grd) => grd.addColorStop(0, 'rgba(5, 160, 250, 0.5)'),
    timerDark: (grd) => grd.addColorStop(1, 'rgba(163, 247, 222, 0.5)'),
}

export const shortArc = {
    bottomRight: {
        createArc: (ctx, centerX, centerY, length) => ctx.arc(centerX, centerY, length, 0 * Math.PI, 0.5 * Math.PI),
        translateTop: (ctx, length) => ctx.translate(-length, 0),
        translateBottom: (ctx, length) => ctx.translate(0, -length)
    },
    bottomLeft: {
        createArc: (ctx, centerX, centerY, length) => ctx.arc(centerX, centerY, length, 0.5 * Math.PI, 1 * Math.PI),
        translateTop: (ctx, length) => ctx.translate(length, 0),
        translateBottom: (ctx, length) => ctx.translate(0, -length)
    },
    topLeft: {
        createArc: (ctx, centerX, centerY, length) => ctx.arc(centerX, centerY, length, 1 * Math.PI, 1.5 * Math.PI),
        translateTop: (ctx, length) => ctx.translate(0, length),
        translateBottom: (ctx, length) => ctx.translate(length, 0)
    },
    topRight: {
        createArc: (ctx, centerX, centerY, length) => ctx.arc(centerX, centerY, length, 1.5 * Math.PI, 2 * Math.PI),
        translateBottom: (ctx, length) => ctx.translate(-length, 0),
        translateTop: (ctx, length) => ctx.translate(0, length)
    }
}

export const REVERSE = '⬄';
export const SPINNER = '⥁';

// export const rainbowRing = {
    // ctx.beginPath();
    // ctx.arc(this.centerX, this.centerY, this.timerSize(), 0, 2 * Math.PI);
    // ctx.lineWidth = 5;
    // ctx.strokeStyle = "hsla("+Math.random() * 360+", 100%, 80%, 0.9)";  
    // ctx.stroke();
    // ctx.closePath();
// }

