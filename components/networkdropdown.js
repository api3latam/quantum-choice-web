import { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {

  const [network, setnetwork] = useState(137);
  
  const chainimage = {
    matic:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_polygon.jpg&w=32&q=75',
    arbitrium:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_arbitrum.jpg&w=32&q=75',
    optimism:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_optimism.jpg&w=32&q=75'
  }

  useEffect(() => {
    const networkId = localStorage.getItem("networkId"); 
    
    if (networkId) {
      setnetwork(networkId);
      localStorage.setItem("networkId", networkId);
    }
    //set network id to local storage
    
    //Get network id from local storage
    console.log("Current network ID", networkId);
  }, []);

  
  const handleChange = (event) => {
    setnetwork(event.target.value);
    localStorage.setItem("networkId", event.target.value);
    console.log('Current network',localStorage.getItem("networkId"));
    window.location.reload(false);
  };

  return (
    /**TODO:
     * Add styling to the dropdown menu
     */
      <FormControl  variant="filled" sx={{ m: 1, minWidth: 120 }}  className='dropdown-box' id='formcntrl'>
        <Select
          labelId="network-select"
          id="network-id"
          value={network}
          label="network"
          onChange={handleChange}
        >
          <MenuItem value={137}><img src={chainimage.matic} className='chainimg'/><span className=''>Polygon</span></MenuItem>
          <MenuItem value={42161}><img src={chainimage.arbitrium} className='chainimg'/><span className=''>Arbitrum</span></MenuItem>
          <MenuItem value={10}><img src={chainimage.optimism} className='chainimg'/><span className=''>Optimism</span></MenuItem>
        </Select>
      </FormControl>
  );
}
