// import React from 'react';
import './App.css';
import {Clock} from "./components/Clock/Clock";
import {ClockFromDimych} from "./components/ClockFromDimych/ClockFromDimych";


function App() {


    return (
        <div className="App">
            {/*<OnOffWithUseState setOn={setOnOff}/>{on.toString()}*/}
            {/*<OnOff on={on} setOn={setOnOff}/>*/}
            {/*<Rating value={ratingValue} oneClick={setRatingValue}/>*/}
            {/*<AppTitle title={'My App'}/>*/}
            {/*<AppTitle title={'Your App'}/>*/}
            {/*Article 1*/}
            {/*<RatingWithUseState value={3}/>*/}
            {/*<Accordion2 title={'Rating'} value={collapsed} oneClick={setCollapsed}/>*/}
            {/*Article 1*/}
            {/*<RatingWithUseState/>*/}
            {/*<ReactMemoContainer/>*/}
            {/*<ReactMemo/>*/}
            {/*<UseMemoTest/>*/}
            {/*<UseStateCool/>*/}
            {/*<UseEffectComponent/>*/}
            {/*<Clock/>*/}
            <ClockFromDimych mode={"digital"}/>
            <ClockFromDimych mode={"analog"}/>
        </div>
    )
}


export default App;
