import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SwipeableViews from 'react-swipeable-views';

export const ImageGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClickOpen = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <div>
      <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={164}>
        {images.map((image, index) => (
          <ImageListItem key={image} onClick={() => handleClickOpen(index)}>
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt='Note image'
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedIndex !== null && (
        <Dialog fullScreen open onClose={handleClose}>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <SwipeableViews index={selectedIndex} onChangeIndex={setSelectedIndex}>
            {images.map((image, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img
                  src={image}
                  alt='Note image'
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </SwipeableViews>
        </Dialog>
      )}
    </div>
  );
};
