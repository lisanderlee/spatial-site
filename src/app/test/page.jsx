"use client"
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
   <>
    <div className=' bg-slate-950 w-screen p-20'>
    
        <div className=' align-middle   text-green-500 h-screen'>
        <div className='absolute'>
        <Spline scene="https://prod.spline.design/ZBdDTgTug4S3PH4u/scene.splinecode" />
        </div>
            <h1 className=' font-extrabold text-9xl'> Lisandro is the shit you know. He makes really cool website with 3d.</h1>
        </div>
        <div className=' align-middle   text-green-500 h-screen'>
        <div className='absolute w-96'>
        <Spline scene="https://prod.spline.design/ZBdDTgTug4S3PH4u/scene.splinecode" />
        </div>
            <h1 className=' font-extrabold text-9xl'> Lisandro is the shit you know. He makes really cool website with 3d.</h1>
        </div>
   
    </div>
    </>
  );
}
