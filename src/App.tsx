import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import HeaderBar from './components/header/header';
import StockTable from './components/table/table';
import BodyContainer from './components/body-container/body-container';
import { changeCoin, setCoinData, setCoins } from './redux/slice'
import { coinsDataList, coinsList } from './dump';
import { useAxios } from './hooks/axios.hook';

function App() {
  const { selectedCoin, coins, coinsData } = useSelector((state: any) => state.coin);
  const { fetchData: fetchCoinHistory, loading: coinHistoryLoading, response: coinHistory } = useAxios();
  const dispatch = useDispatch();

  const getCoinData = async () => {
    await fetchCoinHistory({
      url: 'coin-history',
      method: 'GET',
      params: { _id: selectedCoin?._id }
    }).then(() => {
      dispatch(setCoinData(coinsDataList))
    })
  }

  useEffect(() => {
    selectedCoin && getCoinData()
  }, [selectedCoin])

  return (
    <div className="App">
      <HeaderBar/>
      <BodyContainer>
        <StockTable rows={coinsDataList}/>
      </BodyContainer>
    </div>
  );
}

export default App;
