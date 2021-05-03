import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function helpTooltips() {
  return (
    <div>
      <Tooltip title="Below is a list of all scheduled repairs">
        <Button>
            Help
        </Button>
      </Tooltip>
    </div>
  );
}
