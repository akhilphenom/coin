import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeCoin, setCoinData, setCoins } from '../../redux/slice'
import { useAxios } from '../../hooks/axios.hook';
import { useEffect } from 'react';

const BitcoinDropDown = () => {
  const dispatch = useDispatch();
  const { selectedCoin, coins, coinsData } = useSelector((state: any) => state.coin);

  const { fetchData: fetchCoinHistory, loading: coinHistoryLoading, response: coinHistory } = useAxios();
  const { fetchData: fetchCoinList, loading: coinsLoading, response: coinListData } = useAxios();
  
  const handleChange = (event: { target: { value: any; }; }) => {
    const { target: { value } } = event;
    dispatch(changeCoin(value))
    getCoinData();
  };

  const getCoinData = async () => {
    await fetchCoinHistory({
      url: 'coin-history',
      method: 'GET',
      params: { _id: selectedCoin?._id }
    })
  }

  const getCoins = async () => {
    await fetchCoinList({
      url: 'coin-history',
      method: 'GET',
      params: { _id: selectedCoin?._id }
    })
  }

  useEffect(() => {
    getCoins();
  }, [])

  if(!coins.length) {
    return null;
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Bitcoin</InputLabel>
      <Select
        labelId="label-id"
        id="bitcoin"
        value={selectedCoin}
        label={'Bitcoin'}
        onChange={handleChange}
        sx={{
            textAlign: 'left',
            '& .MuiSelect-nativeInput': {
              textAlign: 'left',
            },
            '& .MuiSelect-select': {
              textAlign: 'left',
            },
        }}
      >
        {coins.map((coin: { _id: string, name: string}) => (
          <MenuItem id={coin._id} value={coin._id}>{coin.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BitcoinDropDown;
