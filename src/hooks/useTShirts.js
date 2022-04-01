import { useEffect, useState } from "react"

const useTShirt = () => {
    const [tShirt, setTShirts] = useState([]);
    useEffect(() => {
        fetch('tshirt.json')
            .then(res => res.json())
            .then(data => setTShirts(data));
    }, []);

    return [tShirt, setTShirts];
}
export default useTShirt;