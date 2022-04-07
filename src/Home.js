import React from 'react';
import "./Home.css";
import Card from "./Card";

function Home() {
    return (
        <div className='home'>
            <div className="home_section">

                <Card
                    src="https://dji-official-fe.djicdn.com/cms/uploads/a49eae1222f1300f4ec5afe38bf90875.png"
                    title="Camera"
                    available="<button>check availability</button>"
                    price="$1000"
                />

                <Card
                    src="https://m.media-amazon.com/images/I/71ER5HDPa8L._SL1500_.jpg"
                    title="Baby Light"
                    //description=""
                    price="$5400"
                />

                <Card
                    src="https://i.pinimg.com/originals/38/11/3d/38113dddf2751f66a984856a20b6399c.jpg"
                    title="Backdrop"
                    //description=""
                    price="$3000"
                />

                <Card
                    src="https://5.imimg.com/data5/RN/HQ/MY-43892398/folding-heavy-duty-tripod-for-dslr-cameras-500x500.jpg"
                    title="Tripod"
                    //description=""
                    price="$4600"
                />

                <Card
                    src="https://www.designinfo.in/48766-large_default/benro-monopod-leg-carbon-fibre-c48f.jpg"
                    title="Benro Monopod"
                    //description=""
                    price="$1200"
                />

                <Card
                    src="https://image.shutterstock.com/image-photo/set-old-binoculars-against-white-260nw-1140620918.jpg"
                    title="Binocular"
                    //description=""
                    price="$1600"
                />
            </div>
        </div>
    )
}

export default Home;