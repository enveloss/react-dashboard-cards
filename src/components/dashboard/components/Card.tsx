import { Box, Paper, Typography } from "@mui/material"
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';

type Badge = {
    type: '-' | '+',
    text: string
}

export const Badge = ({ type, text }: Badge) => {
    const bgColor = (type == '+') ? '#4caf50' : '#ff5722'

    return (
        <sup style={{
            backgroundColor: bgColor,
            fontWeight: 600,
            fontSize: 16,
            padding: '5px',
            borderRadius: '10px',
            marginLeft: 5,
            position: 'absolute',
        }}>
            {text}
        </sup>
    )
}

type Props = {
	main: string,
	desc: string,
	icon?: React.FC | any,
    iconColor?: string,
    badge?: React.ReactElement | undefined
}

export default function Card({ main, desc, icon, iconColor="lightblue", badge }: Props) {
    return (
        <Paper 
            elevation={3}
            sx={{
                background: '#3d5afe',
                color: 'white' ,
                padding: '10px',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{
                width: 'fit-content',
                alignSelf: 'center',
                '& > svg': {
                    width: 100,
                    height: 100,
                    padding: '5px',
                    fill: iconColor
                }
            }}>
                {
                    (icon !== undefined) 
                    ? icon
                    : <ScatterPlotIcon/>
                }
            </Box>
            <Typography variant="h2" fontWeight="700" alignSelf="center" color="lightcyan" >
                <>{main}{badge}</>
            </Typography>
            <Typography variant="h6" alignSelf="center" textAlign="center">{desc}</Typography>
        </Paper>
        
    )
}