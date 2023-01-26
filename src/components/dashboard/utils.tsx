import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Badge } from './components/Card';

export interface IStatistics {
    total: number,
	today: number,
	yesterday: number,
	before_yesterday: number,
	week: number,
	last_week: number,
	month: number,
	last_month: number
}

export function nFormatter(num: number, digits: number=2) {
	const lookup = [
	  { value: 1, symbol: "" },
	  { value: 1e3, symbol: "K" },
	  { value: 1e6, symbol: "M" },
	  { value: 1e9, symbol: "G" },
	  { value: 1e12, symbol: "T" },
	  { value: 1e15, symbol: "P" },
	  { value: 1e18, symbol: "E" }
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	var item = lookup.slice().reverse().find(function(item) {
	  return num >= item.value;
	});
	return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
  

export const getProps = (num_1: number, num_2: number) => {
    const colors = {
        red: '#ff5722',
        green: '#00e676'
    }	

    const condition = (num_1 >= num_2)		

    const up_percent = (((num_1 - num_2) / num_2) * 100)
    const down_percent = (((num_2 - num_1) / num_1) * 100)

    let text_up = "+ " + up_percent.toFixed(2).toString() + '%'
    let text_down = "- " + down_percent.toFixed(2).toString() + '%'

    if (up_percent > 1000) text_up = '> 1K%'
    if (down_percent > 1000) text_down = '< 1K%'


    const props = {
        up: {
            icon: <TrendingUpIcon />,
            iconColor: colors.green,
            badge: (num_1 > 0 && num_2 > 0 && up_percent > 0) ? <Badge type="+" text={text_up}/> : undefined
        }, 
        down: {
            icon: <TrendingDownIcon />,
            iconColor: colors.red,
            badge: (num_1 > 0 && num_2 > 0 && down_percent > 0) ? <Badge type="-" text={text_down}/> : undefined
        },
    }
    
    return condition ? props.up : props.down
}

export const sectionHeaderBreakpoints = {
    lg: 80,
    md: 70,
    sm: 60,
    xs: 40
}