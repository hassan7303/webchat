import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="مخاطبین"  />
                <BottomNavigationAction label="غیر مخاطبین"  />
                <BottomNavigationAction label="گروه ها" />
                <BottomNavigationAction label="کانال ها"  />
            </BottomNavigation>
        </Box>
    );
}