import { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {

  const [network, setnetwork] = useState(137);
  const chainimage = {
    eth:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_ethereum.jpg&w=32&q=75',
    goerli:'https://chainlist.org/_next/image?url=%2Funknown-logo.png&w=32&q=75',
    matic:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_polygon.jpg&w=32&q=75',
    arbitrium:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_arbitrum.jpg&w=32&q=75',
    rsk:'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_rsk.jpg&w=32&q=75'
  }

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
    <Box sx={{ minWidth: 120 }} className='dropdown-box'>
      <FormControl fullWidth color='primary' margin='normal' id='formcntrl'>
        <InputLabel id="network-select">Network</InputLabel>
        <Select
          labelId="network-select"
          id="network-id"
          value={network}
          label="network"
          onChange={handleChange}
        >
          <MenuItem value={1}><img src={chainimage.eth} className='chainimg'/>Ethereum</MenuItem>
          <MenuItem value={5}><img src={chainimage.goerli} className='chainimg'/>Goerli</MenuItem>
          <MenuItem value={137}><img src={chainimage.matic} className='chainimg'/>Polygon</MenuItem>
          <MenuItem value={42161}><img src={chainimage.arbitrium} className='chainimg'/>Arbitrum</MenuItem>
          <MenuItem value={30}><img src={chainimage.rsk} className='chainimg'/>RSK</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
