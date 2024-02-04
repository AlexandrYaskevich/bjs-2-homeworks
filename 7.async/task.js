class AlarmClock {
    constructor(alarmCollection, intervalId) {
    this.alarmCollection = [];
    this.intervalId = null;
    }

    addClock(addTime, addCallback) {
        let alarm = {
            callback : addCallback,
            time : addTime,
            canCall : true
         }
        if(!addTime || !addCallback) {
          throw new Error('Отсутствуют обязательные аргументы'); 
        }
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time === addTime) {
                console.warn('Уже присутствует звонок на это же время');
            }
         }

        this.alarmCollection.push(alarm);
    }

    removeClock(delTime) {
        for(let i = 0; i < this.alarmCollection.length; i++) {
            if(this.alarmCollection[i].time === delTime) {
                this.alarmCollection.splice([i], 1);
            }
        }
    }

    getCurrentFormattedTime() {
        let date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(this.alarmCollection.forEach((element) => {
            if (element.time === this.getCurrentFormattedTime() && element.canCall) {
            element.canCall = false;
            element.callback;
            }
            }), 1000);
        }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach((element) => {
            element.canCall = true;
            }); 
    }

    clearAlarms() {
        this.alarmCollection.stop;
        this.alarmCollection = [];
    }

}