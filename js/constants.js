export const BLUE = {
    innerColor: '#1f2635',
    innerRing: '#264a92',
    outterRing: '#e9e9e9',
    lightRing: '#04adfc'
}
export const RED = {
    innerColor: '#351f1f',
    innerRing: '#922626',
    outterRing: '#e9e9e9',
    lightRing: '#fc0404'
}

export const PURPLE = {
    innerColor: '#341f35',
    innerRing: '#822692',
    outterRing: '#e9e9e9',
    lightRing: '#f304fc'
}

export const GREEN = {
    innerColor: '#1f3523',
    innerRing: '#269240',
    outterRing: '#e9e9e9',
    lightRing: '#04fc2d'
}

export const ORANGE = {
    innerColor: '#4a370e',
    innerRing: '#e2723b',
    outterRing: '#e9e9e9',
    lightRing: '#fc5604'
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
