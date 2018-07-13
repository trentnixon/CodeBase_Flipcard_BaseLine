import axios from 'axios';
import store from "../store/store";

export function FetchData(){

    /** Set Properties */
        this.theme="theme.json"
        this.data="data.json"
        this.ui="UI.json"
        this.path="./json/"

        this.init=[this.path+this.theme,this.path+this.data,this.path+this.ui]

    /** Set Methods */

    this.start =  () => {
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {
                store.dispatch({ type:"STORE_DATA", payload:res[1].data });
                store.dispatch({ type:"STORE_THEME", payload:res[0].data });
                store.dispatch({ type:"STORE_UI", payload:res[2].data });
                store.dispatch({ type:"UI_SET", payload:true });
                
            })
        )
        .catch(function (error) {
            console.log(error);
        });
    }
}
