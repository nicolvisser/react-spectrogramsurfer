import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

import SpectrogramGraphics from './SpectrogramGraphics';
import PlaybackProvider from "../context/PlaybackProvider";

interface SpectrogramSurferProps {
    sxx: number[][]
    src: string
    width: number
    specHeight: number
    navHeight: number
    colormap?: string
    transparent?: boolean
}

const SpectrogramSurfer = (props: SpectrogramSurferProps) => {
    const { sxx, src, width, specHeight, navHeight } = props
    const colormap = props.colormap ? props.colormap : 'viridis'
    const transparent = props.transparent ? true : false

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div style={{ width: width }}>
                <PlaybackProvider src={src} width={width}>
                    <SpectrogramGraphics sxx={sxx} width={width} specHeight={specHeight} navHeight={navHeight} colormap={colormap} transparent={transparent} />
                </PlaybackProvider>
            </div >
        </ThemeProvider>
    )
}

export default SpectrogramSurfer
