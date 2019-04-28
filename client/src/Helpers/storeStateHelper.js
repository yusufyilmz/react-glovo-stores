const openMessage = () => "Open right now"
const closeMessage = (day, hour) => `Next opening time: ${day} at ${hour}`
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


const getStoreStates = (stores) => {

    return stores.map(store => {
        const state = checkStoreState(store.schedule);
        return {
            ...store,
            open: state.open,
            message: state.message
        }
    });
}

const getCategoryStoreStates = (categories) => {

    return categories.map(category => {
        var allStoresClosed = true;
        const stores = category.stores.map(store => {
            const state = checkStoreState(store.schedule);
            if (state.open) {
                allStoresClosed = false;
            }
            return {
                ...store,
                open: state.open,
                message: state.message
            }
        });

        return {
            ...category,
            stores,
            closed: allStoresClosed
        }
    })
}


const checkStoreState = (schedule) => {

    var storeState = {
        open: true
    }

    if (schedule.length === 0) {
        storeState.open = 'unknown'
        storeState.message = 'unknown'
        return storeState
    }

    const now = new Date();
    let day = now.getDay();
    day = day === 0 ? day = 6 : day - 1

    const hour = now.getHours();
    const minute = now.getMinutes();

    var scheduleDay = schedule.find(x => x.day == day);

    if (scheduleDay) {
        var timeOpenParts = scheduleDay.open.split(":");
        var timeCloseParts = scheduleDay.close.split(":");

        if (hour > timeCloseParts[0] || (hour == timeCloseParts[0] && minute > timeCloseParts[1])) {
            //closed according to close time
            storeState.message = getCloseMessage(schedule, day, 'next');
            storeState.open = false;
        }

        if (hour < timeOpenParts[0] || (hour == timeOpenParts[0] && minute < timeOpenParts[1])) {
             //closed according to open time
            storeState.message = getCloseMessage(schedule, day);
            storeState.open = false;
        }
    }
    else {
         //closed according to day
        storeState.message = getCloseMessage(schedule, day, 'next');
        storeState.open = false;
    }

    if (storeState.open) {
        storeState.message = openMessage();
    }

    return storeState;
}


const getCloseMessage = (schedule, day, dayType) => {

    var openDay = {};

    if (dayType === 'next') {
        let nextScheduleDay = schedule.find(x => x.day > day);
        if (!nextScheduleDay) {
            // get current day earliest open hour
            openDay = schedule[0]
        }
        else {
            // get next day earliest open hour
            openDay = nextScheduleDay
        }
    }
    else {
        openDay = schedule.find(x => x.day == day);
    }

    return closeMessage(DAYS[Number(openDay.day)], openDay.open)
}




export const storeStateHelper = {
    getCategoryStoreStates,
    getStoreStates
}