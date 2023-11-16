import moment from "moment"

export default function timeAgo(time: number){
    let timeAgo = moment().diff(moment(time), 'minutes')
        if (timeAgo < 60) {
            return `${timeAgo} мин.`
        }

        timeAgo = moment().diff(moment(time), 'hours')
        if (timeAgo < 24) {
            return `${timeAgo} ч.`
        }

        timeAgo = moment().diff(moment(time), 'days')
        return `${timeAgo} д.`
}