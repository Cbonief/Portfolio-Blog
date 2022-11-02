import { useRef , useEffect} from "react";


export default function TestCanvas() {
    const canvas_ref = useRef();


    useEffect(()=>{
        var ctx = canvas_ref.current.getContext("2d");
        ctx.fillRect(300 - 100 - 2, 100 - 2, 204, 404)
        ctx.fillStyle = 'rgb(122, 122, 122)';
        ctx.fillRect(300-100, 100, 200, 400)
        ctx.fillStyle = 'rgb(0, 100, 255)';
        ctx.fillRect(300 - 100, 500 - 0.5 * 400, 200, 0.5 * 400)
    }, [canvas_ref]);

    return (
        <div className='container centered canvas-container'>
            <canvas ref={canvas_ref} id="myCanvas" width="600" height="600"></canvas>
        </div>
    )
}