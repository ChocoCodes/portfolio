"use client";
import Snowfall from 'react-snowfall';

export const SnowfallWrapper = () => {
    return (
        <div className="fixed inset-0 z-10 pointer-events-none">
            <Snowfall 
                color="#E5E5E5" 
                snowflakeCount={100} 
                speed={[0.4, 1.0]}
                style={{
                    width: "100vw",
                    height: "100vh",
                }}
                opacity={[0.8, 0.8]}
            />
        </div>
    )
}