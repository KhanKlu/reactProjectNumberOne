import { useEffect, useState } from "react"





export default function Randomcolor(){

    const [typeOfcolor,setTypeOfColor] = useState('hex')
    const [color,setColor] = useState('#000000')

    function randomColorUtility(length) {
        return Math.floor(Math.random()*length)
    }

    function handleCreateRandomHEXColor() {
        const hex  = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#";
        for(let i=0; i< 6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor)
    }

    function handleCreateRandomRGBColor () {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if(typeOfcolor === 'rgb') handleCreateRandomRGBColor()
        else handleCreateRandomHEXColor()
    },[typeOfcolor])


    return (
        <div style={{
            width : '100vw',
            height : '100vh',
            background : color,
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
            <button onClick={typeOfcolor === 'hex' ? handleCreateRandomHEXColor : handleCreateRandomRGBColor}>Generate Random Color</button >
            <div style={{
                display: 'flex',
                justifyContent : 'center',
                alignItems : 'center',
                color : '#fff',
                fontSize : '60px',
                marginTop : '50px',
                flexDirection : 'column',
                gap : '15px'
            }}>
                <h3>{typeOfcolor === 'rgb' ? 'RGB Color ' : 'HEX color ' }</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}