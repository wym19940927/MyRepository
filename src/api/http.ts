import axios from 'axios';
import { WEATHERIP } from './config';

export let getWeatherData = (data: string) => {
    return axios({
        method: 'get',
        url: `${WEATHERIP}/weather_mini?city=${data}`
    }).then(res => res.data)
}