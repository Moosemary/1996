// Modem-intro: klick -> ljud -> statusrader -> redirect
(function () {
  var NEXT = "welcome.html";
  var audio = document.getElementById("modem");
  var btn = document.getElementById("connect");
  var statusEl = document.getElementById("status");
  var fill = document.getElementById("fill");
  var help = document.getElementById("help");
  var started = false, done = false, fallbackTimer = null;

  // [sekunder in i ljudet, statustext]
  var steps = [
    [0,  "Ringer upp 1996..."],
    [4,  "Uppringning pågår, 0771-1996..."],
    [9,  "Väntar på svar från servern..."],
    [13, "Handskakning med modem..."],
    [20, "Kontrollerar användarnamn och lösenord..."],
    [24, "Ansluten till 1996 med 28 800 bps"]
  ];

  function setStatus(t) {
    if (statusEl.textContent !== t) statusEl.textContent = t;
  }

  function update() {
    var t = audio.currentTime, d = audio.duration || 26;
    var s = steps[0][1];
    for (var i = 0; i < steps.length; i++) if (t >= steps[i][0]) s = steps[i][1];
    setStatus(s);
    fill.style.width = Math.min(100, (t / d) * 100) + "%";
  }

  function go() {
    if (done) return;
    done = true;
    audio.pause();
    fill.style.width = "100%";
    setStatus("Ansluten! Laddar 1996...");
    setTimeout(function () { location.href = NEXT; }, 600);
  }

  function start() {
    if (started) return;
    started = true;
    btn.disabled = true;
    btn.textContent = "Ringer...";
    help.className = "";
    var p = audio.play();
    if (p && p.catch) p.catch(function () {
      // Ljud blockerat: kör ändå en fejkad uppringning på 26 s
      var t0 = Date.now();
      fallbackTimer = setInterval(function () {
        var t = (Date.now() - t0) / 1000;
        var s = steps[0][1];
        for (var i = 0; i < steps.length; i++) if (t >= steps[i][0]) s = steps[i][1];
        setStatus(s);
        fill.style.width = Math.min(100, (t / 26) * 100) + "%";
        if (t >= 26) { clearInterval(fallbackTimer); go(); }
      }, 200);
    });
  }

  btn.addEventListener("click", start);
  audio.addEventListener("timeupdate", update);
  audio.addEventListener("ended", go);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && started) { if (fallbackTimer) clearInterval(fallbackTimer); go(); }
  });
})();
