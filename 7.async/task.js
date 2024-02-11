class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(addTime, addCallback) {
		if (!addTime || !addCallback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.some((element) => {element=== addTime})) {
			console.warn('Уже присутствует звонок на это же время');
    	}

		this.alarmCollection.push({
			callback: addCallback,
			time: addTime,
			canCall: true
		});
	}

	removeClock(delTime) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time != delTime);
	}

	getCurrentFormattedTime() {
		return  new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
		
	}

	start() {
		if (this.intervalId) {
			return;
		}
        this.alarmCollection.forEach((element) => {
            if (element.time === this.getCurrentFormattedTime() && element.canCall) {
            element.canCall = false;
            element.callback()
            }
            })

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
		stop();
		this.alarmCollection = [];
	}

}