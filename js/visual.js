const all_university_stu = 2000;
var stu_reported = 0;

option_task = {
    textStyle: {
        fontSize: 16
    },
    color: ['#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center',
        // doesn't perfectly work with our tricks, disable it
        selectedMode: false,
        show: false
    },
    series: [
        {
            name: '报到完成情况',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start angle
            startAngle: 180,
            label: {
                show: true,
                formatter(param) {
                    // correct the percentage
                    return param.name + ' (' + param.percent * 2 + '%)';
                }
            },
            data: [
                {value: stu_reported, name: '已到'},
                {value: all_university_stu - stu_reported, name: '未到'},
                {
                    value: all_university_stu,
                    itemStyle: {
                        color: 'none',
                        decal: {
                            symbol: 'none'
                        }
                    },
                    label: {
                        show: false
                    }
                }
            ]
        }
    ]
};

option_gender = {
    color: ['#73c0de', '#eb3600'],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '1%',
        left: 'center'
    },
    textStyle: {
        color: '#FFFFFF'
    },
    series: [
        {
            name: '男女比例',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '男生'},
                {value: 735, name: '女生'},
            ]
        }
    ]
};

option_transport = {
    color: ['#73c0de'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    textStyle: {
        color: 'rgba(255, 255, 255, 255)'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
        }
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            barWidth: '60%',
            data: []
        }
    ]
};

const shadowColor = '#374b86';

var currentSch = 'all';

option_sch_stu_bch = {
    title: {
        text: '本科生',
        subtext: '',
        left: 'center',
        top: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 85,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - 85,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

option_sch_stu_mas = {
    title: {
        text: '硕士生',
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 50,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - 50,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

option_sch_stu_phd = {
    title: {
        text: `博士生`,
        subtext: '',
        left: 'center',
        top: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 46,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: {
                        colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - 46,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

option_stu_interest = {
    textStyle: {
        fontSize: 16
    },
    backgroundColor: '#091436',
    title: {
        show: false,
        text: '学生兴趣分布',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
        show: false,
        min: 0,
        max: 400,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '学生兴趣',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [],
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

const spirit = 'image://' + '/images/cxk.jpg';
var maxData = 10;
option_region = {
    tooltip: {},
    xAxis: {
        max: maxData,
        splitLine: {show: false},
        offset: 10,
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            margin: 10
        }
    },
    yAxis: {
        data: [],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            color: '#999',
            fontSize: 14
        }
    },
    grid: {
        top: 'center',
        height: 200,
        left: 70,
        right: 100
    },
    series: [
        {
            type: 'pictorialBar',
            symbol: spirit,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbolClip: true,
            symbolSize: 30,
            symbolBoundingData: maxData,
            data: [],
            z: 10
        },
        {
            // full data
            type: 'pictorialBar',
            itemStyle: {
                opacity: 0.2
            },
            label: {
                show: true,
                formatter: function (params) {
                    return params.value + ' 人';
                },
                position: 'right',
                offset: [10, 0],
                color: 'green',
                fontSize: 18
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbol: spirit,
            symbolSize: 30,
            symbolBoundingData: maxData,
            data: [],
            z: 5
        }
    ]
};