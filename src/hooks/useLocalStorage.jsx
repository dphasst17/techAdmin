import filterData from "~/helper/filterData"
export const useSetLocalStorage = (data) => {
    const resultData = filterData(data)
    localStorage.setItem(resultData.key,JSON.stringify(resultData.value))
}
export const useGetLocalStorage = (key) => {
    const resultKey = filterData(key)
    const resultLocalValue = JSON.parse(localStorage.getItem(resultKey) || "[]")
    return resultLocalValue;
}