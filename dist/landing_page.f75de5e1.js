AOS.init();
const dataDoEvento = new Date("May 9, 2025 17:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const diasEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diasEmMs / horaEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoEmMs / 1000);
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento <= 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Evento Expirado!";
        return;
    }
}, 1000);

//# sourceMappingURL=landing_page.f75de5e1.js.map
