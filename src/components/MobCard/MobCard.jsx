import { useState, useEffect } from "react";

export default function MobCard() {
    const [mobs, setMobs] = useState([]);

    useEffect(() => {
        fetch("public/data/mobs.json")
            .then((response) => response.json())
            .then((data) => setMobs(data));
    }, []);
    console.log(mobs);

    return <div></div>;
}
