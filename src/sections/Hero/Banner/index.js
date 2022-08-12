import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei"
import state from "../../../store";
import Hero from "..";

import { Grid } from "@mui/material"
import "./styles.css"


const Banner = () => {
    return (
        <div className="HeaderContainer" >
            <Grid height={"80vh"} zIndex={4} position="absolute" container justifyContent={"flex-end"} alignItems="flex-end">
            <Grid sx={{
                    height: "300px",
                    width: "300px",
                    marginRight: "20rem"
                }}>
                    <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
                        <Suspense fallback={<Html center children="Loading..." />}>
                            <Hero />
                        </Suspense>
                    </Canvas>
                </Grid>
            </Grid>
            <Grid
                container
                height={"100vw"}
                width="100vw"
                bgcolor="#457"
                position="absolute"
                sx={{
                    borderRadius: "50%",
                    transform: "scale(1.5)",
                    marginTop: "100vh"
                }}

            >
               
            </Grid>

        </div>
    )
}

export default Banner;