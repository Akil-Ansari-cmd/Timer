import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
 
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <form className='bg-white h-[60vh] m-auto w-[40vw] rounded-xl'>
        <div className='flex justify-center pt-6'>
          <img src='https://cdn.grofers.com/layout-engine/2023-11/app_logo.svg' />
        </div>
        <div className='flex justify-center pt-4 font-bold text-2xl' >
          India's last minute app
        </div>
        <div className='flex justify-center font-semibold'>
          Log in or Sign up
        </div>
        <div className='flex justify-center pt-5'>
          <input className='border border-gray-300 w-72 h-12 rounded-xl  px-2' type="text" placeholder='+91     Enter Mobile Number' />
        </div>
        <div className='flex justify-center pt-3 text-white bg-gray-500 mt-5 h-12 w-72 mx-auto border border-gray-300 rounded-xl'>
          Continue
        </div>
        <div className='flex justify-center pt-5'>
        By continuing, you agree to our Terms of service & Privacy policy
        </div>
      </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

