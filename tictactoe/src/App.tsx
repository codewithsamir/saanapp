import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';

export default function App() {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gamewinner, setgamewinner] = useState<string>('');
  const [gamestate, setgamestate] = useState(new Array(9).fill('empty', 0, 9));
   const isDarkmode = useColorScheme() === 'light'

  const reloadGame = () => {
    setIsCross(false);
    setgamewinner('');
    setgamestate(new Array(9).fill('empty', 0, 9));
  };
  const CheckIsWinner = () => {
    if (
      gamestate[0] === gamestate[1] &&
      gamestate[0] === gamestate[2] &&
      gamestate[0] !== 'empty'
    ) {
      setgamewinner(`${gamestate[0]} won the game! 🥳`);
    } else if (
      gamestate[3] !== 'empty' &&
      gamestate[3] === gamestate[4] &&
      gamestate[4] === gamestate[5]
    ) {
      setgamewinner(`${gamestate[3]} won the game! 🥳`);
    } else if (
      gamestate[6] !== 'empty' &&
      gamestate[6] === gamestate[7] &&
      gamestate[7] === gamestate[8]
    ) {
      setgamewinner(`${gamestate[6]} won the game! 🥳`);
    } else if (
      gamestate[0] !== 'empty' &&
      gamestate[0] === gamestate[3] &&
      gamestate[3] === gamestate[6]
    ) {
      setgamewinner(`${gamestate[0]} won the game! 🥳`);
    } else if (
      gamestate[1] !== 'empty' &&
      gamestate[1] === gamestate[4] &&
      gamestate[4] === gamestate[7]
    ) {
      setgamewinner(`${gamestate[1]} won the game! 🥳`);
    } else if (
      gamestate[2] !== 'empty' &&
      gamestate[2] === gamestate[5] &&
      gamestate[5] === gamestate[8]
    ) {
      setgamewinner(`${gamestate[2]} won the game! 🥳`);
    } else if (
      gamestate[0] !== 'empty' &&
      gamestate[0] === gamestate[4] &&
      gamestate[4] === gamestate[8]
    ) {
      setgamewinner(`${gamestate[0]} won the game! 🥳`);
    } else if (
      gamestate[2] !== 'empty' &&
      gamestate[2] === gamestate[4] &&
      gamestate[4] === gamestate[6]
    ) {
      setgamewinner(`${gamestate[2]} won the game! 🥳`);
    } else if (!gamestate.includes('empty', 0)) {
      setgamewinner('Draw game... ⌛️');
    }
  };

  const onChangeitem = (itemnumber: number) => {
    if (gamewinner) {
      return Snackbar.show({
        text: gamewinner,
        backgroundColor: '#000',
        textColor: '#ffffff',
      });
    }
    if (gamestate[itemnumber] === 'empty') {
      gamestate[itemnumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'position is already filled',
        backgroundColor: 'red',
        textColor: 'white',
      });
    }
    CheckIsWinner();
  };
  return (
    <SafeAreaView >
      <StatusBar />
      <View style={styles.headingbox}>
        <Text style={styles.headingtext}> Tic Tac Toe App</Text>
      </View>
      {gamewinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gamewinner}</Text>
        </View>
      ) : (
        <View
          style={[
            styles.playerInfo,
            isCross ? styles.playerX : styles.playerO,
          ]}>
          <Text style={styles.gameTurnTxt}>
            player {isCross ? 'X' : 'O'}'s Turn
          </Text>
        </View>
      )}

      {/* <View style={styles.gamecontainer}>
        <View style={styles.gamebox}>
          <Icons name={'circle'} />
        </View>
        <View style={styles.gamebox}></View>
        <View style={styles.gamebox}></View>
        <View style={styles.gamebox}></View>
        <View style={styles.gamebox}></View>
        <View style={styles.gamebox}></View>
        <View style={styles.gamebox}></View>
        <View style={styles.gamebox}></View>
        <View style={styles.gamebox}></View>
      </View> */}

      {/* Game Grid  */}
      <FlatList
        numColumns={3}
        data={gamestate}
        style={styles.grid}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={styles.card}
            onPress={() => onChangeitem(index)}>
            <Icons name={item} />
          </Pressable>
        )}
      />

      <TouchableOpacity style={styles.btnbox} onPress={reloadGame}>
        <Text style={styles.btntxt}>
       {gamewinner ? 'start new game' : ' reload the game'}
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingbox: {
    width: '100%',
    height: 60,
    backgroundColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 10,
    marginHorizontal: 'auto',
  },
  headingtext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  gamecontainer: {
    width: 330,
    height: 335,

    marginHorizontal: 'auto',
    marginVertical: 10,

    flexWrap: 'wrap',
    alignItems: 'center',
  },
  gamebox: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnbox: {
    backgroundColor: 'red',
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    marginVertical: 20,
    
  },
  btntxt: {
    fontSize: 16,
    color:"#ffffff",
    textTransform:'capitalize'
  },
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
