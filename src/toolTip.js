import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function helpTooltips() {
  return (
    <div>
      <Tooltip title="click on the button to add the repare">
        <Button>
            Help
        </Button>
      </Tooltip>
    </div>
  );
}
