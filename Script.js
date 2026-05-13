const reasons = [
    "Your smile", "Your laugh", "Your amber eyes", "Your endless energy", "Your confidence",
    "Your stubbornness", "Your honesty", "Your kindness", "Your dramatic plans", "Your imagination",
    "Your ridiculous plans", "Your courage", "Your optimism", "Your warmth", "Your voice",
    "The way you say my name", "Your determination", "Your sincerity", "Your loyalty", "Your innocence",
    "Your mischief", "Your unpredictability", "Your passion", "Your enthusiasm", "Your softness",
    "Your strength", "Your persistence", "Your empathy", "Your clumsiness", "Your grace",
    "Your intelligence", "Your curiosity", "Your stubborn hope", "Your selflessness", "Your boldness",
    "Your elegance", "Your sweetness", "Your resilience", "Your trust in me", "Your faith in me",
    "The way you brighten the room", "Your ability to make me react", "Your refusal to give up", "Your sense of duty", "Your belief in fate",
    "Your dramatic entrances", "Your dramatic exits", "Your little pout", "Your teasing smile", "Your rare moments of silence",
    "Your laugh when you're proud of yourself", "Your excitement over little things", "Your protective side", "Your caring nature", "Your habit of dragging me along",
    "Your confidence in your villainess act", "Your sincerity even in nonsense", "Your courage in fear", "Your refusal to be broken", "Your ability to surprise me",
    "Your endless devotion", "Your patience", "Your forgiveness", "Your tenderness", "Your playful nature",
    "Your ability to make me stay", "Your honesty about what you want", "Your ability to see good in me", "Your stubborn loyalty", "The way you stand beside me",
    "Your unshaken trust", "Your bright spirit", "Your chaotic charm", "Your habit of making everything interesting", "Your presence",
    "How noticeable your absence is", "Your influence on me", "Your ability to make me care", "Your determination to protect others", "Your emotional honesty",
    "Your bravery", "Your innocence in love", "Your refusal to hate", "Your ability to forgive", "Your happiness",
    "Your earnestness", "Your optimism", "Your loyalty to those you love", "Your smile directed at me", "Your laughter because of me",
    "Your tears that I want to stop", "Your fears I want to ease", "Your dreams", "Your future", "Your nonsense",
    "The way you change me", "The way you understand me", "The way you stay", "The way you love", "You being yourself"
];

const rl = document.getElementById('rl');
reasons.forEach((r, i) => {
    const d = document.createElement('div');
    d.className = 'ri rv';
    d.innerHTML = '<span class="rn">' + (i + 1) + '</span> ' + r;
    rl.appendChild(d);
});

const rv = document.querySelectorAll('.rv');
const o = new IntersectionObserver((e) => {
    e.forEach(en => {
        if (en.isIntersecting) {
            en.target.classList.add('v');
            o.unobserve(en.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
rv.forEach(el => o.observe(el));

let cd = false;
const ce = document.getElementById('cn');
const co = new IntersectionObserver((e) => {
    e.forEach(en => {
        if (en.isIntersecting && !cd) {
            cd = true;
            let n = 0;
            const t = setInterval(() => {
                n++;
                ce.textContent = n;
                if (n >= 100) clearInterval(t);
            }, 20);
        }
    });
}, { threshold: 0.5 });
co.observe(document.querySelector('.cb'));

const c = document.getElementById('fw');
const x = c.getContext('2d');
let W, H, f = [], p = [];

function rsz() {
    W = c.width = window.innerWidth;
    H = c.height = window.innerHeight;
}
rsz();
window.addEventListener('resize', rsz);

function nfw() {
    return {
        x: Math.random() * W * 0.8 + W * 0.1,
        y: H,
        tx: Math.random() * W * 0.8 + W * 0.1,
        ty: Math.random() * H * 0.4 + 50,
        sp: 7,
        h: Math.random() * 60 + 330
    };
}

function ex(f) {
    for (let i = 0; i < 35; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = Math.random() * 4 + 1;
        p.push({
            x: f.x, y: f.y,
            vx: Math.cos(a) * s,
            vy: Math.sin(a) * s,
            h: f.h + Math.random() * 30 - 15,
            l: 1,
            d: Math.random() * 0.02 + 0.01
        });
    }
}

function lp() {
    x.fillStyle = 'rgba(10, 2, 4, 0.2)';
    x.fillRect(0, 0, W, H);
    
    for (let i = f.length - 1; i >= 0; i--) {
        const fw = f[i];
        const dx = fw.tx - fw.x;
        const dy = fw.ty - fw.y;
        const dst = Math.sqrt(dx * dx + dy * dy);
        if (dst < fw.sp || fw.y <= fw.ty) {
            ex(fw);
            f.splice(i, 1);
            continue;
        }
        fw.x += (dx / dst) * fw.sp;
        fw.y += (dy / dst) * fw.sp;
        x.beginPath();
        x.arc(fw.x, fw.y, 3, 0, Math.PI * 2);
        x.fillStyle = 'hsl(' + fw.h + ', 100%, 60%)';
        x.fill();
    }
    
    for (let i = p.length - 1; i >= 0; i--) {
        const pt = p[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.vy += 0.08;
        pt.vx *= 0.96;
        pt.l -= pt.d;
        if (pt.l <= 0) {
            p.splice(i, 1);
            continue;
        }
        x.globalAlpha = pt.l;
        x.beginPath();
        x.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
        x.fillStyle = 'hsl(' + pt.h + ', 100%, 65%)';
        x.fill();
    }
    x.globalAlpha = 1;
    requestAnimationFrame(lp);
}
lp();

let ln = false;
const fo = new IntersectionObserver((e) => {
    e.forEach(en => {
        if (en.isIntersecting && !ln) {
            ln = true;
            for (let i = 0; i < 5; i++) setTimeout(() => f.push(nfw()), i * 300);
        }
    });
}, { threshold: 0.3 });
fo.observe(document.getElementById('w'));

document.getElementById('btn').addEventListener('click', function() {
    this.textContent = 'I Love You, Raisha!';
    this.style.background = '#d4af37';
    this.style.color = '#0a0204';
    for (let i = 0; i < 8; i++) setTimeout(() => f.push(nfw()), i * 200);
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
