import './mapsIFrame.css'

export default function WeatherMainInfo({weather}){
    return (
        <div>
            <div>{weather?.location.name}</div>
            <div>{weather?.location.country}</div>
            <div>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`} 
                        width="128" 
                        alt="forecast icon" />
                </div>
                <div>
                    <div>{weather?.current.condition.text}</div>
                    <div>{weather?.current.temp_c}º</div>
                </div>
                
            </div>
            {/* <div className="mapouter">
              <div class="gmap_canvas">

                <iframe 
                    title='maps'
                    width="600" 
                    height="300" 
                    src="http://maps.google.de/maps?hl=de&q=Pariser Platz, 10117 Berlin+(Brandenburger Tor)&ie=UTF8&t=&z=17&iwloc=B&output=embed" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0">
                    <a href="http://www.siteway.de/maps-generator/" title="Google Maps für Ihre Homepage">(c) Homepage Google Maps Generator</a>
                </iframe>
              </div>  
            </div>     */}
        </div>
    )
}