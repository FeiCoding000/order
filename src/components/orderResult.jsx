import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

export const OrderResult = ({ open, orderNumber, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      {/* Dialog Title */}
      <DialogTitle>
        <Typography variant="h4" color="black" align="center">
          Order Confirmation
        </Typography>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent>
        <Typography variant="body1" align="center" paragraph>
          Your order #{orderNumber} has been placed successfully!
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" paragraph>
          Thank you for your order! We will notify you when it's ready. Have a great day!
        </Typography>
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained"  align="center">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
