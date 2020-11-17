window.addEventListener("load",() => {
    let timing = performance.getEntriesByType("navigation")[0];
    // time to Interavtive 可交互时间
    let tti = timing.domInteractive-timing.fetchStart;
    console.log("tti:",tti);
})

PerformanceObserver((list) => {
    for(const entry of list.getEntries()){
        console.log(entry);
    }
});