import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ScheduleRepair()
{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () =>
    {
        setOpen(true);    
    };

    const handleClose = () => 
    {
        setOpen(false);
    };

    return(
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick=
                {
                    handleClickOpen
                }
            >
                Schedule Repair
            </Button>
            <Dialog
                open=
                {
                    open
                }
                onClose=
                {
                    handleClickOpen
                }
                aria-lebelledby="from-dialog-title"
            >
                <DialogTitle
                    id="form-dialog-title"
                >
                    Schedule Bicycle Repair
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To schedule a repare fill out the customer name, 
                        bicycle type, and repair time
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Customer Name"
                        type="text"
                        fullWidth="true"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="type"
                        label="Bicycle Type"
                        type="text"
                        fullWidth="true"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        label="Repair time"
                        type="text"
                        fullWidth="true"
                    />
                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick=
                        {
                            handleClose
                        }
                        color="primary"
                    >
                        close
                    </Button>
                    <Button 
                        onClick=
                        {
                            handleClose
                        }
                        color="primary"
                    >
                        Submit
                    </Button>

                </DialogActions>                    
            </Dialog>
        </div>
    );
}
