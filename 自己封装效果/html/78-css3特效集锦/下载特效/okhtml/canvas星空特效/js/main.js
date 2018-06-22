$(document).ready(function () {
    window.requestAnimFrame = window.requestAnimationFrame;
    var r, d, u, l, m = document.getElementById("stars"), f = m.getContext("2d"), g = 1e4, p = 1 * m.width, v = [];
    function x() {
        for (r = m.width / 3, d = m.height / 3, v = [], l = 0; l < g; l++)u = {
            x: Math.random() * m.width,
            y: Math.random() * m.height,
            z: Math.random() * m.width,
            o: "0." + Math.floor(99 * Math.random()) + 1
        }, v.push(u)
    }

    x(), function t() {
        !function () {
            for (l = 0; l < g; l++)(u = v[l]).z = u.z - .8, u.z <= 0 && (u.z = m.width)
        }(), function () {
            var t, e, i;
            for (m.width == window.innerWidth && m.width == document.body.clientWidth || (m.width = window.innerWidth, m.height = window.innerHeight, x()), f.fillStyle = "#010101", f.fillRect(0, 0, m.width, m.height), l = 0; l < g; l++)u = v[l], t = (u.x - r) * (p / u.z), t += r, e = (u.y - d) * (p / u.z), e += d, (i = p / u.z * 1) > 5 && (i = 5), f.fillRect(t, e, i, i), f.fillStyle = "rgba(100, 100, 100, " + u.o + ")"
        }(), requestAnimFrame(t)
    }()
});