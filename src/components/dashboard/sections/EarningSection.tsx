import { Grid, Typography } from '@mui/material';
import Card from '../components/Card';
import { nFormatter, getProps, sectionHeaderBreakpoints } from '../utils';

import GroupIcon from '@mui/icons-material/Group';

type Props = {
}

export default function EarningSecion({  }: Props) {
    const breakpoints = {
		xs: 12,
		sm: 6,
		md: 4
	}

    return (
        <>
        <Typography variant="h2" textAlign="center" margin="20px 0" fontSize={sectionHeaderBreakpoints} >Earning</Typography>
        <Grid container spacing={2} justifyContent="center">
            <Grid item {...breakpoints} >
                <Card 
                    main={nFormatter(3456123)}
                    desc="Total earning"
                    {...getProps(123, 245)}
                />
            </Grid>
            <Grid item {...breakpoints}>
                <Card 
                    main={nFormatter(300)}
                    desc="Monthly"
                    {...getProps(500, 1504)}
                />
            </Grid>
            <Grid item {...breakpoints}>
                <Card 
                    main={nFormatter(3457)}
                    desc="Weekly"
                    {...getProps(1546, 123)}
                />
            </Grid>
            <Grid item {...breakpoints}>
                <Card 
                    main={nFormatter(1555)}
                    desc="Users count"
                    icon={<GroupIcon />}
                />
            </Grid>
        </Grid>
        </>
    )
}