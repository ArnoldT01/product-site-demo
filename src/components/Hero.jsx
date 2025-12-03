import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>Product Demo Site</h1>
                <br/>
                <img src="/title.png" alt="Product Title" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button>Buy</button>

            <p>From R27,253 or R2,266/mo for 12 months</p>
        </section>
    )
}
export default Hero
