import axios from 'axios'


const BASE_URL='https://covid19.mathdro.id/api'

export const fetchData= async (country)=>{
    let changeAbleUrl=BASE_URL
    if(country){
        changeAbleUrl=`${BASE_URL}/countries/${country}`
    }
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}}= await axios.get(changeAbleUrl);
        return {confirmed,recovered,deaths,lastUpdate}
    } catch (error) {
        console.log(error)
        
    }
}

export const fetchDailyData= async () => {
    try {
        const {data} = await axios.get(`${BASE_URL}/daily`)
        const modifiedData=data.map(dailyData =>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        return modifiedData
    } catch (error) {
        console.log(error)
        
    }
}

export const fetchCountries = async ()=>{
    try {
        const {data:{countries}}= await axios.get(`${BASE_URL}/countries`)
        return countries.map((country)=>country.name)
    } catch (error) {
        console.log(error)
        
    }
}