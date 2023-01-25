import EarningSecion from './sections/EarningSection'
import { Container, Grid, Typography } from '@mui/material'
import { sectionHeaderBreakpoints } from './utils'

export default function Dashboard() {
	return (
		<Container sx={{
			minHeight: '80vh',
			paddingTop: '20px'
		}}>
			<Typography 
				textAlign="center" 
				color="#3d5afe" 
				component="h1" 
				fontSize={sectionHeaderBreakpoints}
			>DASHBOARD</Typography>
			{
				(true) 
				? <EarningSecion />
				: <Typography variant="h2" textAlign="center" margin="20px 0" fontSize={sectionHeaderBreakpoints}>Loading earning...</Typography>
			}
		</Container>
	)
}