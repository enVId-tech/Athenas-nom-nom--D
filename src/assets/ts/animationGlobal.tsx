import React from "react";
import '../scss/animationGlobal.scss';

// @ts-expect-error Proper image
import img from '../img/Logo.jpg';

const AnimationGlobal: React.FC = (): React.JSX.Element => {
    return (
        <section id="animation">
            <img src={img} alt="logo" />
            <h1>Global Youth Scholars</h1>
        </section>
    )
}

export default AnimationGlobal;