import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import React from 'react'

const Input_field = (props) => {
    return (<>
        <FormControl sx={{
            m: 1, width: '35ch',
            '@media (min-width: 1280px)': { m: 2, width: '50ch', },
            '@media (max-width: 850px)': { width: '25ch', },
            '@media (max-width: 640px) and (min-width: 500px)': { width: '45ch', },
            '@media (max-width: 500px)': { width: '35ch', },
            '@media (max-width: 405px)': { width: '25ch', },
        }} variant="outlined">
            <InputLabel sx={{
                color: "black", fontWeight: 300,
                '@media (min-width: 1280px)': { fontSize: 21 },
            }} htmlFor={props.text}>{props.text}</InputLabel>
            <OutlinedInput
                sx={{
                    borderRadius: 3, p: 0, px: 1, width: "100%",
                    '@media (min-width: 1280px)': { fontSize: 21 }
                }}
                id={props.text}
                type={props.type}
                placeholder={`Enter ${props.text}`}
                startAdornment={props.startAdor}
                endAdornment={props.endAdor}
                label={props.text}
            />
        </FormControl>
    </>
    )
}

export { Input_field }