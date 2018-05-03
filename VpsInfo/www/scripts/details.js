window.onload = function() {
    var ctx = $("#Chart_ping");
    ctx.width(300);
    dataObject = []
    for(var i = 0;i<=288;i++)
    {
        if(i> 100 && i< 150)
        {
            dataObject[i] = new Object();
            dataObject[i].x = moment.unix(1318781876 + 300 * i);
            dataObject[i].y = "Nan";
            continue;
        }
        dataObject[i] = new Object();
        dataObject[i].x = moment.unix(1318781876 + 300 * i);
        dataObject[i].y = Math.random() * 100;
    }
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data:  dataObject,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ],
                pointRadius: 0,
                borderWidth: 1,
                lineTension: 0
                
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
                display: true,
                text: 'Ping'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        format: 'DD HH:mm',
                        tooltipFormat: 'DD HH:mm',
                        minUnit: 'minute'
                    },
                    ticks:{
                        source: 'auto'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '时间'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Ping'
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 500
                    }
                }]

            }
        }
    });
};
