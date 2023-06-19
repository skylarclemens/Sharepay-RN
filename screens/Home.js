import { StyleSheet, View, StatusBar, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MainText, SecondaryText, SectionHeading } from '../components/UI/Text';
import Transaction from '../components/Transactions/Transaction';

const Home = () => {
  return (
    <View style={styles.container}>
      <LinearGradient style={[styles.balanceContainer, {backgroundColor: '#729b79'}]} start={{x: 0, y: 1}} end={{x: 0, y: 0.14}} colors={['rgba(0,0,0,.25)', 'transparent']}>
        <SecondaryText style={styles.balanceHeading}>Your Balance</SecondaryText>
        <MainText style={styles.balanceText}>$0.00</MainText>
      </LinearGradient>
      <View style={styles.secondaryBalanceContainer}>
        <LinearGradient style={[styles.secondaryBalance, {borderTopLeftRadius: 16, borderBottomLeftRadius: 16}]} colors={['#729b79', '#63876A']}>
          <SecondaryText style={styles.balanceHeading}>You're owed</SecondaryText>
          <MainText style={[styles.balanceText, styles.secondaryBalanceText]}>$0.00</MainText>
        </LinearGradient>
        <LinearGradient style={[styles.secondaryBalance, {borderTopRightRadius: 16, borderBottomRightRadius: 16}]} colors={['#DC5537', '#C04B31']}>
          <SecondaryText style={styles.balanceHeading}>You owe</SecondaryText>
          <MainText style={[styles.balanceText, styles.secondaryBalanceText]}>$0.00</MainText>
        </LinearGradient>
      </View>
      <View style={styles.transactionsContainer}>
        <SectionHeading>Recent Transactions</SectionHeading>
        <View style={styles.transactions}>
        <FlatList
          data={[
            {key: 'Dig Inn'},
            {key: 'Uniqlo'},
            {key: 'National grid'},
            {key: 'Con Ed'},
            {key: 'Dig Inn 2'},
            {key: 'Uniqlo 2'},
            {key: 'National grid 2'},
            {key: 'Con Ed 2'},
          ]} 
          renderItem={({ item }) =><Transaction style={styles.transaction} description={item.key}/>}/>
          
        </View>
      </View>
      <StatusBar barStyle="light-content" backgroundColor={"#729B79"}/>
    </View>
  )
}

//text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
  },
  balanceContainer: {
    paddingTop: 16,
    paddingBottom: 48,
    alignItems: 'center',
    width: '100%',
  },
  balanceText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 0
  },
  secondaryBalanceText: {
    fontSize: 24,
  },
  balanceHeading: {
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 0
  },
  secondaryBalanceContainer: {
    top: -38,
    flexDirection: 'row',
    width: 354,
  },
  secondaryBalance: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 76,
  },
  transactionsContainer: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    width: '100%',
    paddingTop: 0,
  },
  transactions: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 32,
    paddingLeft: 20,
    paddingRight: 20,
  },
  transaction: {
    marginBottom: 16,
  }
});

export default Home;