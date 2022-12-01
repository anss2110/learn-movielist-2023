import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import MuiImage from 'mui-image';
import React from 'react';
import MolStyle from '../../../styles/components/molecules/Styles.module.scss';

const Component = ({ open, onClose, scroll, ariaLabel, ariaDesc }) => {
  console.log('[DEBUG] MolStyle : ', MolStyle);
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        scroll={scroll}
        aria-labelledby={ariaLabel}
        aria-describedby={ariaDesc}
      >
        <DialogTitle>Detail</DialogTitle>
        <DialogContent>
          <Box className={MolStyle.content}>
            <MuiImage
              src='https://via.placeholder.com/250x300'
            />
            <Box>
              <Typography variant='h4'>
                Title
              </Typography>
              <Typography variant='p'>
                good morning good morning good morning good morning
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Component;