const sanitizeString = (str) => {
    const unwantedChars = /[&\/\\#,+()$~%*?<>{}^!-]/g;
    return str.replace(unwantedChars, '');
}

const filterData = (data) => {
    if (typeof data === 'string') {
        return sanitizeString(data);
    } else if (Array.isArray(data)) {
        return data.map(filterData);
    } else if (typeof data === 'object' && data !== null) {
        const resultFilter = {};
        for (const key in data) {
            resultFilter[key] = filterData(data[key]);
        }
        return resultFilter;
    } else {
        return data;
    }
}

export default filterData;
