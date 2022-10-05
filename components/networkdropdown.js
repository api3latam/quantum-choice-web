import { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {

  const [network, setnetwork] = useState(137);

  useEffect(() => {
    //set network id to local storage
    localStorage.setItem("networkId", network);
   
  }, []);

  
  const handleChange = (event) => {
    setnetwork(event.target.value);
    localStorage.setItem("networkId", event.target.value);
  };

  return (
    /**TODO:
     * Add styling to the dropdown menu
     */
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="network-select">network</InputLabel>
        <Select
          labelId="network-select"
          id="network-id"
          value={network}
          label="network"
          onChange={handleChange}
        >
          <MenuItem value={1}>Ethereum</MenuItem>
          <MenuItem value={5}>Goerli</MenuItem>
          <MenuItem value={137}>Polygon</MenuItem>
          <MenuItem value={42161}>Arbitrum</MenuItem>
          <MenuItem value={30}>RSK</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
