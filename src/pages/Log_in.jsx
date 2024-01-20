import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Input_field } from '../component/Input_field';
import { MdSupervisorAccount, MdMarkEmailUnread } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Button } from '@mui/material';
import { MdSend } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import '../../src/App.css'
import { Link } from 'react-router-dom';

const Log_in = (props) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className='block sm:flex justify-between items-center rounded-3xl rounded-br-none rounded-tl-none m-3 sm:m-10 sm:p-0 p-2 sm:border-4 border-white sm:bg-red-400 main_div'>
                <div className='sm:bg-white bg-red-100  font-black sm:w-1/2 p-2  text-center rounded-3xl rounded-br-none  rounded-tl-none  border-4 sm:border-l-0 border-red-400 form_div'>
                    <div className='flex items-center mb-1 justify-center'>
                        <h1 className='text-3xl xl:text-4xl mx-1 xl:mx-2'>Log IN</h1>
                        <BsEmojiHeartEyesFill className='text-xl xl:text-2xl text-pink-400 animate-bounce ' />
                    </div>
                    <FormControl sx={{ '@media (min-width: 850px)': { p: 1 }, }} variant="outlined">
                        <Input_field type="text" text="Username"
                            startAdor={
                                <InputAdornment position="start">
                                    <MdSupervisorAccount className='cursor-pointer text-black animate-pulse' />
                                </InputAdornment>} />


                        <Input_field type="email" text="Email"
                            startAdor={
                                <InputAdornment position="start">
                                    <MdMarkEmailUnread className='cursor-pointer text-black animate-pulse' />
                                </InputAdornment>} />

                        <Input_field type={showPassword ? "text" : "Password"} text="Password"
                            startAdor={
                                <InputAdornment position="start">
                                    <TbPasswordUser className='cursor-pointer text-black animate-pulse' />
                                </InputAdornment>}
                            endAdor={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>} />
                        <Link to="/">
                            <p className='cursor-pointer pb-2 xl:text-xl'>You Don't have an account? Sign UP</p>
                        </Link>

                        <Link to="/home" >
                            <Button type='submit' sx={{
                                backgroundColor: "rgb(248, 113, 113)",
                                ":hover": { backgroundColor: "rgb(74, 222, 128)" },
                                ":active": { backgroundColor: "rgb(105, 203, 0)" },
                                color: "black", fontWeight: 900, borderRadius: 100,
                                '@media (min-width: 1280px)': { fontSize: 20 }
                            }}
                                variant="contained" endIcon={<MdSend className='animate-bounce ' />}>
                                Log in
                            </Button>
                        </Link>
                    </FormControl>
                </div>

                <div className='w-2/5 hidden mx-5 sm:block text_div'>
                    <h1 className='font-black text-4xl xl:text-5xl'>
                        Hi. I am a Web Developer,
                    </h1>
                    <h1 className='xl:text-2xl'>
                        You can register in this website. Because this Website is very helpful.
                        If you are already registered this website, then you can log in and use the website.
                    </h1>
                </div>
            </div>
        </>
    )
}

export { Log_in }