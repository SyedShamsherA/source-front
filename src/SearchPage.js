import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 orders · 26 august to 30 august · 2 guest</p>
                <h1>Rentals nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of tools</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Availability</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://dji-official-fe.djicdn.com/cms/uploads/a49eae1222f1300f4ec5afe38bf90875.png"
                price="£30 / day"
                total="£117 total"
            />

            <SearchResult
                img="https://m.media-amazon.com/images/I/71ER5HDPa8L._SL1500_.jpg"
                price="£40 / day"
                total="£157 total"
            />

            <SearchResult
                img="https://i.pinimg.com/originals/38/11/3d/38113dddf2751f66a984856a20b6399c.jpg"
                price="£35 / day"
                total="£207 total"
            />
            <SearchResult
                img="https://5.imimg.com/data5/RN/HQ/MY-43892398/folding-heavy-duty-tripod-for-dslr-cameras-500x500.jpg"
                price="£55 / day"
                total="£320 total"
            />
            <SearchResult
                img="https://www.designinfo.in/48766-large_default/benro-monopod-leg-carbon-fibre-c48f.jpg"
                price="£60 / day"
                total="£450 total"
            />
            <SearchResult
                img="https://image.shutterstock.com/image-photo/set-old-binoculars-against-white-260nw-1140620918.jpg"
                price="£65 / day"
                total="£480 total"
            />
            
        </div>
    )
}

export default SearchPage ;