import dayjs from "dayjs";

// Date must be in milliseconds
const getDate = (date, format) => {
    switch (format) {
        case "YYYY-MM-DD":
            return dayjs(date).format("YYYY-MM-DD");
        case "ddd, DD MMM":
            return dayjs(date).format("ddd, DD MMM");
        default:
            return dayjs(date).format("YYYY-MM-DD");
    }
};


export{
    getDate,
}
