import React, { useState } from "react";

function AramaCubugu({ belirtHavaDurumu }) {
    const api = {
        key: "382cc11a42cd73478d949053a0999bea",
        base: "https://api.openweathermap.org/data/2.5/weather",
    };
    const [araParametre, belirtAraParametre] = useState("");
    const ara = (e) => {
        if (e.key === "Enter") {
            fetch(`${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`)
                .then((veri) => veri.json())
                .then((sonuc) => {
                    belirtAraParametre("");
                    belirtHavaDurumu(sonuc);
                    

                })
        }
    }


    return (
        <div className="arama">
            <input
             className="arama-input"
             type="text" 
             placeholder="Şehir"
             onChange={(e)=> belirtAraParametre(e.target.value)}
             value={araParametre}
             onKeyPress={ara}
            />   
        </div>
      );
    }
    
    export default AramaCubugu;