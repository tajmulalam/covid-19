import React, { Component } from 'react'

import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import coronaImage from './images/corona.png'
import Footer from './components/Footer/Footer'

class App extends Component {
    state={
     data:{},
     country:''
    }


   async componentDidMount(){
        const apiData = await fetchData()
        this.setState({data:apiData})
    }
    handleCountryChange= async (country)=>{
        const fetchCountryChangeData= await fetchData(country)
        //console.log(fetchCountryChangeData)
        this.setState({data:fetchCountryChangeData, country:country})
    }
    render() {
        const{ data,country }= this.state
        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt="COVID-19"/>
               <Cards data={data}></Cards>
               <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
               <Chart data={data} country={country}></Chart>
               <Footer/>
            </div>
        )
    }
}

export default App
